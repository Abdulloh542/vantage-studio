import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onSequenceStart?: () => void;
  onComplete?: () => void;
}

export function Preloader({ onSequenceStart, onComplete }: PreloaderProps) {
  const [curtainUp, setCurtainUp] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Clear any previous session flag so curtain animation always plays
    try {
      sessionStorage.removeItem('vantage_preloader_seen');
    } catch {
      // ignore
    }

    // Lock scroll during the curtain sequence
    document.body.style.overflow = 'hidden';

    // Rapid architectural progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 20;
      });
    }, 30);

    // T=500ms: Begin lifting the white canvas upwards smoothly
    const t1 = setTimeout(() => {
      setCurtainUp(true);
      onSequenceStart?.();
    }, 500);

    // T=1200ms: Curtain has fully cleared, unlock body
    const t2 = setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = '';
      onComplete?.();
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = '';
    };
  }, [onSequenceStart, onComplete]);

  if (isDone) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="vantage-opening-curtain"
          initial={{ y: '0%' }}
          animate={curtainUp ? { y: '-100%' } : { y: '0%' }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1], // Editorial luxury easing curve
          }}
          className="fixed inset-0 z-[99999] bg-white text-[#101010] flex flex-col justify-between pointer-events-none select-none overflow-hidden"
        >
          {/* 4-Column Visible Hairline Architectural Grid on Paper White */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-4 px-6 md:px-10 pointer-events-none z-0">
            <div className="border-r border-[#101010]/[0.08] h-full hidden md:block" />
            <div className="border-r border-[#101010]/[0.08] h-full hidden md:block" />
            <div className="border-r border-[#101010]/[0.08] h-full hidden md:block" />
            <div className="h-full hidden md:block" />
          </div>

          {/* Top Architectural Meta Strip */}
          <div className="relative z-10 pt-8 px-6 md:px-10 flex items-center justify-between font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#101010]/60">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#101010]" />
              <span>Vantage&reg; Studio // Architectural Visualizer</span>
            </div>
            <div className="hidden sm:block">
              <span>Edition 2026 // Spatial CGI</span>
            </div>
          </div>

          {/* Centered Grand Brand Wordmark */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto px-6 text-center">
            <div className="overflow-hidden py-2">
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[130px] font-bold tracking-[-0.06em] text-[#101010] leading-none"
              >
                Vantage&reg;
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-[0.28em] text-[#757575]"
            >
              <span>Architecture</span>
              <span className="w-1 h-1 rounded-full bg-[#757575]" />
              <span>CGI</span>
              <span className="w-1 h-1 rounded-full bg-[#757575]" />
              <span>Cinematic Films</span>
            </motion.div>
          </div>

          {/* Bottom Architectural Registry Strip */}
          <div className="relative z-10 pb-8 px-6 md:px-10 flex items-center justify-between font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#101010]/60 border-t border-[#101010]/[0.08]">
            <div className="flex items-center gap-4">
              <span>Index 01 // Exhibition Catalogue</span>
            </div>
            <div className="tabular-nums font-mono">
              <span>Loading [{Math.min(100, progress)}%]</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
