import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Cultural', 'Hospitality', 'Mixed-Use'];

const ASPECT_RATIOS = [
  'aspect-[21/9]',
  'aspect-[16/10]',
  'aspect-[16/9]',
  'aspect-[4/3]',
  'aspect-[21/9]',
  'aspect-[16/10]',
];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFiltering, setIsFiltering] = useState(false);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (cat: string) => {
    if (cat === selectedCategory) return;
    setIsFiltering(true);
    setTimeout(() => {
      setSelectedCategory(cat);
      setIsFiltering(false);
    }, 150);
  };

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24 md:pb-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Header: Editorial Heading Selected Projects & Short Description at Right */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-[#101010]/12 items-end">
          <div className="col-span-1 md:col-span-3">
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

          <div className="col-span-1">
            <span className="font-mono text-xs text-[#757575] block mb-2">
              CATALOGUE SCOPE
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed">
              Monographs, architectural CGI, 4K marketing films, and unbuilt spatial collateral delivered for global ateliers.
            </p>
          </div>
        </div>

        {/* Content Layout: Left Rail Category Filters + Main Full-Width Project List */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pt-16 items-start">
          {/* Left Rail: Category Filters (Active has square marker & black type; inactive is muted) */}
          <div className="col-span-1 md:sticky md:top-28">
            <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-6">
              FILTER BY TYPOLOGY
            </span>
            <div className="space-y-3">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`block w-full text-left font-mono text-xs uppercase tracking-wider transition-colors duration-180 cursor-pointer ${
                      isActive
                        ? 'text-[#101010] font-semibold flex items-center'
                        : 'text-[#757575] hover:text-[#101010]'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-[#101010] inline-block mr-2" />
                    )}
                    <span>{cat}</span>
                    <span className="text-[10px] text-[#757575] ml-2">
                      ({cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content: One Full-Width Media Project per Row with Varied Heights */}
          <div className="col-span-1 md:col-span-3">
            <AnimatePresence mode="wait">
              {isFiltering ? (
                /* Minimal Spinner During Filter Transition */
                <div key="loader" className="py-32 flex items-center justify-center">
                  <div className="w-5 h-5 border border-[#101010]/20 border-t-[#101010] animate-spin" />
                </div>
              ) : filteredProjects.length === 0 ? (
                /* Real Empty State */
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
              ) : (
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-16 md:space-y-24"
                >
                  {filteredProjects.map((project, idx) => {
                    const aspect = ASPECT_RATIOS[idx % ASPECT_RATIOS.length];

                    return (
                      <div key={project.slug} className="group">
                        <Link to={`/projects/${project.slug}`} className="block select-none">
                          {/* Image with Deliberately Varied Aspect Ratio */}
                          <div className={`relative ${aspect} w-full overflow-hidden bg-zinc-100 border border-[#101010]/12`}>
                            <img
                              src={project.heroImage}
                              alt={project.title}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-550 ease-out group-hover:scale-[1.025]"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-550" />
                          </div>

                          {/* Thin White Metadata Strip with Title Left / Year Right */}
                          <div className="pt-3 flex flex-col sm:flex-row sm:items-baseline justify-between font-mono text-xs text-[#101010] border-b border-[#101010]/12 pb-3 gap-2">
                            <div className="flex items-baseline gap-3">
                              <span className="text-[#757575]">0{idx + 1}</span>
                              <span className="font-semibold uppercase tracking-wider group-hover:underline">
                                {project.title}
                              </span>
                              <span className="text-[#757575] hidden sm:inline">&mdash;</span>
                              <span className="text-[#757575] font-sans text-xs hidden sm:inline">
                                {project.location}
                              </span>
                            </div>

                            <div className="flex items-center gap-4 text-[#757575]">
                              <span>{project.category}</span>
                              <span>&bull;</span>
                              <span className="tabular-nums">{project.year}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#101010] transform group-hover:translate-x-1.5 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
