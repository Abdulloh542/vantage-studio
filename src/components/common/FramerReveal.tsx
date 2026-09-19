import React from 'react';
import { motion } from 'framer-motion';

interface FramerSectionHeaderProps {
  eyebrow: string; // e.g. "WHAT WE DELIVER //"
  title: string; // e.g. "SERVICES" (will be rendered with spaced 3D letters)
  subtag: string; // e.g. "*(CREATIVE SOLUTIONS)"
  theme?: 'dark' | 'light';
  className?: string;
}

export function FramerSectionHeader({
  eyebrow,
  title,
  subtag,
  theme = 'light',
  className = '',
}: FramerSectionHeaderProps) {
  // Format title characters with spacing
  const letters = title.split('');

  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-[#0B0B0A]';
  const metaColor = isDark ? 'text-white/40' : 'text-black/40';
  const borderColor = isDark ? 'border-white/10' : 'border-black/10';

  return (
    <div className={`w-full mb-16 md:mb-24 ${className}`}>
      {/* Top Header Row: Eyebrow + Subtag */}
      <div className={`flex items-center justify-between border-b ${borderColor} pb-4 mb-8`}>
        <motion.span
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] ${metaColor} font-medium`}
        >
          {eyebrow}
        </motion.span>

        <motion.span
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] ${metaColor}`}
        >
          {subtag}
        </motion.span>
      </div>

      {/* Center Monumental 3D Title with Letter Flip */}
      <div className="overflow-hidden py-2" style={{ perspective: 1000 }}>
        <h2 className={`font-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-[0.18em] sm:tracking-[0.25em] md:tracking-[0.32em] uppercase leading-none ${textColor} flex flex-wrap justify-between select-none`}>
          {letters.map((char, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0.001,
                y: 36,
                rotateY: 90,
                filter: 'blur(8px)',
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateY: 0,
                filter: 'blur(0px)',
              }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.65,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h2>
      </div>
    </div>
  );
}

// Word-by-word Blur Reveal
interface FramerTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function FramerTextReveal({ text, className = '', delay = 0 }: FramerTextRevealProps) {
  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] leading-normal">
          <motion.span
            initial={{ opacity: 0.001, y: 18, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.55,
              delay: delay + i * 0.025,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block transform-gpu"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Spring Card Container
interface FramerCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FramerCard({ children, className = '', delay = 0 }: FramerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0.001, y: 32, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        type: 'spring',
        damping: 28,
        stiffness: 120,
        mass: 1,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
