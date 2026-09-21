import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

export function SolumSpatialBreakdown() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Pinned viewport scroll: compact travel, smoothly expands and promptly continues down
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Physical liquid spring: silky smooth 60fps/120Hz tracking
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 190,
    damping: 26,
    mass: 0.35,
    restDelta: 0.001,
  });

  // Smoothly expands between 4% and 70% of scroll, then promptly continues down without getting stuck!
  const spread = useTransform(smoothProgress, [0.04, 0.70], [0, 1]);
  const centerScale = useTransform(smoothProgress, [0, 0.35, 0.8, 1], [0.97, 1, 1, 0.98]);

  // Card opacity rises smoothly and stays 100% solid
  const cardOpacity = useTransform(smoothProgress, [0.04, 0.30], [0, 1]);
  const cardScale = useTransform(smoothProgress, [0.04, 0.70], [0.8, 1]);
  const lineOpacity = useTransform(smoothProgress, [0.12, 0.50], [0, 0.9]);

  // Clean, symmetrical diagonal translations that easily fit within any laptop or desktop screen
  const tlX = useTransform(spread, (v) => `${v * -162}%`);
  const tlY = useTransform(spread, (v) => `${v * -172}%`);

  const trX = useTransform(spread, (v) => `${v * 162}%`);
  const trY = useTransform(spread, (v) => `${v * -172}%`);

  const blX = useTransform(spread, (v) => `${v * -162}%`);
  const blY = useTransform(spread, (v) => `${v * 172}%`);

  const brX = useTransform(spread, (v) => `${v * 162}%`);
  const brY = useTransform(spread, (v) => `${v * 172}%`);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[125vh] bg-[#0A0A0A] text-white select-none overflow-visible"
    >
      {/* Pinned Viewport Stage */}
      <div className="sticky top-0 w-full h-[100svh] min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Subtle Ambient Radial Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-zinc-900/40 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none" />

        {/* Central Stage Container (Compact, perfectly fitting viewport) */}
        <div className="relative w-full max-w-[1100px] h-full flex items-center justify-center px-4 sm:px-6">
          {/* ========================================================= */}
          {/* CONNECTING ARROWS (EXACT SYMMETRICAL 42.5° DIAGONALS)     */}
          {/* Placed at z-10 BEHIND cards (z-20) so they NEVER pierce photos */}
          {/* ========================================================= */}
          <motion.svg
            viewBox="-500 -300 1000 600"
            preserveAspectRatio="xMidYMid meet"
            style={{ opacity: shouldReduceMotion ? 0.8 : lineOpacity }}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          >
            <defs>
              <marker
                id="arrowhead-diag"
                markerWidth="7"
                markerHeight="7"
                refX="5"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 1, 6 3.5, 0 6" fill="rgba(255,255,255,0.9)" />
              </marker>
            </defs>

            {/* 1. Top-Left Diagonal Arrow (Center Villa corner to Tree Canopy corner) */}
            <motion.line
              x1="-210"
              y1="-118"
              x2="-258"
              y2="-158"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-diag)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            {/* 2. Top-Right Diagonal Arrow (Center Villa corner to Wall Sculpture corner) */}
            <motion.line
              x1="210"
              y1="-118"
              x2="258"
              y2="-158"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-diag)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            {/* 3. Bottom-Left Diagonal Arrow (Center Villa corner to Pool Landscape corner) */}
            <motion.line
              x1="-210"
              y1="118"
              x2="-258"
              y2="158"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-diag)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            {/* 4. Bottom-Right Diagonal Arrow (Center Villa corner to Timber Soffit corner) */}
            <motion.line
              x1="210"
              y1="118"
              x2="258"
              y2="158"
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
            className="absolute z-20 w-[110px] sm:w-[140px] md:w-[180px] lg:w-[205px] xl:w-[230px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_16px_36px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
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
            className="absolute z-20 w-[110px] sm:w-[140px] md:w-[180px] lg:w-[205px] xl:w-[230px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_16px_36px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
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
            className="absolute z-20 w-[110px] sm:w-[140px] md:w-[180px] lg:w-[205px] xl:w-[230px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_16px_36px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
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
            className="absolute z-20 w-[110px] sm:w-[140px] md:w-[180px] lg:w-[205px] xl:w-[230px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_16px_36px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
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
            className="relative z-30 w-[220px] sm:w-[280px] md:w-[350px] lg:w-[400px] xl:w-[440px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/35 bg-black shadow-[0_0_80px_rgba(0,0,0,0.95)] group"
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
