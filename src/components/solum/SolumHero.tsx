import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LogoTicker } from '../common/LogoTicker';

const CLIENT_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
];

const CLIENT_LOGOS = [
  { name: 'FOSTER', label: 'FOSTER + PARTNERS' },
  { name: 'HERZOG', label: 'HERZOG & DE MEURON' },
  { name: 'GENSLER', label: 'GENSLER' },
  { name: 'PATRIZIA', label: 'PATRIZIA' },
  { name: 'BROOKFIELD', label: 'BROOKFIELD' },
  { name: 'CBRE', label: 'CBRE' },
];

export function SolumHero() {
  const [currentTime, setCurrentTime] = useState('');
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax strictly limited to 8% within clipped media frame
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  // Real-time live clock (e.g. Sep 19, 09:37 AM)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const monthDay = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTime(`${monthDay}, ${timeStr}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  // Single ultra-luxury high-converting ArchViz image (or video background when provided)
  const heroMedia = {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2560&q=90',
    title: 'Riviera Residence Dusk Villa',
    videoUrl: '', // Ready for video URL when provided
  };

  const baseDelay = typeof window !== 'undefined' && sessionStorage.getItem('vantage_preloader_seen') ? 0.05 : 0.45;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#101010] text-white flex flex-col justify-between overflow-hidden select-none"
    >
      {/* 4-Column Visible Hairline Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-4 px-6 md:px-10 z-20">
        <div className="border-r border-white/[0.1] h-full hidden md:block" />
        <div className="border-r border-white/[0.1] h-full hidden md:block" />
        <div className="border-r border-white/[0.1] h-full hidden md:block" />
        <div className="h-full hidden md:block" />
      </div>

      {/* ========================================================= */}
      {/* 1) SINGLE CINEMATIC HERO MEDIA (Image or Video)           */}
      {/* Scale 1.15 -> 1.00 & Opacity 0 -> 1, clipped by frame     */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: shouldReduceMotion ? '0%' : parallaxY }}
          className="w-full h-full"
        >
          {heroMedia.videoUrl ? (
            <video
              src={heroMedia.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover filter brightness-90 contrast-105"
            />
          ) : (
            <motion.img
              src={heroMedia.image}
              alt={heroMedia.title}
              initial={
                shouldReduceMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 1.15 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 1.8,
                delay: baseDelay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full h-full object-cover filter brightness-90 contrast-105 origin-center will-change-transform"
            />
          )}
        </motion.div>

        {/* Cinematic Vignette & Deep Contrast Gradient for Flawless Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/50 pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* TOP BAR: Wordmark, Location, Clock, and Status            */}
      {/* ========================================================= */}
      <div className="relative z-30 pt-6 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: baseDelay + 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center font-mono text-sm text-white/90"
        >
          {/* Col 1: Small Wordmark */}
          <div className="col-span-1 flex items-center gap-3">
            <Link to="/" className="font-sans font-bold text-base sm:text-lg tracking-[-0.04em] text-white">
              Vantage&reg;
            </Link>
            <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 border border-white/20 text-white/70">
              STUDIO
            </span>
          </div>

          {/* Col 2: Hub Locations */}
          <div className="hidden md:block col-span-1 text-white/80 font-mono text-xs sm:text-sm">
            London &bull; Zurich &bull; Global
          </div>

          {/* Col 3: Real-Time Live Clock */}
          <div className="hidden md:block col-span-1 text-white/90 tabular-nums font-mono text-xs sm:text-sm">
            {currentTime || 'Sep 19, 09:37 AM'}
          </div>

          {/* Col 4: Status Indicator */}
          <div className="col-span-1 flex justify-end items-center gap-2 text-xs font-mono text-white/70">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">COMMISSIONS OPEN Q3/Q4</span>
          </div>
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* CENTER HERO STAGE: High-Impact Selling Headline & CTAs    */}
      {/* ========================================================= */}
      <div className="relative z-30 my-auto py-12 md:py-16 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Stage: Main Headline & Core Proposition (Col 1-7) */}
          <div className="md:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: baseDelay + 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-mono tracking-wider text-white"
            >
              <span>AI-POWERED ARCHITECTURAL VISUALIZATION &amp; REAL ESTATE FILMS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: baseDelay + 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(44px,7.5vw,104px)] font-bold tracking-[-0.05em] leading-[0.92] text-white"
            >
              WE TURN UNBUILT <br />
              CONCEPTS INTO <br />
              <span className="text-white/80 font-serif italic font-normal tracking-tight">
                SENSORY REALITY.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: baseDelay + 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-sans text-base sm:text-lg lg:text-xl text-white/85 font-light leading-relaxed max-w-xl"
            >
              We transform architectural plans, raw CAD models, and blueprints into photorealistic CGI and cinematic marketing films that sell multi-million dollar developments off-plan.
            </motion.p>
          </div>

          {/* Right Stage: Primary Commercial CTAs & Selling Bulletproof Proof (Col 8-12) */}
          <div className="md:col-span-5 flex flex-col justify-between items-start md:items-end space-y-8">
            {/* Quick Selling Proof Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.75,
                delay: baseDelay + 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full md:max-w-sm p-6 bg-black/60 backdrop-blur-md border border-white/15 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="font-mono text-xs text-white/60 uppercase">STUDIO METRICS</span>
                <span className="font-mono text-xs text-emerald-400">100% OFF-PLAN TRACK RECORD</span>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <span className="text-2xl sm:text-3xl font-display font-bold text-white block">
                    $1.8B+
                  </span>
                  <span className="text-white/60 uppercase text-[11px]">GDV Visualized</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-display font-bold text-white block">
                    3 WEEKS
                  </span>
                  <span className="text-white/60 uppercase text-[11px]">Avg Turnaround</span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons: Start a Project + View Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: baseDelay + 1.0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full md:max-w-sm flex flex-col sm:flex-row gap-3"
            >
              {/* Primary Split Start a Project Button */}
              <Link
                to="/contact"
                className="group flex-1 flex items-stretch bg-white text-[#101010] hover:bg-[#F6F6F2] transition-colors duration-180 shadow-2xl"
              >
                <div className="flex-1 py-4 px-6 font-sans font-semibold text-sm sm:text-base tracking-[-0.02em] whitespace-nowrap">
                  Start a Project
                </div>
                <div className="w-12 border-l border-[#101010]/15 flex items-center justify-center group-hover:bg-[#101010] group-hover:text-white transition-colors duration-180">
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-160 ease-out group-hover:translate-x-1" />
                </div>
              </Link>

              {/* Secondary View Projects Button */}
              <Link
                to="/projects"
                className="px-6 py-4 border border-white/30 hover:border-white text-white font-mono text-xs sm:text-sm uppercase tracking-wider text-center transition-colors duration-180 whitespace-nowrap hover:bg-white/10"
              >
                View Works
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM STRIP: Social Proof Avatars & Draggable Logo Marquee*/}
      {/* Clean, no 4-thumbnail switcher clutter                   */}
      {/* ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: baseDelay + 1.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-30 pb-8 pt-6 px-6 md:px-10 border-t border-white/15"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left: Overlapping Avatars + Social Proof (Col 1-5) */}
          <div className="md:col-span-5 flex items-center gap-3">
            <div className="flex -space-x-2.5 overflow-hidden">
              {CLIENT_AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Client avatar"
                  className="inline-block w-8 h-8 rounded-full border-2 border-[#101010] object-cover"
                />
              ))}
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/90 leading-tight">
              Trusted by 100+ premier architects, property developers, and sovereign funds.
            </p>
          </div>

          {/* Right: Draggable Logo Ticker (~20px/s, pauses on hover) (Col 6-12) */}
          <div className="md:col-span-7 overflow-hidden">
            <LogoTicker logos={CLIENT_LOGOS} speed={22} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
