import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import type { Project } from '../../types';

interface SelectedWorkSectionProps {
  projects: Project[];
}

export function SelectedWorkSection({ projects }: SelectedWorkSectionProps) {
  const p1 = projects.find(p => p.slug === 'volga-park') || projects[0];
  const p2 = projects.find(p => p.slug === 'bunker-37') || projects[1];
  const p3 = projects.find(p => p.slug === 'architecture-insight') || projects[2];
  const p4 = projects.find(p => p.slug === 'lotus-mall') || projects[3];
  const p5 = projects.find(p => p.slug === 'collective-dubai-hills') || projects[4];
  const p6 = projects.find(p => p.slug === 'navoi-plaza') || projects[5];

  return (
    <section id="selected-work" className="bg-[#FAF9F6] text-[#11110F] py-28 md:py-40 border-t border-[#11110F]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Side-in Entrance */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-28 gap-8 border-b border-[#11110F]/15 pb-12">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#77736C] font-mono font-semibold block mb-4">
              04 / SELECTED WORK &amp; PORTFOLIO
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#11110F]">
              SELECTED WORK
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#77736C] font-light max-w-xl">
              Photorealistic architectural visualizations, cinematic films, and global real estate marketing campaigns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/work"
              className="group inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#11110F] hover:text-[#77736C] transition-colors pb-1 border-b border-[#11110F] self-start md:self-auto"
            >
              <span>View All Projects ({projects.length})</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>

        {/* Varied Editorial Project Compositions with Side-in Animations */}
        <div className="space-y-28 md:space-y-40">
          {/* COMPOSITION 01: Full-Width Panoramic Image (Riviera Residence) - Slide from Left */}
          {p1 && (
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={`/work/${p1.slug}`}
                className="group block"
              >
                <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-zinc-200 border border-[#11110F]/10 shadow-sm">
                  <img
                    src={p1.heroImage}
                    alt={p1.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3.5 py-1.5 bg-[#050505]/75 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-white border border-white/10 font-mono">
                      01 — Panoramic Case Study
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#11110F] transition-transform duration-300 group-hover:-translate-y-1">
                      {p1.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#77736C] mt-2 font-mono">
                      {p1.location} &bull; {p1.year} &bull; {p1.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs uppercase tracking-[0.18em] text-[#77736C] font-mono">
                      {p1.services.join(' / ')}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[#11110F]/20 flex items-center justify-center text-[#11110F] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:border-[#11110F]">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* COMPOSITION 02: 70% Image + 30% Metadata Layout (Bunker 37) */}
          {p2 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-8"
              >
                <Link to={`/work/${p2.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200 border border-[#11110F]/10 shadow-sm">
                    <img
                      src={p2.heroImage}
                      alt={p2.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-5 left-5 z-10">
                      <span className="px-3 py-1 bg-[#050505]/75 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-white border border-white/10 font-mono">
                        02 — Adaptive Reuse
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-4 flex flex-col justify-between h-full py-4 border-t lg:border-t-0 lg:border-l border-[#11110F]/15 lg:pl-10"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#77736C] font-mono block mb-3">
                    PROJECT 02 // MASTERPLAN
                  </span>
                  <Link to={`/work/${p2.slug}`} className="group">
                    <h3 className="font-display text-3xl sm:text-4xl font-light tracking-tight text-[#11110F] transition-transform duration-300 group-hover:-translate-y-1 mb-3">
                      {p2.title}
                    </h3>
                  </Link>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#77736C] font-mono mb-6">
                    {p2.location} &bull; {p2.year}
                  </p>
                  <p className="text-sm text-[#11110F]/80 font-light leading-relaxed mb-8">
                    {p2.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#11110F]/15 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.16em] text-[#77736C] font-mono">
                    {p2.category}
                  </span>
                  <Link
                    to={`/work/${p2.slug}`}
                    className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#11110F]"
                  >
                    <span>Explore</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </div>
          )}

          {/* COMPOSITION 03: Vertical Image Left + Giant Type Right (Australia Residence) */}
          {p3 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5"
              >
                <Link to={`/work/${p3.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-200 border border-[#11110F]/10 shadow-sm">
                    <img
                      src={p3.heroImage}
                      alt={p3.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-5 left-5 z-10">
                      <span className="px-3 py-1 bg-[#050505]/75 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-white border border-white/10 font-mono">
                        03 — 9:16 Vertical Cinema
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#77736C] font-mono block mb-4">
                  PROJECT 03 // VERTICAL CINEMA &amp; LUXURY RESIDENTIAL
                </span>
                <Link to={`/work/${p3.slug}`} className="group">
                  <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#11110F] leading-[1.02] transition-transform duration-300 group-hover:-translate-y-1 mb-6">
                    {p3.title}
                  </h3>
                </Link>
                <p className="text-base sm:text-lg text-[#11110F]/80 font-light leading-relaxed max-w-xl mb-8">
                  {p3.summary}
                </p>
                <div className="grid grid-cols-2 gap-6 border-t border-b border-[#11110F]/15 py-6 mb-8 text-xs font-mono">
                  <div>
                    <span className="text-[#77736C] uppercase tracking-wider block mb-1">LOCATION</span>
                    <span className="text-[#11110F] font-medium">{p3.location}</span>
                  </div>
                  <div>
                    <span className="text-[#77736C] uppercase tracking-wider block mb-1">SERVICES</span>
                    <span className="text-[#11110F] font-medium">{p3.services.slice(0, 2).join(', ')}</span>
                  </div>
                </div>
                <Link
                  to={`/work/${p3.slug}`}
                  className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#11110F] pb-1 border-b border-[#11110F]"
                >
                  <span>View Full Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          )}

          {/* COMPOSITION 04: Full-Width Video / Film Frame (Lotus Mall) */}
          {p4 && (
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={`/work/${p4.slug}`}
                className="group block"
              >
                <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-zinc-900 border border-[#11110F]/10 shadow-sm">
                  <img
                    src={p4.heroImage}
                    alt={p4.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                  
                  <div className="absolute top-6 left-6 z-10 flex items-center gap-3">
                    <span className="px-3 py-1 bg-black/75 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-white border border-white/10 font-mono">
                      04 — Mixed-Use &amp; 5-Star Hotel Film
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                    <div>
                      <h3 className="font-display text-2xl sm:text-4xl font-light tracking-tight">
                        {p4.title}
                      </h3>
                      <p className="text-xs text-zinc-300 uppercase tracking-widest mt-1 font-mono">
                        {p4.location} &bull; Retail Galleria &amp; Luxury Hospitality
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white font-mono">
                      <span>Watch Film &amp; Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* COMPOSITION 05: Asymmetric Dual-Crop Layout with Alternating Slide-Ins */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
            {p5 && (
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-7"
              >
                <Link to={`/work/${p5.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200 border border-[#11110F]/10 shadow-sm">
                    <img
                      src={p5.heroImage}
                      alt={p5.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-[#050505]/75 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-white border border-white/10 font-mono">
                        05A — Resort Residences
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-light tracking-tight text-[#11110F] transition-transform duration-300 group-hover:-translate-y-1">
                        {p5.title}
                      </h3>
                      <p className="text-xs text-[#77736C] uppercase tracking-[0.2em] mt-1 font-mono">
                        {p5.location}
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-full border border-[#11110F]/20 flex items-center justify-center text-[#11110F] transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {p6 && (
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-5 md:pt-16"
              >
                <Link to={`/work/${p6.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-200 border border-[#11110F]/10 shadow-sm">
                    <img
                      src={p6.heroImage}
                      alt={p6.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-[#050505]/75 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-white border border-white/10 font-mono">
                        05B — 9:16 Vertical Promenade
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-light tracking-tight text-[#11110F] transition-transform duration-300 group-hover:-translate-y-1">
                        {p6.title}
                      </h3>
                      <p className="text-xs text-[#77736C] uppercase tracking-[0.2em] mt-1 font-mono">
                        {p6.location}
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-full border border-[#11110F]/20 flex items-center justify-center text-[#11110F] transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowUpRight className="w-3.5 h-3.5" />
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
