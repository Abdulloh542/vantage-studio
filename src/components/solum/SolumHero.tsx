import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SolumHero() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const heroImage = '/videos/hero_poster.webp';
  const heroVideoUrl = '/videos/hero.mp4';

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#101010] text-white flex flex-col justify-end pb-12 sm:pb-16 md:pb-20 overflow-hidden select-none"
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
            initial={shouldReduceMotion ? false : { scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
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

        {/* Top & bottom subtle gradients so top-left Navbar logo and bottom Hero text are 100% legible */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* 2) HERO STAGE: Who We Are / What We Do & Atlas CTA Button */}
      {/* ========================================================= */}
      <div className="relative z-30 max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Stage: Main Value Statement (No Duplicate Logo) */}
          <div className="md:col-span-8 lg:col-span-9">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 mb-3"
            >
              <span className="w-1.5 h-1.5 bg-white inline-block" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white/90">
                Architectural Visualization &amp; Spatial CGI Studio
              </span>
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="font-logo text-[clamp(2.2rem,5.2vw,4.6rem)] font-normal uppercase tracking-[0.03em] leading-[1.02] text-white mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.75)]"
            >
              Photorealistic 3D CGI, Interactive Spaces &amp; Cinema Films
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]"
            >
              We transform architectural blueprints and 3D models into high-converting 4K renders, 9:16 vertical reels, and cinematic walkthroughs for unbuilt real estate.
            </motion.p>
          </div>

          {/* Right Stage: Signature Atlas Studio Split Architectural Button */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col justify-end items-start md:items-end">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-stretch bg-white text-[#101010] hover:bg-[#F5EDE2] transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-white"
              >
                <div className="py-3.5 px-5 sm:px-6 font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] flex items-center whitespace-nowrap">
                  Start a Project
                </div>
                <div className="w-11 sm:w-12 border-l border-[#101010]/15 flex items-center justify-center bg-white group-hover:bg-[#321E13] group-hover:text-white transition-colors duration-200">
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
