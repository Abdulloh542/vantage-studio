import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export function SolumMediaBreak() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Restrained parallax: translateY -5% to +5%
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[52vh] sm:h-[65vh] lg:h-[75vh] overflow-hidden bg-[#111111] select-none border-b border-[#101010]/12"
    >
      {/* Background Media with Restrained Parallax */}
      <motion.div
        style={{ y: shouldReduceMotion ? '0%' : y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
          alt="Riviera Residence Architectural Visualization Dusk"
          loading="lazy"
          className="w-full h-full object-cover object-center filter brightness-95"
        />
        {/* Subtle Black Transparent Image Contrast Overlay */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </motion.div>

      {/* Large Semi-Transparent Editable Lower-Left Title */}
      <div className="absolute bottom-8 left-6 md:left-10 z-10 pointer-events-none">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70 block mb-2">
          FEATURED MONOGRAPH // 2026
        </span>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.06em] text-white/90 uppercase">
          RIVIERA RESIDENCE
        </h2>
      </div>

      {/* Bottom-Right Coordinates Stamp */}
      <div className="absolute bottom-8 right-6 md:right-10 z-10 pointer-events-none hidden sm:block text-right">
        <span className="font-mono text-xs uppercase tracking-wider text-white/70 block">
          38&deg;33&prime;N 68&deg;47&prime;E
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wider text-white/50">
          TERRACED RESIDENTIAL MONOGRAPH
        </span>
      </div>
    </section>
  );
}
