import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pauseLenis, resumeLenis } from './SmoothScroll';
import { AtlasLogo } from './AtlasLogo';

interface PreloaderProps {
  onSequenceStart?: () => void;
  onComplete?: () => void;
}

export function Preloader({ onSequenceStart, onComplete }: PreloaderProps) {
  const [curtainUp, setCurtainUp] = useState(false);
  const [isDone, setIsDone] = useState(() => {
    try {
      return sessionStorage.getItem('atlas_preloader_seen') === '1';
    } catch {
      return false;
    }
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isDone) {
      onComplete?.();
      return;
    }

    // Lock scroll during the curtain sequence
    document.body.style.overflow = 'hidden';
    pauseLenis();

    // Rapid architectural progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 25;
      });
    }, 25);

    // T=420ms: Begin lifting the canvas upwards smoothly
    const t1 = setTimeout(() => {
      setCurtainUp(true);
      onSequenceStart?.();
    }, 420);

    // T=1020ms: Curtain has fully cleared, unlock body
    const t2 = setTimeout(() => {
      try {
        sessionStorage.setItem('atlas_preloader_seen', '1');
      } catch {
        // ignore
      }
      setIsDone(true);
      document.body.style.overflow = '';
      resumeLenis();
      onComplete?.();
    }, 1020);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = '';
      resumeLenis();
    };
  }, [isDone, onSequenceStart, onComplete]);

  if (isDone) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="atlas-opening-curtain"
          initial={{ y: '0%' }}
          animate={curtainUp ? { y: '-100%' } : { y: '0%' }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[99999] bg-[#F5EDE2] text-[#321E13] flex flex-col justify-between pointer-events-none select-none overflow-hidden"
        >
          {/* 4-Column Visible Hairline Architectural Grid on Warm Cream */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-4 px-6 md:px-10 pointer-events-none z-0">
            <div className="border-r border-[#321E13]/[0.08] h-full hidden md:block" />
            <div className="border-r border-[#321E13]/[0.08] h-full hidden md:block" />
            <div className="border-r border-[#321E13]/[0.08] h-full hidden md:block" />
            <div className="h-full hidden md:block" />
          </div>

          {/* Top Architectural Meta Strip */}
          <div className="relative z-10 pt-8 px-6 md:px-10 flex items-center justify-between font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#321E13]/70">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#321E13]" />
              <span>Atlas Studio // Architectural Visualizer</span>
            </div>
            <div className="hidden sm:block">
              <span>@atlas.studio.uz // Spatial CGI</span>
            </div>
          </div>

          {/* Centered Grand Brand Wordmark (Exact Bespoke Logo) */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto px-6 text-center">
            <div className="overflow-hidden py-4">
              <motion.div
                initial={{ y: '40%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <AtlasLogo
                  variant="stacked"
                  className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto text-[#321E13]"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-[0.28em] text-[#321E13]/70"
            >
              <span>Architecture</span>
              <span className="w-1 h-1 rounded-full bg-[#321E13]/60" />
              <span>CGI</span>
              <span className="w-1 h-1 rounded-full bg-[#321E13]/60" />
              <span>Cinematic Films</span>
            </motion.div>
          </div>

          {/* Bottom Architectural Registry Strip */}
          <div className="relative z-10 pb-8 px-6 md:px-10 flex items-center justify-between font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#321E13]/70 border-t border-[#321E13]/[0.08]">
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
