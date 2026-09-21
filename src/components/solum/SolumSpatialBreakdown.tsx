import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

export function SolumSpatialBreakdown() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Viewport scroll-driven tracking: starts when section enters, fully expanded at center
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'center 45%'],
  });

  // Physical liquid spring: silky smooth 60fps/120Hz tracking, zero discrete 'wop' jumps
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 28,
    mass: 0.35,
    restDelta: 0.001,
  });

  // Direct 1:1 progressive expansion across the entire travel range
  const spread = useTransform(smoothProgress, [0, 1], [0, 1]);
  const centerScale = useTransform(smoothProgress, [0, 1], [0.96, 1]);

  // Smooth progressive card fade and scale
  const cardOpacity = useTransform(smoothProgress, [0.05, 0.45], [0, 1]);
  const cardScale = useTransform(smoothProgress, [0, 1], [0.75, 1]);
  const lineOpacity = useTransform(smoothProgress, [0.15, 0.65], [0, 0.85]);

  // Wide translations so all 4 corner cards CLEAR the center card completely
  const tlX = useTransform(spread, (v) => `${v * -156}%`);
  const tlY = useTransform(spread, (v) => `${v * -138}%`);

  const trX = useTransform(spread, (v) => `${v * 156}%`);
  const trY = useTransform(spread, (v) => `${v * -138}%`);

  const blX = useTransform(spread, (v) => `${v * -156}%`);
  const blY = useTransform(spread, (v) => `${v * 138}%`);

  const brX = useTransform(spread, (v) => `${v * 156}%`);
  const brY = useTransform(spread, (v) => `${v * 138}%`);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[92vh] sm:min-h-[96vh] py-16 sm:py-24 bg-[#0A0A0A] text-white select-none overflow-hidden flex items-center justify-center"
    >
      {/* Subtle Ambient Radial Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-zinc-900/40 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none" />

      {/* Central Stage Container */}
      <div className="relative w-full max-w-[1400px] h-full flex items-center justify-center px-4 sm:px-6">
        {/* ========================================================= */}
        {/* CONNECTING ARROWS & HAIRLINE LEADER LINES (SVG)           */}
        {/* ========================================================= */}
        <motion.svg
          style={{ opacity: shouldReduceMotion ? 0.7 : lineOpacity }}
          className="absolute inset-0 w-full h-full pointer-events-none z-15"
        >
          <defs>
            <marker
              id="arrowhead-tl"
              markerWidth="8"
              markerHeight="8"
              refX="5"
              refY="4"
              orient="auto"
            >
              <polygon points="0 1, 8 4, 0 7" fill="rgba(255,255,255,0.75)" />
            </marker>
            <marker
              id="arrowhead-tr"
              markerWidth="8"
              markerHeight="8"
              refX="5"
              refY="4"
              orient="auto"
            >
              <polygon points="0 1, 8 4, 0 7" fill="rgba(255,255,255,0.75)" />
            </marker>
            <marker
              id="arrowhead-bl"
              markerWidth="8"
              markerHeight="8"
              refX="5"
              refY="4"
              orient="auto"
            >
              <polygon points="0 1, 8 4, 0 7" fill="rgba(255,255,255,0.75)" />
            </marker>
            <marker
              id="arrowhead-br"
              markerWidth="8"
              markerHeight="8"
              refX="5"
              refY="4"
              orient="auto"
            >
              <polygon points="0 1, 8 4, 0 7" fill="rgba(255,255,255,0.75)" />
            </marker>
          </defs>

          {/* 4 Directional Connecting Arrow Lines (Center to 4 Corners) with dynamic path length */}
          <motion.line
            x1="44%"
            y1="42%"
            x2="22%"
            y2="20%"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            markerEnd="url(#arrowhead-tl)"
            style={shouldReduceMotion ? undefined : { pathLength: spread }}
          />
          <motion.line
            x1="56%"
            y1="42%"
            x2="78%"
            y2="20%"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            markerEnd="url(#arrowhead-tr)"
            style={shouldReduceMotion ? undefined : { pathLength: spread }}
          />
          <motion.line
            x1="44%"
            y1="58%"
            x2="22%"
            y2="80%"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            markerEnd="url(#arrowhead-bl)"
            style={shouldReduceMotion ? undefined : { pathLength: spread }}
          />
          <motion.line
            x1="56%"
            y1="58%"
            x2="78%"
            y2="80%"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
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
            className="absolute z-10 w-[130px] sm:w-[190px] md:w-[250px] lg:w-[290px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 bg-black shadow-[0_16px_36px_rgba(0,0,0,0.8)] group transition-all duration-300 hover:border-white/60"
          >
            <img
              src="/images/vignettes/tree_canopy_detail.webp"
              alt="Detail: Tree Canopy & Balcony"
              loading="lazy"
              className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
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
            className="absolute z-10 w-[130px] sm:w-[190px] md:w-[250px] lg:w-[290px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 bg-black shadow-[0_16px_36px_rgba(0,0,0,0.8)] group transition-all duration-300 hover:border-white/60"
          >
            <img
              src="/images/vignettes/sculpture_detail.webp"
              alt="Detail: Facade Sculpture"
              loading="lazy"
              className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
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
            className="absolute z-10 w-[130px] sm:w-[190px] md:w-[250px] lg:w-[290px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 bg-black shadow-[0_16px_36px_rgba(0,0,0,0.8)] group transition-all duration-300 hover:border-white/60"
          >
            <img
              src="/images/vignettes/landscape_detail.webp"
              alt="Detail: Botanical Landscaping"
              loading="lazy"
              className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
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
            className="absolute z-10 w-[130px] sm:w-[190px] md:w-[250px] lg:w-[290px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 bg-black shadow-[0_16px_36px_rgba(0,0,0,0.8)] group transition-all duration-300 hover:border-white/60"
          >
            <img
              src="/images/vignettes/ceiling_lighting_detail.webp"
              alt="Detail: Architectural Lighting"
              loading="lazy"
              className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* ========================================================= */}
          {/* CENTER MASTER "AFTER" RENDER (MAIN FOCAL POINT)           */}
          {/* ========================================================= */}
          <motion.div
            style={shouldReduceMotion ? undefined : { scale: centerScale }}
            className="relative z-20 w-[240px] sm:w-[350px] md:w-[460px] lg:w-[500px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_0_80px_rgba(0,0,0,0.95)] group"
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
    </section>
  );
}
