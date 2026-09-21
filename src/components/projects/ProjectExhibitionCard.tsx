import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight, Volume2 } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectExhibitionCardProps {
  project: Project;
  index: number;
  layoutVariant?: 'lead' | 'wide' | 'split-landscape' | 'split-vertical';
  onPlayFilm?: (videoUrl: string, title: string, subtitle?: string) => void;
}

export function ProjectExhibitionCard({
  project,
  index,
  layoutVariant = 'split-landscape',
  onPlayFilm,
}: ProjectExhibitionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isVertical = project.videoAspectRatio === '9:16';

  // Determine aspect ratio class based on layout variant and video aspect ratio
  let aspectClass = 'aspect-[16/10]';
  if (isVertical || layoutVariant === 'split-vertical') {
    aspectClass = 'aspect-[9/16] max-w-[420px] mx-auto';
  } else if (layoutVariant === 'lead') {
    aspectClass = 'aspect-[16/9] sm:aspect-[21/9]';
  } else if (layoutVariant === 'wide') {
    aspectClass = 'aspect-[16/9] md:aspect-[16/10]';
  }

  // Smooth hover-to-play preview logic (only loads video on demand, preventing network lag)
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (project.heroVideo) {
      hoverTimerRef.current = setTimeout(() => {
        setIsPlayingPreview(true);
        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      }, 150);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlayingPreview(false);
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.heroVideo && onPlayFilm) {
      onPlayFilm(project.heroVideo, project.title, project.subtitle);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group w-full select-none"
    >
      {/* 1. MEDIA STAGE (Poster image by default + on-demand hover video preview) */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative ${aspectClass} w-full overflow-hidden bg-[#101010] border border-[#101010]/12 shadow-sm`}
      >
        {/* Poster Image (always rendered, instant WebP load) */}
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-700 ease-out filter brightness-95 ${
            isHovered ? 'scale-[1.03]' : 'scale-100'
          } ${isPlayingPreview ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* On-Demand Video Preview (mounted/played only on intentional hover) */}
        {project.heroVideo && (
          <video
            ref={videoRef}
            src={project.heroVideo}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
              isPlayingPreview ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        )}

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25 pointer-events-none transition-opacity duration-300" />

        {/* Top Badges: Index Number + Format Badge */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-white border border-white/10 font-mono font-medium">
              {String(index + 1).padStart(2, '0')} // {project.category}
            </span>
            {isVertical && (
              <span className="px-2 py-0.5 bg-white/90 text-black text-[9px] uppercase tracking-[0.2em] font-mono font-semibold">
                9:16 VERTICAL
              </span>
            )}
          </div>

          {project.videoDuration && (
            <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-[10px] text-zinc-300 font-mono tracking-wider border border-white/10 hidden sm:inline-block">
              {project.videoDuration}
            </span>
          )}
        </div>

        {/* Center Cinema Play Indicator */}
        {project.heroVideo ? (
          <div
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center cursor-pointer z-20 group/play"
          >
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 text-[#101010] flex items-center justify-center pl-1 shadow-2xl transition-all duration-300 ${
                isHovered ? 'scale-110 bg-white text-black' : 'scale-95 opacity-90'
              }`}
            >
              <Play className="w-6 h-6 fill-current" />
            </div>
          </div>
        ) : (
          <Link
            to={`/projects/${project.slug}`}
            className="absolute inset-0 z-20 cursor-pointer"
            aria-label={`View ${project.title}`}
          />
        )}

        {/* Bottom Media Card Bar: Click to Watch Film or View */}
        <div className="absolute bottom-4 left-4 right-4 z-30 flex items-end justify-between text-white pointer-events-none">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 block mb-0.5">
              {project.location} &bull; {project.year}
            </span>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-white leading-tight">
              {project.title}
            </h3>
          </div>

          <div className="hidden sm:flex items-center gap-2 pointer-events-auto">
            {project.heroVideo && (
              <button
                onClick={handlePlayClick}
                className="px-3 py-1.5 bg-white text-black text-[10px] font-mono uppercase tracking-widest font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <span>Full Cinema</span>
                <Volume2 className="w-3 h-3" />
              </button>
            )}
            <Link
              to={`/projects/${project.slug}`}
              className="px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest font-medium hover:bg-white hover:text-black transition-colors flex items-center gap-1"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. EDITORIAL METADATA STRIP BELOW (Pure Architectural Typography) */}
      <div className="pt-4 pb-2 border-b border-[#101010]/12 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 font-mono text-xs text-[#101010]">
        <div className="flex items-baseline gap-3">
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
          <span className="font-medium text-[#101010]">{project.client}</span>
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
