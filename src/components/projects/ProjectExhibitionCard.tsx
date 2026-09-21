import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectExhibitionCardProps {
  project: Project;
  index: number;
  layoutVariant?: 'lead' | 'wide' | 'split-landscape' | 'split-vertical';
}

export function ProjectExhibitionCard({
  project,
  index,
  layoutVariant = 'split-landscape',
}: ProjectExhibitionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const requestIdRef = useRef(0);

  useEffect(() => {
    const handleFsChange = () => {
      const fsEl = document.fullscreenElement || (document as any).webkitFullscreenElement || (document as any).mozFullScreenElement || (document as any).msFullscreenElement;
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

  // Determine aspect ratio class based on layout variant and video aspect ratio
  let aspectClass = 'aspect-[16/10]';
  if (isVertical || layoutVariant === 'split-vertical') {
    aspectClass = 'aspect-[9/16] max-w-[400px] mx-auto';
  } else if (layoutVariant === 'lead') {
    aspectClass = 'aspect-[16/9] sm:aspect-[21/9]';
  } else if (layoutVariant === 'wide') {
    aspectClass = 'aspect-[16/9] md:aspect-[16/10]';
  }

  // Ensure DOM element properties defaultMuted and muted are strictly enforced on mount
  const setVideoRef = useCallback((el: HTMLVideoElement | null) => {
    videoRef.current = el;
    if (el) {
      el.defaultMuted = true;
      el.muted = true;
      el.playsInline = true;
    }
  }, []);

  // Safe playback helper that avoids unhandled promise rejections, race conditions, and autoplay blocks
  const safePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || !project.heroVideo) return;

    const currentId = ++requestIdRef.current;
    video.defaultMuted = true;
    video.muted = isMuted;

    try {
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            if (currentId !== requestIdRef.current) {
              video.pause();
              setIsPlaying(false);
            } else {
              setIsPlaying(true);
            }
          })
          .catch((err) => {
            if (err?.name === 'AbortError') return;
            if (currentId === requestIdRef.current) {
              video.muted = true;
              setIsMuted(true);
              video.play().then(() => {
                if (currentId === requestIdRef.current) {
                  setIsPlaying(true);
                } else {
                  video.pause();
                  setIsPlaying(false);
                }
              }).catch(() => {});
            }
          });
      }
    } catch {
      // ignore
    }
  }, [project.heroVideo, isMuted]);

  // Safe pause helper that invalidates any in-flight play request immediately
  const safePause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    ++requestIdRef.current;
    try {
      video.pause();
    } catch {
      // ignore
    }
    setIsPlaying(false);
  }, []);

  // Viewport Auto-Play: triggers smoothly when video is in viewport on scroll,
  // pauses when scrolled out, and resumes when scrolled back in.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      safePlay();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '50px 0px 50px 0px',
        threshold: 0.15,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [safePlay]);

  // Pause when browser tab is inactive / minimized to save CPU and battery
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        safePause();
      } else if (isInView) {
        safePlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isInView, safePlay, safePause]);

  useEffect(() => {
    if (isInView) {
      safePlay();
    } else {
      safePause();
    }
  }, [isInView, safePlay, safePause]);

  const resetHideTimer = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    if (isPlaying) {
      hideTimeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 2400);
    }
  }, [isPlaying]);

  // Instant playback on mouse hover ("mishkani oborsa birdan boshlansin")
  const handleMouseEnter = () => {
    setIsHovered(true);
    resetHideTimer();
    safePlay();
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
    // Keep playing smoothly if still in viewport, pause if scrolled away
    if (!isInView) {
      safePause();
    }
  };

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      safePlay();
      resetHideTimer();
    } else {
      safePause();
      setIsHovered(true);
    }
  };

  const toggleSound = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const video = videoRef.current;
    if (video) {
      const nextMuted = !video.muted;
      video.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const openFullscreen = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void; webkitRequestFullscreen?: () => void }) | null;
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
    if (video) {
      setCurrentTime(video.currentTime);
      if (!duration && video.duration) {
        setDuration(video.duration);
      }
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration);
      if (isInView || isHovered) {
        safePlay();
      }
    }
  };

  const handleCanPlay = () => {
    if (isInView || isHovered) {
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
  const isControlsVisible = isHovered;

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // Slight zoom to eliminate any letterbox black bars on edges (especially Lotus Mall)
  const isLotusMall = project.slug === 'lotus-mall';
  const zoomClass = isLotusMall ? 'scale-[1.07]' : 'scale-[1.04]';

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full select-none"
    >
      {/* 1. CLEAN MEDIA STAGE (Auto-play in view, instant hover, YouTube controls, zero clutter buttons, zoomed in to remove black borders) */}
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
              preload="auto"
              controls={false}
              disablePictureInPicture
              onCanPlay={handleCanPlay}
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
