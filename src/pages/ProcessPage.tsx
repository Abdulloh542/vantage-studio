import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/process';
import { FinalCTASection } from '../components/home/FinalCTASection';

export function ProcessPage() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = PROCESS_STEPS.map((_, idx) =>
        document.getElementById(`process-step-${idx}`)
      );

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = stepElements.length - 1; i >= 0; i--) {
        const el = stepElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveStepIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="w-full bg-[#f7f6f2] text-[#121214] pt-32 md:pt-44">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
            Production Methodology
          </span>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-black leading-[1.04] mb-6">
            From drawing to final frame.
          </h1>
          <p className="text-zinc-600 text-base md:text-lg font-light leading-relaxed">
            Our 7-stage architectural visualization pipeline is engineered for institutional precision, transparency, and timely delivery across international time zones.
          </p>
        </div>

        {/* Sticky Sidebar + Scrollable Step Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky Progress Tracker (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-36 border-l border-black/15 pl-6">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold block mb-6">
              Pipeline Stages
            </span>
            <ul className="space-y-4">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <li key={step.number}>
                    <a
                      href={`#process-step-${idx}`}
                      className={`group flex items-center justify-between text-xs tracking-wider transition-colors duration-200 ${
                        isActive
                          ? 'text-black font-semibold translate-x-1'
                          : 'text-zinc-400 hover:text-black'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono">{step.number}</span>
                        <span>{step.title}</span>
                      </div>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12 p-6 bg-white border border-black/10 text-xs">
              <span className="font-semibold text-black block mb-1">Standard Project Cycle:</span>
              <p className="text-zinc-500 font-light">
                Typically 3–5 weeks from initial CAD ingestion to final 8K delivery and film launch cutdowns.
              </p>
            </div>
          </div>

          {/* Detailed Timeline Feed */}
          <div className="lg:col-span-8 space-y-24 md:space-y-36">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                id={`process-step-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="border-t border-black/15 pt-12"
              >
                <div className="flex items-center justify-between text-zinc-400 font-mono text-sm mb-4">
                  <span className="text-4xl font-light text-zinc-300">
                    STAGE {step.number}
                  </span>
                  <span className="px-3 py-1 bg-black text-white text-[10px] uppercase tracking-widest font-mono">
                    {step.duration}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-black mb-3">
                  {step.title}
                </h2>

                <p className="text-zinc-700 text-sm md:text-base font-light leading-relaxed mb-6">
                  {step.subtitle}
                </p>

                <p className="text-zinc-600 text-sm font-light leading-relaxed mb-8">
                  {step.description}
                </p>

                {/* Deliverables Callout */}
                <div className="p-6 bg-white border border-black/10">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-3 font-semibold">
                    Key Deliverables at this stage:
                  </span>
                  <ul className="space-y-2">
                    {step.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-zinc-800 flex items-center gap-2.5 font-medium"
                      >
                        <span className="w-1.5 h-1.5 bg-black rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Final CTA */}
      <FinalCTASection />
    </main>
  );
}
