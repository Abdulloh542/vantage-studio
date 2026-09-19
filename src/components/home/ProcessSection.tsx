import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROCESS_STEPS } from '../../data/process';

const STAGE_IMAGES = [
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80', // 01 Brief
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80', // 02 Visual Direction
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80', // 03 3D Geometry
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85', // 04 Visualization
  'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1400&q=80', // 05 AI Enhancement
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85', // 06 Motion Film
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85', // 07 Delivery
];

export function ProcessSection() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(0);

  const activeStep = PROCESS_STEPS[activeStepIdx] || PROCESS_STEPS[0];
  const activeImage = STAGE_IMAGES[activeStepIdx] || STAGE_IMAGES[0];

  const toggleMobile = (idx: number) => {
    setExpandedMobile(expandedMobile === idx ? null : idx);
  };

  return (
    <section className="bg-[#F4F2EE] text-[#11110F] py-28 md:py-40 border-t border-[#11110F]/15 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8 border-b border-[#11110F]/15 pb-12">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#77736C] font-semibold block mb-4">
              07 / PRODUCTION METHODOLOGY
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#11110F]">
              PROCESS
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#77736C] font-light max-w-xl">
              From architectural drawings to photorealistic reality in seven frictionless stages.
            </p>
          </div>
          <Link
            to="/process"
            className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#11110F] hover:text-[#77736C] transition-colors pb-1 border-b border-[#11110F] self-start md:self-auto"
          >
            <span>Complete Process Guide</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Desktop Sticky Left Steps + Dynamic Right Image Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-start">
          {/* Left Column: 7 Stages Step Index */}
          <div className="col-span-6 divide-y divide-[#11110F]/15">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIdx === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`py-6 cursor-pointer transition-all duration-300 ${
                    isActive ? 'pl-4 bg-[#FAF9F6] border-l-2 border-[#11110F]' : 'hover:pl-2 opacity-65 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-5">
                      <span className={`font-mono text-sm ${
                        isActive ? 'text-[#11110F] font-bold' : 'text-[#77736C]'
                      }`}>
                        {step.number}
                      </span>
                      <h3 className={`font-display text-2xl font-light tracking-tight ${
                        isActive ? 'text-[#11110F] font-normal' : 'text-[#11110F]/80'
                      }`}>
                        {step.title.toUpperCase()}
                      </h3>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#77736C]">
                      {step.duration}
                    </span>
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 pl-9 pr-4"
                    >
                      <p className="text-xs sm:text-sm text-[#77736C] font-light leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((d, i) => (
                          <span
                            key={i}
                            className="text-[10px] uppercase tracking-wider text-[#11110F] bg-white px-2.5 py-1 border border-[#11110F]/10 font-mono"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Contextual Active Image Frame */}
          <div className="col-span-6 sticky top-32">
            <div className="relative aspect-[16/10] bg-zinc-200 overflow-hidden border border-[#11110F]/15 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.number}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeImage}
                    alt={activeStep.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 bg-[#050505]/75 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-white border border-white/10 font-mono">
                      STAGE {activeStep.number} / 07
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] block mb-1">
                      MILESTONE OBJECTIVE
                    </span>
                    <h4 className="font-display text-2xl font-light tracking-tight">
                      {activeStep.title}
                    </h4>
                    <p className="text-xs text-zinc-300 font-light mt-1 max-w-md">
                      {activeStep.subtitle}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden divide-y divide-[#11110F]/15 border-t border-b border-[#11110F]/15">
          {PROCESS_STEPS.map((step, idx) => {
            const isExpanded = expandedMobile === idx;
            return (
              <div key={step.number} className="py-5">
                <button
                  onClick={() => toggleMobile(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#77736C]">
                      {step.number}
                    </span>
                    <h3 className="font-display text-xl font-light tracking-tight text-[#11110F]">
                      {step.title}
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
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pt-4"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-zinc-200 mb-4 border border-[#11110F]/10">
                        <img
                          src={STAGE_IMAGES[idx]}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-[#77736C] font-light leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <div className="text-[11px] uppercase tracking-wider text-[#11110F] font-mono">
                        Duration: {step.duration}
                      </div>
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
