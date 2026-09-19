import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import { SERVICES } from '../data/services';
import { FinalCTASection } from '../components/home/FinalCTASection';

export function ServicesPage() {
  return (
    <main className="w-full bg-[#f7f6f2] text-[#121214] pt-32 md:pt-44">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Page Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
            Services & Capabilities
          </span>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-black leading-[1.04] mb-6">
            Visual solutions for projects that have not been built yet.
          </h1>
          <p className="text-zinc-600 text-base md:text-lg font-light leading-relaxed">
            We partner with architects, developers, and funds as a complete creative production atelier—delivering museum-grade CGI, cinematic films, and launch marketing.
          </p>
        </div>

        {/* Editorial Services Stack */}
        <div className="space-y-28 md:space-y-40">
          {SERVICES.map((service, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-black/15 pt-16"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual Frame */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] bg-zinc-200 overflow-hidden shadow-xl border border-black/10 group">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/75 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest font-mono">
                          Pillar {service.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Text Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    <span className="text-5xl font-light text-zinc-300 font-mono block mb-2">
                      {service.number}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black mb-4">
                      {service.title}
                    </h2>
                    <p className="text-zinc-600 text-sm md:text-base font-light leading-relaxed mb-8">
                      {service.heroSubhead}
                    </p>

                    {/* Deliverables List */}
                    <div className="border-t border-black/10 pt-6 mb-8">
                      <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-4">
                        Typical Deliverables:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.deliverables.map((d) => (
                          <li
                            key={d.name}
                            className="text-xs text-zinc-700 flex items-start gap-2"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-black flex-shrink-0 mt-0.5" />
                            <span className="font-medium">{d.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-6">
                      <Link
                        to={`/services/${service.slug}`}
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                      >
                        <span>Explore Deep Dive</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>

                      <Link
                        to="/contact"
                        className="text-xs uppercase tracking-widest font-semibold text-black hover:text-zinc-600 transition-colors pb-1 border-b border-black"
                      >
                        Commission This Service
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
