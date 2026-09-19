import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { SERVICES } from '../../data/services';

export function EditorialServiceIndex() {
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  const activeService = SERVICES[activeServiceIdx] || SERVICES[0];

  const toggleMobile = (idx: number) => {
    setExpandedMobile(expandedMobile === idx ? null : idx);
  };

  return (
    <section className="bg-[#FAF9F6] text-[#11110F] py-28 md:py-40 border-t border-[#11110F]/15 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8 border-b border-[#11110F]/15 pb-12">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#77736C] font-semibold block mb-4">
              06 / SERVICES & DISCIPLINES
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#11110F]">
              SERVICES
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#77736C] font-light max-w-xl">
              From early schematic drawings to launch-ready marketing suites, we provide end-to-end visual production.
            </p>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#11110F] hover:text-[#77736C] transition-colors pb-1 border-b border-[#11110F] self-start md:self-auto"
          >
            <span>All Services & Deliverables</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Desktop Editorial Numbered Row Layout with Live Contextual Preview */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-start">
          {/* Left Column: Numbered Service Rows */}
          <div className="col-span-7 divide-y divide-[#11110F]/15">
            {SERVICES.map((service, idx) => {
              const isActive = activeServiceIdx === idx;
              return (
                <div
                  key={service.slug}
                  onMouseEnter={() => setActiveServiceIdx(idx)}
                  className={`py-8 cursor-pointer transition-all duration-300 group ${
                    isActive ? 'opacity-100 pl-4 bg-[#F4F2EE]/60' : 'opacity-65 hover:opacity-100 hover:pl-2'
                  }`}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex items-baseline justify-between"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className={`font-mono text-sm sm:text-base transition-colors ${
                        isActive ? 'text-[#11110F] font-bold' : 'text-[#77736C]'
                      }`}>
                        {service.number}
                      </span>
                      <h3 className={`font-display text-2xl sm:text-3xl font-light tracking-tight transition-all duration-300 ${
                        isActive ? 'translate-x-2 text-[#11110F] font-normal' : 'text-[#11110F]/85'
                      }`}>
                        {service.title.toUpperCase()}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#77736C] opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                        Explore
                      </span>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                        isActive ? 'border-[#11110F] bg-[#11110F] text-white translate-x-1' : 'border-[#11110F]/20 text-[#11110F]'
                      }`}>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>

                  {/* Sub-description visible when hovered/active */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 pl-12 pr-6"
                    >
                      <p className="text-xs sm:text-sm text-[#77736C] font-light leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {service.deliverables.slice(0, 3).map((d) => (
                          <span
                            key={d.name}
                            className="text-[10px] uppercase tracking-wider text-[#11110F] bg-white px-2.5 py-1 border border-[#11110F]/10"
                          >
                            {d.name}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Contextual Image Preview Frame */}
          <div className="col-span-5 sticky top-32">
            <div className="relative aspect-[4/3] bg-zinc-200 overflow-hidden border border-[#11110F]/15 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.slug}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/75 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-white border border-white/10 font-mono">
                      PILLAR {activeService.number}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] block mb-1">
                      DELIVERABLE SUITE
                    </span>
                    <h4 className="font-display text-xl font-light tracking-tight">
                      {activeService.title}
                    </h4>
                    <p className="text-xs text-zinc-300 font-light mt-1 line-clamp-2">
                      {activeService.heroHeadline}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Stack (Tap to expand) */}
        <div className="lg:hidden divide-y divide-[#11110F]/15 border-t border-b border-[#11110F]/15">
          {SERVICES.map((service, idx) => {
            const isExpanded = expandedMobile === idx;
            return (
              <div key={service.slug} className="py-6">
                <button
                  onClick={() => toggleMobile(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#77736C]">
                      {service.number}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-light tracking-tight text-[#11110F]">
                      {service.title}
                    </h3>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-[#11110F]/20 flex items-center justify-center text-[#11110F]">
                    {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden pt-5"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-zinc-200 mb-4 border border-[#11110F]/10">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-[#77736C] font-light leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#11110F] pb-1 border-b border-[#11110F]"
                      >
                        <span>Explore {service.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
