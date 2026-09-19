import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import type { Project } from '../../types';

interface SelectedWorkSectionProps {
  projects: Project[];
}

export function SelectedWorkSection({ projects }: SelectedWorkSectionProps) {
  const featured = projects.slice(0, 5);

  return (
    <section className="bg-[#090a0d] text-white py-24 md:py-36 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>02 / Case Studies</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Selected Works & Films
            </h2>
          </div>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs uppercase tracking-wider font-semibold text-white border border-white/15 transition-all shadow-md self-start md:self-auto"
          >
            <span>Explore All Projects ({projects.length})</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Kontra-Inspired 3-Card Centerpiece Grid */}
        <div className="space-y-12 md:space-y-16">
          {/* Main Hero Card: Riviera Residence (Kontra Style Centerpiece) */}
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
                className="group block relative rounded-[32px] sm:rounded-[40px] overflow-hidden border border-white/15 bg-zinc-900 shadow-2xl"
              >
                <div className="relative aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden">
                  <img
                    src={featured[0].heroImage}
                    alt={featured[0].title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-90 contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 pointer-events-none" />

                  {/* Top Floating Pill Badges */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] uppercase tracking-wider font-mono border border-white/15">
                        Featured Case Study
                      </span>
                      <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] uppercase tracking-wider font-mono border border-emerald-500/30">
                        AI Film & CGI
                      </span>
                    </div>

                    <div className="hidden sm:flex items-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-zinc-300 text-[11px] font-mono border border-white/10">
                        {featured[0].videoDuration || '90s 4K Film'}
                      </span>
                    </div>
                  </div>

                  {/* Kontra-Style Floating Stat Cards Inside the Render */}
                  <div className="absolute top-1/2 right-6 sm:right-10 transform -translate-y-1/2 hidden md:flex flex-col gap-3 pointer-events-none">
                    <div className="glass-card rounded-2xl px-5 py-3 border border-white/20 text-right">
                      <span className="font-display text-2xl font-bold text-white block">
                        $165M
                      </span>
                      <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-mono">
                        Gross Dev Value
                      </span>
                    </div>
                    <div className="glass-card rounded-2xl px-5 py-3 border border-white/20 text-right">
                      <span className="font-display text-2xl font-bold text-white block">
                        148
                      </span>
                      <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-mono">
                        Residences
                      </span>
                    </div>
                  </div>

                  {/* Bottom Content Bar Inside Image */}
                  <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                        {featured[0].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 font-light flex items-center gap-2 mt-2">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{featured[0].location}</span>
                        <span>•</span>
                        <span className="text-zinc-400">{featured[0].category}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold group-hover:scale-105 transition-transform shadow-xl self-start sm:self-auto">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Secondary Projects Grid: Bunker 37 & Western Australia (Rounded Twin Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            {featured[1] && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex flex-col"
              >
                <Link
                  to={`/work/${featured[1].slug}`}
                  data-cursor="VIEW"
                  className="group block relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/15 bg-zinc-900 shadow-xl h-full flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={featured[1].heroImage}
                      alt={featured[1].title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-mono border border-white/15">
                        {featured[1].category}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                      <div>
                        <h4 className="font-display text-xl sm:text-2xl font-bold tracking-tight group-hover:text-amber-200 transition-colors">
                          {featured[1].title}
                        </h4>
                        <p className="text-xs text-zinc-300 font-light mt-0.5">
                          {featured[1].location}
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {featured[2] && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col"
              >
                <Link
                  to={`/work/${featured[2].slug}`}
                  data-cursor="VIEW"
                  className="group block relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/15 bg-zinc-900 shadow-xl h-full flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={featured[2].heroImage}
                      alt={featured[2].title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-mono border border-white/15">
                        {featured[2].category}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                      <div>
                        <h4 className="font-display text-xl sm:text-2xl font-bold tracking-tight group-hover:text-amber-200 transition-colors">
                          {featured[2].title}
                        </h4>
                        <p className="text-xs text-zinc-300 font-light mt-0.5">
                          {featured[2].location}
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
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
