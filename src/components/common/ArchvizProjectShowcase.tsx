import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Volume2, VolumeX, Maximize2, ArrowRight, Eye } from 'lucide-react';
import type { Project } from '../../types';
import { LightboxModal, type LightboxImage } from './LightboxModal';
import {
  registerVideoPlayer,
  notifyVideoHoverEnter,
  notifyVideoHoverLeave,
  notifyVideoManualPlay,
} from '../../utils/videoCoordinator';

interface ArchvizProjectShowcaseProps {
  project: Project;
  index: number;
}

export function ArchvizProjectShowcase({ project, index }: ArchvizProjectShowcaseProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoStageRef = useRef<HTMLDivElement | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wantPlayRef = useRef(false);
  const manuallyPausedRef = useRef(false);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const isMutedRef = useRef(true);

  const coordinatorId = `showcase-${project.slug}-${index}`;

  useEffect(() => {
    const handleFsChange = () => {
      const doc = document as Document & {
        webkitFullscreenElement?: Element;
        mozFullScreenElement?: Element;
        msFullscreenElement?: Element;
      };
      const fsEl =
        doc.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement;
      setIsFullscreen(fsEl === videoRef.current);
    };

    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    document.addEventListener('mozfullscreenchange', handleFsChange);
    document.addEventListener('MSFullscreenChange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
      document.removeEventListener('mozfullscreenchange', handleFsChange);
      document.removeEventListener('MSFullscreenChange', handleFsChange);
    };
  }, []);

  const setVideoRef = useCallback((el: HTMLVideoElement | null) => {
    videoRef.current = el;
    if (el) {
      el.defaultMuted = true;
      el.muted = isMutedRef.current;
      el.playsInline = true;
    }
  }, []);

  const safePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || !project.heroVideo) return;

    wantPlayRef.current = true;
    video.defaultMuted = true;
    video.muted = isMutedRef.current;

    if (video.preload !== 'auto') {
      video.preload = 'auto';
    }

    if (!video.paused && !video.ended) {
      setIsPlaying(true);
      return;
    }

    if (playPromiseRef.current) {
      return;
    }

    try {
      const promise = video.play();
      if (promise !== undefined) {
        playPromiseRef.current = promise;
        promise
          .then(() => {
            playPromiseRef.current = null;
            if (!wantPlayRef.current) {
              video.pause();
              setIsPlaying(false);
            } else {
              setIsPlaying(true);
            }
          })
          .catch((err) => {
            playPromiseRef.current = null;
            if (err?.name === 'AbortError') return;
            if (wantPlayRef.current && videoRef.current) {
              videoRef.current.defaultMuted = true;
              videoRef.current.muted = true;
              isMutedRef.current = true;
              setIsMuted(true);
              const retry = videoRef.current.play();
              if (retry !== undefined) {
                playPromiseRef.current = retry;
                retry
                  .then(() => {
                    playPromiseRef.current = null;
                    if (!wantPlayRef.current) {
                      videoRef.current?.pause();
                      setIsPlaying(false);
                    } else {
                      setIsPlaying(true);
                    }
                  })
                  .catch(() => {
                    playPromiseRef.current = null;
                  });
              }
            }
          });
      }
    } catch {
      playPromiseRef.current = null;
    }
  }, [project.heroVideo]);

  const safePause = useCallback(() => {
    wantPlayRef.current = false;
    const video = videoRef.current;
    if (!video) return;

    if (!playPromiseRef.current) {
      try {
        if (!video.paused) {
          video.pause();
        }
      } catch {
        // ignore
      }
    }
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    if (!project.heroVideo) return;
    return registerVideoPlayer({
      id: coordinatorId,
      getElement: () => videoStageRef.current,
      play: safePlay,
      pause: safePause,
      isManuallyPaused: () => manuallyPausedRef.current,
    });
  }, [coordinatorId, project.heroVideo, safePlay, safePause]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        safePause();
      } else if (wantPlayRef.current && !manuallyPausedRef.current) {
        safePlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [safePlay, safePause]);

  // Compile all unique high-res stills for the project
  const stills: LightboxImage[] = [];
  const seenUrls = new Set<string>();

  const addStill = (url?: string, caption?: string) => {
    if (url && !seenUrls.has(url)) {
      seenUrls.add(url);
      stills.push({
        url,
        caption: caption || project.title,
        title: project.title,
      });
    }
  };

  if (project.gallery && project.gallery.length > 0) {
    project.gallery.forEach((g) => addStill(g.url, g.caption));
  }
  if (project.process) {
    project.process.forEach((p) => addStill(p.image, `${p.step} // ${p.title} — ${p.description}`));
  }
  if (project.heroImage) {
    addStill(project.heroImage, 'Lead Master Elevation & Architectural Framing');
  }

  const isVertical = project.videoAspectRatio === '9:16';

  const itemsWithIdx = stills.map((item, originalIndex) => ({ item, originalIndex }));

  const ensureMinItems = (arr: typeof itemsWithIdx, minLen: number) => {
    if (arr.length === 0) return [];
    const result = [...arr];
    let i = 0;
    while (result.length < minLen) {
      result.push(arr[i % arr.length]);
      i++;
    }
    return result;
  };

  let safeR1: typeof itemsWithIdx;
  let safeR2: typeof itemsWithIdx;
  let safeR3: typeof itemsWithIdx = [];

  if (isVertical) {
    const mid = Math.ceil(itemsWithIdx.length / 2);
    safeR1 = ensureMinItems(itemsWithIdx.slice(0, mid), 6);
    safeR2 = ensureMinItems(itemsWithIdx.slice(mid).length > 0 ? itemsWithIdx.slice(mid) : itemsWithIdx, 6);
  } else {
    const third = Math.max(1, Math.ceil(itemsWithIdx.length / 3));
    safeR1 = ensureMinItems(itemsWithIdx.slice(0, third), 4);
    safeR2 = ensureMinItems(itemsWithIdx.slice(third, third * 2).length > 0 ? itemsWithIdx.slice(third, third * 2) : itemsWithIdx, 4);
    safeR3 = ensureMinItems(itemsWithIdx.slice(third * 2).length > 0 ? itemsWithIdx.slice(third * 2) : itemsWithIdx, 4);
  }

  const row1Loop = [...safeR1, ...safeR1];
  const row2Loop = [...safeR2, ...safeR2];
  const row3Loop = [...safeR3, ...safeR3];

  const resetHideTimer = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      if (!videoRef.current?.paused) {
        setIsHovered(false);
      }
    }, 2400);
  }, []);

  const handleMouseEnter = () => {
    manuallyPausedRef.current = false;
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
    setIsHovered(true);
    resetHideTimer();
    notifyVideoHoverEnter(coordinatorId);
  };

  const handleMouseMove = () => {
    setIsHovered(true);
    resetHideTimer();
  };

  const handleMouseLeave = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setIsHovered(false);
    notifyVideoHoverLeave(coordinatorId);
  };

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      manuallyPausedRef.current = false;
      notifyVideoManualPlay(coordinatorId);
      resetHideTimer();
    } else {
      manuallyPausedRef.current = true;
      safePause();
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      setIsHovered(true);
    }
  };

  const handleContainerClick = () => {
    if (!isHovered && isPlaying) {
      setIsHovered(true);
      resetHideTimer();
      return;
    }
    togglePlay();
  };

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const isControlsVisible = isHovered || !isPlaying;

  const toggleSound = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      isMutedRef.current = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const openFullscreenVideo = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const video = videoRef.current as (HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
      webkitRequestFullscreen?: () => void;
    }) | null;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen().catch(() => {});
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!duration && video.duration) {
      setDuration(video.duration);
    }
    if (isHovered || !isPlaying) {
      setCurrentTime(video.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.duration) {
      setDuration(video.duration);
    }
    if (wantPlayRef.current && video.paused) {
      safePlay();
    }
  };

  const handleCanPlay = () => {
    if (wantPlayRef.current && videoRef.current?.paused) {
      safePlay();
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      resetHideTimer();
    }
  };

  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleOpenLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const formattedNumber = String(index + 1).padStart(2, '0');

  return (
    <article className="w-full bg-white text-[#101010] py-8 sm:py-10 border-b border-[#101010]/12 select-none">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER: MONOGRAM NUMBER & BIG BOLD TITLE
          ───────────────────────────────────────────────────────────── */}
      <div className="mb-4 sm:mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-[#757575]">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span>EXHIBITION {formattedNumber} // {project.category}</span>
            <span>&bull;</span>
            <span>{project.location}</span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.05em] text-[#101010] uppercase">
            <Link to={`/projects/${project.slug}`} className="hover:opacity-80 transition-opacity">
              {project.title}
            </Link>
          </h3>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs text-[#757575]">
          <span className="hidden sm:inline">YEAR: {project.year}</span>
          <span>&bull;</span>
          <Link
            to={`/projects/${project.slug}`}
            className="text-[#101010] font-semibold uppercase hover:underline inline-flex items-center gap-1.5"
          >
            <span>Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. THE CGI STUDIO MEDIA MATRIX (16:9 or 9:16 DYNAMIC FORMAT)
          ───────────────────────────────────────────────────────────── */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 ${isVertical ? 'gap-4 lg:gap-8' : 'gap-3 sm:gap-4'} items-stretch`}>
        {/* LEFT: Cinematic High-Fidelity Video (or Hero Image Fallback) */}
        <div className={isVertical ? "lg:col-span-4 xl:col-span-4 flex flex-col items-center lg:items-start" : "lg:col-span-8 xl:col-span-8 flex flex-col"}>
          <div
            ref={videoStageRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={
              isVertical
                ? "relative aspect-[9/16] w-full max-w-[380px] sm:max-w-[400px] lg:max-w-none h-full min-h-[520px] sm:min-h-[600px] lg:h-[676px] overflow-hidden bg-black border border-[#101010]/12 group shadow-xl"
                : "relative aspect-[16/9] w-full h-full min-h-[280px] sm:min-h-[440px] lg:min-h-[540px] overflow-hidden bg-black border border-[#101010]/12 group"
            }
          >
            {project.heroVideo ? (
              <video
                ref={setVideoRef}
                src={project.heroVideo}
                poster={project.heroImage}
                muted
                loop
                playsInline
                preload={index === 0 ? 'auto' : 'metadata'}
                controls={false}
                disablePictureInPicture
                onCanPlay={handleCanPlay}
                onLoadedData={handleCanPlay}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onPlaying={() => setIsPlaying(true)}
                onClick={handleContainerClick}
                className={`w-full h-full ${
                  isFullscreen
                    ? '!object-contain !scale-100 !transform-none bg-black'
                    : isVertical
                    ? 'object-cover'
                    : 'object-cover scale-[1.02]'
                } origin-center filter brightness-95 contrast-105 cursor-pointer`}
              />
            ) : (
              <img
                src={project.heroImage}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover scale-[1.03] origin-center filter brightness-95"
              />
            )}

            {/* Central Play Indicator when paused and not hovered */}
            {project.heroVideo && !isPlaying && !isHovered && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/25 cursor-pointer z-10 transition-opacity duration-200"
              >
                <div className="w-15 h-15 rounded-full bg-white/95 text-black flex items-center justify-center pl-1 shadow-2xl hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current" />
                </div>
              </div>
            )}

            {/* Top Left: Title & Location Tag (Fades out when controls hide) */}
            <div
              className={`absolute top-3 left-3 sm:top-4 sm:left-4 z-10 pointer-events-none transition-all duration-300 ease-out transform ${
                isControlsVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2'
              }`}
            >
              <span className="px-2.5 py-1 bg-black/65 backdrop-blur-sm text-[11px] font-mono uppercase tracking-wider text-white/90 border border-white/15">
                {isVertical ? '9:16 VERTICAL CINEMA' : `${project.title} \u2022 ${project.location}`}
              </span>
            </div>

            {/* Bottom Controls Bar (YouTube-like smooth hover slide under & fade) */}
            {project.heroVideo && (
              <div
                className={`absolute inset-x-0 bottom-0 z-20 pt-12 pb-3 px-3 sm:px-4 bg-gradient-to-t from-black/90 via-black/45 to-transparent flex flex-col gap-2 transition-all duration-300 ease-out transform ${
                  isControlsVisible
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                {/* Upper row: Play/Pause button, elapsed/total time, volume, fullscreen */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      className="w-8 h-8 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-md backdrop-blur-sm"
                    >
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5 fill-current" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                      )}
                    </button>

                    <div className="font-mono text-xs text-white/90 tracking-wider tabular-nums select-none flex items-center gap-1">
                      <span>{formatTime(currentTime)}</span>
                      <span className="text-white/40">/</span>
                      <span className="text-white/70">{formatTime(duration)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleSound}
                      aria-label={isMuted ? 'Enable audio' : 'Mute audio'}
                      className="w-8 h-8 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-md backdrop-blur-sm"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={openFullscreenVideo}
                      aria-label="Fullscreen video"
                      className="w-8 h-8 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-md backdrop-blur-sm"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Lower row: Interactive Scrubbing / Timeline Bar */}
                <div className="relative w-full h-3 flex items-center cursor-pointer group/scrubber select-none">
                  <div className="w-full h-1 group-hover/scrubber:h-1.5 bg-white/30 rounded-full overflow-hidden transition-all relative">
                    <div
                      className="h-full bg-white rounded-full transition-[width] duration-75"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md pointer-events-none opacity-0 group-hover/scrubber:opacity-100 transition-opacity"
                    style={{ left: `calc(${progressPercent}% - 6px)` }}
                  />

                  <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    step="0.1"
                    value={currentTime}
                    onChange={handleSeek}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
                    aria-label="Seek video position"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: True-Aspect-Ratio Infinite Marquee Stills */}
        <div
          className={
            isVertical
              ? "lg:col-span-8 xl:col-span-8 flex flex-col justify-between gap-3.5 sm:gap-4 h-full min-h-[530px] sm:min-h-[616px] lg:h-[676px] overflow-hidden"
              : "lg:col-span-4 xl:col-span-4 flex flex-col justify-between gap-2 sm:gap-2.5 h-full min-h-[280px] sm:min-h-[440px] lg:min-h-[540px] overflow-hidden"
          }
        >
          {/* Row 1: Slides Left (animate-marquee) */}
          <div className={`relative w-full overflow-hidden flex items-center ${isVertical ? 'h-[258px] sm:h-[300px] lg:h-[330px]' : 'h-[92px] sm:h-[140px] lg:h-[172px]'}`}>
            <div
              className="flex items-center gap-3 sm:gap-3.5 animate-marquee w-max h-full"
              style={{ animationDuration: isVertical ? '42s' : '32s' }}
            >
              {row1Loop.map((entry, idx) => (
                <div
                  key={`r1-${idx}`}
                  onClick={() => handleOpenLightbox(entry.originalIndex)}
                  className={`group relative flex-shrink-0 overflow-hidden cursor-pointer h-full border border-[#101010]/10 ${
                    isVertical ? 'aspect-[9/16]' : 'aspect-[16/9]'
                  }`}
                >
                  <img
                    src={entry.item.url}
                    alt={entry.item.caption || `Still ${entry.originalIndex + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#101010] text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center shadow-lg">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Slides Rightwards (Reverse direction) */}
          <div className={`relative w-full overflow-hidden flex items-center ${isVertical ? 'h-[258px] sm:h-[300px] lg:h-[330px]' : 'h-[92px] sm:h-[140px] lg:h-[172px]'}`}>
            <div
              className="flex items-center gap-3 sm:gap-3.5 animate-marquee-reverse w-max h-full"
              style={{ animationDuration: isVertical ? '46s' : '34s' }}
            >
              {row2Loop.map((entry, idx) => (
                <div
                  key={`r2-${idx}`}
                  onClick={() => handleOpenLightbox(entry.originalIndex)}
                  className={`group relative flex-shrink-0 overflow-hidden cursor-pointer h-full border border-[#101010]/10 ${
                    isVertical ? 'aspect-[9/16]' : 'aspect-[16/9]'
                  }`}
                >
                  <img
                    src={entry.item.url}
                    alt={entry.item.caption || `Still ${entry.originalIndex + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#101010] text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center shadow-lg">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Slides Leftwards (Only for 16:9 widescreen projects) */}
          {!isVertical && (
            <div className="relative w-full overflow-hidden flex items-center h-[92px] sm:h-[140px] lg:h-[172px]">
              <div
                className="flex items-center gap-3 sm:gap-3.5 animate-marquee w-max h-full"
                style={{ animationDuration: '30s' }}
              >
                {row3Loop.map((entry, idx) => (
                  <div
                    key={`r3-${idx}`}
                    onClick={() => handleOpenLightbox(entry.originalIndex)}
                    className="group relative flex-shrink-0 overflow-hidden cursor-pointer h-full aspect-[16/9] border border-[#101010]/10"
                  >
                    <img
                      src={entry.item.url}
                      alt={entry.item.caption || `Still ${entry.originalIndex + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500 pointer-events-none select-none"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-[#101010] text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center shadow-lg">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. EDITORIAL PROJECT SYNOPSIS & DELIVERABLES
          ───────────────────────────────────────────────────────────── */}
      <div className="pt-8 sm:pt-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
        <div className="md:col-span-6 lg:col-span-7 space-y-4">
          <p className="font-sans text-base sm:text-lg md:text-xl font-normal text-[#101010] leading-snug">
            {project.summary}
          </p>
          {project.description && project.description[0] && (
            <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed font-light">
              {project.description[0]}
            </p>
          )}

          <div className="pt-2 flex flex-wrap gap-2">
            {project.services.map((srv) => (
              <span
                key={srv}
                className="px-3 py-1 bg-[#F6F6F2] border border-[#101010]/10 font-mono text-[11px] text-[#101010] uppercase tracking-wider font-medium"
              >
                {srv}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between h-full space-y-6 md:pl-6 md:border-l border-[#101010]/12">
          <div className="grid grid-cols-2 gap-4 divide-x divide-[#101010]/10 border-t border-b border-[#101010]/10 py-4">
            {project.stats && project.stats.slice(0, 2).map((st) => (
              <div key={st.label} className="pl-3 first:pl-0">
                <span className="font-mono text-[10px] text-[#757575] uppercase block mb-0.5">
                  {st.label}
                </span>
                <span className="font-display text-lg sm:text-xl font-semibold text-[#101010] tabular-nums">
                  {st.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="font-mono text-xs text-[#757575]">
              {project.gallery ? `${project.gallery.length} ARCHITECTURAL PLATES` : '6 STILLS'} &bull; 1 CINEMATIC REEL
            </span>
            <Link
              to={`/projects/${project.slug}`}
              className="solum-btn px-5 py-2.5 border border-[#101010] text-[#101010] hover:bg-[#101010] hover:text-white transition-colors text-xs font-mono uppercase tracking-wider"
            >
              <span>VIEW FULL CASE STUDY</span>
              <span className="btn-arrow ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 4K Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={stills}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </article>
  );
}
