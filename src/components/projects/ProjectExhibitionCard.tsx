import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';
import {
  registerVideoPlayer,
  notifyVideoHoverEnter,
  notifyVideoHoverLeave,
  notifyVideoManualPlay,
} from '../../utils/videoCoordinator';

interface ProjectExhibitionCardProps {
  project: Project;
  index: number;
  layoutVariant?: 'lead' | 'wide' | 'split-landscape' | 'split-vertical';
  idPrefix?: string;
}

export function ProjectExhibitionCard({
  project,
  index,
  layoutVariant = 'split-landscape',
  idPrefix = 'exhibition',
}: ProjectExhibitionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wantPlayRef = useRef(false);
  const manuallyPausedRef = useRef(false);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const isMutedRef = useRef(true);

  const coordinatorId = `${idPrefix}-${project.slug}-${index}`;

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

  const isVertical = project.videoAspectRatio === '9:16';

  let aspectClass = 'aspect-[16/9]';
  if (isVertical || layoutVariant === 'split-vertical') {
    aspectClass = 'aspect-[9/16] max-w-[400px] mx-auto';
  } else if (layoutVariant === 'lead' || layoutVariant === 'wide') {
    aspectClass = 'aspect-[16/9]';
  }

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
      getElement: () => containerRef.current,
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

  const toggleSound = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const video = videoRef.current;
    if (video) {
      const nextMuted = !video.muted;
      video.muted = nextMuted;
      isMutedRef.current = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const openFullscreen = (e?: React.MouseEvent) => {
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
    if (video) {
      if (video.duration) {
        setDuration(video.duration);
      }
      if (wantPlayRef.current && video.paused) {
        safePlay();
      }
    }
  };

  const handleCanPlay = () => {
    if (wantPlayRef.current && videoRef.current?.paused) {
      safePlay();
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    const video = videoRef.current;
    if (video) {
      video.currentTime = newTime;
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
  const isControlsVisible = isHovered || !isPlaying;

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const isLotusMall = project.slug === 'lotus-mall';
  const zoomClass = isLotusMall ? 'scale-[1.04]' : 'scale-100';

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full select-none"
    >
      {/* 1. CLEAN MEDIA STAGE (Auto-play in view, instant hover, YouTube controls) */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative ${aspectClass} w-full overflow-hidden bg-[#101010] border border-[#101010]/12 shadow-sm group`}
      >
        {project.heroVideo ? (
          <>
            <video
              ref={setVideoRef}
              src={project.heroVideo}
              poster={project.heroImage}
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              disablePictureInPicture
              onCanPlay={handleCanPlay}
              onLoadedData={handleCanPlay}
              onPlay={() => setIsPlaying(true)}
              onPlaying={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onClick={togglePlay}
              className={`w-full h-full ${
                isFullscreen
                  ? '!object-contain !scale-100 !transform-none bg-black'
                  : `object-cover ${zoomClass}`
              } origin-center filter brightness-95 contrast-105 cursor-pointer transition-transform duration-300`}
            />

            {/* Central Play Indicator when paused and not hovered */}
            {!isPlaying && !isHovered && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/25 cursor-pointer z-10 transition-opacity duration-200"
              >
                <div className="w-14 h-14 rounded-full bg-white/95 text-black flex items-center justify-center pl-1 shadow-2xl hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current" />
                </div>
              </div>
            )}

            {/* Top Left: Title & Location Tag (Slides in on hover) */}
            <div
              className={`absolute top-3 left-3 sm:top-4 sm:left-4 z-10 pointer-events-none transition-all duration-300 ease-out transform ${
                isHovered
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2'
              }`}
            >
              <span className="px-2.5 py-1 bg-black/65 backdrop-blur-sm text-[11px] font-mono uppercase tracking-wider text-white/90 border border-white/15">
                {isVertical ? '9:16 VERTICAL CINEMA' : `${project.title} \u2022 ${project.location}`}
              </span>
            </div>

            {/* YouTube-like auto-hiding controls bar on hover */}
            <div
              className={`absolute inset-x-0 bottom-0 z-20 pt-10 pb-2.5 px-3 sm:px-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-1.5 transition-all duration-300 ease-out transform ${
                isControlsVisible
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 translate-y-3 pointer-events-none'
              }`}
            >
              {/* Upper row: Play/Pause, time, sound, fullscreen */}
              <div className="flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="w-7 h-7 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-3 h-3 fill-current" />
                    ) : (
                      <Play className="w-3 h-3 fill-current translate-x-0.5" />
                    )}
                  </button>

                  <div className="font-mono text-[11px] text-white/90 tracking-wider tabular-nums flex items-center gap-1">
                    <span>{formatTime(currentTime)}</span>
                    <span className="text-white/40">/</span>
                    <span className="text-white/70">{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleSound}
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                    className="w-7 h-7 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={openFullscreen}
                    aria-label="Fullscreen"
                    className="w-7 h-7 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Lower row: Interactive timeline scrubber */}
              <div className="relative w-full h-2.5 flex items-center cursor-pointer group/scrubber">
                <div className="w-full h-1 group-hover/scrubber:h-1.5 bg-white/30 rounded-full overflow-hidden transition-all relative">
                  <div
                    className="h-full bg-white rounded-full transition-[width] duration-75"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
                  aria-label="Seek position"
                />
              </div>
            </div>
          </>
        ) : (
          <Link to={`/projects/${project.slug}`} className="block w-full h-full overflow-hidden">
            <img
              src={project.heroImage}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover scale-[1.03] origin-center transition-transform duration-700 ease-out group-hover:scale-[1.06] filter brightness-95"
            />
          </Link>
        )}
      </div>

      {/* 2. EDITORIAL METADATA STRIP BELOW (Pure Clean Architectural Typography) */}
      <div className="pt-3 pb-2 border-b border-[#101010]/12 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 font-mono text-xs text-[#101010]">
        <div className="flex items-baseline gap-3">
          <span className="text-[#757575]">{String(index + 1).padStart(2, '0')}</span>
          <Link
            to={`/projects/${project.slug}`}
            className="font-semibold uppercase tracking-wider hover:underline text-sm sm:text-base text-[#101010]"
          >
            {project.title}
          </Link>
          <span className="text-[#757575] hidden sm:inline">&mdash;</span>
          <span className="text-[#757575] font-sans text-xs hidden md:inline truncate max-w-md">
            {project.subtitle}
          </span>
        </div>

        <div className="flex items-center gap-4 text-[#757575]">
          <span>{project.location}</span>
          <span>&bull;</span>
          <span className="tabular-nums">{project.year}</span>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-[#101010] hover:translate-x-1 transition-transform ml-1 font-semibold"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
