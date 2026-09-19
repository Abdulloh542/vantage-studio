import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onSequenceStart?: () => void;
  onComplete?: () => void;
}

export function Preloader({ onSequenceStart, onComplete }: PreloaderProps) {
  const [shouldShow, setShouldShow] = useState(false);
  const [wordmarkExiting, setWordmarkExiting] = useState(false);
  const [surfaceExiting, setSurfaceExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Only show on first visit of the browser session
    const hasSeen = sessionStorage.getItem('vantage_preloader_seen');
    if (hasSeen) {
      setIsDone(true);
      onSequenceStart?.();
      onComplete?.();
      return;
    }

    // First visit: lock interaction and start exact timeline
    setShouldShow(true);
    document.body.style.overflow = 'hidden';

    // T=400ms: wordmark fades to opacity 0 and y -10px over 240ms
    const t1 = setTimeout(() => {
      setWordmarkExiting(true);
    }, 400);

    // T=560ms: preloader surface moves y 0 to -100% over 600ms, hero begins
    const t2 = setTimeout(() => {
      setSurfaceExiting(true);
      onSequenceStart?.();
    }, 560);

    // T=1160ms: surface exit completes (560 + 600), unlock body
    const t3 = setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = '';
      sessionStorage.setItem('vantage_preloader_seen', 'true');
      onComplete?.();
    }, 1160);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = '';
    };
  }, [onSequenceStart, onComplete]);

  if (!shouldShow || isDone) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: '0%' }}
          animate={surfaceExiting ? { y: '-100%' } : { y: '0%' }}
          transition={{
            duration: 0.6,
            ease: [0.44, 0, 0.56, 1], // Global page-transition easing
          }}
          className="fixed inset-0 z-[9999] bg-white text-[#101010] flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          {/* 4-Column Hairline Grid on Paper White */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-4 px-6 md:px-10 pointer-events-none">
            <div className="border-r border-[#101010]/[0.08] h-full hidden md:block" />
            <div className="border-r border-[#101010]/[0.08] h-full hidden md:block" />
            <div className="border-r border-[#101010]/[0.08] h-full hidden md:block" />
            <div className="h-full hidden md:block" />
          </div>

          {/* Centered Restrained Brand Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={
              wordmarkExiting
                ? { opacity: 0, y: -10, transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] } }
                : { opacity: 1, y: 0, transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] } }
            }
            className="text-center relative z-10"
          >
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.06em] text-[#101010]">
              Vantage&reg;
            </h1>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#757575] mt-3 block">
              ARCHITECTURAL VISUALIZATION
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
