import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Volume2, VolumeX, Maximize2, ArrowRight, Eye } from 'lucide-react';
import type { Project } from '../../types';
import { LightboxModal, type LightboxImage } from './LightboxModal';

interface ArchvizProjectShowcaseProps {
  project: Project;
  index: number;
}

export function ArchvizProjectShowcase({ project, index }: ArchvizProjectShowcaseProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(index === 0);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const setVideoRef = useCallback((el: HTMLVideoElement | null) => {
    videoRef.current = el;
    if (el) {
      el.defaultMuted = true;
      el.muted = true;
      el.playsInline = true;
    }
  }, []);

  const safePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultMuted = true;
    video.muted = isMuted;

    try {
      playPromiseRef.current = video.play();
      if (playPromiseRef.current !== undefined) {
        playPromiseRef.current
          .then(() => {
            playPromiseRef.current = null;
            setIsPlaying(true);
          })
          .catch(() => {
            playPromiseRef.current = null;
            if (video) {
              video.muted = true;
              setIsMuted(true);
              video.play().then(() => setIsPlaying(true)).catch(() => {});
            }
          });
      }
    } catch {
      // ignore
    }
  }, [isMuted]);

  const safePause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (playPromiseRef.current) {
      playPromiseRef.current
        .then(() => {
          video.pause();
          setIsPlaying(false);
        })
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '250px 0px', threshold: [0, 0.1, 0.3] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      safePlay();
    } else {
      safePause();
    }
  }, [isInView, safePlay, safePause]);

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
  const targetMinStills = isVertical ? 12 : 9;

  // Fallback high-res stills if project has fewer than targetMinStills images
  const fallbackImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=85',
  ];
  // Ensure we reach targetMinStills safely with a fixed finite for-loop (NO infinite loop!)
  const needed = Math.max(0, targetMinStills - stills.length);
  for (let i = 0; i < needed; i++) {
    stills.push({
      url: fallbackImages[i % fallbackImages.length],
      caption: `Architectural Perspective ${stills.length + 1}`,
      title: project.title,
    });
  }

  // Partition stills across 3 tiers (4-4-4 for vertical, 3-3-3 for widescreen)
  const itemsWithIdx = stills.map((item, originalIndex) => ({ item, originalIndex }));
  let r1Base: typeof itemsWithIdx;
  let r2Base: typeof itemsWithIdx;
  let r3Base: typeof itemsWithIdx;

  if (isVertical && itemsWithIdx.length >= 12) {
    r1Base = itemsWithIdx.slice(0, 4);
    r2Base = itemsWithIdx.slice(4, 8);
    r3Base = itemsWithIdx.slice(8, 12);
  } else {
    r1Base = itemsWithIdx.slice(0, 3);
    r2Base = itemsWithIdx.slice(3, 6);
    r3Base = itemsWithIdx.slice(6, 9);
  }

  // Fallback guards to prevent any undefined spread crash
  const safeR1 = r1Base && r1Base.length > 0 ? r1Base : itemsWithIdx.slice(0, 3);
  const safeR2 = r2Base && r2Base.length > 0 ? r2Base : itemsWithIdx.slice(3, 6);
  const safeR3 = r3Base && r3Base.length > 0 ? r3Base : itemsWithIdx.slice(6, 9);

  // Duplicate each row array for seamless 0% -> -50% infinite loop
  const row1Loop = [...safeR1, ...safeR1];
  const row2Loop = [...safeR2, ...safeR2];
  const row3Loop = [...safeR3, ...safeR3];

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
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const openFullscreenVideo = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (!duration && videoRef.current.duration) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
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
          1. HEADER: MONOGRAM NUMBER & BIG BOLD TITLE (SOLÉ ETTALONG STYLE)
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
      <div ref={containerRef} className={`grid grid-cols-1 lg:grid-cols-12 ${isVertical ? 'gap-4 lg:gap-8' : 'gap-3 sm:gap-4'} items-stretch`}>
        {/* LEFT: Cinematic High-Fidelity Video (or Hero Image Fallback) */}
        <div className={isVertical ? "lg:col-span-4 xl:col-span-4 flex flex-col items-center lg:items-start" : "lg:col-span-8 xl:col-span-8 flex flex-col"}>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={
              isVertical
                ? "relative aspect-[9/16] w-full max-w-[360px] sm:max-w-[400px] h-full min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] overflow-hidden bg-black border border-[#101010]/12 group shadow-xl"
                : "relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10] w-full h-full min-h-[280px] sm:min-h-[440px] lg:min-h-[540px] overflow-hidden bg-black border border-[#101010]/12 group"
            }
          >
            {project.heroVideo ? (
              <video
                ref={setVideoRef}
                src={project.heroVideo}
                poster={project.heroImage}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls={false}
                disablePictureInPicture
                onCanPlay={() => {
                  if (isInView || isHovered) safePlay();
                }}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={handleContainerClick}
                className="w-full h-full object-cover scale-[1.04] origin-center filter brightness-95 contrast-105 cursor-pointer"
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
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-10 transition-opacity duration-200"
              >
                <div className="w-16 h-16 rounded-full bg-white/95 text-black flex items-center justify-center pl-1 shadow-2xl hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current" />
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
                  {/* Left: Play/Pause + Time */}
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

                  {/* Right: Audio & Fullscreen */}
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
                  {/* Background Track */}
                  <div className="w-full h-1 group-hover/scrubber:h-1.5 bg-white/30 rounded-full overflow-hidden transition-all relative">
                    {/* Played White Progress */}
                    <div
                      className="h-full bg-white rounded-full transition-[width] duration-75"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  {/* Thumb Indicator on Hover */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md pointer-events-none opacity-0 group-hover/scrubber:opacity-100 transition-opacity"
                    style={{ left: `calc(${progressPercent}% - 6px)` }}
                  />

                  {/* Range Slider for Native Drag & Click Seeking */}
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

        {/* RIGHT: 3-Tier Alternating Infinite Marquee Stills */}
        <div
          className={
            isVertical
              ? "lg:col-span-8 xl:col-span-8 flex flex-col justify-between gap-3 sm:gap-3.5 h-full min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] overflow-hidden"
              : "lg:col-span-4 xl:col-span-4 flex flex-col justify-between gap-2 sm:gap-2.5 h-full min-h-[280px] sm:min-h-[440px] lg:min-h-[540px] overflow-hidden"
          }
        >
          {/* Row 1: Slides Left (animate-marquee) */}
          <div className={`relative w-full overflow-hidden flex items-center ${isVertical ? 'h-[135px] sm:h-[175px] lg:h-[200px]' : 'h-[90px] sm:h-[135px] lg:h-[165px]'}`}>
            <div
              className="flex items-center gap-2 sm:gap-2.5 animate-marquee w-max"
              style={{ animationDuration: isVertical ? '38s' : '30s' }}
            >
              {row1Loop.map((entry, idx) => (
                <div
                  key={`r1-${idx}`}
                  onClick={() => handleOpenLightbox(entry.originalIndex)}
                  className={`group relative flex-shrink-0 overflow-hidden cursor-pointer ${
                    isVertical
                      ? 'w-44 sm:w-56 lg:w-68 h-[135px] sm:h-[175px] lg:h-[200px]'
                      : 'w-32 sm:w-42 lg:w-48 h-[90px] sm:h-[135px] lg:h-[165px]'
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
          <div className={`relative w-full overflow-hidden flex items-center ${isVertical ? 'h-[135px] sm:h-[175px] lg:h-[200px]' : 'h-[90px] sm:h-[135px] lg:h-[165px]'}`}>
            <div
              className="flex items-center gap-2 sm:gap-2.5 animate-marquee-reverse w-max"
              style={{ animationDuration: isVertical ? '42s' : '32s' }}
            >
              {row2Loop.map((entry, idx) => (
                <div
                  key={`r2-${idx}`}
                  onClick={() => handleOpenLightbox(entry.originalIndex)}
                  className={`group relative flex-shrink-0 overflow-hidden cursor-pointer ${
                    isVertical
                      ? 'w-44 sm:w-56 lg:w-68 h-[135px] sm:h-[175px] lg:h-[200px]'
                      : 'w-32 sm:w-42 lg:w-48 h-[90px] sm:h-[135px] lg:h-[165px]'
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

          {/* Row 3: Slides Leftwards */}
          <div className={`relative w-full overflow-hidden flex items-center ${isVertical ? 'h-[135px] sm:h-[175px] lg:h-[200px]' : 'h-[90px] sm:h-[135px] lg:h-[165px]'}`}>
            <div
              className="flex items-center gap-2 sm:gap-2.5 animate-marquee w-max"
              style={{ animationDuration: isVertical ? '36s' : '28s' }}
            >
              {row3Loop.map((entry, idx) => (
                <div
                  key={`r3-${idx}`}
                  onClick={() => handleOpenLightbox(entry.originalIndex)}
                  className={`group relative flex-shrink-0 overflow-hidden cursor-pointer ${
                    isVertical
                      ? 'w-44 sm:w-56 lg:w-68 h-[135px] sm:h-[175px] lg:h-[200px]'
                      : 'w-32 sm:w-42 lg:w-48 h-[90px] sm:h-[135px] lg:h-[165px]'
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
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. EDITORIAL PROJECT SYNOPSIS & DELIVERABLES (MATCHING SCREENSHOT)
          ───────────────────────────────────────────────────────────── */}
      <div className="pt-8 sm:pt-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left: Lead Summary (Bold modern typography) */}
        <div className="md:col-span-6 lg:col-span-7 space-y-4">
          <p className="font-sans text-base sm:text-lg md:text-xl font-normal text-[#101010] leading-snug">
            {project.summary}
          </p>
          {project.description && project.description[0] && (
            <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed font-light">
              {project.description[0]}
            </p>
          )}

          {/* Scope / Deliverables Tags */}
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

        {/* Right: Commercial Metrics & Full Case Study CTA */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between h-full space-y-6 md:pl-6 md:border-l border-[#101010]/12">
          {/* Key Metrics Grid */}
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
