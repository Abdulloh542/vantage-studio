import { motion } from 'framer-motion';
import { ArrowUpRight, Play, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onOpenShowreel?: () => void;
}

export function HeroSection({ onOpenShowreel }: HeroSectionProps) {
  const stats = [
    { value: '40+', label: 'PROJECTS DELIVERED' },
    { value: '14', label: 'GLOBAL COUNTRIES' },
    { value: '6+', label: 'YEARS PRACTICE' },
    { value: '8', label: 'CONTENT FORMATS' },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background Cinematic Video Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-45 filter brightness-85 contrast-110 scale-100"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-at-dusk-40916-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Architectural Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.8)_0%,transparent_70%)]" />
      </div>

      {/* Top Metadata Strip (STUX Formula) */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 w-full max-w-[1440px] mx-auto flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono uppercase tracking-[0.25em]"
      >
        <span className="text-white/70">
          01 / STUDIO &mdash; ARCHVIZ + REAL ESTATE
        </span>
        <span className="text-white/40 hidden sm:inline">
          LONDON &bull; ZURICH &bull; TASHKENT
        </span>
      </motion.div>

      {/* Left-Aligned Lower Stage (STUX / ARCHFORM Signature with Side Entrance Animation) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto my-auto py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          {/* Monumental Architectural Headline with Slide-in from Left */}
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(40px,6.5vw,94px)] font-normal tracking-[-0.03em] leading-[0.96] text-white uppercase mb-6"
          >
            AI ARCHITECTURAL <br />
            VISUALIZATION <br />
            <span className="font-serif italic font-light text-white/90">&amp; CINEMATIC FILMS</span>
          </motion.h1>

          {/* Crisp, Concise Positioning Micro-copy */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-white/80 font-sans font-light max-w-xl leading-relaxed mb-8"
          >
            We transform architectural plans, 3D models and concepts into photorealistic CGI, AI walkthroughs and cinematic marketing films.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A880] hover:text-black transition-all duration-300"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <span>VIEW WORK</span>
            </Link>

            {onOpenShowreel && (
              <button
                onClick={onOpenShowreel}
                className="inline-flex items-center gap-2.5 px-6 py-4 text-white/80 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors group"
              >
                <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </div>
                <span>SHOWREEL (90S)</span>
              </button>
            )}
          </motion.div>
        </div>

        {/* Bottom-Right Scroll Indicator */}
        <div className="lg:col-span-4 flex lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/40"
          >
            <span>SCROLL TO EXPLORE</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4-Metric Studio Strip (Real Numbers Only with Slide-in) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[1440px] mx-auto pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((st) => (
          <div key={st.label} className="flex flex-col">
            <span className="font-display text-2xl sm:text-3xl font-light text-white tracking-tight">
              {st.value}
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/45 mt-0.5">
              {st.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
