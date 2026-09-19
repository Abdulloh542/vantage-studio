import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface CinematicFilmSectionProps {
  onOpenFilm: (videoUrl: string, title: string) => void;
}

export function CinematicFilmSection({ onOpenFilm }: CinematicFilmSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const filmUrl = 'https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-person-in-an-art-gallery-41485-large.mp4';
  const filmTitle = 'Architecture in Motion — 2026 Showreel';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black text-white py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
              04 — Cinematic Direction
            </span>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white leading-[1.05]">
              Architecture in motion.
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-light leading-relaxed">
            We direct virtual cameras with cinematic sensibility—capturing the passage of natural daylight, atmospheric humidity, and spatial rhythm before construction begins.
          </p>
        </div>

        {/* Hero Video Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-zinc-900 cursor-pointer group"
          onClick={() => onOpenFilm(filmUrl, filmTitle)}
          data-cursor="PLAY"
        >
          <video
            ref={videoRef}
            src={filmUrl}
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] filter brightness-90"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

          {/* Central Play Trigger Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center gap-4 px-6 py-3.5 bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-white group-hover:text-black">
              <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold">
                Play Studio Film (2:14)
              </span>
            </div>
          </div>

          {/* Bottom Video Metadata */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-zinc-400 pointer-events-none">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="uppercase tracking-widest text-[10px] text-white">4K Master Audio & Visuals</span>
            </div>
            <span className="hidden sm:inline uppercase tracking-widest text-[10px] text-zinc-400">
              Click to view full cinematic sequence
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
