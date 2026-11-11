import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealFrameProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  delay?: number;
  shutterColor?: string;
}

/**
 * Omnya Lab-inspired Scroll-Down Curtain Reveal Frame:
 * - As the user scrolls down, a smooth architectural shutter lifts upward (y: 0% -> -102%)
 *   while the inner media settles from scale(1.07) -> scale(1.0) with cubic-bezier(0.16, 1, 0.3, 1).
 * - Content underneath is always opacity: 1 so it can never remain hidden or fail to appear.
 */
export function RevealFrame({
  children,
  className = '',
  innerClassName = 'w-full h-full',
  delay = 0,
  shutterColor = '#EDEAE4',
}: RevealFrameProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className={innerClassName}>{children}</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: 28 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Inner Media Scale Settle */}
      <motion.div
        initial={{ scale: 1.07 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.08, margin: '0px 0px -40px 0px' }}
        transition={{
          duration: 1.15,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={innerClassName}
      >
        {children}
      </motion.div>

      {/* Top- Lifting Curtain Shutter (GPU-composited translate3d) */}
      <motion.div
        aria-hidden="true"
        initial={{ y: '0%' }}
        whileInView={{ y: '-102%' }}
        viewport={{ once: true, amount: 0.08, margin: '0px 0px -40px 0px' }}
        transition={{
          duration: 0.82,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{ backgroundColor: shutterColor }}
        className="absolute inset-0 z-20 pointer-events-none will-change-transform"
      />
    </motion.div>
  );
}
