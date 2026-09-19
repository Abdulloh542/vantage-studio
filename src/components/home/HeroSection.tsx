import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onOpenShowreel?: () => void;
}

export function HeroSection({ onOpenShowreel }: HeroSectionProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const quickServices = [
    'Architectural Visualization',
    'AI Neural Enhancements',
    'Real Estate Films',
    'AI Walkthrough Videos',
    'Virtual Sales Galleries',
    'BIM to Photorealism',
  ];

  return (
    <section className="relative w-full min-h-[100vh] flex flex-col justify-between overflow-hidden bg-black text-white pt-28 pb-6">
      {/* Background Video with Fallback Poster */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-70' : 'opacity-40'
          } scale-105 filter brightness-[0.85]`}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-at-dusk-40916-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Sophisticated Dark Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />

        {/* Monumental Watermark Branding (Axioma / Kontra inspired) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display font-extrabold text-[18vw] tracking-[0.12em] text-white/[0.04] leading-none uppercase select-none">
            VANTAGE
          </span>
        </div>
      </div>

      {/* Hero Content Grid: Left Text + Right Axioma Stat Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Concise & Authoritative Copy */}
          <div className="lg:col-span-7">
            {/* Studio Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-widest text-zinc-200 mb-6 shadow-lg"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>AI Architectural Visualization & Films</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.02] text-white"
            >
              Architectural Visions. <br />
              <span className="font-semibold text-zinc-200">
                Cinematic Reality.
              </span>
            </motion.h1>

            {/* Concise Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-xl leading-relaxed"
            >
              We transform blueprints, BIM models, and architectural concepts into photorealistic CGI and AI-powered cinematic films before groundbreaking.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 hover:shadow-2xl transition-all duration-200 active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium uppercase tracking-wider hover:bg-white/20 transition-all duration-200"
              >
                <span>View Selected Work</span>
              </Link>

              {onOpenShowreel && (
                <button
                  onClick={onOpenShowreel}
                  data-cursor="PLAY"
                  className="inline-flex items-center gap-2.5 px-4 py-3 text-xs uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
                >
                  <div className="w-7 h-7 rounded-full border border-white/25 bg-black/30 flex items-center justify-center">
                    <Play className="w-3 h-3 fill-white ml-0.5" />
                  </div>
                  <span>Watch Reel (90s)</span>
                </button>
              )}
            </motion.div>
          </div>

          {/* Right Column: Floating Frosted Glass Metric Cards (Axioma Standard) */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-4 pl-6">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="glass-panel rounded-2xl p-5 border border-white/15 shadow-2xl hover:border-white/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-display text-3xl font-bold text-white tracking-tight">
                  10+
                </span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                  Years Practice
                </span>
              </div>
              <p className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Architectural Mastery
              </p>
              <p className="text-[11px] text-zinc-400 font-light mt-1 leading-relaxed">
                Pioneering photorealistic visualization for visionary architects, developers, and funds across Europe and the globe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="glass-panel rounded-2xl p-5 border border-white/15 shadow-2xl hover:border-white/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-display text-3xl font-bold text-emerald-400 tracking-tight">
                  4x
                </span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-400/80 font-medium">
                  AI Pipeline
                </span>
              </div>
              <p className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Accelerated Turnaround
              </p>
              <p className="text-[11px] text-zinc-400 font-light mt-1 leading-relaxed">
                Proprietary AI neural rendering accelerates cinematic production without compromising millimeter BIM precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="glass-panel rounded-2xl p-5 border border-white/15 shadow-2xl hover:border-white/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-display text-3xl font-bold text-white tracking-tight">
                  $1.8B+
                </span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                  Portfolio GMV
                </span>
              </div>
              <p className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Real Estate Visualized
              </p>
              <p className="text-[11px] text-zinc-400 font-light mt-1 leading-relaxed">
                High-converting imagery and films launching prestigious commercial and residential landmarks.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Quick Disciplines (Zero-Space & Axioma inspired) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-zinc-400 font-light">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Closer to vision, closer to reality</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {quickServices.map((service, index) => (
              <span
                key={index}
                className="px-3.5 py-1 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/10 text-[10px] uppercase tracking-wider text-zinc-300 whitespace-nowrap transition-colors"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
