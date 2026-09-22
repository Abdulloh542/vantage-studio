import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export function SolumSpatialBreakdown() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Trigger expansion automatically when user scrolls to around 35% of the section
  const isInView = useInView(containerRef, { amount: 0.35, once: false });

  // Responsive mobile tracking
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

  // Diagonal offsets for 4 vignettes
  const offsets = isMobile
    ? {
        tl: { x: '-60%', y: '-155%' },
        tr: { x: '60%', y: '-155%' },
        bl: { x: '-60%', y: '155%' },
        br: { x: '60%', y: '155%' },
      }
    : {
        tl: { x: '-135%', y: '-135%' },
        tr: { x: '135%', y: '-135%' },
        bl: { x: '-135%', y: '135%' },
        br: { x: '135%', y: '135%' },
      };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[90vh] md:min-h-[95vh] py-16 md:py-24 bg-[#0A0A0A] text-white select-none overflow-hidden flex items-center justify-center border-b border-white/10"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-zinc-900/40 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none" />

      {/* Central Stage Container */}
      <div className="relative w-full max-w-[1240px] h-full flex items-center justify-center px-4 sm:px-6">
        
        {/* ========================================================= */}
        {/* 1. DESKTOP ROPE CONNECTOR LINES (CURVED ARCHITECTURAL CORDS) */}
        {/* ========================================================= */}
        <svg
          viewBox="-600 -350 1200 700"
          preserveAspectRatio="xMidYMid meet"
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-[25]"
        >
          <filter id="rope-shadow-desktop" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.8" />
          </filter>

          {/* Top-Left Curved Rope (Center Villa to Tree Canopy) */}
          <g filter="url(#rope-shadow-desktop)">
            <motion.path
              d="M -210 -110 C -255 -125, -290 -148, -345 -185"
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2"
              strokeDasharray="6 3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isOpen ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.circle
              cx="-210"
              cy="-110"
              r="3.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
            <motion.circle
              cx="-345"
              cy="-185"
              r="3.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            />
          </g>

          {/* Top-Right Curved Rope (Center Villa to Wall Sculpture) */}
          <g filter="url(#rope-shadow-desktop)">
            <motion.path
              d="M 210 -110 C 255 -125, 290 -148, 345 -185"
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2"
              strokeDasharray="6 3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isOpen ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.circle
              cx="210"
              cy="-110"
              r="3.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
            <motion.circle
              cx="345"
              cy="-185"
              r="3.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            />
          </g>

          {/* Bottom-Left Curved Rope (Center Villa to Poolside Landscape) */}
          <g filter="url(#rope-shadow-desktop)">
            <motion.path
              d="M -210 110 C -255 125, -290 148, -345 185"
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2"
              strokeDasharray="6 3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isOpen ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.circle
              cx="-210"
              cy="110"
              r="3.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
            <motion.circle
              cx="-345"
              cy="185"
              r="3.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            />
          </g>

          {/* Bottom-Right Curved Rope (Center Villa to Timber Soffit) */}
          <g filter="url(#rope-shadow-desktop)">
            <motion.path
              d="M 210 110 C 255 125, 290 148, 345 185"
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2"
              strokeDasharray="6 3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isOpen ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.circle
              cx="210"
              cy="110"
              r="3.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
            <motion.circle
              cx="345"
              cy="185"
              r="3.5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              animate={isOpen ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            />
          </g>
        </svg>

        {/* ========================================================= */}
        {/* 2. MOBILE ROPE CONNECTOR LINES                             */}
        {/* ========================================================= */}
        <svg
          viewBox="-200 -280 400 560"
          preserveAspectRatio="xMidYMid meet"
          className="block md:hidden absolute inset-0 w-full h-full pointer-events-none z-[25]"
        >
          {/* Top-Left Mobile Rope */}
          <motion.path
            d="M -65 -60 C -72 -90, -80 -120, -90 -150"
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1.75"
            strokeDasharray="5 3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isOpen ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Top-Right Mobile Rope */}
          <motion.path
            d="M 65 -60 C 72 -90, 80 -120, 90 -150"
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1.75"
            strokeDasharray="5 3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isOpen ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Bottom-Left Mobile Rope */}
          <motion.path
            d="M -65 60 C -72 90, -80 120, -90 150"
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1.75"
            strokeDasharray="5 3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isOpen ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Bottom-Right Mobile Rope */}
          <motion.path
            d="M 65 60 C 72 90, 80 120, 90 150"
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1.75"
            strokeDasharray="5 3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isOpen ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>

        {/* ========================================================= */}
        {/* 3. 4 DETAIL VIGNETTES (AUTOMATICALLY EXPAND ON VIEW)      */}
        {/* ========================================================= */}

        {/* 1. TOP-LEFT: Tree Canopy & Balcony */}
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.65 }}
          animate={
            isOpen
              ? { x: offsets.tl.x, y: offsets.tl.y, opacity: 1, scale: 1 }
              : { x: 0, y: 0, opacity: 0, scale: 0.65 }
          }
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-20 w-[130px] sm:w-[160px] md:w-[210px] lg:w-[245px] xl:w-[275px] aspect-[16/9] rounded-lg sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_6px_16px_rgba(0,0,0,0.75)] md:shadow-[0_16px_36px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
        >
          <img
            src="/images/vignettes/tree_canopy_detail.webp"
            alt="Detail: Tree Canopy & Balcony"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          />
          <div className="absolute inset-0 border border-white/20 rounded-lg sm:rounded-2xl pointer-events-none group-hover:border-white/50 transition-colors" />
        </motion.div>

        {/* 2. TOP-RIGHT: Swimmer Wall Sculpture */}
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.65 }}
          animate={
            isOpen
              ? { x: offsets.tr.x, y: offsets.tr.y, opacity: 1, scale: 1 }
              : { x: 0, y: 0, opacity: 0, scale: 0.65 }
          }
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-20 w-[130px] sm:w-[160px] md:w-[210px] lg:w-[245px] xl:w-[275px] aspect-[16/9] rounded-lg sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_6px_16px_rgba(0,0,0,0.75)] md:shadow-[0_16px_36px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
        >
          <img
            src="/images/vignettes/sculpture_detail.webp"
            alt="Detail: Facade Sculpture"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          />
          <div className="absolute inset-0 border border-white/20 rounded-lg sm:rounded-2xl pointer-events-none group-hover:border-white/50 transition-colors" />
        </motion.div>

        {/* 3. BOTTOM-LEFT: Poolside Landscaping */}
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.65 }}
          animate={
            isOpen
              ? { x: offsets.bl.x, y: offsets.bl.y, opacity: 1, scale: 1 }
              : { x: 0, y: 0, opacity: 0, scale: 0.65 }
          }
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-20 w-[130px] sm:w-[160px] md:w-[210px] lg:w-[245px] xl:w-[275px] aspect-[16/9] rounded-lg sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_6px_16px_rgba(0,0,0,0.75)] md:shadow-[0_16px_36px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
        >
          <img
            src="/images/vignettes/landscape_detail.webp"
            alt="Detail: Botanical Landscaping"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          />
          <div className="absolute inset-0 border border-white/20 rounded-lg sm:rounded-2xl pointer-events-none group-hover:border-white/50 transition-colors" />
        </motion.div>

        {/* 4. BOTTOM-RIGHT: Timber Soffit & Lighting */}
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.65 }}
          animate={
            isOpen
              ? { x: offsets.br.x, y: offsets.br.y, opacity: 1, scale: 1 }
              : { x: 0, y: 0, opacity: 0, scale: 0.65 }
          }
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-20 w-[130px] sm:w-[160px] md:w-[210px] lg:w-[245px] xl:w-[275px] aspect-[16/9] rounded-lg sm:rounded-2xl overflow-hidden border border-white/30 bg-black shadow-[0_6px_16px_rgba(0,0,0,0.75)] md:shadow-[0_16px_36px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-white/70"
        >
          <img
            src="/images/vignettes/ceiling_lighting_detail.webp"
            alt="Detail: Architectural Lighting"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter brightness-105 contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
          />
          <div className="absolute inset-0 border border-white/20 rounded-lg sm:rounded-2xl pointer-events-none group-hover:border-white/50 transition-colors" />
        </motion.div>

        {/* ========================================================= */}
        {/* 4. CENTER MASTER "AFTER" RENDER (MAIN FOCAL POINT)        */}
        {/* ========================================================= */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0.8 }}
          animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0.92, opacity: 0.8 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 w-[220px] sm:w-[300px] md:w-[390px] lg:w-[440px] xl:w-[480px] aspect-[16/9] rounded-lg sm:rounded-2xl overflow-hidden border border-white/35 bg-black shadow-[0_8px_24px_rgba(0,0,0,0.85)] md:shadow-[0_0_80px_rgba(0,0,0,0.95)] group"
        >
          <img
            src="/images/before_after/villa_after.webp"
            alt="Master Architectural Render"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter brightness-100 group-hover:scale-102 transition-transform duration-500 pointer-events-none"
          />
          <div className="absolute inset-0 border border-white/10 rounded-xl sm:rounded-2xl pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
