import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import type { Project } from '../../types';
import { RevealFrame } from '../common/RevealFrame';

interface SelectedProjectCardProps {
  project: Project;
  index: number;
  layoutClass: string;
}

function SelectedProjectCard({
  project,
  index,
  layoutClass,
}: SelectedProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isVertical = project.videoAspectRatio === '9:16';

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const secondaryThumbs = project.gallery.slice(1, 4);

  return (
    <article className={`group ${layoutClass}`}>
      <Link
        to={`/projects/${project.slug}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="block select-none"
      >
        <RevealFrame
          shutterColor="#F5EDE2"
          delay={0}
          className={`relative w-full overflow-hidden bg-[#EAE2D6] border border-[#321E13]/12 ${
            isVertical ? 'aspect-[9/16]' : 'aspect-[16/9]'
          }`}
        >
          {/* Crisp, Un-Dimmed High-Resolution Architectural Render (scale-[1.035] trims any raw letterbox edge) */}
          <img
            src={project.heroImage}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover scale-[1.035] group-hover:scale-[1.065] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          />

          {/* Live Hover Cinema Video Preview */}
          {project.heroVideo && (
            <video
              ref={videoRef}
              src={project.heroVideo}
              muted
              loop
              playsInline
              preload="none"
              className={`absolute inset-0 w-full h-full object-cover scale-[1.035] pointer-events-none transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Clean Architectural Corner Tags (Zero Dark Full-Frame Overlay) */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F5EDE2]/95 text-[10px] font-mono font-medium uppercase tracking-[0.14em] text-[#321E13] border border-[#321E13]/15 shadow-sm">
              <span className="w-1.5 h-1.5 bg-[#321E13]" />
              {project.videoDuration || (isVertical ? '9:16 Reel' : '4K Film')}
            </span>
            <span className="px-2.5 py-1 bg-[#321E13] text-[10px] font-mono font-medium uppercase tracking-[0.14em] text-[#F5EDE2]">
              0{index + 1}
            </span>
          </div>

          {/* Atlas Studio Architectural Hover Badge */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="px-5 py-2.5 bg-[#F5EDE2] text-[#321E13] border border-[#321E13] font-mono text-xs font-semibold uppercase tracking-[0.12em] shadow-xl flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-250">
              <span>View Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </RevealFrame>

        {/* Clean Architectural Metadata Bar */}
        <div className="pt-3.5 pb-3 border-b border-[#321E13]/15 flex items-baseline justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-logo text-xl sm:text-2xl font-medium uppercase tracking-[0.03em] text-[#321E13] group-hover:opacity-75 transition-opacity truncate">
              {project.title}
            </h3>
            <p className="font-sans text-xs text-[#321E13]/65 truncate mt-0.5">
              {project.subtitle}
            </p>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#321E13]/70 whitespace-nowrap shrink-0">
            {project.location.split(',')[0]} &mdash; {project.year}
          </span>
        </div>

        {/* Secondary Architectural Plates Preview Strip */}
        {secondaryThumbs.length > 0 && (
          <div className="pt-2.5 flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#321E13]/60">
              +{project.gallery.length} High-Res Plates
            </span>
            <div className="flex items-center gap-1.5">
              {secondaryThumbs.map((img, idx) => (
                <div
                  key={idx}
                  className="w-10 h-6 overflow-hidden border border-[#321E13]/15 bg-[#EAE2D6]"
                >
                  <img
                    src={img.url}
                    alt={`${project.title} render ${idx + 2}`}
                    loading="lazy"
                    className="w-full h-full object-cover scale-[1.04]"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Link>
    </article>
  );
}

export function SolumRecentProjects() {
  const volga = PROJECTS.find((p) => p.slug === 'volga-park') || PROJECTS[0];
  const archInsight = PROJECTS.find((p) => p.slug === 'architecture-insight') || PROJECTS[2];
  const lotus = PROJECTS.find((p) => p.slug === 'lotus-mall') || PROJECTS[3];
  const navoi = PROJECTS.find((p) => p.slug === 'navoi-plaza') || PROJECTS[5];
  const bunker = PROJECTS.find((p) => p.slug === 'bunker-37') || PROJECTS[1];
  const collective = PROJECTS.find((p) => p.slug === 'collective-dubai-hills') || PROJECTS[4];

  const curatedList: Array<{
    project: Project;
    layoutClass: string;
  }> = [
    {
      // 01: Volga Park (16:9) — Wide left anchor (Cols 1-7)
      project: volga,
      layoutClass: 'md:col-span-7',
    },
    {
      // 02: Architecture Insight (9:16 Vertical) — Right offset gallery piece (Cols 9-12)
      project: archInsight,
      layoutClass: 'md:col-span-4 md:col-start-9 md:mt-20',
    },
    {
      // 03: Navoi Plaza (9:16 Vertical) — Left inset vertical tower study (Cols 1-4)
      project: navoi,
      layoutClass: 'md:col-span-4 md:col-start-1 md:mt-4',
    },
    {
      // 04: Lotus Mall & 5 Star Hotel (16:9) — Right sweeping commercial landmark (Cols 6-12)
      project: lotus,
      layoutClass: 'md:col-span-7 md:col-start-6 md:mt-16',
    },
    {
      // 05: Bunker 37 (16:9) — Left-center cultural monument (Cols 1-6)
      project: bunker,
      layoutClass: 'md:col-span-6 md:col-start-1 md:mt-8',
    },
    {
      // 06: Collective Dubai Hills (16:9) — Right-offset resort showcase (Cols 7-12)
      project: collective,
      layoutClass: 'md:col-span-6 md:col-start-7 md:mt-24',
    },
  ];

  const allRenders = PROJECTS.flatMap((p) =>
    p.gallery.slice(0, 3).map((g) => ({
      url: g.url,
      title: p.title,
    }))
  );
  const topRowRenders = [...allRenders.slice(0, 8), ...allRenders.slice(0, 8)];
  const bottomRowRenders = [...allRenders.slice(8, 16), ...allRenders.slice(8, 16)];

  return (
    <section className="relative z-10 w-full bg-[#F5EDE2] text-[#321E13] pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-20 md:pb-28 border-b border-[#321E13]/12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* ========================================================= */}
        {/* 1) WHAT WE DO — CLEAR STUDIO IDENTITY & CAPABILITIES       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-16 md:pb-24 border-b border-[#321E13]/15 items-start">
          {/* Left Rail: What We Do */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-[#321E13] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#321E13] font-semibold">
                WHAT WE DO
              </span>
            </div>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#321E13]/60">
              Atlas Studio // Archviz &amp; CGI
            </p>
          </div>

          {/* Right Stage: Clear Answer to Who We Are & What We Do */}
          <div className="md:col-span-9 space-y-6">
            <h2 className="font-logo text-[clamp(2rem,4.4vw,3.75rem)] font-normal uppercase tracking-[0.03em] leading-[1.06] text-[#321E13]">
              We turn architectural plans and 3D models into photorealistic 4K imagery and cinema films.
            </h2>

            <p className="font-sans text-sm sm:text-base md:text-lg text-[#321E13]/80 leading-relaxed max-w-3xl">
              Atlas Studio is an architectural visualization and creative production studio. We partner with real estate developers, architects, and property brands to visualize unbuilt exteriors, interiors, and masterplans — so buyers and investors feel the space and commit before construction begins.
            </p>

            {/* 4 Clear Service Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                '01 // Exterior & Interior CGI',
                '02 // 4K Walkthrough Films',
                '03 // 9:16 Vertical Reels',
                '04 // Before & After Studies',
              ].map((item) => (
                <div
                  key={item}
                  className="px-3.5 py-2.5 bg-white/60 border border-[#321E13]/15 font-mono text-[11px] uppercase tracking-[0.1em] text-[#321E13] font-medium"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Bespoke Atlas Studio Architectural Buttons (No Omnya Brown Pills) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-stretch bg-[#321E13] text-[#F5EDE2] hover:bg-[#101010] transition-colors duration-200 border border-[#321E13]"
              >
                <span className="py-3 px-5 sm:px-6 font-mono text-xs uppercase tracking-[0.14em] font-semibold flex items-center">
                  Start a Project
                </span>
                <span className="w-10 sm:w-11 border-l border-[#F5EDE2]/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#101010] transition-colors duration-200">
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>

              <Link
                to="/projects"
                className="solum-btn px-5 sm:px-6 py-3 border border-[#321E13] text-xs font-mono uppercase tracking-[0.14em] font-semibold text-[#321E13] hover:bg-[#321E13] hover:text-[#F5EDE2] transition-colors duration-200"
              >
                <span>All Projects ({PROJECTS.length})</span>
                <span className="btn-arrow ml-3">
                  <ArrowRight className="w-4 h-4 inline-block" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2) SELECTED PROJECTS HEADER                               */}
        {/* ========================================================= */}
        <div className="pt-12 md:pt-16 pb-8 md:pb-12 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#321E13]/15">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#321E13]" />
            <h2 className="font-logo text-2xl sm:text-4xl font-normal uppercase tracking-[0.04em] text-[#321E13]">
              Selected Projects
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#321E13]/70 tabular-nums">
            0{curatedList.length} Featured Commissions // 16:9 &amp; 9:16 Archive
          </span>
        </div>

        {/* ========================================================= */}
        {/* 3) ASYMMETRIC 12-COLUMN EXHIBITION GRID (ALL 6 PROJECTS)  */}
        {/* ========================================================= */}
        <div className="pt-10 md:pt-14 grid grid-cols-1 md:grid-cols-12 gap-y-14 md:gap-y-16 md:gap-x-8 items-start">
          {curatedList.map((item, idx) => (
            <SelectedProjectCard
              key={item.project.slug}
              project={item.project}
              index={idx}
              layoutClass={item.layoutClass}
            />
          ))}
        </div>

        {/* ========================================================= */}
        {/* 4) DUAL-ROW SLIDING ARCHIVE BANNER                        */}
        {/* ========================================================= */}
        <div className="mt-16 md:mt-24">
          <Link
            to="/projects"
            aria-label="Explore All Projects"
            className="group relative block w-full h-[240px] sm:h-[300px] md:h-[340px] overflow-hidden border border-[#321E13]/20 bg-[#141413]"
          >
            {/* Dual Counter-Scrolling Render Rows */}
            <div className="absolute inset-0 flex flex-col justify-between gap-2.5 py-2.5 opacity-75 group-hover:opacity-90 transition-opacity duration-500">
              {/* Row 1: Slides Left */}
              <div className="flex items-center gap-2.5 w-max animate-[marqueeLeft_40s_linear_infinite]">
                {topRowRenders.map((item, i) => (
                  <div
                    key={`top-${i}`}
                    className="h-[105px] sm:h-[135px] md:h-[152px] aspect-[16/10] overflow-hidden shrink-0 bg-zinc-900"
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover scale-[1.04]"
                    />
                  </div>
                ))}
              </div>

              {/* Row 2: Slides Right */}
              <div className="flex items-center gap-2.5 w-max animate-[marqueeRight_44s_linear_infinite]">
                {bottomRowRenders.map((item, i) => (
                  <div
                    key={`bot-${i}`}
                    className="h-[105px] sm:h-[135px] md:h-[152px] aspect-[16/10] overflow-hidden shrink-0 bg-zinc-900"
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover scale-[1.04]"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle Center Backdrop for Button */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none" />

            {/* Centered Atlas Studio Architectural Button */}
            <div className="relative z-10 h-full flex items-center justify-center px-6">
              <div className="inline-flex items-stretch bg-[#F5EDE2] text-[#321E13] border border-[#321E13] shadow-2xl group-hover:bg-white transition-colors duration-200">
                <span className="px-6 sm:px-8 py-3.5 sm:py-4 font-logo text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.06em]">
                  Explore All Projects
                </span>
                <span className="w-12 sm:w-14 border-l border-[#321E13]/20 flex items-center justify-center bg-[#321E13] text-[#F5EDE2]">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
