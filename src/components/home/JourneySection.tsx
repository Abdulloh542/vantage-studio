import { motion } from 'framer-motion';
import { FramerTextReveal, FramerCard } from '../common/FramerReveal';

export function JourneySection() {
  const stats = [
    {
      value: '10+',
      label: 'YEARS OF PRACTICE',
      desc: 'Delivering thoughtful architectural visualizations with precision and timeless expertise.',
      dot: 'Dot 01',
    },
    {
      value: '240+',
      label: 'COMPLETED COMMISSIONS',
      desc: 'Creating persuasive residential, commercial, and civic visuals across 16 countries.',
      dot: 'Dot 02',
    },
    {
      value: '99%',
      label: 'CLIENT SATISFACTION',
      desc: 'Exceptional craft, transparent milestone collaboration, and lasting developer partnerships.',
      dot: 'Dot 03',
    },
  ];

  return (
    <section className="bg-[#F4F2EE] text-[#0B0B0A] py-24 md:py-36 border-b border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Eyebrow and Subtag Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-16">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-black/50 font-medium"
          >
            OUR JOURNEY //
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-black/40"
          >
            *(ARCHITECTURAL CRAFT)
          </motion.span>
        </div>

        {/* Large Statement with Framer Word Blur Reveal */}
        <div className="max-w-5xl mb-20 md:mb-28">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-[#0B0B0A]">
            <FramerTextReveal
              text="Creating elegant architectural visuals that combine physical daylight physics, timeless spatial design, and AI-powered cinematic velocity."
            />
          </h2>
        </div>

        {/* 3 Counter Cards (Interio Formula) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 border-t border-black/10 pt-16">
          {stats.map((st, idx) => (
            <FramerCard
              key={st.label}
              delay={idx * 0.15}
              className="group p-8 bg-[#FAF9F6] border border-black/10 hover:border-black/30 transition-all duration-300 flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/5">
                  <span className="font-mono text-xs uppercase tracking-widest text-black/40">
                    {st.label}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-black/30 group-hover:bg-black transition-colors" />
                </div>
                <div className="font-display text-5xl sm:text-6xl md:text-7xl font-normal text-[#0B0B0A] tracking-tight mb-4">
                  {st.value}
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-black/60 leading-relaxed">
                {st.desc}
              </p>
            </FramerCard>
          ))}
        </div>
      </div>
    </section>
  );
}
