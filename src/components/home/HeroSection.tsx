import { motion } from 'framer-motion';
import { ArrowUpRight, Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FramerTextReveal } from '../common/FramerReveal';

interface HeroSectionProps {
  onOpenShowreel?: () => void;
}

export function HeroSection({ onOpenShowreel }: HeroSectionProps) {
  const disciplines = [
    'ARCHITECTURAL VISUALIZATION',
    'CINEMATIC REAL ESTATE FILMS',
    'AI SPATIAL ENHANCEMENT',
    'RENOVATION & ADAPTIVE REUSE',
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background Autoplay Video with Subtle Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 filter brightness-90 contrast-110"
        >
          <source
            src="https://framerusercontent.com/assets/8Dw7CceCBzCnlWKOSnlDEADgwQ8.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark radial glow and gradient fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/30 to-[#050505] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.6)_100%)] pointer-events-none" />
      </div>

      {/* Top Discipline Marquee / Ticker Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 w-full max-w-[1440px] mx-auto border-b border-white/10 pb-4 flex items-center justify-between overflow-hidden"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50 hidden sm:block">
          STUDIO DISCIPLINES //
        </span>
        <div className="flex items-center gap-6 md:gap-10 text-[11px] font-mono tracking-widest text-white/70 overflow-x-auto no-scrollbar">
          {disciplines.map((disc, idx) => (
            <span key={disc} className="flex items-center gap-3 whitespace-nowrap">
              <span>{disc}</span>
              {idx < disciplines.length - 1 && <span className="text-white/20">/</span>}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Center Main Stage */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto my-auto py-12 md:py-20 flex flex-col items-center text-center">
        {/* Verified Rating Capsule (Interio Formula) */}
        <motion.div
          initial={{ opacity: 0.001, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-4 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/15 mb-10 group hover:border-white/30 transition-colors"
        >
          <div className="flex -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
              alt="Developer reviewer"
              className="w-6 h-6 rounded-full border border-black object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
              alt="Architect reviewer"
              className="w-6 h-6 rounded-full border border-black object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80"
              alt="Partner reviewer"
              className="w-6 h-6 rounded-full border border-black object-cover"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400" />
              ))}
            </div>
            <span className="font-mono text-xs font-semibold text-white">4.9/5</span>
          </div>

          <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />

          <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 hidden sm:block">
            BASED ON 240+ VERIFIED COMMISSIONS
          </span>
        </motion.div>

        {/* Monumental Headline with Staggered Word Blur Reveal */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.02] text-white max-w-6xl mb-8">
          <FramerTextReveal
            text="Cinematic Visualization & AI-Powered Real Estate Films"
            delay={0.4}
          />
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-sans text-base sm:text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-12 font-light"
        >
          We transform architectural blueprints, BIM models, and unbuilt concepts into photorealistic CGI and cinematic marketing films that command capital.
        </motion.p>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A880] hover:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-white/15 hover:border-white transition-all duration-200"
          >
            <span>VIEW SELECTED WORK</span>
          </Link>

          {onOpenShowreel && (
            <button
              onClick={onOpenShowreel}
              className="inline-flex items-center gap-2.5 px-6 py-4 text-white/80 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors"
            >
              <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center">
                <Play className="w-3 h-3 fill-white ml-0.5" />
              </div>
              <span>WATCH REEL (90S)</span>
            </button>
          )}
        </motion.div>
      </div>

      {/* Bottom Coordinates & Quick Stat Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 w-full max-w-[1440px] mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-white/40 uppercase tracking-widest"
      >
        <div className="flex items-center gap-6">
          <span>ATELIERS: LONDON / ZURICH / TASHKENT</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">24H SCOPING RESPONSE</span>
        </div>
        <div className="flex items-center gap-2 text-white/60">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>PRODUCTION VAULT ACTIVE — 2026</span>
        </div>
      </motion.div>
    </section>
  );
}
