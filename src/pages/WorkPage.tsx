import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from '../components/work/ProjectCard';
import { ProjectFilter } from '../components/work/ProjectFilter';
import { FinalCTASection } from '../components/home/FinalCTASection';

export function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'CGI',
    'Architecture',
    'Real Estate',
    'AI Film',
    'Animation',
    'Interior',
    'Exterior',
    'Renovation',
  ];

  // Calculate project counts per filter
  const projectCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PROJECTS.length };
    categories.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = PROJECTS.filter((p) => p.tags.includes(cat)).length;
      }
    });
    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(activeCategory));
  }, [activeCategory]);

  return (
    <main className="w-full bg-[#f7f6f2] text-[#121214] pt-32 md:pt-44">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Page Title & Editorial Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
            Portfolio Index
          </span>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-black leading-[1.04] mb-6">
            Selected Works
          </h1>
          <p className="text-zinc-600 text-base md:text-lg font-light leading-relaxed">
            Selected commissions across luxury real estate, civic architecture, adaptive reuse, and cinematic digital storytelling.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-14">
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            projectCounts={projectCounts}
          />
        </div>

        {/* Filtered Projects Grid (Asymmetric Editorial Layout) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              // Asymmetric column spans: alternating 7 / 5 / 12
              const colSpan =
                idx % 4 === 0
                  ? 'md:col-span-8'
                  : idx % 4 === 1
                  ? 'md:col-span-4 md:pt-16'
                  : idx % 4 === 2
                  ? 'md:col-span-5'
                  : 'md:col-span-7 md:pt-12';

              const aspect =
                idx % 4 === 0
                  ? 'aspect-[16/10]'
                  : idx % 4 === 1
                  ? 'aspect-[3/4]'
                  : idx % 4 === 2
                  ? 'aspect-[4/5]'
                  : 'aspect-[16/10]';

              return (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={colSpan}
                >
                  <ProjectCard project={project} aspectRatio={aspect} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-zinc-500 text-sm font-light">
            No projects found in this category.
          </div>
        )}
      </div>

      {/* Conversion Section */}
      <FinalCTASection />
    </main>
  );
}
