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

  // Clean, symmetrical translations: compact vertical layout on mobile (<768px), wide diagonal on desktop (>=768px)
  const tlX = useTransform(spread, (v) => {
    const isMob = typeof window !== 'undefined' && window.innerWidth < 768;
    return `${v * (isMob ? -82 : -155)}%`;
  });
  const tlY = useTransform(spread, (v) => {
    const isMob = typeof window !== 'undefined' && window.innerWidth < 768;
    return `${v * (isMob ? -185 : -168)}%`;
  });

  const trX = useTransform(spread, (v) => {
    const isMob = typeof window !== 'undefined' && window.innerWidth < 768;
    return `${v * (isMob ? 82 : 155)}%`;
  });
  const trY = useTransform(spread, (v) => {
    const isMob = typeof window !== 'undefined' && window.innerWidth < 768;
    return `${v * (isMob ? -185 : -168)}%`;
  });

  const blX = useTransform(spread, (v) => {
    const isMob = typeof window !== 'undefined' && window.innerWidth < 768;
    return `${v * (isMob ? -82 : -155)}%`;
  });
  const blY = useTransform(spread, (v) => {
    const isMob = typeof window !== 'undefined' && window.innerWidth < 768;
    return `${v * (isMob ? 185 : 168)}%`;
  });

  const brX = useTransform(spread, (v) => {
    const isMob = typeof window !== 'undefined' && window.innerWidth < 768;
    return `${v * (isMob ? 82 : 155)}%`;
  });
  const brY = useTransform(spread, (v) => {
    const isMob = typeof window !== 'undefined' && window.innerWidth < 768;
    return `${v * (isMob ? 185 : 168)}%`;
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[125vh] bg-[#0A0A0A] text-white select-none overflow-visible"
    >
      {/* Pinned Viewport Stage */}
      <div className="sticky top-0 w-full h-[100svh] min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Subtle Ambient Radial Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-zinc-900/40 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none" />

        {/* Central Stage Container (Refined balanced luxury scale) */}
        <div className="relative w-full max-w-[1240px] h-full flex items-center justify-center px-4 sm:px-6">
          {/* ========================================================= */}
          {/* 1. DESKTOP CONNECTING ARROWS (EXACT SYMMETRICAL 45° DIAGONALS) */}
          {/* Placed at z-[25] so solid white arrowheads are 100% visible */}
          {/* ========================================================= */}
          <motion.svg
            viewBox="-600 -350 1200 700"
            preserveAspectRatio="xMidYMid meet"
            style={{ opacity: shouldReduceMotion ? 0.8 : lineOpacity }}
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-[25]"
          >
            <defs>
              <marker
                id="arrowhead-diag-desktop"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="4"
                orient="auto"
              >
                <polygon points="0 1, 8 4, 0 7" fill="#FFFFFF" />
              </marker>
            </defs>

            {/* 1. Top-Left Diagonal Arrow (Center Villa to Tree Canopy) */}
            <motion.line
              x1="-252"
              y1="-142"
              x2="-294"
              y2="-184"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2"
              strokeDasharray="5 4"
              markerEnd="url(#arrowhead-diag-desktop)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            {/* 2. Top-Right Diagonal Arrow (Center Villa to Wall Sculpture) */}
            <motion.line
              x1="252"
              y1="-142"
              x2="294"
              y2="-184"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2"
              strokeDasharray="5 4"
              markerEnd="url(#arrowhead-diag-desktop)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            {/* 3. Bottom-Left Diagonal Arrow (Center Villa to Pool Landscape) */}
            <motion.line
              x1="-252"
              y1="142"
              x2="-294"
              y2="184"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2"
              strokeDasharray="5 4"
              markerEnd="url(#arrowhead-diag-desktop)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            {/* 4. Bottom-Right Diagonal Arrow (Center Villa to Timber Soffit) */}
            <motion.line
              x1="252"
              y1="142"
              x2="294"
              y2="184"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2"
              strokeDasharray="5 4"
              markerEnd="url(#arrowhead-diag-desktop)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
          </motion.svg>

          {/* ========================================================= */}
          {/* 2. MOBILE CONNECTING ARROWS (COMPACT VERTICAL LEADER LINES) */}
          {/* ========================================================= */}
          <motion.svg
            viewBox="-200 -250 400 500"
            preserveAspectRatio="xMidYMid meet"
            style={{ opacity: shouldReduceMotion ? 0.8 : lineOpacity }}
            className="block md:hidden absolute inset-0 w-full h-full pointer-events-none z-[25]"
          >
            <defs>
              <marker
                id="arrowhead-diag-mobile"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <polygon points="0 1, 6 3, 0 5" fill="#FFFFFF" />
              </marker>
            </defs>

            {/* 1. Mobile Top-Left Arrow */}
            <motion.line
              x1="-70"
              y1="-62"
              x2="-80"
              y2="-88"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrowhead-diag-mobile)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            {/* 2. Mobile Top-Right Arrow */}
            <motion.line
              x1="70"
              y1="-62"
              x2="80"
              y2="-88"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrowhead-diag-mobile)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            {/* 3. Mobile Bottom-Left Arrow */}
            <motion.line
              x1="-70"
              y1="62"
              x2="-80"
              y2="88"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrowhead-diag-mobile)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            {/* 4. Mobile Bottom-Right Arrow */}
            <motion.line
              x1="70"
              y1="62"
              x2="80"
              y2="88"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#arrowhead-diag-mobile)"
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
            className="absolute z-20 w-[115px] sm:w-[150px] md:w-[215px] lg:w-[250px] xl:w-[285px] aspect-[16/9] rounded-lg sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_10px_24px_rgba(0,0,0,0.85)] sm:shadow-[0_16px_36px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
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
            className="absolute z-20 w-[115px] sm:w-[150px] md:w-[215px] lg:w-[250px] xl:w-[285px] aspect-[16/9] rounded-lg sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_10px_24px_rgba(0,0,0,0.85)] sm:shadow-[0_16px_36px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
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
            className="absolute z-20 w-[115px] sm:w-[150px] md:w-[215px] lg:w-[250px] xl:w-[285px] aspect-[16/9] rounded-lg sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_10px_24px_rgba(0,0,0,0.85)] sm:shadow-[0_16px_36px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
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
            className="absolute z-20 w-[115px] sm:w-[150px] md:w-[215px] lg:w-[250px] xl:w-[285px] aspect-[16/9] rounded-lg sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_10px_24px_rgba(0,0,0,0.85)] sm:shadow-[0_16px_36px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
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
            className="relative z-30 w-[220px] sm:w-[300px] md:w-[400px] lg:w-[450px] xl:w-[500px] aspect-[16/9] rounded-lg sm:rounded-2xl overflow-hidden border border-white/35 bg-black shadow-[0_0_50px_rgba(0,0,0,0.95)] sm:shadow-[0_0_80px_rgba(0,0,0,0.95)] group"
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
