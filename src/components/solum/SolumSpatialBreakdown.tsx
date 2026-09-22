import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export function SolumSpatialBreakdown() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Automatically trigger when around 25% of the section is visible in viewport
  const isInView = useInView(containerRef, { amount: 0.25, once: false });

  // Mobile responsive detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 768);
    };
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  const isOpen = isInView || shouldReduceMotion;

  // Exact pixel offsets for corner cards (well separated so curved ropes are clearly visible)
  const offsets = isMobile
    ? {
        tl: { x: -95, y: -190 },
        tr: { x: 95, y: -190 },
        bl: { x: -95, y: 190 },
        br: { x: 95, y: 190 },
      }
    : {
        tl: { x: -470, y: -225 },
        tr: { x: 470, y: -225 },
        bl: { x: -470, y: 225 },
        br: { x: 470, y: 225 },
      };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[85vh] md:min-h-[92vh] py-16 md:py-24 bg-[#0A0A0A] text-white select-none overflow-hidden flex items-center justify-center border-b border-white/10"
    >
      {/* Subtle Ambient Radial Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-zinc-900/40 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none" />

      {/* Main Relative Canvas (Coordinate Origin 0,0 is at exact center) */}
      <div className="relative w-full max-w-[1240px] h-[600px] sm:h-[660px] md:h-[720px] lg:h-[760px] flex items-center justify-center px-4">
        
        {/* ========================================================= */}
        {/* 1. DESKTOP CURVED ROPE CONNECTOR LINES (NO ARROWS)        */}
        {/* ========================================================= */}
        <svg
          viewBox="-600 -360 1200 720"
          preserveAspectRatio="xMidYMid meet"
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-10"
        >
          <defs>
            <filter id="rope-glow-desktop" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.95" />
            </filter>
          </defs>

          {/* 1. Top-Left Curved Rope (Center Villa to Tree Canopy) */}
          <g filter="url(#rope-glow-desktop)">
            <motion.path
              d="M -220 -124 C -275 -105, -315 -125, -360 -163"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeDasharray="6 3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isOpen ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Center Anchor Knot */}
            <motion.circle
              cx="-220"
              cy="-124"
              r="4.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            />
            {/* Corner Card Anchor Knot */}
            <motion.circle
              cx="-360"
              cy="-163"
              r="4.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            />
          </g>

          {/* 2. Top-Right Curved Rope (Center Villa to Wall Sculpture) */}
          <g filter="url(#rope-glow-desktop)">
            <motion.path
              d="M 220 -124 C 275 -105, 315 -125, 360 -163"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeDasharray="6 3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isOpen ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.circle
              cx="220"
              cy="-124"
              r="4.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            />
            <motion.circle
              cx="360"
              cy="-163"
              r="4.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            />
          </g>

          {/* 3. Bottom-Left Curved Rope (Center Villa to Poolside Landscape) */}
          <g filter="url(#rope-glow-desktop)">
            <motion.path
              d="M -220 124 C -275 105, -315 125, -360 163"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeDasharray="6 3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isOpen ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.circle
              cx="-220"
              cy="124"
              r="4.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            />
            <motion.circle
              cx="-360"
              cy="163"
              r="4.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            />
          </g>

          {/* 4. Bottom-Right Curved Rope (Center Villa to Timber Soffit) */}
          <g filter="url(#rope-glow-desktop)">
            <motion.path
              d="M 220 124 C 275 105, 315 125, 360 163"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeDasharray="6 3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isOpen ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.circle
              cx="220"
              cy="124"
              r="4.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            />
            <motion.circle
              cx="360"
              cy="163"
              r="4.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            />
          </g>
        </svg>

        {/* ========================================================= */}
        {/* 2. MOBILE CURVED ROPE CONNECTOR LINES (NO ARROWS)         */}
        {/* ========================================================= */}
        <svg
          viewBox="-180 -300 360 600"
          preserveAspectRatio="xMidYMid meet"
          className="block md:hidden absolute inset-0 w-full h-full pointer-events-none z-10"
        >
          {/* Top-Left Mobile Rope */}
          <motion.path
            d="M -65 -73 C -80 -105, -95 -125, -95 -145"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeDasharray="5 3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isOpen ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Top-Right Mobile Rope */}
          <motion.path
            d="M 65 -73 C 80 -105, 95 -125, 95 -145"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeDasharray="5 3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isOpen ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Bottom-Left Mobile Rope */}
          <motion.path
            d="M -65 73 C -80 105, -95 125, -95 145"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeDasharray="5 3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isOpen ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Bottom-Right Mobile Rope */}
          <motion.path
            d="M 65 73 C 80 105, 95 125, 95 145"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeDasharray="5 3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isOpen ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>

        {/* ========================================================= */}
        {/* 3. 4 DETAIL VIGNETTES (AUTOMATICALLY EXPAND OUTWARDS)     */}
        {/* ========================================================= */}

        {/* 1. TOP-LEFT: Tree Canopy & Balcony */}
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.65 }}
          animate={
            isOpen
              ? { x: offsets.tl.x, y: offsets.tl.y, opacity: 1, scale: 1 }
              : { x: 0, y: 0, opacity: 0, scale: 0.65 }
          }
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[130px] sm:w-[155px] md:w-[220px] lg:w-[240px] aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden border border-white/30 bg-black shadow-[0_8px_24px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/80"
        >
          <img
            src="/images/vignettes/tree_canopy_detail.webp"
            alt="Detail: Tree Canopy & Balcony"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          />
          <div className="absolute inset-0 border border-white/20 rounded-lg sm:rounded-xl pointer-events-none group-hover:border-white/60 transition-colors" />
        </motion.div>

        {/* 2. TOP-RIGHT: Swimmer Wall Sculpture */}
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.65 }}
          animate={
            isOpen
              ? { x: offsets.tr.x, y: offsets.tr.y, opacity: 1, scale: 1 }
              : { x: 0, y: 0, opacity: 0, scale: 0.65 }
          }
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[130px] sm:w-[155px] md:w-[220px] lg:w-[240px] aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden border border-white/30 bg-black shadow-[0_8px_24px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/80"
        >
          <img
            src="/images/vignettes/sculpture_detail.webp"
            alt="Detail: Facade Sculpture"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          />
          <div className="absolute inset-0 border border-white/20 rounded-lg sm:rounded-xl pointer-events-none group-hover:border-white/60 transition-colors" />
        </motion.div>

        {/* 3. BOTTOM-LEFT: Poolside Landscaping */}
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.65 }}
          animate={
            isOpen
              ? { x: offsets.bl.x, y: offsets.bl.y, opacity: 1, scale: 1 }
              : { x: 0, y: 0, opacity: 0, scale: 0.65 }
          }
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[130px] sm:w-[155px] md:w-[220px] lg:w-[240px] aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden border border-white/30 bg-black shadow-[0_8px_24px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/80"
        >
          <img
            src="/images/vignettes/landscape_detail.webp"
            alt="Detail: Botanical Landscaping"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          />
          <div className="absolute inset-0 border border-white/20 rounded-lg sm:rounded-xl pointer-events-none group-hover:border-white/60 transition-colors" />
        </motion.div>

        {/* 4. BOTTOM-RIGHT: Timber Soffit & Lighting */}
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.65 }}
          animate={
            isOpen
              ? { x: offsets.br.x, y: offsets.br.y, opacity: 1, scale: 1 }
              : { x: 0, y: 0, opacity: 0, scale: 0.65 }
          }
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[130px] sm:w-[155px] md:w-[220px] lg:w-[240px] aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden border border-white/30 bg-black shadow-[0_8px_24px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/80"
        >
          <img
            src="/images/vignettes/ceiling_lighting_detail.webp"
            alt="Detail: Architectural Lighting"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          />
          <div className="absolute inset-0 border border-white/20 rounded-lg sm:rounded-xl pointer-events-none group-hover:border-white/60 transition-colors" />
        </motion.div>

        {/* ========================================================= */}
        {/* 4. CENTER MASTER VILLA RENDER (MAIN FOCAL POINT)          */}
        {/* ========================================================= */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0.9 }}
          animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0.94, opacity: 0.9 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 w-[240px] sm:w-[300px] md:w-[440px] lg:w-[460px] aspect-[16/9] rounded-lg sm:rounded-2xl overflow-hidden border border-white/40 bg-black shadow-[0_0_80px_rgba(0,0,0,0.95)] group"
        >
          <img
            src="/images/before_after/villa_after.webp"
            alt="Master Architectural Render"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter brightness-100 group-hover:scale-102 transition-transform duration-500 pointer-events-none"
          />
          <div className="absolute inset-0 border border-white/15 rounded-xl sm:rounded-2xl pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
