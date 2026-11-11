import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealFrameProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Background color of the sliding reveal shutter.
   * Defaults to the warm cream/alabaster surface (`#F5EDE2`).
   */
  shutterColor?: string;
  /**
   * Optional stagger delay in seconds.
   */
  delay?: number;
}

/**
 * Fast, Snappy Scroll-Down Image Reveal (`RevealFrame`)
 * - The shutter (`::after` equivalent) starts at `y: 0%` covering the frame and quickly lifts to `y: -102%`
 *   in 0.42s when entering the viewport, while the inner media settles from `scale(1.04)` to `scale(1)`.
 * - Underlying media is ALWAYS `opacity: 1`, so images never stay hidden or dim.
 */
export const RevealFrame: React.FC<RevealFrameProps> = ({
  children,
  className = '',
  shutterColor = '#F5EDE2',
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={`relative overflow-hidden ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.06, margin: '0px 0px -10px 0px' }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        variants={{
          hidden: { scale: 1.04 },
          visible: { scale: 1 },
        }}
        transition={{
          duration: 0.52,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full h-full will-change-transform"
      >
        {children}
      </motion.div>

      <motion.div
        aria-hidden="true"
        variants={{
          hidden: { y: '0%' },
          visible: { y: '-102%' },
        }}
        transition={{
          duration: 0.42,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{ backgroundColor: shutterColor }}
        className="absolute inset-0 z-20 pointer-events-none will-change-transform"
      />
    </motion.div>
  );
};
