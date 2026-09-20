import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
  url: string;
  caption?: string;
  title?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImage[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export function LightboxModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}: LightboxModalProps) {
  const currentImage = images[currentIndex];

  // Keyboard navigation & escape listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 md:p-8 select-none"
        onClick={onClose}
      >
        {/* Top Header Bar */}
        <div
          className="w-full flex items-center justify-between text-white/70 font-mono text-xs z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />
            <span className="uppercase tracking-widest text-white font-medium">
              4K ARCHITECTURAL INSPECTOR
            </span>
            <span className="text-white/40 hidden sm:inline">&mdash;</span>
            <span className="text-white/60 hidden sm:inline tabular-nums">
              PLATE {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-white/40 hidden md:inline">
              [ ESC TO CLOSE &bull; &larr; &rarr; TO NAVIGATE ]
            </span>
            <button
              onClick={onClose}
              aria-label="Close Lightbox"
              className="w-10 h-10 border border-white/20 hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Main Stage Viewport */}
        <div
          className="relative flex-1 flex items-center justify-center w-full my-auto py-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Arrow */}
          {images.length > 1 && (
            <button
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 z-20 w-12 h-12 border border-white/20 bg-black/60 hover:bg-white hover:text-black hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer group"
            >
              <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Main Full-Res Render */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage.url + currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[90vw] max-h-[78vh] flex items-center justify-center"
            >
              <img
                src={currentImage.url}
                alt={currentImage.caption || 'Archviz 4K Render'}
                className="max-w-full max-h-[78vh] w-auto h-auto object-contain border border-white/10 shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>

          {/* Next Arrow */}
          {images.length > 1 && (
            <button
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 z-20 w-12 h-12 border border-white/20 bg-black/60 hover:bg-white hover:text-black hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer group"
            >
              <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>

        {/* Bottom Caption & Thumbnail Strip */}
        <div
          className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10 font-mono text-xs text-white/70 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-left w-full sm:w-auto">
            {currentImage.title && (
              <span className="font-semibold text-white uppercase block sm:inline sm:mr-3">
                {currentImage.title}
              </span>
            )}
            <span className="text-white/60 font-sans text-xs">
              {currentImage.caption || 'High-fidelity architectural visualization still'}
            </span>
          </div>

          {/* Mini Thumbnail Dots / Strip */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-full py-1">
            {images.map((img, idx) => (
              <button
                key={img.url + idx}
                onClick={() => onNavigate(idx)}
                className={`w-9 h-7 border transition-all cursor-pointer overflow-hidden flex-shrink-0 ${
                  idx === currentIndex
                    ? 'border-white scale-110 opacity-100 shadow-md'
                    : 'border-white/20 opacity-40 hover:opacity-80'
                }`}
              >
                <img
                  src={img.url}
                  alt="Thumbnail"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
