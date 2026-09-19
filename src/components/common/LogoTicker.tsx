import { useState, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';

interface LogoItem {
  name: string;
  label?: string;
}

interface LogoTickerProps {
  logos: LogoItem[];
  className?: string;
  speed?: number; // pixels per second (~20px/s default)
}

export function LogoTicker({
  logos,
  className = '',
  speed = 22,
}: LogoTickerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Duplicate items 4 times to ensure seamless infinite looping
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  useAnimationFrame((_, delta) => {
    if (isHovered) return; // Velocity becomes 0 on hover to allow reading / dragging

    const moveBy = (speed * delta) / 1000;
    const currentX = x.get();
    
    // Reset loop point smoothly
    if (containerRef.current) {
      const halfWidth = containerRef.current.scrollWidth / 2;
      if (Math.abs(currentX) >= halfWidth) {
        x.set(0);
        return;
      }
    }
    
    x.set(currentX - moveBy);
  });

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`overflow-hidden relative select-none cursor-grab active:cursor-grabbing ${className}`}
    >
      <motion.div
        drag="x"
        dragConstraints={containerRef}
        style={{ x }}
        className="flex items-center gap-10 sm:gap-14 whitespace-nowrap will-change-transform"
      >
        {duplicatedLogos.map((logo, idx) => (
          <div
            key={`${logo.name}-${idx}`}
            className="flex items-center gap-2 font-mono text-xs sm:text-sm tracking-widest text-white/70 hover:text-white transition-colors duration-200 uppercase font-medium"
          >
            <span>{logo.label || logo.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
