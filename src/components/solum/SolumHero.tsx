import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SolumHero() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax strictly limited to 6%
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);

  const heroImage = '/videos/hero_poster.webp';
  const heroVideoUrl = '/videos/hero.mp4';

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#101010] text-white flex flex-col justify-end pb-16 md:pb-24 overflow-hidden select-none"
    >
      {/* ========================================================= */}
      {/* 1) HERO BACKGROUND: Natural Bright Ambient Cinematic Video */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: shouldReduceMotion ? '0%' : parallaxY }}
          className="w-full h-full"
        >
          {heroVideoUrl ? (
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 1.05 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full h-full"
            >
              <video
                src={heroVideoUrl}
                poster={heroImage}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                controls={false}
                disablePictureInPicture
                className="w-full h-full object-cover pointer-events-none select-none"
              />
            </motion.div>
          ) : (
            <motion.img
              src={heroImage}
              alt="Vantage Architecture Living Space"
              initial={
                shouldReduceMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 1.05 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full h-full object-cover origin-center will-change-transform"
            />
          )}
        </motion.div>

        {/* Minimal soft vignette strictly at bottom to ensure text legibility while keeping video naturally bright */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* 2) HERO STAGE: Clean Classic Typography & Action          */}
      {/* ========================================================= */}
      <div className="relative z-30 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 items-end">
          {/* Left Stage: Refined Classic Vantage® Wordmark & Subtitle */}
          <div className="col-span-1 md:col-span-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-tight text-white mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
            >
              Vantage&reg;
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-sm sm:text-base md:text-lg text-white font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
            >
              Architecture and visual studio creating photorealistic CGI and cinematic marketing films for unbuilt spaces.
            </motion.p>
          </div>

          {/* Right Stage: Split Start a Project Button */}
          <div className="col-span-1 md:col-span-1 flex flex-col justify-end items-start md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
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
