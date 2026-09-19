import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/services';
import { FinalCTASection } from '../components/home/FinalCTASection';

export function ServicesPage() {
  return (
    <main className="w-full bg-[#090a0d] text-white pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Page Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>03 / Capabilities & Scope</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.04] mb-6">
            Visual Solutions for Unbuilt Architecture
          </h1>
          <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            We partner with architects, developers, and funds as a complete creative production atelier—delivering museum-grade CGI, cinematic films, and launch marketing.
          </p>
        </div>

        {/* Editorial Services Stack */}
        <div className="space-y-20 md:space-y-32">
          {SERVICES.map((service, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-[32px] sm:rounded-[40px] p-8 md:p-12 border border-white/10 shadow-2xl"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual Frame */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-zinc-900 group">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-mono border border-white/15">
                          Pillar {service.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Text Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    <span className="font-display text-4xl font-bold text-zinc-500 block mb-2 font-mono">
                      {service.number}
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed mb-6">
                      {service.heroSubhead}
                    </p>

                    {/* Deliverables List */}
                    <div className="border-t border-white/10 pt-6 mb-8">
                      <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-3">
                        Typical Deliverables:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((d) => (
                          <li
                            key={d.name}
                            className="text-xs text-zinc-200 flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span>{d.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        to={`/services/${service.slug}`}
                        className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-xl"
                      >
                        <span>Explore Deep Dive</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>

                      <Link
                        to="/contact"
                        className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-xs uppercase tracking-wider font-semibold text-white border border-white/15 transition-all"
                      >
                        Commission Pillar
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Conversion Block */}
      <FinalCTASection />
    </main>
  );
}
