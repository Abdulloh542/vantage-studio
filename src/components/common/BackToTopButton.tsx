import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 750);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-40 px-4 py-3 bg-[#0B0B0A]/90 hover:bg-[#0B0B0A] text-white backdrop-blur-md border border-white/20 font-mono text-[11px] uppercase tracking-widest flex items-center gap-2 shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
