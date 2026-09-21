import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

export function SolumSpatialBreakdown() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Pinned viewport scroll: expands smoothly, stays locked and fully open, collapses when exiting to top
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Physical liquid spring: silky smooth 60fps/120Hz tracking, zero discrete 'wop' jumps
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 30,
    mass: 0.35,
    restDelta: 0.001,
  });

  // Smoothly expands between 3% and 28% of scroll, and STAYS 100% open and locked throughout the section!
  const spread = useTransform(smoothProgress, [0.03, 0.28], [0, 1]);
  const centerScale = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0.96, 1, 1, 0.98]);

  // Card opacity rises swiftly from 0 to 1 and stays 100% solid
  const cardOpacity = useTransform(smoothProgress, [0.02, 0.12], [0, 1]);
  const cardScale = useTransform(smoothProgress, [0.03, 0.28], [0.75, 1]);
  const lineOpacity = useTransform(smoothProgress, [0.04, 0.18], [0, 0.9]);

  // Wide translations so all 4 enlarged corner cards CLEAR the center card completely
  const tlX = useTransform(spread, (v) => `${v * -144}%`);
  const tlY = useTransform(spread, (v) => `${v * -128}%`);

  const trX = useTransform(spread, (v) => `${v * 144}%`);
  const trY = useTransform(spread, (v) => `${v * -128}%`);

  const blX = useTransform(spread, (v) => `${v * -144}%`);
  const blY = useTransform(spread, (v) => `${v * 128}%`);

  const brX = useTransform(spread, (v) => `${v * 144}%`);
  const brY = useTransform(spread, (v) => `${v * 128}%`);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[200vh] bg-[#0A0A0A] text-white select-none overflow-visible"
    >
      {/* Pinned Viewport Stage */}
      <div className="sticky top-0 w-full h-[100svh] min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Subtle Ambient Radial Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-zinc-900/40 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none" />

        {/* Central Stage Container */}
        <div className="relative w-full max-w-[1700px] h-full flex items-center justify-center px-4 sm:px-6">
          {/* ========================================================= */}
          {/* CONNECTING ARROWS & HAIRLINE LEADER LINES (SVG)           */}
          {/* Placed at z-10 BEHIND cards (z-20) so they NEVER pierce photos */}
          {/* ========================================================= */}
          <motion.svg
            style={{ opacity: shouldReduceMotion ? 0.8 : lineOpacity }}
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
          >
            <defs>
              <marker
                id="arrowhead-tl"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto"
              >
                <polygon points="0 1, 7 4, 0 7" fill="rgba(255,255,255,0.9)" />
              </marker>
              <marker
                id="arrowhead-tr"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto"
              >
                <polygon points="0 1, 7 4, 0 7" fill="rgba(255,255,255,0.9)" />
              </marker>
              <marker
                id="arrowhead-bl"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto"
              >
                <polygon points="0 1, 7 4, 0 7" fill="rgba(255,255,255,0.9)" />
              </marker>
              <marker
                id="arrowhead-br"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto"
              >
                <polygon points="0 1, 7 4, 0 7" fill="rgba(255,255,255,0.9)" />
              </marker>
            </defs>

            {/* 4 Directional Connecting Arrow Lines (Stop cleanly at card edge without overlapping photo) */}
            <motion.line
              x1="40%"
              y1="37%"
              x2="28%"
              y2="31%"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-tl)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            <motion.line
              x1="60%"
              y1="37%"
              x2="72%"
              y2="31%"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-tr)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            <motion.line
              x1="40%"
              y1="63%"
              x2="28%"
              y2="69%"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-bl)"
              style={shouldReduceMotion ? undefined : { pathLength: spread }}
            />
            <motion.line
              x1="60%"
              y1="63%"
              x2="72%"
              y2="69%"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead-br)"
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
            className="absolute z-10 w-[160px] sm:w-[230px] md:w-[310px] lg:w-[380px] xl:w-[420px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
          >
            <img
              src="/images/vignettes/tree_canopy_detail.webp"
              alt="Detail: Tree Canopy & Balcony"
              loading="eager"
              className="w-full h-full object-cover filter brightness-110 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
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
            className="absolute z-10 w-[160px] sm:w-[230px] md:w-[310px] lg:w-[380px] xl:w-[420px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
          >
            <img
              src="/images/vignettes/sculpture_detail.webp"
              alt="Detail: Facade Sculpture"
              loading="eager"
              className="w-full h-full object-cover filter brightness-110 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
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
            className="absolute z-10 w-[160px] sm:w-[230px] md:w-[310px] lg:w-[380px] xl:w-[420px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
          >
            <img
              src="/images/vignettes/landscape_detail.webp"
              alt="Detail: Botanical Landscaping"
              loading="eager"
              className="w-full h-full object-cover filter brightness-110 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
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
            className="absolute z-10 w-[160px] sm:w-[230px] md:w-[310px] lg:w-[380px] xl:w-[420px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
          >
            <img
              src="/images/vignettes/ceiling_lighting_detail.webp"
              alt="Detail: Architectural Lighting"
              loading="eager"
              className="w-full h-full object-cover filter brightness-110 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 border border-white/20 rounded-xl sm:rounded-2xl pointer-events-none group-hover:border-white/50 transition-colors" />
          </motion.div>

          {/* ========================================================= */}
          {/* CENTER MASTER "AFTER" RENDER (MAIN FOCAL POINT)           */}
          {/* ========================================================= */}
          <motion.div
            style={shouldReduceMotion ? undefined : { scale: centerScale }}
            className="relative z-20 w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[660px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/35 bg-black shadow-[0_0_90px_rgba(0,0,0,0.95)] group"
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
