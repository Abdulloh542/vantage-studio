import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
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
    <main className="w-full bg-[#090a0d] text-white pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>07 / Production Methodology</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.04] mb-6">
            From Drawing to Final Master
          </h1>
          <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            Our 7-stage architectural visualization pipeline is engineered for institutional precision, transparency, and timely delivery across international time zones.
          </p>
        </div>

        {/* Sticky Sidebar + Scrollable Step Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Sticky Progress Tracker (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-32 glass-card rounded-3xl p-6 border border-white/10">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-6">
              Pipeline Stages
            </span>
            <ul className="space-y-3">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <li key={step.number}>
                    <a
                      href={`#process-step-${idx}`}
                      className={`group flex items-center justify-between px-3.5 py-2 rounded-xl text-xs tracking-wider transition-all duration-200 ${
                        isActive
                          ? 'bg-white text-black font-semibold shadow-md'
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3 font-mono">
                        <span>{step.number}</span>
                        <span className="font-sans font-medium">{step.title}</span>
                      </div>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs">
              <span className="font-semibold text-white block mb-1">Standard Project Cycle:</span>
              <p className="text-zinc-400 font-light">
                Typically 3–5 weeks from initial CAD ingestion to final 8K delivery and film launch cutdowns.
              </p>
            </div>
          </div>

          {/* Detailed Timeline Feed */}
          <div className="lg:col-span-8 space-y-16 md:space-y-24">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                id={`process-step-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-[32px] p-8 md:p-10 border border-white/10 shadow-xl"
              >
                <div className="flex items-center justify-between text-zinc-400 font-mono text-sm mb-4">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white">
                    STAGE {step.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-amber-200 text-[10px] uppercase tracking-wider font-mono border border-white/15">
                    {step.duration}
                  </span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                  {step.title}
                </h2>

                <p className="text-amber-200/90 text-sm font-medium mb-4 font-mono">
                  {step.subtitle}
                </p>

                <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Deliverables Callout */}
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-3 font-mono">
                    Key Deliverables at this stage:
                  </span>
                  <ul className="space-y-2">
                    {step.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-zinc-200 flex items-center gap-2 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
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
