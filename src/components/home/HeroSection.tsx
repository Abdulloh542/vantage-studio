import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onOpenShowreel?: () => void;
}

export function HeroSection({ onOpenShowreel }: HeroSectionProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const scrollToNext = () => {
    const nextSection = document.getElementById('intro-statement');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[100vh] min-h-[640px] flex items-end overflow-hidden bg-black text-white">
      {/* Background Video with Poster Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-70' : 'opacity-50'
          } scale-105 filter brightness-90`}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-at-dusk-40916-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Sophisticated Dark Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />
      </div>

      {/* Hero Content — Sitting Elegantly in Corner */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24 w-full">
        <div className="max-w-3xl">
          {/* Subtle Studio Pill Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/15 text-[11px] uppercase tracking-widest text-zinc-300 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Atelier & Cinematic Production</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.03] text-white"
          >
            Cinematic Visualization <br />
            <span className="font-normal text-zinc-200">
              for Architecture & Real Estate
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-xl leading-relaxed"
          >
            We transform architectural ideas, blueprints and 3D models into photorealistic imagery, cinematic films and launch experiences before the first brick is laid.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-zinc-200 transition-all duration-200"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-white/30 text-white text-xs font-medium uppercase tracking-widest hover:bg-white/10 transition-all duration-200"
            >
              <span>View Our Work</span>
            </Link>

            {onOpenShowreel && (
              <button
                onClick={onOpenShowreel}
                data-cursor="PLAY"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </div>
                <span>Watch Reel (90s)</span>
              </button>
            )}
          </motion.div>
        </div>

        {/* Subtle Bottom Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 right-8 md:right-12 hidden sm:flex items-center gap-3 cursor-pointer text-zinc-400 hover:text-white transition-colors"
          onClick={scrollToNext}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
            <ArrowDown className="w-3 h-3" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
