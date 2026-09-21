import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import { ArchvizProjectShowcase } from '../components/common/ArchvizProjectShowcase';
import { ProjectExhibitionCard } from '../components/projects/ProjectExhibitionCard';
import type { ProjectCategory } from '../types';

const CATEGORIES: ('All' | ProjectCategory)[] = [
  'All',
  'Architectural Visualization',
  'AI Architectural Films',
  'Real Estate Marketing',
  'Renovation & Construction',
];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return PROJECTS;
    }
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Pre-fetch specific projects for curated editorial exhibition
  const pVolgaPark = PROJECTS.find((p) => p.slug === 'volga-park') || PROJECTS[0];
  const pInsight = PROJECTS.find((p) => p.slug === 'architecture-insight') || PROJECTS[1];
  const pBunker = PROJECTS.find((p) => p.slug === 'bunker-37') || PROJECTS[2];
  const pLotus = PROJECTS.find((p) => p.slug === 'lotus-mall') || PROJECTS[3];
  const pNavoi = PROJECTS.find((p) => p.slug === 'navoi-plaza') || PROJECTS[4];
  const pDubai = PROJECTS.find((p) => p.slug === 'collective-dubai-hills') || PROJECTS[5];
  const pPapes = PROJECTS.find((p) => p.slug === 'papes-residences') || PROJECTS[6];
  const pPark = PROJECTS.find((p) => p.slug === 'park-seefeld') || PROJECTS[7];

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Header: Editorial Heading Selected Projects & Short Description at Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 lg:pb-12 border-b border-[#101010]/12 items-end">
          <div className="col-span-1 lg:col-span-9">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
                EXHIBITION ARCHIVE
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]">
              SELECTED PROJECTS
            </h1>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <span className="font-mono text-xs text-[#757575] block mb-2">
              CATALOGUE SCOPE
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed">
              Monographs, architectural CGI, 4K marketing films, and 9:16 vertical cinema delivered for global ateliers.
            </p>
          </div>
        </div>

        {/* Content Layout: Minimalist Left Rail Filters + Expansive Main Editorial Exhibition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 lg:pt-10 items-start">
          {/* Left Rail: 4 Clean Core Categories (Desktop vertical rail, Mobile swipeable strip) */}
          <div className="col-span-1 lg:col-span-2 lg:sticky lg:top-28">
            <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-3 md:mb-5">
              FILTER BY SERVICE
            </span>

            {/* Mobile Swipeable Strip */}
            <div className="flex lg:hidden overflow-x-auto no-scrollbar gap-2 pb-2 -mx-1 px-1">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-3.5 py-1.5 border text-left font-mono text-xs uppercase tracking-wider transition-colors duration-180 flex-shrink-0 ${
                      isActive
                        ? 'border-[#101010] bg-[#101010] text-white font-semibold'
                        : 'border-[#101010]/15 text-[#757575] hover:text-[#101010]'
                    }`}
                  >
                    <span>{cat === 'All' ? 'All' : cat}</span>
                    <span className="ml-1 text-[10px] opacity-75">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Desktop Minimalist Vertical Typography Rail */}
            <div className="hidden lg:flex flex-col space-y-2.5">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left font-mono text-xs uppercase tracking-wider transition-colors duration-180 py-1 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? 'text-[#101010] font-semibold'
                        : 'text-[#757575] hover:text-[#101010]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isActive ? (
                        <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
                      ) : (
                        <span className="w-1.5 h-1.5 bg-transparent group-hover:bg-[#101010]/30 inline-block transition-colors" />
                      )}
                      <span>{cat === 'All' ? 'All Projects' : cat}</span>
                    </div>
                    <span className={`text-[10px] ml-1.5 ${isActive ? 'text-[#101010]' : 'text-[#757575]'}`}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Editorial Exhibition Grid (Expansive 10-column layout) */}
          <div className="col-span-1 lg:col-span-10 min-h-[500px]">
            {/* Filter Status Bar when a specific category is active */}
            {selectedCategory !== 'All' && (
              <div className="mb-6 pb-3 border-b border-[#101010]/10 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#757575]">
                  <span>CATEGORY:</span>
                  <span className="text-[#101010] font-semibold">{selectedCategory}</span>
                  <span>({filteredProjects.length} Projects)</span>
                </div>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="font-mono text-xs uppercase tracking-wider text-[#101010] underline hover:opacity-70 cursor-pointer"
                >
                  Show All Projects
                </button>
              </div>
            )}

            {filteredProjects.length === 0 ? (
              /* Empty State */
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="py-24 text-center border border-[#101010]/12 p-12"
              >
                <span className="font-mono text-xs text-[#757575] uppercase block mb-3">
                  00 // NO ENTRIES FOUND
                </span>
                <h3 className="font-display text-2xl font-semibold uppercase text-[#101010] mb-4">
                  NO PROJECTS IN THIS CATEGORY
                </h3>
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="solum-btn px-5 py-2.5 border border-[#101010] text-xs font-mono uppercase tracking-wider hover:bg-[#101010] hover:text-white transition-colors"
                >
                  RESET FILTER
                </button>
              </motion.div>
            ) : selectedCategory === 'All' ? (
              /* Curated Editorial Exhibition: First 2 with their photos + Standalone videos without clutter */
              <motion.div
                key="curated-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 sm:space-y-12"
              >
                {/* 1. First Project: Volga Park with its photos marquee */}
                {pVolgaPark && (
                  <ArchvizProjectShowcase
                    project={pVolgaPark}
                    index={0}
                  />
                )}

                {/* 2. Second Project: Architecture Insight (9:16 vertical cinema + 12 photos marquee) */}
                {pInsight && (
                  <ArchvizProjectShowcase
                    project={pInsight}
                    index={1}
                  />
                )}

                {/* 3. Bunker 37 (Clean cinematic video, instant hover play, zero button clutter) */}
                {pBunker && (
                  <div className="pt-2">
                    <ProjectExhibitionCard
                      project={pBunker}
                      index={2}
                      layoutVariant="lead"
                    />
                  </div>
                )}

                {/* 4. Lotus Mall (Clean full-width cinema, instant hover play, zero button clutter) */}
                {pLotus && (
                  <div className="pt-2">
                    <ProjectExhibitionCard
                      project={pLotus}
                      index={3}
                      layoutVariant="lead"
                    />
                  </div>
                )}

                {/* 5. Navoi Plaza (9:16 Vertical) + Collective Dubai Hills (16:10 Landscape) - Side-by-Side */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
                  {pNavoi && (
                    <div className="col-span-12 lg:col-span-5">
                      <ProjectExhibitionCard
                        project={pNavoi}
                        index={4}
                        layoutVariant="split-vertical"
                      />
                    </div>
                  )}
                  {pDubai && (
                    <div className="col-span-12 lg:col-span-7">
                      <ProjectExhibitionCard
                        project={pDubai}
                        index={5}
                        layoutVariant="split-landscape"
                      />
                    </div>
                  )}
                </div>

                {/* 6. Papes Residences + Park Seefeld - Side-by-Side */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
                  {pPapes && (
                    <div className="col-span-12 lg:col-span-6">
                      <ProjectExhibitionCard
                        project={pPapes}
                        index={6}
                        layoutVariant="split-landscape"
                      />
                    </div>
                  )}
                  {pPark && (
                    <div className="col-span-12 lg:col-span-6">
                      <ProjectExhibitionCard
                        project={pPark}
                        index={7}
                        layoutVariant="split-landscape"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              /* Filtered Category Layout */
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8 sm:space-y-12"
              >
                {filteredProjects.map((project, idx) => {
                  // If Volga Park or Architecture Insight, render with full photos showcase
                  if (project.slug === 'volga-park' || project.slug === 'architecture-insight') {
                    return (
                      <ArchvizProjectShowcase
                        key={project.slug}
                        project={project}
                        index={idx}
                      />
                    );
                  }

                  const isVertical = project.videoAspectRatio === '9:16';
                  return (
                    <div
                      key={project.slug}
                      className={isVertical ? "max-w-[520px] mx-auto" : "w-full"}
                    >
                      <ProjectExhibitionCard
                        project={project}
                        index={idx}
                        layoutVariant={isVertical ? 'split-vertical' : 'lead'}
                      />
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
