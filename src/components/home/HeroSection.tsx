import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Sparkles, Building2, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onOpenShowreel?: () => void;
}

export function HeroSection({ onOpenShowreel }: HeroSectionProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const quickServices = [
    'AI Architectural Films',
    'Photorealistic CGI',
    'Real Estate Marketing',
    'Before / After Sliders',
    '3D Modeling & CAD',
    'AI Walkthrough Videos',
    'Construction Timelapse',
    'Adaptive Reuse Vis',
  ];

  return (
    <section className="relative w-full min-h-[100vh] flex flex-col justify-between overflow-hidden bg-[#090a0d] text-white pt-24 sm:pt-28 pb-6 sm:pb-8">
      {/* Background Architectural Video & Atmospheric Shading */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-65' : 'opacity-40'
          } scale-105 filter brightness-[0.85] contrast-[1.08]`}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-at-dusk-40916-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Sophisticated Architectural Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-[#08090b]/30 to-[#08090b]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090b]/80 via-transparent to-[#08090b]/60" />

        {/* Giant Architectural Brand Watermark (Axioma / Kontra Inspired) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-display font-black text-[22vw] tracking-tighter text-white/[0.07] uppercase whitespace-nowrap leading-none transform translate-y-4">
            VANTAGE
          </span>
        </div>
      </div>

      {/* Centerpiece Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto pt-10 sm:pt-14 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          {/* Left Column: Vision & Title */}
          <div className="lg:col-span-8">
            {/* Floating Top AI Tag */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[11px] uppercase tracking-wider text-zinc-200 mb-6 shadow-xl"
            >
              <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
              <span>AI-Powered Architectural Films & Visualization</span>
            </motion.div>

            {/* Monumental Headline with High-End Styling */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-white leading-[1.02]"
            >
              Architectural Vision <br />
              <span className="font-normal italic text-amber-200/90 font-serif">
                Reimagined with AI.
              </span>
            </motion.h1>

            {/* Concise Supporting Copy (Non-cluttered) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-xl leading-relaxed"
            >
              We turn architectural plans, Revit models and concepts into photorealistic visuals and cinematic marketing films before groundbreaking.
            </motion.p>

            {/* Interactive Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/work"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                <span>View Selected Work</span>
                <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center">
                  <ArrowUpRight className="w-2.5 h-2.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium uppercase tracking-wider hover:bg-white/20 transition-all"
              >
                <span>Start a Project</span>
              </Link>

              {onOpenShowreel && (
                <button
                  onClick={onOpenShowreel}
                  data-cursor="PLAY"
                  className="inline-flex items-center gap-2.5 px-4 py-3 text-xs uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
                >
                  <div className="w-7 h-7 rounded-full border border-white/30 bg-black/40 flex items-center justify-center">
                    <Play className="w-3 h-3 fill-white ml-0.5" />
                  </div>
                  <span>Watch Reel (90s)</span>
                </button>
              )}
            </motion.div>
          </div>

          {/* Right Column: Floating Frosted Glass Metric Cards (Axioma / Kontra inspired) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="glass-card rounded-3xl p-5 border border-white/15 shadow-2xl flex-1 hover:border-white/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  100+
                </span>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-amber-200">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
                Architectural Projects
              </p>
              <p className="text-[11px] text-zinc-400 font-light mt-1">
                Visualized and delivered for premier developers & architects across Europe, the Middle East and Central Asia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="glass-card rounded-3xl p-5 border border-white/15 shadow-2xl flex-1 hover:border-white/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  60%
                </span>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-emerald-400">
                  <Film className="w-3.5 h-3.5" />
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
                Faster Launch Turnaround
              </p>
              <p className="text-[11px] text-zinc-400 font-light mt-1">
                Proprietary AI motion synthesis cuts animation lead times without compromising millimeter BIM precision.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Pill Bar with Quick Services (Zero Space & Axioma inspired) */}
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
                className="px-3 py-1 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/10 text-[10px] uppercase tracking-wider text-zinc-300 whitespace-nowrap transition-colors"
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
