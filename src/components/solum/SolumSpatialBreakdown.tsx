import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

export function SolumSpatialBreakdown() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Pinned viewport scroll: expands smoothly, then promptly continues down without freezing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Physical liquid spring: silky smooth 60fps/120Hz tracking, zero discrete 'wop' jumps
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    mass: 0.38,
    restDelta: 0.001,
  });

  // Smoothly expands between 4% and 65% of scroll, then immediately continues down without freeze!
  const spread = useTransform(smoothProgress, [0.04, 0.65], [0, 1]);
  const centerScale = useTransform(smoothProgress, [0, 0.3, 0.8, 1], [0.97, 1, 1, 0.98]);

  // Card opacity rises smoothly and stays 100% solid
  const cardOpacity = useTransform(smoothProgress, [0.04, 0.28], [0, 1]);
  const cardScale = useTransform(smoothProgress, [0.04, 0.65], [0.78, 1]);
  const lineOpacity = useTransform(smoothProgress, [0.12, 0.45], [0, 0.9]);

  // Symmetrical diagonal translations matching the 33° arrow vectors
  const tlX = useTransform(spread, (v) => `${v * -148}%`);
  const tlY = useTransform(spread, (v) => `${v * -128}%`);

  const trX = useTransform(spread, (v) => `${v * 148}%`);
  const trY = useTransform(spread, (v) => `${v * -128}%`);

  const blX = useTransform(spread, (v) => `${v * -148}%`);
  const blY = useTransform(spread, (v) => `${v * 128}%`);

  const brX = useTransform(spread, (v) => `${v * 148}%`);
  const brY = useTransform(spread, (v) => `${v * 128}%`);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[135vh] bg-[#0A0A0A] text-white select-none overflow-visible"
    >
      {/* Pinned Viewport Stage */}
      <div className="sticky top-0 w-full h-[100svh] min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Subtle Ambient Radial Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-zinc-900/40 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none" />

        {/* Central Stage Container (Balanced luxury scale) */}
        <div className="relative w-full max-w-[1240px] h-full flex items-center justify-center px-4 sm:px-6">
          {/* ========================================================= */}
          {/* CONNECTING ARROWS (EXACT SYMMETRICAL 33° DIAGONALS)       */}
          {/* Placed at z-10 BEHIND cards (z-20) so they NEVER pierce photos */}
          {/* ========================================================= */}
          <motion.svg
            viewBox="0 0 1000 600"
            preserveAspectRatio="xMidYMid meet"
            style={{ opacity: shouldReduceMotion ? 0.8 : lineOpacity }}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          >
            <defs>
              <marker
                id="arrowhead-diag"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto"
              >
                <polygon points="0 1, 7 4, 0 7" fill="rgba(255,255,255,0.9)" />
              </marker>
            </defs>

            {/* 1. Top-Left Diagonal Arrow (Center Villa to Tree Canopy) */}
            <motion.line
              x1="350"
              y1="220"
              x2="250"
              y2="155"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-diag)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            {/* 2. Top-Right Diagonal Arrow (Center Villa to Wall Sculpture) */}
            <motion.line
              x1="650"
              y1="220"
              x2="750"
              y2="155"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-diag)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            {/* 3. Bottom-Left Diagonal Arrow (Center Villa to Poolside Landscape) */}
            <motion.line
              x1="350"
              y1="380"
              x2="250"
              y2="445"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-diag)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            {/* 4. Bottom-Right Diagonal Arrow (Center Villa to Timber Soffit Lighting) */}
            <motion.line
              x1="650"
              y1="380"
              x2="750"
              y2="445"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-diag)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
          </motion.svg>

          {/* ========================================================= */}
          {/* 4 EXPANDING DETAIL VIGNETTES (EMERGE FROM BEHIND)          */}
          {/* ========================================================= */}

          {/* 1. TOP-LEFT: Tree Canopy & Balcony Structure */}
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    x: tlX,
                    y: tlY,
                    opacity: cardOpacity,
                    scale: cardScale,
                  }
            }
            className="absolute z-20 w-[125px] sm:w-[165px] md:w-[205px] lg:w-[245px] xl:w-[275px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_16px_40px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
          >
            <img
              src="/images/vignettes/tree_canopy_detail.webp"
              alt="Detail: Tree Canopy & Balcony"
              loading="eager"
              className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 border border-white/20 rounded-xl sm:rounded-2xl pointer-events-none group-hover:border-white/50 transition-colors" />
          </motion.div>

          {/* 2. TOP-RIGHT: Swimmer Wall Sculpture & Facade Travertine */}
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    x: trX,
                    y: trY,
                    opacity: cardOpacity,
                    scale: cardScale,
                  }
            }
            className="absolute z-20 w-[125px] sm:w-[165px] md:w-[205px] lg:w-[245px] xl:w-[275px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_16px_40px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
          >
            <img
              src="/images/vignettes/sculpture_detail.webp"
              alt="Detail: Facade Sculpture"
              loading="eager"
              className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 border border-white/20 rounded-xl sm:rounded-2xl pointer-events-none group-hover:border-white/50 transition-colors" />
          </motion.div>

          {/* 3. BOTTOM-LEFT: Poolside Flora & Botanical Shrubs */}
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    x: blX,
                    y: blY,
                    opacity: cardOpacity,
                    scale: cardScale,
                  }
            }
            className="absolute z-20 w-[125px] sm:w-[165px] md:w-[205px] lg:w-[245px] xl:w-[275px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_16px_40px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
          >
            <img
              src="/images/vignettes/landscape_detail.webp"
              alt="Detail: Botanical Landscaping"
              loading="eager"
              className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 border border-white/20 rounded-xl sm:rounded-2xl pointer-events-none group-hover:border-white/50 transition-colors" />
          </motion.div>

          {/* 4. BOTTOM-RIGHT: Timber Soffit & Architectural Spotlights */}
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : {
                    x: brX,
                    y: brY,
                    opacity: cardOpacity,
                    scale: cardScale,
                  }
            }
            className="absolute z-20 w-[125px] sm:w-[165px] md:w-[205px] lg:w-[245px] xl:w-[275px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_16px_40px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
          >
            <img
              src="/images/vignettes/ceiling_lighting_detail.webp"
              alt="Detail: Architectural Lighting"
              loading="eager"
              className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 border border-white/20 rounded-xl sm:rounded-2xl pointer-events-none group-hover:border-white/50 transition-colors" />
          </motion.div>

          {/* ========================================================= */}
          {/* CENTER MASTER "AFTER" RENDER (MAIN FOCAL POINT)           */}
          {/* ========================================================= */}
          <motion.div
            style={shouldReduceMotion ? undefined : { scale: centerScale }}
            className="relative z-30 w-[240px] sm:w-[330px] md:w-[410px] lg:w-[470px] xl:w-[510px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/35 bg-black shadow-[0_0_80px_rgba(0,0,0,0.95)] group"
          >
            <img
              src="/images/before_after/villa_after.webp"
              alt="Master Architectural Render"
              loading="eager"
              className="w-full h-full object-cover filter brightness-100 group-hover:scale-102 transition-transform duration-500 pointer-events-none"
            />
            {/* Subtle inner border glow */}
            <div className="absolute inset-0 border border-white/10 rounded-xl sm:rounded-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
