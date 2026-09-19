import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROCESS_STEPS } from '../../data/process';

export function ProcessSnapshot() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#0c0c0d] text-white py-24 md:py-36 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
              06 — Production Architecture
            </span>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white leading-[1.05]">
              From drawing <br />
              <span className="font-normal italic text-zinc-400">to final frame.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-4">
              Our 7-stage creative pipeline combines architectural rigor with cinematic direction to guarantee predictable delivery and exceptional craft.
            </p>
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white hover:text-zinc-300 transition-colors pb-1 border-b border-white"
            >
              <span>Explore Complete Timeline</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Process Steps Horizontal / Stacked Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-white/10">
          {/* Left: Step Index List */}
          <div className="lg:col-span-5 space-y-2">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left py-4 px-5 transition-all duration-300 flex items-center justify-between border-l-2 ${
                    isActive
                      ? 'border-white bg-white/5 text-white'
                      : 'border-transparent text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-zinc-500">{step.number}</span>
                    <span className="text-sm md:text-base font-light tracking-tight">
                      {step.title}
                    </span>
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono hidden sm:inline">
                    {step.duration}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Step Deep Dive Card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 bg-zinc-900/60 border border-white/10 p-8 md:p-12 relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
              <span className="text-5xl md:text-6xl font-light text-zinc-600 font-mono">
                {PROCESS_STEPS[activeStep].number}
              </span>
              <span className="px-3 py-1 bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono">
                Duration: {PROCESS_STEPS[activeStep].duration}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-3">
              {PROCESS_STEPS[activeStep].title}
            </h3>

            <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-8">
              {PROCESS_STEPS[activeStep].description}
            </p>

            <div className="border-t border-white/10 pt-6">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-3 font-semibold">
                Milestone Deliverables:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROCESS_STEPS[activeStep].deliverables.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-zinc-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
