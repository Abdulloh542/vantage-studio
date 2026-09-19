import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';

interface SelectedWorkSectionProps {
  projects: Project[];
}

export function SelectedWorkSection({ projects }: SelectedWorkSectionProps) {
  const featured = projects.slice(0, 5);

  return (
    <section className="bg-[#f7f6f2] text-[#121214] py-24 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
              02 — Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black">
              Selected Work
            </h2>
          </div>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black hover:text-zinc-600 transition-colors pb-1 border-b border-black self-start md:self-auto"
          >
            <span>Explore All Projects ({projects.length})</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <div className="space-y-16 md:space-y-24">
          {/* Project 01: Hero Panoramic (Riviera Residence) */}
          {featured[0] && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={`/work/${featured[0].slug}`}
                data-cursor="VIEW"
                className="group block"
              >
                <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-zinc-200">
                  <img
                    src={featured[0].heroImage}
                    alt={featured[0].title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Subtle Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-widest text-white border border-white/10">
                      Featured Case Study
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light tracking-tight text-black group-hover:text-zinc-600 transition-colors">
                      {featured[0].title}
                    </h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                      {featured[0].location} • {featured[0].category}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black group-hover:translate-x-1 transition-transform">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Projects 02 & 03: Split Asymmetric Grid (Bunker 37 + Marlow On Mill) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-start">
            {featured[1] && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-7"
              >
                <Link
                  to={`/work/${featured[1].slug}`}
                  data-cursor="VIEW"
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200">
                    <img
                      src={featured[1].heroImage}
                      alt={featured[1].title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-light tracking-tight text-black group-hover:text-zinc-600 transition-colors">
                        {featured[1].title}
                      </h3>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                        {featured[1].location} • {featured[1].category}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )}

            {featured[2] && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-5 md:pt-16"
              >
                <Link
                  to={`/work/${featured[2].slug}`}
                  data-cursor="VIEW"
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-200">
                    <img
                      src={featured[2].heroImage}
                      alt={featured[2].title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-light tracking-tight text-black group-hover:text-zinc-600 transition-colors">
                        {featured[2].title}
                      </h3>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                        {featured[2].location} • {featured[2].category}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Projects 04 & 05: Inverted Split Layout (Venetian Penthouse + Freirodaer Weg) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-start">
            {featured[3] && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-5"
              >
                <Link
                  to={`/work/${featured[3].slug}`}
                  data-cursor="VIEW"
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-zinc-200">
                    <img
                      src={featured[3].heroImage}
                      alt={featured[3].title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-light tracking-tight text-black group-hover:text-zinc-600 transition-colors">
                        {featured[3].title}
                      </h3>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                        {featured[3].location} • {featured[3].category}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )}

            {featured[4] && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-7 md:pt-12"
              >
                <Link
                  to={`/work/${featured[4].slug}`}
                  data-cursor="VIEW"
                  className="group block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200">
                    <img
                      src={featured[4].heroImage}
                      alt={featured[4].title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-light tracking-tight text-black group-hover:text-zinc-600 transition-colors">
                        {featured[4].title}
                      </h3>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                        {featured[4].location} • {featured[4].category}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
