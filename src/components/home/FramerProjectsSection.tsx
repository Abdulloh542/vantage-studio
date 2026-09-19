import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FramerSectionHeader, FramerCard } from '../common/FramerReveal';
import { PROJECTS } from '../../data/projects';

export function FramerProjectsSection() {
  const displayProjects = PROJECTS.slice(0, 6);

  return (
    <section id="projects" className="bg-[#FAF9F6] text-[#0B0B0A] py-24 md:py-36 border-b border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Signature Framer Section Header */}
        <FramerSectionHeader
          eyebrow="OUR BEST WORK //"
          title="PROJECTS"
          subtag="*(COMPLETED DESIGNS)"
          theme="light"
        />

        {/* Asymmetric Projects Layout (matching Interio) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          {displayProjects.map((p, idx) => {
            // Interio asymmetric rhythm: Big Card (col 7/8), Small Card (col 5/4)
            const colSpan =
              idx % 3 === 0
                ? 'md:col-span-8'
                : idx % 3 === 1
                ? 'md:col-span-4'
                : 'md:col-span-12';

            const aspect =
              idx % 3 === 0
                ? 'aspect-[16/10]'
                : idx % 3 === 1
                ? 'aspect-[3/4]'
                : 'aspect-[21/9] md:aspect-[24/10]';

            return (
              <FramerCard
                key={p.slug}
                delay={idx * 0.1}
                className={colSpan}
              >
                <Link
                  to={`/work/${p.slug}`}
                  className="group block bg-[#F4F2EE] border border-black/10 overflow-hidden"
                >
                  {/* Image Container with Zoom */}
                  <div className={`relative ${aspect} overflow-hidden bg-black/10`}>
                    <img
                      src={p.heroImage}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#0B0B0A]/85 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white">
                        {p.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-black">
                        {p.year}
                      </span>
                    </div>
                  </div>

                  {/* Metadata Bar (Interio formula: Location (Year) / Title) */}
                  <div className="p-6 md:p-8 flex items-start justify-between gap-4 border-t border-black/10">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-black/50 block mb-1">
                        {p.location} ({p.year})
                      </span>
                      <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-normal text-[#0B0B0A] tracking-tight group-hover:text-black transition-colors">
                        {p.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {p.services.slice(0, 3).map((srv) => (
                          <span
                            key={srv}
                            className="font-mono text-[10px] uppercase tracking-wider text-black/40"
                          >
                            / {srv}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black flex-shrink-0 group-hover:bg-[#0B0B0A] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </FramerCard>
            );
          })}
        </div>

        {/* View All Projects Action */}
        <div className="mt-16 text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0B0B0A] text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-[#C5A880] hover:text-black transition-colors duration-300"
          >
            <span>VIEW COMPLETE ARCHIVE (24+ PROJECTS)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
