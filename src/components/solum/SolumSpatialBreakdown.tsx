import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export function SolumSpatialBreakdown() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth easing mapping
  const spread = useTransform(scrollYProgress, [0.12, 0.62], [0, 1]);
  const centerScale = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0.94, 1, 1, 0.96]);

  // Card opacity and scale
  const cardOpacity = useTransform(spread, [0, 0.25, 1], [0, 0.85, 1]);
  const cardScale = useTransform(spread, [0, 1], [0.65, 1]);
  const lineOpacity = useTransform(spread, [0.3, 0.75], [0, 0.85]);

  // 4 Directional Translations (Responsive relative translation)
  // Top-Left: Tree Canopy
  const tlX = useTransform(spread, (v) => `${v * -108}%`);
  const tlY = useTransform(spread, (v) => `${v * -92}%`);

  // Top-Right: Wall Sculpture
  const trX = useTransform(spread, (v) => `${v * 108}%`);
  const trY = useTransform(spread, (v) => `${v * -92}%`);

  // Bottom-Left: Botanical Landscaping
  const blX = useTransform(spread, (v) => `${v * -108}%`);
  const blY = useTransform(spread, (v) => `${v * 92}%`);

  // Bottom-Right: Timber Soffit & Spotlights
  const brX = useTransform(spread, (v) => `${v * 108}%`);
  const brY = useTransform(spread, (v) => `${v * 92}%`);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[240vh] bg-[#0A0A0A] text-white select-none overflow-visible"
    >
      {/* Pinned Viewport Stage */}
      <div className="sticky top-0 w-full h-[100svh] min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Subtle Ambient Vignette Background */}
        <div className="absolute inset-0 bg-gradient-radial from-zinc-900/30 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none" />

        {/* Central Stage Container */}
        <div className="relative w-full max-w-[1320px] h-full flex items-center justify-center px-4 sm:px-6">
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
                refX="4"
                refY="4"
                orient="auto"
              >
                <polygon points="0 1, 8 4, 0 7" fill="rgba(255,255,255,0.7)" />
              </marker>
              <marker
                id="arrowhead-tr"
                markerWidth="8"
                markerHeight="8"
                refX="4"
                refY="4"
                orient="auto"
              >
                <polygon points="0 1, 8 4, 0 7" fill="rgba(255,255,255,0.7)" />
              </marker>
              <marker
                id="arrowhead-bl"
                markerWidth="8"
                markerHeight="8"
                refX="4"
                refY="4"
                orient="auto"
              >
                <polygon points="0 1, 8 4, 0 7" fill="rgba(255,255,255,0.7)" />
              </marker>
              <marker
                id="arrowhead-br"
                markerWidth="8"
                markerHeight="8"
                refX="4"
                refY="4"
                orient="auto"
              >
                <polygon points="0 1, 8 4, 0 7" fill="rgba(255,255,255,0.7)" />
              </marker>
            </defs>

            {/* 4 Directional Connecting Arrow Lines */}
            <line
              x1="46%"
              y1="44%"
              x2="24%"
              y2="24%"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              markerEnd="url(#arrowhead-tl)"
            />
            <line
              x1="54%"
              y1="44%"
              x2="76%"
              y2="24%"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              markerEnd="url(#arrowhead-tr)"
            />
            <line
              x1="46%"
              y1="56%"
              x2="24%"
              y2="76%"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              markerEnd="url(#arrowhead-bl)"
            />
            <line
              x1="54%"
              y1="56%"
              x2="76%"
              y2="76%"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              markerEnd="url(#arrowhead-br)"
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
            className="absolute z-10 w-[140px] sm:w-[210px] md:w-[280px] lg:w-[320px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl group transition-all duration-300 hover:border-white/50"
          >
            <img
              src="/images/vignettes/tree_canopy_detail.webp"
              alt="Detail: Tree Canopy & Balcony"
              loading="lazy"
              className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
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
            className="absolute z-10 w-[140px] sm:w-[210px] md:w-[280px] lg:w-[320px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl group transition-all duration-300 hover:border-white/50"
          >
            <img
              src="/images/vignettes/sculpture_detail.webp"
              alt="Detail: Facade Sculpture"
              loading="lazy"
              className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
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
            className="absolute z-10 w-[140px] sm:w-[210px] md:w-[280px] lg:w-[320px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl group transition-all duration-300 hover:border-white/50"
          >
            <img
              src="/images/vignettes/landscape_detail.webp"
              alt="Detail: Botanical Landscaping"
              loading="lazy"
              className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
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
            className="absolute z-10 w-[140px] sm:w-[210px] md:w-[280px] lg:w-[320px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl group transition-all duration-300 hover:border-white/50"
          >
            <img
              src="/images/vignettes/ceiling_lighting_detail.webp"
              alt="Detail: Architectural Lighting"
              loading="lazy"
              className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* ========================================================= */}
          {/* CENTER MASTER "AFTER" RENDER (MAIN FOCAL POINT)           */}
          {/* ========================================================= */}
          <motion.div
            style={shouldReduceMotion ? undefined : { scale: centerScale }}
            className="relative z-20 w-[240px] sm:w-[360px] md:w-[480px] lg:w-[540px] aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_0_60px_rgba(0,0,0,0.9)] group"
          >
            <img
              src="/images/before_after/villa_after.webp"
              alt="Master Architectural Render"
              loading="eager"
              className="w-full h-full object-cover filter brightness-100 group-hover:scale-102 transition-transform duration-500 pointer-events-none"
            />
            {/* Subtle glow highlight */}
            <div className="absolute inset-0 border border-white/10 rounded-xl sm:rounded-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
