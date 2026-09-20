import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Maximize2, ArrowRight, Eye } from 'lucide-react';
import type { Project } from '../../types';
import { LightboxModal, type LightboxImage } from './LightboxModal';

interface ArchvizProjectShowcaseProps {
  project: Project;
  index: number;
}

export function ArchvizProjectShowcase({ project, index }: ArchvizProjectShowcaseProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Compile 6 high-res stills for the right-hand grid
  const stills: LightboxImage[] = [];

  // Add gallery items or process images to reach 6 stills
  if (project.gallery && project.gallery.length > 0) {
    project.gallery.forEach((g) => {
      stills.push({
        url: g.url,
        caption: g.caption,
        title: project.title,
      });
    });
  }

  // If fewer than 6, fill with process images or heroImage
  if (stills.length < 6 && project.process) {
    project.process.forEach((p) => {
      if (p.image && stills.length < 6) {
        stills.push({
          url: p.image,
          caption: `${p.step} // ${p.title} — ${p.description}`,
          title: project.title,
        });
      }
    });
  }

  if (stills.length < 6) {
    stills.push({
      url: project.heroImage,
      caption: 'Lead Master Elevation & Architectural Framing',
      title: project.title,
    });
  }

  // Exactly 6 stills
  const displayStills = stills.slice(0, 6);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const openFullscreenVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleOpenLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const formattedNumber = String(index + 1).padStart(2, '0');

  return (
    <article className="w-full bg-white text-[#101010] py-14 sm:py-20 border-b border-[#101010]/12 select-none">
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER: MONOGRAM NUMBER & BIG BOLD TITLE (SOLÉ ETTALONG STYLE)
          ───────────────────────────────────────────────────────────── */}
      <div className="mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
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
          2. THE CGI STUDIO MEDIA MATRIX (VIDEO LEFT 60% + 6 STILLS RIGHT 40%)
          Exact layout matching user's reference screenshot
          ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch">
        {/* LEFT: Cinematic High-Fidelity Video (or Hero Image Fallback) */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
          <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] w-full h-full min-h-[260px] sm:min-h-[420px] lg:min-h-[520px] overflow-hidden bg-black border border-[#101010]/12 group">
            {project.heroVideo ? (
              <video
                ref={videoRef}
                src={project.heroVideo}
                poster={project.heroImage}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                disablePictureInPicture
                className="w-full h-full object-cover filter brightness-95 contrast-105"
              />
            ) : (
              <img
                src={project.heroImage}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-95"
              />
            )}

            {/* Subtle Gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Top Badge: Video Format */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 pointer-events-none">
              <span className="px-2.5 py-1 bg-black/75 backdrop-blur-sm text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white border border-white/15">
                {project.videoDuration || '4K CINEMATIC MASTER'}
              </span>
            </div>

            {/* Bottom Left: Title & Location Watermark */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 pointer-events-none">
              <span className="font-mono text-xs text-white/90 uppercase tracking-wider block font-semibold">
                {project.title} &bull; {project.location}
              </span>
              <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest block">
                ATELIER DIRECTED VISUALIZATION
              </span>
            </div>

            {/* Bottom Right: Discreet Audio & Fullscreen Controls */}
            {project.heroVideo && (
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-2">
                <button
                  onClick={toggleSound}
                  aria-label={isMuted ? 'Enable audio' : 'Mute audio'}
                  className="w-8 h-8 rounded-full bg-black/75 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={openFullscreenVideo}
                  aria-label="Fullscreen video"
                  className="w-8 h-8 rounded-full bg-black/75 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: 6 Keyframe Stills Arranged in a 2-Column x 3-Row Grid */}
        <div className="lg:col-span-5 xl:col-span-5 grid grid-cols-2 gap-2 sm:gap-3 h-full min-h-[260px] sm:min-h-[420px] lg:min-h-[520px]">
          {displayStills.map((still, idx) => (
            <motion.div
              key={still.url + idx}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative w-full h-full min-h-[90px] sm:min-h-[130px] lg:min-h-[160px] overflow-hidden bg-zinc-900 border border-[#101010]/12 cursor-pointer"
            >
              <img
                src={still.url}
                alt={still.caption || `Still ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 transition-all duration-500"
              />

              {/* Hover Dark Vignette & Expand Icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center shadow-lg">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Corner Frame Number Index */}
              <div className="absolute top-2 left-2 z-10 pointer-events-none">
                <span className="px-1.5 py-0.5 bg-black/75 text-[9px] font-mono text-white/80 border border-white/10 uppercase">
                  0{idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
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
              6 STILLS &bull; 1 CINEMATIC REEL
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
        images={displayStills}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </article>
  );
}
