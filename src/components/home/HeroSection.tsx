import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onOpenShowreel?: () => void;
}

export function HeroSection({ onOpenShowreel }: HeroSectionProps) {
  return (
    <section className="relative min-h-[96vh] w-full bg-[#050505] text-[#FAF9F6] flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background Autoplaying Architectural Cinema Loop */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 filter brightness-90 contrast-110"
        >
          <source
            src="https://framerusercontent.com/assets/8Dw7CceCBzCnlWKOSnlDEADgwQ8.mp4"
            type="video/mp4"
          />
        </video>
        {/* Cinematic Vignette and Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/40 to-transparent pointer-events-none" />
      </div>

      {/* Top Metadata Strip */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-10 w-full max-w-[1440px] mx-auto flex items-center justify-between border-b border-white/15 pb-4"
      >
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-white/70">
          <span className="text-white font-medium">01 / STUDIO</span>
          <span className="text-white/30">•</span>
          <span>ARCHVIZ + REAL ESTATE</span>
        </div>

        <div className="hidden sm:flex items-center gap-6 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
          <span>LONDON</span>
          <span>•</span>
          <span>ZURICH</span>
          <span>•</span>
          <span>TASHKENT</span>
        </div>
      </motion.div>

      {/* Main Left-Aligned Lower Stage (Master Prompt Spec) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto my-auto py-12 md:py-16">
        <div className="max-w-5xl text-left">
          {/* Headline clamp(64px, 7.5vw, 132px) */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-normal tracking-tight leading-[0.95] text-white mb-8"
          >
            CINEMATIC <br />
            VISUALIZATION <br />
            <span className="font-light text-white/80">FOR ARCHITECTURE</span> <br />
            <span className="italic font-serif font-light text-white/90">&amp; REAL ESTATE</span>
          </motion.h1>

          {/* Supporting Micro-Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-sans text-base sm:text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10 font-light"
          >
            Visuals and films built to communicate architecture before it exists. We turn unbuilt plans into persuasive spatial reality.
          </motion.p>

          {/* Actions: VIEW WORK & START A PROJECT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A880] hover:text-black transition-all duration-200"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white transition-all duration-200"
            >
              <span>VIEW WORK</span>
            </Link>

            {onOpenShowreel && (
              <button
                onClick={onOpenShowreel}
                className="hidden sm:inline-flex items-center gap-2 px-6 py-4 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
              >
                <span>SHOWREEL (90S) ▶</span>
              </button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Coordinates & Scroll Explorer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 w-full max-w-[1440px] mx-auto pt-6 border-t border-white/15 flex items-center justify-between font-mono text-xs text-white/50 uppercase tracking-widest"
      >
        <div className="flex items-center gap-4 sm:gap-8">
          <span>40+ PROJECTS</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">14 COUNTRIES</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">6+ YEARS PRACTICE</span>
        </div>

        <div className="flex items-center gap-2 text-white/70">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
