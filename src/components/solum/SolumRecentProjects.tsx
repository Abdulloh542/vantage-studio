import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import type { Project } from '../../types';
import { RevealFrame } from '../common/RevealFrame';

interface SelectedProjectCardProps {
  project: Project;
  index: number;
  layoutClass: string;
  revealDelay?: number;
}

function SelectedProjectCard({
  project,
  index,
  layoutClass,
  revealDelay = 0,
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
          shutterColor="#EDEAE4"
          delay={revealDelay}
          className={`relative w-full overflow-hidden rounded-[6px] bg-[#E2DDD5] border border-[#111111]/[0.08] ${
            isVertical ? 'aspect-[9/16]' : 'aspect-[16/9]'
          }`}
        >
          {/* Base High-Res Architectural Still */}
          <img
            src={project.heroImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
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
              className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Subtle Gradient & Format Badge */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md text-[10px] font-mono uppercase tracking-[0.16em] text-white/95 border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C48B71]" />
              {project.videoDuration || (isVertical ? '9:16 Reel' : '4K Film')}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md text-[10px] font-mono uppercase tracking-[0.14em] text-[#111111]">
              0{index + 1}
            </span>
          </div>

          {/* Omnya Lab Circular "View" Hover Pill */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="px-5 py-2.5 rounded-full bg-[#EDEAE4]/95 text-[#111111] font-sans text-xs font-medium tracking-[-0.01em] shadow-[0_14px_34px_rgba(0,0,0,0.28)] flex items-center gap-1.5 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <span>View case study</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B86B4B]" />
            </div>
          </div>
        </RevealFrame>

        {/* Omnya Lab Minimalist Editorial Metadata Bar */}
        <div className="pt-3.5 pb-3 border-b border-[#111111]/12 flex items-baseline justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-sans text-base sm:text-lg font-medium tracking-[-0.02em] text-[#111111] group-hover:text-[#B86B4B] transition-colors duration-200 truncate">
              {project.title}
            </h3>
            <p className="font-sans text-xs text-[#6B6761] truncate mt-0.5">
              {project.subtitle}
            </p>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#87837D] whitespace-nowrap shrink-0">
            {project.location.split(',')[0]} — {project.year}
          </span>
        </div>

        {/* Mini Architectural Plate Strip (3 Secondary Renders from Project) */}
        {secondaryThumbs.length > 0 && (
          <div className="pt-2.5 flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#87837D]">
              +{project.gallery.length} Architectural Plates
            </span>
            <div className="flex items-center gap-1.5">
              {secondaryThumbs.map((img, idx) => (
                <div
                  key={idx}
                  className="w-9 h-6 rounded-[3px] overflow-hidden border border-[#111111]/10 bg-[#DFDBD2]"
                >
                  <img
                    src={img.url}
                    alt={`${project.title} render ${idx + 2}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
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
  // All 6 authentic Atlas Studio projects in curated architectural order
  const volga = PROJECTS.find((p) => p.slug === 'volga-park') || PROJECTS[0];
  const archInsight = PROJECTS.find((p) => p.slug === 'architecture-insight') || PROJECTS[2];
  const lotus = PROJECTS.find((p) => p.slug === 'lotus-mall') || PROJECTS[3];
  const navoi = PROJECTS.find((p) => p.slug === 'navoi-plaza') || PROJECTS[5];
  const bunker = PROJECTS.find((p) => p.slug === 'bunker-37') || PROJECTS[1];
  const collective = PROJECTS.find((p) => p.slug === 'collective-dubai-hills') || PROJECTS[4];

  const curatedList: Array<{
    project: Project;
    layoutClass: string;
    revealDelay: number;
  }> = [
    {
      // 01: Volga Park (16:9) — Wide left anchor (Cols 1-7)
      project: volga,
      layoutClass: 'md:col-span-7',
      revealDelay: 0,
    },
    {
      // 02: Architecture Insight (9:16 Vertical) — Right offset gallery piece (Cols 9-12)
      project: archInsight,
      layoutClass: 'md:col-span-4 md:col-start-9 md:mt-24',
      revealDelay: 0.08,
    },
    {
      // 03: Navoi Plaza (9:16 Vertical) — Left inset vertical tower study (Cols 1-4)
      project: navoi,
      layoutClass: 'md:col-span-4 md:col-start-1 md:mt-6',
      revealDelay: 0.04,
    },
    {
      // 04: Lotus Mall & 5 Star Hotel (16:9) — Right sweeping commercial landmark (Cols 6-12)
      project: lotus,
      layoutClass: 'md:col-span-7 md:col-start-6 md:mt-20',
      revealDelay: 0.1,
    },
    {
      // 05: Bunker 37 (16:9) — Left-center cultural monument (Cols 1-6)
      project: bunker,
      layoutClass: 'md:col-span-6 md:col-start-1 md:mt-12',
      revealDelay: 0.04,
    },
    {
      // 06: Collective Dubai Hills (16:9) — Right-offset resort showcase (Cols 7-12)
      project: collective,
      layoutClass: 'md:col-span-6 md:col-start-7 md:mt-32',
      revealDelay: 0.1,
    },
  ];

  // Collect 16 authentic renders across all 6 projects for Omnya Lab's dual-row sliding work banner
  const allRenders = PROJECTS.flatMap((p) =>
    p.gallery.slice(0, 3).map((g) => ({
      url: g.url,
      title: p.title,
    }))
  );
  const topRowRenders = [...allRenders.slice(0, 8), ...allRenders.slice(0, 8)];
  const bottomRowRenders = [...allRenders.slice(8, 16), ...allRenders.slice(8, 16)];

  return (
    <section
      style={{
        backgroundColor: '#EDEAE4',
        backgroundImage:
          'radial-gradient(120% 70% at 12% -10%, rgba(232, 208, 172, 0.32), transparent 60%), radial-gradient(90% 60% at 100% 110%, rgba(214, 196, 168, 0.22), transparent 60%)',
      }}
      className="relative z-10 w-full text-[#111111] pt-20 md:pt-32 pb-20 md:pb-28 border-b border-[#111111]/10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* ========================================================= */}
        {/* 1) OMNYA LAB STATEMENT INTRO ("Show your project...")     */}
        {/* ========================================================= */}
        <div className="max-w-4xl pb-20 md:pb-28 border-b border-[#111111]/10">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#B86B4B]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#6B6761]">
              Atlas Studio // Spatial CGI & Architectural Film
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.25rem,5.2vw,4.5rem)] font-normal tracking-[-0.035em] leading-[1.06] text-[#111111]">
            <span className="inline-block overflow-hidden py-1 align-bottom mr-[0.22em]">
              <motion.span
                initial={{ y: '110%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                Show your project
              </motion.span>
            </span>
            <span className="inline-block overflow-hidden py-1 align-bottom text-[#87837D]">
              <motion.span
                initial={{ y: '110%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                the way it will be
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-sans text-base sm:text-lg text-[#6B6761] leading-relaxed max-w-2xl"
          >
            3D architectural visualizations, 9:16 vertical reels, and 4K cinema walkthroughs so buyers and investors feel the space — and say yes before the concrete is poured.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#B86B4B] hover:bg-[#A35B3D] text-white px-6 py-3 text-xs sm:text-sm font-medium tracking-[-0.01em] transition-all duration-300"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-[#111111]/20 hover:border-[#111111] bg-white/50 hover:bg-white text-[#111111] px-6 py-3 text-xs sm:text-sm font-medium tracking-[-0.01em] transition-all duration-300"
            >
              <span>See our work ({PROJECTS.length})</span>
            </Link>
          </motion.div>

          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#87837D]">
            Photorealistic 4K CGI &middot; First views in 1–2 days &middot; Full launch in 1 week
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2) SELECTED WORK HEADER                                   */}
        {/* ========================================================= */}
        <div className="pt-14 md:pt-20 pb-10 md:pb-14 flex items-baseline justify-between border-b border-[#111111]/10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            <h2 className="font-sans text-xl sm:text-2xl font-medium tracking-[-0.02em] text-[#111111]">
              Selected work
            </h2>
          </div>
          <span className="font-mono text-xs sm:text-sm text-[#6B6761] tabular-nums">
            0{curatedList.length} Featured Commissions
          </span>
        </div>

        {/* ========================================================= */}
        {/* 3) ASYMMETRIC 12-COLUMN EXHIBITION GRID (ALL 6 PROJECTS)  */}
        {/* ========================================================= */}
        <div className="pt-12 md:pt-16 grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-20 md:gap-x-8 items-start">
          {curatedList.map((item, idx) => (
            <SelectedProjectCard
              key={item.project.slug}
              project={item.project}
              index={idx}
              layoutClass={item.layoutClass}
              revealDelay={item.revealDelay}
            />
          ))}
        </div>

        {/* ========================================================= */}
        {/* 4) OMNYA LAB DUAL-ROW SLIDING "SEE ALL THE WORK" BANNER   */}
        {/* ========================================================= */}
        <div className="mt-20 md:mt-28">
          <Link
            to="/projects"
            aria-label="See all the work"
            className="group relative block w-full h-[260px] sm:h-[320px] md:h-[360px] rounded-[10px] overflow-hidden border border-[#111111]/12 bg-[#141413]"
          >
            {/* Dual Counter-Scrolling Render Rows */}
            <div className="absolute inset-0 flex flex-col justify-between gap-2.5 py-2.5 opacity-65 group-hover:opacity-80 transition-opacity duration-500">
              {/* Row 1: Slides Left */}
              <div className="flex items-center gap-2.5 w-max animate-[marqueeLeft_42s_linear_infinite]">
                {topRowRenders.map((item, i) => (
                  <div
                    key={`top-${i}`}
                    className="h-[115px] sm:h-[145px] md:h-[162px] aspect-[16/10] rounded-[5px] overflow-hidden shrink-0 bg-zinc-900"
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Row 2: Slides Right */}
              <div className="flex items-center gap-2.5 w-max animate-[marqueeRight_46s_linear_infinite]">
                {bottomRowRenders.map((item, i) => (
                  <div
                    key={`bot-${i}`}
                    className="h-[115px] sm:h-[145px] md:h-[162px] aspect-[16/10] rounded-[5px] overflow-hidden shrink-0 bg-zinc-900"
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Radial Dark Vignette Overlay */}
            <div
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(17,17,17,0.68) 0%, rgba(17,17,17,0.38) 55%, rgba(17,17,17,0.62) 100%)',
              }}
              className="absolute inset-0 pointer-events-none"
            />

            {/* Centered Text & Circular Arrow Button */}
            <div className="relative z-10 h-full flex items-center justify-center gap-4 px-6 text-white">
              <span className="font-display text-2xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em]">
                See all the work
              </span>
              <span className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#B86B4B] group-hover:bg-white group-hover:text-[#111111] text-white flex items-center justify-center transition-all duration-300 shadow-lg group-hover:scale-105">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
