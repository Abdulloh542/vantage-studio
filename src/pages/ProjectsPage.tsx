import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import { ProjectExhibitionCard } from '../components/projects/ProjectExhibitionCard';
import { VideoLightbox } from '../components/common/VideoLightbox';

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Heritage', 'Hospitality'];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeFilm, setActiveFilm] = useState<{
    url: string;
    title: string;
    subtitle?: string;
  } | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (cat: string) => {
    if (cat === selectedCategory) return;
    setSelectedCategory(cat);
  };

  const handlePlayFilm = (url: string, title: string, subtitle?: string) => {
    setActiveFilm({ url, title, subtitle });
  };

  // Pre-fetch specific flagship projects for the curated 'All' editorial exhibition layout
  const pVolgaPark = PROJECTS.find((p) => p.slug === 'volga-park') || PROJECTS[0];
  const pBunker = PROJECTS.find((p) => p.slug === 'bunker-37') || PROJECTS[1];
  const pInsight = PROJECTS.find((p) => p.slug === 'architecture-insight') || PROJECTS[2];
  const pLotus = PROJECTS.find((p) => p.slug === 'lotus-mall') || PROJECTS[3];
  const pNavoi = PROJECTS.find((p) => p.slug === 'navoi-plaza') || PROJECTS[4];
  const pDubai = PROJECTS.find((p) => p.slug === 'collective-dubai-hills') || PROJECTS[5];
  const pPapes = PROJECTS.find((p) => p.slug === 'papes-residences') || PROJECTS[6];
  const pPark = PROJECTS.find((p) => p.slug === 'park-seefeld') || PROJECTS[7];

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24 md:pb-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Header: Editorial Heading Selected Projects & Short Description at Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 lg:pb-16 border-b border-[#101010]/12 items-end">
          <div className="col-span-1 lg:col-span-9">
            <div className="flex items-center gap-2 mb-4">
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

        {/* Content Layout: Left Rail Category Filters + Main Staggered Editorial Exhibition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 lg:pt-16 items-start">
          {/* Left Rail: Category Filters (Horizontal swipeable strip on mobile, vertical sticky rail on desktop) */}
          <div className="col-span-1 lg:col-span-2 lg:sticky lg:top-28">
            <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-3 md:mb-6">
              FILTER BY TYPOLOGY
            </span>
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible no-scrollbar gap-2 md:gap-0 md:space-y-3 pb-3 md:pb-0 -mx-1 px-1 md:mx-0 md:px-0">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`whitespace-nowrap px-3 py-1.5 md:p-0 border md:border-0 text-left font-mono text-xs uppercase tracking-wider transition-colors duration-180 cursor-pointer flex-shrink-0 ${
                      isActive
                        ? 'border-[#101010] bg-[#101010] md:bg-transparent text-white md:text-[#101010] font-semibold flex items-center'
                        : 'border-[#101010]/15 text-[#757575] hover:text-[#101010] hover:border-[#101010]'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-white md:bg-[#101010] inline-block mr-2" />
                    )}
                    <span>{cat}</span>
                    <span className={`text-[10px] ml-1.5 ${isActive ? 'text-white/70 md:text-[#757575]' : 'text-[#757575]'}`}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Editorial Exhibition Grid */}
          <div className="col-span-1 lg:col-span-10 min-h-[600px]">
            {filteredProjects.length === 0 ? (
              /* Empty State */
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="py-32 text-center border border-[#101010]/12 p-12"
              >
                <span className="font-mono text-xs text-[#757575] uppercase block mb-3">
                  00 // NO ENTRIES FOUND
                </span>
                <h3 className="font-display text-2xl font-semibold uppercase text-[#101010] mb-4">
                  NO PROJECTS IN THIS TYPOLOGY
                </h3>
                <button
                  onClick={() => handleCategoryChange('All')}
                  className="solum-btn px-5 py-2.5 border border-[#101010] text-xs font-mono uppercase tracking-wider hover:bg-[#101010] hover:text-white transition-colors"
                >
                  RESET FILTER
                </button>
              </motion.div>
            ) : selectedCategory === 'All' ? (
              /* Curated Staggered Editorial Exhibition Layout */
              <motion.div
                key="curated-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-20 md:space-y-28"
              >
                {/* 1. Full-Width Panoramic Film Lead (Volga Park) */}
                {pVolgaPark && (
                  <div>
                    <ProjectExhibitionCard
                      project={pVolgaPark}
                      index={0}
                      layoutVariant="lead"
                      onPlayFilm={handlePlayFilm}
                    />
                  </div>
                )}

                {/* 2. Staggered Asymmetric Pair: Landscape 16:10 + 9:16 Vertical Insight */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {pBunker && (
                    <div className="col-span-12 lg:col-span-7">
                      <ProjectExhibitionCard
                        project={pBunker}
                        index={1}
                        layoutVariant="split-landscape"
                        onPlayFilm={handlePlayFilm}
                      />
                    </div>
                  )}
                  {pInsight && (
                    <div className="col-span-12 lg:col-span-5 lg:pt-14">
                      <ProjectExhibitionCard
                        project={pInsight}
                        index={2}
                        layoutVariant="split-vertical"
                        onPlayFilm={handlePlayFilm}
                      />
                    </div>
                  )}
                </div>

                {/* 3. Full-Width Commercial Mixed-Use Cinema Landmark (Lotus Mall) */}
                {pLotus && (
                  <div>
                    <ProjectExhibitionCard
                      project={pLotus}
                      index={3}
                      layoutVariant="lead"
                      onPlayFilm={handlePlayFilm}
                    />
                  </div>
                )}

                {/* 4. Inverted Staggered Pair: 9:16 Vertical Promenade + 16:9 Landscape Oasis */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {pNavoi && (
                    <div className="col-span-12 lg:col-span-5">
                      <ProjectExhibitionCard
                        project={pNavoi}
                        index={4}
                        layoutVariant="split-vertical"
                        onPlayFilm={handlePlayFilm}
                      />
                    </div>
                  )}
                  {pDubai && (
                    <div className="col-span-12 lg:col-span-7 lg:pt-14">
                      <ProjectExhibitionCard
                        project={pDubai}
                        index={5}
                        layoutVariant="split-landscape"
                        onPlayFilm={handlePlayFilm}
                      />
                    </div>
                  )}
                </div>

                {/* 5. Balanced Heritage & Hospitality Staggered Pair */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {pPapes && (
                    <div className="col-span-12 lg:col-span-6">
                      <ProjectExhibitionCard
                        project={pPapes}
                        index={6}
                        layoutVariant="split-landscape"
                        onPlayFilm={handlePlayFilm}
                      />
                    </div>
                  )}
                  {pPark && (
                    <div className="col-span-12 lg:col-span-6 lg:pt-14">
                      <ProjectExhibitionCard
                        project={pPark}
                        index={7}
                        layoutVariant="split-landscape"
                        onPlayFilm={handlePlayFilm}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              /* Filtered Typology Layout with Dynamic Staggered Geometry */
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {filteredProjects.map((project, idx) => {
                  const isVertical = project.videoAspectRatio === '9:16';
                  const isOdd = idx % 2 === 1;

                  if (filteredProjects.length === 1) {
                    return (
                      <div key={project.slug} className="col-span-12">
                        <ProjectExhibitionCard
                          project={project}
                          index={idx}
                          layoutVariant={isVertical ? 'split-vertical' : 'lead'}
                          onPlayFilm={handlePlayFilm}
                        />
                      </div>
                    );
                  }

                  const colSpan = isVertical
                    ? 'col-span-12 lg:col-span-5'
                    : isOdd
                    ? 'col-span-12 lg:col-span-5'
                    : 'col-span-12 lg:col-span-7';

                  const offsetClass = isOdd ? 'lg:pt-14' : '';

                  return (
                    <div key={project.slug} className={`${colSpan} ${offsetClass}`}>
                      <ProjectExhibitionCard
                        project={project}
                        index={idx}
                        layoutVariant={isVertical ? 'split-vertical' : 'split-landscape'}
                        onPlayFilm={handlePlayFilm}
                      />
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Cinema Video Lightbox */}
      {activeFilm && (
        <VideoLightbox
          isOpen={Boolean(activeFilm)}
          onClose={() => setActiveFilm(null)}
          videoUrl={activeFilm.url}
          title={activeFilm.title}
          subtitle={activeFilm.subtitle}
        />
      )}
    </main>
  );
}
