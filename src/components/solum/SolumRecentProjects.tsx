import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import type { Project } from '../../types';
import { RevealFrame } from '../common/RevealFrame';

interface SelectedCardProps {
  project: Project;
  className?: string;
}

function SelectedCard({ project, className = '' }: SelectedCardProps) {
  const isVertical = project.videoAspectRatio === '9:16';

  return (
    <div className={className}>
      <Link to={`/projects/${project.slug}`} className="group block select-none">
        <RevealFrame
          shutterColor="#FFFFFF"
          delay={0}
          className={`relative w-full overflow-hidden bg-zinc-100 border border-[#101010]/12 ${
            isVertical ? 'aspect-[9/16]' : 'aspect-[16/9]'
          }`}
        >
          <img
            src={project.heroImage}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover scale-[1.03] transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/95 text-black flex items-center justify-center pl-0.5 shadow-xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </RevealFrame>

        <div className="pt-4 flex items-center justify-between font-mono text-sm sm:text-base text-[#101010] border-b border-[#101010]/12 pb-3">
          <span className="font-semibold uppercase tracking-wider group-hover:underline truncate pr-3">
            {project.title}
          </span>
          <span className="text-xs sm:text-sm text-[#757575] tabular-nums font-normal whitespace-nowrap">
            {project.category} &bull; {project.year}
          </span>
        </div>
      </Link>
    </div>
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

        {/* Asymmetric Exhibition Grid — All 6 Authentic Atlas Studio Projects */}
        <div className="pt-12 md:pt-16 grid grid-cols-1 md:grid-cols-12 gap-y-14 md:gap-y-20 md:gap-x-8 items-start">
          {/* 01: Volga Park (16:9) — Wide Left Anchor */}
          <SelectedCard project={pVolga} className="md:col-span-7" />

          {/* 02: Architecture Insight (9:16 Vertical) — Right Offset */}
          <SelectedCard project={pInsight} className="md:col-span-4 md:col-start-9 md:mt-16" />

          {/* 03: Navoi Plaza (9:16 Vertical) — Left Inset */}
          <SelectedCard project={pNavoi} className="md:col-span-4 md:col-start-1" />

          {/* 04: Lotus Mall & 5 Star Hotel (16:9) — Right Wide */}
          <SelectedCard project={pLotus} className="md:col-span-7 md:col-start-6 md:mt-14" />

          {/* 05: Bunker 37 (16:9) — Left Half */}
          <SelectedCard project={pBunker} className="md:col-span-6 md:col-start-1" />

          {/* 06: Collective Dubai Hills (16:9) — Right Half Offset */}
          <SelectedCard project={pDubai} className="md:col-span-6 md:col-start-7 md:mt-20" />
        </div>
      </div>
    </section>
  );
}
