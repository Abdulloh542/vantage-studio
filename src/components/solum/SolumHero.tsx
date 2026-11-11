import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AtlasLogo } from '../common/AtlasLogo';

export function SolumHero() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  // Smooth scroll-linked hero depth (Omnya Lab style)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  const heroImage = '/videos/hero_poster.webp';
  const heroVideoUrl = '/videos/hero.mp4';

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#111111] text-white flex flex-col justify-end pb-16 md:pb-20 overflow-hidden select-none"
    >
      {/* ========================================================= */}
      {/* 1) HERO BACKGROUND: Bright Ambient Cinematic Video        */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={
            shouldReduceMotion
              ? undefined
              : { y: mediaY, scale: mediaScale }
          }
          className="w-full h-full will-change-transform"
        >
          <motion.div
            initial={shouldReduceMotion ? false : { scale: 1.07 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.45,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full h-full will-change-transform"
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
        </motion.div>

        {/* Soft bottom vignette for crisp editorial legibility */}
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/65 via-black/25 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* 2) HERO STAGE: Atlas Studio Logo, Statement & Action      */}
      {/* ========================================================= */}
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : { y: copyY, opacity: copyOpacity }
        }
        className="relative z-30 px-6 sm:px-10 md:px-14 lg:px-20 will-change-transform"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Stage: Bespoke Atlas Studio Logo & Subtitle */}
          <div className="md:col-span-8">
            <div className="overflow-hidden mb-5 py-1 drop-shadow-[0_4px_20px_rgba(0,0,0,0.75)]">
              <motion.div
                initial={shouldReduceMotion ? false : { y: '105%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 0.9,
                  delay: 0.52,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h1 className="sr-only">Atlas Studio — Architectural Visualization & Spatial CGI</h1>
                <AtlasLogo
                  variant="stacked"
                  className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto text-white"
                />
              </motion.div>
            </div>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.68,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-sans text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]"
            >
              Architecture and visual studio creating photorealistic 3D CGI, interactive experiences, and cinematic films so buyers feel your space before it is built.
            </motion.p>
          </div>

          {/* Right Stage: Minimalist Pill & Action Buttons */}
          <div className="md:col-span-4 flex flex-wrap md:justify-end items-center gap-3">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.76,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#B86B4B] hover:bg-[#A35B3D] text-white px-6 py-3.5 text-xs sm:text-sm font-medium tracking-[-0.01em] transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.3)]"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white/12 hover:bg-white/22 backdrop-blur-md border border-white/25 text-white px-5 py-3.5 text-xs sm:text-sm font-medium tracking-[-0.01em] transition-all duration-300"
              >
                <span>See our work</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Omnya Lab Minimalist Bottom Scroll Indicator */}
        <div className="mt-10 pt-5 border-t border-white/15 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-white/75">
          <span>Photorealistic 4K CGI · First views in 1–2 days</span>
          <div className="flex items-center gap-3">
            <span>Scroll</span>
            <span className="relative w-[1px] h-7 bg-white/25 overflow-hidden inline-block">
              <motion.span
                animate={{ y: ['-100%', '100%'] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="block w-full h-full bg-white"
              />
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
