import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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

  // Compile all high-res stills for the project
  const stills: LightboxImage[] = [];

  if (project.gallery && project.gallery.length > 0) {
    project.gallery.forEach((g) => {
      stills.push({
        url: g.url,
        caption: g.caption,
        title: project.title,
      });
    });
  }

  if (project.process) {
    project.process.forEach((p) => {
      if (p.image) {
        stills.push({
          url: p.image,
          caption: `${p.step} // ${p.title} — ${p.description}`,
          title: project.title,
        });
      }
    });
  }

  if (project.heroImage) {
    stills.push({
      url: project.heroImage,
      caption: 'Lead Master Elevation & Architectural Framing',
      title: project.title,
    });
  }

  // Fallback high-res stills if project has fewer than 9 images
  const fallbackImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=85',
  ];
  let fbIdx = 0;
  while (stills.length < 9) {
    stills.push({
      url: fallbackImages[fbIdx % fallbackImages.length],
      caption: `Architectural Perspective ${stills.length + 1}`,
      title: project.title,
    });
    fbIdx++;
  }

  // Partition into 3 alternating rows with their originalIndex for lightbox
  const itemsWithIdx = stills.map((item, originalIndex) => ({ item, originalIndex }));
  const r1Base = itemsWithIdx.filter((_, i) => i % 3 === 0);
  const r2Base = itemsWithIdx.filter((_, i) => i % 3 === 1);
  const r3Base = itemsWithIdx.filter((_, i) => i % 3 === 2);

  // Duplicate each row array for seamless 0% -> -50% infinite loop
  const row1Loop = [...r1Base, ...r1Base];
  const row2Loop = [...r2Base, ...r2Base];
  const row3Loop = [...r3Base, ...r3Base];

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

        {/* RIGHT: 3-Tier Alternating Infinite Marquee Stills (CGI Studio / Solé Ettalong Master Dynamic) */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between gap-2 sm:gap-2.5 h-full min-h-[300px] sm:min-h-[420px] lg:min-h-[520px] overflow-hidden bg-[#0A0A0A] border border-[#101010]/12 p-2">
          {/* Row 1: Slides Left (animate-marquee) */}
          <div className="relative w-full overflow-hidden h-[95px] sm:h-[132px] lg:h-[162px] flex items-center">
            <div
              className="flex items-center gap-2 sm:gap-2.5 animate-marquee w-max"
              style={{ animationDuration: '32s' }}
            >
              {row1Loop.map((entry, idx) => (
                <div
                  key={`r1-${idx}`}
                  onClick={() => handleOpenLightbox(entry.originalIndex)}
                  className="group relative w-36 sm:w-48 lg:w-56 h-[95px] sm:h-[132px] lg:h-[162px] flex-shrink-0 overflow-hidden bg-zinc-900 border border-white/10 cursor-pointer"
                >
                  <img
                    src={entry.item.url}
                    alt={entry.item.caption || `Still ${entry.originalIndex + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center shadow-lg">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 z-10 pointer-events-none">
                    <span className="px-1.5 py-0.5 bg-black/80 text-[9px] font-mono text-white/90 border border-white/15 uppercase tabular-nums">
                      0{entry.originalIndex + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Slides Rightwards (Reverse direction) */}
          <div className="relative w-full overflow-hidden h-[95px] sm:h-[132px] lg:h-[162px] flex items-center">
            <div
              className="flex items-center gap-2 sm:gap-2.5 animate-marquee-reverse w-max"
              style={{ animationDuration: '36s' }}
            >
              {row2Loop.map((entry, idx) => (
                <div
                  key={`r2-${idx}`}
                  onClick={() => handleOpenLightbox(entry.originalIndex)}
                  className="group relative w-36 sm:w-48 lg:w-56 h-[95px] sm:h-[132px] lg:h-[162px] flex-shrink-0 overflow-hidden bg-zinc-900 border border-white/10 cursor-pointer"
                >
                  <img
                    src={entry.item.url}
                    alt={entry.item.caption || `Still ${entry.originalIndex + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center shadow-lg">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 z-10 pointer-events-none">
                    <span className="px-1.5 py-0.5 bg-black/80 text-[9px] font-mono text-white/90 border border-white/15 uppercase tabular-nums">
                      0{entry.originalIndex + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Slides Leftwards */}
          <div className="relative w-full overflow-hidden h-[95px] sm:h-[132px] lg:h-[162px] flex items-center">
            <div
              className="flex items-center gap-2 sm:gap-2.5 animate-marquee w-max"
              style={{ animationDuration: '29s' }}
            >
              {row3Loop.map((entry, idx) => (
                <div
                  key={`r3-${idx}`}
                  onClick={() => handleOpenLightbox(entry.originalIndex)}
                  className="group relative w-36 sm:w-48 lg:w-56 h-[95px] sm:h-[132px] lg:h-[162px] flex-shrink-0 overflow-hidden bg-zinc-900 border border-white/10 cursor-pointer"
                >
                  <img
                    src={entry.item.url}
                    alt={entry.item.caption || `Still ${entry.originalIndex + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center shadow-lg">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 z-10 pointer-events-none">
                    <span className="px-1.5 py-0.5 bg-black/80 text-[9px] font-mono text-white/90 border border-white/15 uppercase tabular-nums">
                      0{entry.originalIndex + 1}
                    </span>
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
        images={stills}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </article>
  );
}
