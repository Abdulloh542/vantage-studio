import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onOpenShowreel?: () => void;
}

export function HeroSection({ onOpenShowreel }: HeroSectionProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const scrollToWork = () => {
    const workSection = document.getElementById('manifesto-section') || document.getElementById('selected-work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[94vh] min-h-[700px] flex flex-col justify-between overflow-hidden bg-[#050505] text-white pt-24 pb-8">
      {/* Background Architectural Video with Scale Entrance */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-70' : 'opacity-40'
          } filter brightness-[0.82] contrast-105`}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-at-dusk-40916-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Subtle Architectural Film Grain Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] opacity-[0.035] [background-size:20px_20px] pointer-events-none" />

        {/* Architectural Vignettes for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/30 to-transparent" />

        {/* Faint Architectural Studio Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display font-extrabold text-[19vw] tracking-[0.12em] text-white/[0.03] leading-none uppercase select-none">
            VANTAGE
          </span>
        </div>
      </motion.div>

      {/* Top Editorial Metadata Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-4">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-zinc-400 border-b border-white/10 pb-3"
        >
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold">01 / STUDIO</span>
            <span className="text-white/20">|</span>
            <span>ARCHVIZ + REAL ESTATE</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR INTERNATIONAL COMMISSIONS</span>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left / Lower-Left Asymmetric Headline */}
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight leading-[0.98] text-white"
            >
              CINEMATIC <br />
              <span className="font-semibold text-zinc-100">VISUALIZATION</span> <br />
              FOR ARCHITECTURE <br />
              <span className="font-normal italic text-zinc-300">& REAL ESTATE</span>
            </motion.h1>

            {/* Supporting Micro-Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-6 text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-xl leading-relaxed"
            >
              Visuals and films built to communicate architecture before it exists.
            </motion.p>

            {/* Actions: VIEW WORK & START A PROJECT */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <Link
                to="/work"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black text-xs font-semibold uppercase tracking-[0.16em] hover:bg-zinc-200 transition-all duration-200 active:scale-95"
              >
                <span>View Work</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-white/30 text-white text-xs font-medium uppercase tracking-[0.16em] hover:bg-white/10 transition-all duration-200"
              >
                <span>Start a Project</span>
              </Link>

              {onOpenShowreel && (
                <button
                  onClick={onOpenShowreel}
                  data-cursor="PLAY"
                  className="inline-flex items-center gap-2.5 px-3 py-3 text-xs uppercase tracking-[0.18em] text-zinc-400 hover:text-white transition-colors"
                >
                  <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                  </div>
                  <span>Watch Reel (90s)</span>
                </button>
              )}
            </motion.div>
          </div>

          {/* Right Column: Architectural Studio Metrics Box (Norda / Archform inspired) */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-6 pl-8 border-l border-white/10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="space-y-1"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-mono">
                PRACTICE STATS
              </span>
              <div className="text-3xl font-display font-semibold text-white tracking-tight">
                40+ Projects
              </div>
              <p className="text-xs text-zinc-400 font-light">
                Visualized across 14 countries in Europe, the Middle East, and Central Asia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="space-y-1 pt-4 border-t border-white/10"
            >
              <div className="text-3xl font-display font-semibold text-emerald-400 tracking-tight">
                4x AI Turnaround
              </div>
              <p className="text-xs text-zinc-400 font-light">
                Proprietary neural rendering accelerates film lead times with zero millimeter loss.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="space-y-1 pt-4 border-t border-white/10"
            >
              <div className="text-3xl font-display font-semibold text-white tracking-tight">
                $1.8B+ Portfolio
              </div>
              <p className="text-xs text-zinc-400 font-light">
                Commercial off-plan value launched with our digital CGI and cinematic films.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Bar: Scroll To Explore Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-between border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.22em] text-zinc-400"
        >
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">VANTAGE</span>
            <span>—</span>
            <span>ARCHITECTURAL CINEMA & CGI</span>
          </div>

          <button
            onClick={scrollToWork}
            className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors focus:outline-none"
          >
            <span>Scroll to Explore</span>
            <div className="w-5 h-5 rounded-full border border-white/25 flex items-center justify-center animate-bounce">
              <ArrowDown className="w-3 h-3" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
