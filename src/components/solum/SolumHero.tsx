import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SolumHero() {
  const shouldReduceMotion = useReducedMotion();

  const metrics = [
    { value: '40+', label: 'PROJECTS DELIVERED', note: 'International ateliers & funds' },
    { value: '14', label: 'GLOBAL COUNTRIES', note: 'Europe, Middle East, Central Asia' },
    { value: '6+', label: 'YEARS PRACTICE', note: 'Refining optical light transport' },
  ];

  return (
    <section className="relative min-h-screen w-full bg-white text-[#101010] flex flex-col justify-between pt-28 pb-12 px-6 md:px-10 border-b border-[#101010]/12 overflow-hidden">
      {/* 4-Column Visible Hairline Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-4 px-6 md:px-10">
        <div className="border-r border-[#101010]/[0.07] h-full hidden md:block" />
        <div className="border-r border-[#101010]/[0.07] h-full hidden md:block" />
        <div className="border-r border-[#101010]/[0.07] h-full hidden md:block" />
        <div className="h-full hidden md:block" />
      </div>

      {/* Top Editorial Rail & Label */}
      <motion.div
        initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 items-baseline pt-4"
      >
        <div className="col-span-1 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#757575]">
            ABOUT // STUDIO
          </span>
        </div>
        <div className="col-span-1 md:col-span-2 hidden md:block">
          <span className="font-mono text-xs uppercase tracking-wider text-[#757575]">
            ARCHITECTURAL VISUALIZATION ATELIER
          </span>
        </div>
        <div className="col-span-1 text-left md:text-right font-mono text-xs uppercase tracking-wider text-[#757575]">
          LONDON &bull; ZURICH &bull; TASHKENT
        </div>
      </motion.div>

      {/* Center: Giant Brand Wordmark across Central Columns */}
      <div className="relative z-10 my-auto py-12 md:py-20 select-none">
        <motion.div
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            scale: shouldReduceMotion ? 1 : 1.03,
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center"
        >
          <h1 className="font-display text-[clamp(54px,13vw,190px)] font-bold tracking-[-0.07em] leading-[0.88] text-[#101010] uppercase">
            VANTAGE STUDIO
          </h1>
        </motion.div>
      </div>

      {/* Lower Zone: Mission Statement & Metrics */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 items-end pt-8 border-t border-[#101010]/12">
        {/* Col 1: Left Rail Marker & Arrow Link */}
        <div className="col-span-1 flex flex-col justify-between h-full">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
              PROPOSITION
            </span>
          </div>

          <Link
            to="/projects"
            className="solum-btn self-start px-5 py-3 border border-[#101010] text-xs font-mono uppercase tracking-wider text-[#101010] hover:bg-[#101010] hover:text-white transition-colors duration-180"
          >
            <span>EXPLORE WORK</span>
            <span className="btn-arrow ml-3">
              <ArrowRight className="w-3.5 h-3.5 inline-block" />
            </span>
          </Link>
        </div>

        {/* Col 2 & 3: Mission Statement & Supporting Copy */}
        <motion.div
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            y: shouldReduceMotion ? 0 : 20,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 md:col-span-2 space-y-4"
        >
          <h2 className="font-display text-2xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.05em] leading-[1.02] text-[#101010]">
            AI ARCHITECTURAL VISUALIZATION &amp; CINEMATIC REAL ESTATE FILMS.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#757575] leading-relaxed max-w-[460px]">
            We turn blueprints, BIM models and concepts into photorealistic visuals and cinematic marketing films that command capital.
          </p>
        </motion.div>

        {/* Col 4: Edge Copyright & Year Label */}
        <div className="col-span-1 text-left md:text-right font-mono text-xs text-[#757575] uppercase">
          <span>&copy; 2026 // VOL. 04</span>
          <span className="block mt-1">CATALOGUE ED.</span>
        </div>
      </div>

      {/* Three Bordered Metric Cells with Tabular Figures */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-b border-[#101010]/12 mt-12">
        {metrics.map((m, idx) => (
          <motion.div
            key={m.label}
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 16,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35 + idx * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`p-6 sm:p-8 ${
              idx !== 0 ? 'border-t sm:border-t-0 sm:border-l border-[#101010]/12' : ''
            }`}
          >
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.06em] text-[#101010] tabular-nums mb-2">
              {m.value}
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#101010] mb-1">
              {m.label}
            </div>
            <div className="font-sans text-xs text-[#757575]">
              {m.note}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
