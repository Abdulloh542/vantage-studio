import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function IntroStatement() {
  const metrics = [
    { number: '40+', label: 'PROJECTS DELIVERED', detail: 'Completed for leading architectural ateliers and institutional funds.' },
    { number: '14', label: 'COUNTRIES', detail: 'International commissions spanning Europe, the Middle East, and Asia.' },
    { number: '6+', label: 'YEARS OF PRACTICE', detail: 'Refining optical light transport, physics, and neural camera motion.' },
    { number: '8', label: 'CONTENT FORMATS', detail: 'From 16K stills and 4K films to interactive Before/After sales suites.' },
  ];

  return (
    <section id="manifesto-section" className="bg-[#F4F2EE] text-[#11110F] py-28 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Metadata */}
        <div className="mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#77736C] font-semibold">
            02 / MANIFESTO & PROPOSITION
          </span>
        </div>

        {/* Editorial Split Layout: Massive Text Left + Supporting Copy Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24 border-b border-[#11110F]/15">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-light tracking-tight leading-[0.98] text-[#11110F]"
            >
              VISUALIZE <br />
              BEFORE <br />
              <span className="font-semibold italic text-[#11110F]">IT EXISTS.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-3">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 text-[#11110F]/85 text-base sm:text-lg font-light leading-relaxed"
            >
              <p className="text-xl sm:text-2xl font-normal leading-snug text-[#11110F]">
                Give us drawings, renders, models, plans or an idea. We turn them into premium visuals and films that help people understand, imagine and sell the project.
              </p>
              <p className="text-sm sm:text-base text-[#77736C] leading-relaxed font-light">
                Serving as a creative production bridge between architectural intent and market perception, our atelier translates complex BIM schedules, structural drawings, and spatial concepts into persuasive emotional experiences.
              </p>
            </motion.div>

            <div className="mt-10 pt-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#11110F] hover:text-[#77736C] transition-colors pb-1 border-b border-[#11110F]"
              >
                <span>Read Studio Story</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Impact / Real Numbers Section (4 Columns with Thin Separators) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pt-18 pt-16">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-l border-[#11110F]/15 pl-6"
            >
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#11110F] mb-2">
                {m.number}
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#11110F] font-semibold mb-1">
                {m.label}
              </div>
              <div className="text-xs text-[#77736C] font-light leading-relaxed">
                {m.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
