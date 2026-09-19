import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
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
    <main className="w-full bg-[#090a0d] text-white pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Page Title & Editorial Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>02 / Portfolio Index</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.04] mb-4">
            Selected Works & Films
          </h1>
          <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed">
            Curated commissions across luxury real estate, civic architecture, adaptive reuse, and cinematic digital storytelling.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-12">
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            projectCounts={projectCounts}
          />
        </div>

        {/* Filtered Projects Grid (Asymmetric Editorial Layout) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const colSpan =
                idx % 4 === 0
                  ? 'md:col-span-8'
                  : idx % 4 === 1
                  ? 'md:col-span-4'
                  : idx % 4 === 2
                  ? 'md:col-span-5'
                  : 'md:col-span-7';

              const aspect =
                idx % 4 === 0
                  ? 'aspect-[16/10]'
                  : idx % 4 === 1
                  ? 'aspect-[4/3]'
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
          <div className="py-20 text-center text-zinc-400 text-sm font-light">
            No projects found in this category.
          </div>
        )}
      </div>

      {/* Conversion Section */}
      <FinalCTASection />
    </main>
  );
}
