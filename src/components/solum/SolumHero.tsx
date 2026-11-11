import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AtlasLogo } from '../common/AtlasLogo';

export function SolumHero() {
  const shouldReduceMotion = useReducedMotion();
  const [mountVideo, setMountVideo] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Defer video network stream until right after initial paint & curtain lift start
  // so initial load, fonts, and CSS paint at 120fps with zero main-thread contention.
  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = window.setTimeout(() => {
      setMountVideo(true);
    }, 180);
    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  const heroImage = '/videos/hero_poster.webp';
  const heroVideoUrl = '/videos/hero.mp4';

  return (
    <section className="relative min-h-screen w-full bg-[#101010] text-white flex flex-col justify-end pb-16 md:pb-24 overflow-hidden select-none">
      {/* ========================================================= */}
      {/* 1) HERO BACKGROUND: Instant Poster + Seamless Ambient Video */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#101010]">
        {/* Preloaded static poster painted immediately at frame 0 — zero blank flash */}
        <img
          src={heroImage}
          alt="Atlas Studio Architecture Living Space"
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />

        {mountVideo && !shouldReduceMotion && (
          <video
            src={heroVideoUrl}
            poster={heroImage}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            onPlaying={() => setVideoPlaying(true)}
            onCanPlay={() => setVideoPlaying(true)}
            className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none transition-opacity duration-500 ${
              videoPlaying ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Minimal soft vignette strictly at bottom to ensure text legibility while keeping video naturally bright */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* 2) HERO STAGE: Clean Classic Typography & Action          */}
      {/* ========================================================= */}
      <div className="relative z-30 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 items-end">
          {/* Left Stage: Bespoke Atlas Studio Logo & Subtitle */}
          <div className="col-span-1 md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
            >
              <h1 className="sr-only">Atlas Studio</h1>
              <AtlasLogo
                variant="stacked"
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto text-white"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-sm sm:text-base md:text-lg text-white font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
            >
              Architecture and visual studio creating photorealistic CGI and cinematic marketing films for unbuilt spaces.
            </motion.p>
          </div>

          {/* Right Stage: Split Start a Project Button */}
          <div className="col-span-1 md:col-span-1 flex flex-col justify-end items-start md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-stretch bg-white text-[#101010] hover:bg-[#F4F4F0] transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-white"
              >
                <div className="py-3 px-5 sm:px-6 font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] flex items-center whitespace-nowrap">
                  Start a Project
                </div>
                <div className="w-11 sm:w-12 border-l border-[#101010]/15 flex items-center justify-center bg-white group-hover:bg-[#101010] group-hover:text-white transition-colors duration-200">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
