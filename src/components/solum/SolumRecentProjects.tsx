import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import type { Project } from '../../types';
import { RevealFrame } from '../common/RevealFrame';
import {
  registerVideoPlayer,
  notifyVideoHoverEnter,
  notifyVideoHoverLeave,
  notifyVideoManualPlay,
} from '../../utils/videoCoordinator';

interface SelectedCardProps {
  project: Project;
  index: number;
  className?: string;
}

function SelectedCard({ project, index, className = '' }: SelectedCardProps) {
  const isVertical = project.videoAspectRatio === '9:16';

  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wantPlayRef = useRef(false);
  const manuallyPausedRef = useRef(false);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const isMutedRef = useRef(true);

  const coordinatorId = `home-selected-${project.slug}-${index}`;

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
      getElement: () => stageRef.current,
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
    e?.preventDefault();
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
    e?.preventDefault();
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
    e?.preventDefault();
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
    e.stopPropagation();
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

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const isControlsVisible = isHovered || !isPlaying;
  const isLotusMall = project.slug === 'lotus-mall';
  const zoomClass = isLotusMall ? 'scale-[1.04]' : 'scale-[1.01]';

  return (
    <article className={`${className} select-none`}>
      <RevealFrame
        shutterColor="#FFFFFF"
        delay={0}
        className={`relative w-full overflow-hidden bg-[#101010] border border-[#101010]/12 shadow-sm group ${
          isVertical ? 'aspect-[9/16]' : 'aspect-[16/9]'
        }`}
      >
        <div
          ref={stageRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full h-full"
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
                preload={index === 0 ? 'auto' : 'metadata'}
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
                    : `object-cover ${zoomClass} group-hover:scale-[1.035]`
                } origin-center filter brightness-95 contrast-105 cursor-pointer transition-transform duration-500 ease-out`}
              />

              {/* Central Play Indicator when paused and not hovered */}
              {!isPlaying && !isHovered && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer z-10 transition-opacity duration-200"
                >
                  <div className="w-14 h-14 rounded-full bg-white/95 text-black flex items-center justify-center pl-1 shadow-2xl hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
              )}

              {/* Top Bar: Format/Title Tag on Left + Case Study Link on Right (Smooth Hover Slide-In) */}
              <div
                className={`absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-20 flex items-center justify-between transition-all duration-300 ease-out transform ${
                  isHovered
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <span className="px-2.5 py-1 bg-black/65 backdrop-blur-sm text-[11px] font-mono uppercase tracking-wider text-white/90 border border-white/15 pointer-events-none">
                  {isVertical ? '9:16 VERTICAL CINEMA' : `${project.title} \u2022 ${project.location}`}
                </span>

                <Link
                  to={`/projects/${project.slug}`}
                  className="px-3 py-1 bg-white/95 hover:bg-white text-[#101010] text-[11px] font-mono font-semibold uppercase tracking-wider inline-flex items-center gap-1 shadow-lg transition-transform hover:scale-105"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Bottom Controls Bar (Identical to ProjectsPage hover controls) */}
              <div
                className={`absolute inset-x-0 bottom-0 z-20 pt-10 pb-2.5 px-3 sm:px-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-1.5 transition-all duration-300 ease-out transform ${
                  isControlsVisible
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-3 pointer-events-none'
                }`}
              >
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

                {/* Interactive Timeline Scrubber */}
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
                    onClick={(e) => e.stopPropagation()}
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
                decoding="async"
                className="w-full h-full object-cover scale-[1.03] transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
            </Link>
          )}
        </div>
      </RevealFrame>

      {/* Editorial Metadata Strip Below */}
      <div className="pt-4 pb-3 border-b border-[#101010]/12 flex items-center justify-between gap-3 font-mono text-xs sm:text-sm text-[#101010]">
        <div className="flex items-baseline gap-2.5 min-w-0">
          <span className="text-xs text-[#757575] tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <Link
            to={`/projects/${project.slug}`}
            className="font-semibold uppercase tracking-wider hover:underline truncate text-sm sm:text-base text-[#101010]"
          >
            {project.title}
          </Link>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#757575] whitespace-nowrap shrink-0">
          <span className="hidden sm:inline">{project.category}</span>
          <span className="hidden sm:inline">&bull;</span>
          <span className="tabular-nums">{project.year}</span>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-[#101010] hover:translate-x-0.5 transition-transform font-semibold ml-1"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function SolumRecentProjects() {
  const pVolga = PROJECTS.find((p) => p.slug === 'volga-park') || PROJECTS[0];
  const pBunker = PROJECTS.find((p) => p.slug === 'bunker-37') || PROJECTS[1];
  const pInsight = PROJECTS.find((p) => p.slug === 'architecture-insight') || PROJECTS[2];
  const pLotus = PROJECTS.find((p) => p.slug === 'lotus-mall') || PROJECTS[3];
  const pDubai = PROJECTS.find((p) => p.slug === 'collective-dubai-hills') || PROJECTS[4];
  const pNavoi = PROJECTS.find((p) => p.slug === 'navoi-plaza') || PROJECTS[5];

  return (
    <section className="w-full bg-white text-[#101010] py-16 md:py-24 px-6 md:px-10 border-b border-[#101010]/12">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header: Original 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#101010]/12">
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                PROJECTS
              </span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#101010]">
              Selected Projects
            </h2>
            <Link
              to="/projects"
              className="solum-btn self-start sm:self-auto px-6 py-3.5 border border-[#101010] text-xs sm:text-sm font-mono uppercase tracking-wider text-[#101010] hover:bg-[#101010] hover:text-white transition-colors duration-180"
            >
              <span>ALL PROJECTS ({PROJECTS.length})</span>
              <span className="btn-arrow ml-3">
                <ArrowRight className="w-4 h-4 inline-block" />
              </span>
            </Link>
          </div>
        </div>

        {/* Asymmetric Exhibition Grid — All 6 Authentic Atlas Studio Projects with Hover-Play & Scroll-Stop Video */}
        <div className="pt-12 md:pt-16 grid grid-cols-1 md:grid-cols-12 gap-y-14 md:gap-y-20 md:gap-x-8 items-start">
          {/* 01: Volga Park (16:9) — Wide Left Anchor */}
          <SelectedCard project={pVolga} index={0} className="md:col-span-7" />

          {/* 02: Architecture Insight (9:16 Vertical) — Right Offset */}
          <SelectedCard project={pInsight} index={1} className="md:col-span-4 md:col-start-9 md:mt-16" />

          {/* 03: Navoi Plaza (9:16 Vertical) — Left Inset */}
          <SelectedCard project={pNavoi} index={2} className="md:col-span-4 md:col-start-1" />

          {/* 04: Lotus Mall & 5 Star Hotel (16:9) — Right Wide */}
          <SelectedCard project={pLotus} index={3} className="md:col-span-7 md:col-start-6 md:mt-14" />

          {/* 05: Bunker 37 (16:9) — Left Half */}
          <SelectedCard project={pBunker} index={4} className="md:col-span-6 md:col-start-1" />

          {/* 06: Collective Dubai Hills (16:9) — Right Half Offset */}
          <SelectedCard project={pDubai} index={5} className="md:col-span-6 md:col-start-7 md:mt-20" />
        </div>
      </div>
    </section>
  );
}
