import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { useState } from 'react';

interface VideoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  subtitle?: string;
}

export function VideoLightbox({
  isOpen,
  onClose,
  videoUrl,
  title,
  subtitle = 'Cinematic Architectural Film',
}: VideoLightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 block">
                {subtitle}
              </span>
              <h3 className="text-white text-base md:text-lg font-light tracking-tight">
                {title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white"
              aria-label="Close Video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Container */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              playsInline
              loop
              className="max-h-[78vh] w-full max-w-5xl object-contain shadow-2xl"
              onClick={togglePlay}
            />
          </div>

          {/* Bottom Controls */}
          <div className="max-w-5xl mx-auto w-full flex items-center justify-between text-white text-xs border-t border-white/10 pt-4 z-10">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors uppercase tracking-wider text-[11px]"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
              <button
                onClick={toggleMute}
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors uppercase tracking-wider text-[11px]"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isMuted ? 'Unmute' : 'Mute'}</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-zinc-500 text-[10px] uppercase tracking-widest">
                Space to pause • Esc to exit
              </span>
              <button
                onClick={handleFullscreen}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
