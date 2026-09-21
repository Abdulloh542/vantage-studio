import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import { ArchvizProjectShowcase } from '../components/common/ArchvizProjectShowcase';
import { ProjectExhibitionCard } from '../components/projects/ProjectExhibitionCard';
import type { ProjectCategory } from '../types';

export interface ServiceCategoryDef {
  id: ProjectCategory;
  label: string;
  subServices: string[];
}

export const SERVICE_CATEGORIES: ServiceCategoryDef[] = [
  {
    id: 'Architectural Visualization',
    label: 'Architectural Visualization',
    subServices: [
      'Exterior Visualization',
      'Interior Visualization',
      '3D Modeling',
      'Photorealistic Enhancement',
    ],
  },
  {
    id: 'AI Architectural Films',
    label: 'AI Architectural Films',
    subServices: [
      'Cinematic Architectural Films',
      'AI Walkthroughs',
      'Image-to-Video',
      'Render-to-Video',
      'Concept Films',
    ],
  },
  {
    id: 'Real Estate Marketing',
    label: 'Real Estate Marketing',
    subServices: [
      'Property Presentation Films',
      'Development Marketing',
      'Location & Infrastructure Videos',
      'Map Animations',
      'Social Media Reels',
    ],
  },
  {
    id: 'Renovation & Construction',
    label: 'Renovation & Construction',
    subServices: [
      'Before / After Films',
      'Construction Timelapse',
      'Renovation Visualization',
      'Existing → Proposed Transformation',
    ],
  },
];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubService, setSelectedSubService] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return PROJECTS;
    }

    let list = PROJECTS.filter((p) => p.category === selectedCategory);

    if (selectedSubService) {
      list = list.filter(
        (p) =>
          p.services.includes(selectedSubService) ||
          p.tags.includes(selectedSubService)
      );
      // Fallback: if exact subservice isn't matched directly in the filtered list, keep the category list
      if (list.length === 0) {
        list = PROJECTS.filter((p) => p.category === selectedCategory);
      }
    }

    return list;
  }, [selectedCategory, selectedSubService]);

  const handleSelectAll = () => {
    setSelectedCategory('All');
    setSelectedSubService(null);
  };

  const handleSelectCategory = (catId: string) => {
    if (selectedCategory === catId && !selectedSubService) {
      return;
    }
    setSelectedCategory(catId);
    setSelectedSubService(null);
  };

  const handleSelectSubService = (catId: string, sub: string) => {
    setSelectedCategory(catId);
    if (selectedSubService === sub) {
      setSelectedSubService(null);
    } else {
      setSelectedSubService(sub);
    }
  };

  // Pre-fetch specific projects for curated editorial exhibition
  const pVolgaPark = PROJECTS.find((p) => p.slug === 'volga-park') || PROJECTS[0];
  const pInsight = PROJECTS.find((p) => p.slug === 'architecture-insight') || PROJECTS[1];
  const pBunker = PROJECTS.find((p) => p.slug === 'bunker-37') || PROJECTS[2];
  const pLotus = PROJECTS.find((p) => p.slug === 'lotus-mall') || PROJECTS[3];
  const pNavoi = PROJECTS.find((p) => p.slug === 'navoi-plaza') || PROJECTS[4];
  const pDubai = PROJECTS.find((p) => p.slug === 'collective-dubai-hills') || PROJECTS[5];
  const pPapes = PROJECTS.find((p) => p.slug === 'papes-residences') || PROJECTS[6];
  const pPark = PROJECTS.find((p) => p.slug === 'park-seefeld') || PROJECTS[7];

  const isCuratedAll = selectedCategory === 'All' && !selectedSubService;

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

        {/* Content Layout: Left Rail Category Filters + Main Editorial Exhibition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 lg:pt-10 items-start">
          {/* Left Rail: 4 Core Categories & Sub-Services Filter */}
          <div className="col-span-1 lg:col-span-3 lg:sticky lg:top-28">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#757575]">
                FILTER BY SERVICE
              </span>
              {(selectedCategory !== 'All' || selectedSubService) && (
                <button
                  onClick={handleSelectAll}
                  className="font-mono text-[11px] uppercase tracking-wider text-[#101010] underline hover:opacity-70 transition-opacity"
                >
                  Reset (All)
                </button>
              )}
            </div>

            {/* Mobile Category Scroll Strip */}
            <div className="flex lg:hidden overflow-x-auto no-scrollbar gap-2 pb-2 -mx-1 px-1">
              <button
                onClick={handleSelectAll}
                className={`whitespace-nowrap px-3.5 py-1.5 border text-left font-mono text-xs uppercase tracking-wider transition-colors duration-180 flex-shrink-0 ${
                  isCuratedAll
                    ? 'border-[#101010] bg-[#101010] text-white font-semibold'
                    : 'border-[#101010]/15 text-[#757575] hover:text-[#101010]'
                }`}
              >
                All Projects ({PROJECTS.length})
              </button>
              {SERVICE_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count = PROJECTS.filter((p) => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    className={`whitespace-nowrap px-3.5 py-1.5 border text-left font-mono text-xs uppercase tracking-wider transition-colors duration-180 flex-shrink-0 ${
                      isActive
                        ? 'border-[#101010] bg-[#101010] text-white font-semibold'
                        : 'border-[#101010]/15 text-[#757575] hover:text-[#101010]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="ml-1 text-[10px] opacity-75">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Sub-services Pills when a Category is Active */}
            {selectedCategory !== 'All' && (
              <div className="flex lg:hidden overflow-x-auto no-scrollbar gap-1.5 pt-2 pb-3 -mx-1 px-1 border-b border-[#101010]/10 mb-4">
                {SERVICE_CATEGORIES.find((c) => c.id === selectedCategory)?.subServices.map((sub) => {
                  const isSubActive = selectedSubService === sub;
                  return (
                    <button
                      key={sub}
                      onClick={() => handleSelectSubService(selectedCategory, sub)}
                      className={`whitespace-nowrap px-2.5 py-1 text-[11px] font-mono tracking-wider transition-colors rounded-none border ${
                        isSubActive
                          ? 'border-[#101010] bg-[#101010] text-white'
                          : 'border-[#101010]/20 bg-zinc-50 text-[#555]'
                      }`}
                    >
                      {sub}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Desktop Structured Vertical Filter Rail */}
            <div className="hidden lg:flex flex-col space-y-5">
              {/* All Projects Item */}
              <button
                onClick={handleSelectAll}
                className={`text-left font-mono text-xs uppercase tracking-wider transition-colors duration-180 flex items-center justify-between group py-1 border-b border-[#101010]/10 ${
                  isCuratedAll
                    ? 'text-[#101010] font-semibold'
                    : 'text-[#757575] hover:text-[#101010]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 transition-colors ${
                      isCuratedAll ? 'bg-[#101010]' : 'bg-transparent group-hover:bg-[#101010]/40'
                    }`}
                  />
                  <span>ALL PROJECTS</span>
                </div>
                <span className="text-[11px] text-[#757575]">({PROJECTS.length})</span>
              </button>

              {/* 4 Core Service Categories & Sub-items */}
              {SERVICE_CATEGORIES.map((cat) => {
                const isCatActive = selectedCategory === cat.id;
                const count = PROJECTS.filter((p) => p.category === cat.id).length;

                return (
                  <div key={cat.id} className="border-b border-[#101010]/10 pb-4">
                    {/* Category Header */}
                    <button
                      onClick={() => handleSelectCategory(cat.id)}
                      className={`w-full text-left font-mono text-xs uppercase tracking-wider transition-colors duration-180 flex items-center justify-between group py-1 ${
                        isCatActive && !selectedSubService
                          ? 'text-[#101010] font-bold'
                          : isCatActive
                          ? 'text-[#101010] font-medium'
                          : 'text-[#555] hover:text-[#101010]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 transition-colors ${
                            isCatActive
                              ? 'bg-[#101010]'
                              : 'bg-transparent group-hover:bg-[#101010]/40'
                          }`}
                        />
                        <span className="leading-snug">{cat.label}</span>
                      </div>
                      <span className="text-[11px] text-[#757575] ml-2 shrink-0">({count})</span>
                    </button>

                    {/* Sub-services List */}
                    <div className="mt-2 pl-3.5 space-y-1.5 border-l border-[#101010]/15">
                      {cat.subServices.map((sub) => {
                        const isSubActive = selectedCategory === cat.id && selectedSubService === sub;
                        return (
                          <button
                            key={sub}
                            onClick={() => handleSelectSubService(cat.id, sub)}
                            className={`w-full text-left font-sans text-xs tracking-normal transition-colors py-0.5 flex items-center gap-2 ${
                              isSubActive
                                ? 'text-[#101010] font-semibold'
                                : 'text-[#757575] hover:text-[#101010]'
                            }`}
                          >
                            <span
                              className={`w-1 h-1 rounded-full ${
                                isSubActive ? 'bg-[#101010]' : 'bg-[#101010]/25'
                              }`}
                            />
                            <span className="leading-tight">{sub}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Editorial Exhibition Grid */}
          <div className="col-span-1 lg:col-span-9 min-h-[500px]">
            {/* Filter Status Badge */}
            {!isCuratedAll && (
              <div className="mb-6 pb-4 border-b border-[#101010]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575]">
                    SHOWING:
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#101010] font-semibold">
                    {selectedCategory}
                    {selectedSubService ? ` // ${selectedSubService}` : ''}
                  </span>
                  <span className="font-mono text-xs text-[#757575]">
                    ({filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'})
                  </span>
                </div>
                <button
                  onClick={handleSelectAll}
                  className="font-mono text-xs uppercase tracking-wider text-[#101010] underline hover:opacity-70"
                >
                  View All Projects
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
                  NO PROJECTS IN THIS DISCIPLINE
                </h3>
                <button
                  onClick={handleSelectAll}
                  className="solum-btn px-5 py-2.5 border border-[#101010] text-xs font-mono uppercase tracking-wider hover:bg-[#101010] hover:text-white transition-colors"
                >
                  RESET FILTER
                </button>
              </motion.div>
            ) : isCuratedAll ? (
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
              /* Filtered Service Layout */
              <motion.div
                key={`${selectedCategory}-${selectedSubService || 'all'}`}
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
