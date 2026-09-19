import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';

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
    <section className="bg-[#090a0d] text-white py-24 md:py-36 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>04 / Motion Synthesis</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Architecture in Motion
            </h2>
          </div>
          <p className="text-zinc-300 text-sm max-w-md font-light leading-relaxed">
            We direct virtual cameras with cinematic sensibility—capturing the passage of natural daylight, atmospheric humidity, and spatial rhythm before construction begins.
          </p>
        </div>

        {/* Hero Curved Video Frame (Axioma / Kontra inspired) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-[32px] sm:rounded-[40px] overflow-hidden border border-white/15 bg-zinc-900 cursor-pointer group shadow-2xl"
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
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-90"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

          {/* Central Play Trigger Button (Pill Style) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/90 text-black shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
              <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold">
                Play Studio Film (2:14)
              </span>
            </div>
          </div>

          {/* Bottom Video Metadata */}
          <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between text-xs text-zinc-300 pointer-events-none">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="uppercase tracking-widest text-[10px] text-white font-mono">4K Master Audio & Visuals</span>
            </div>
            <span className="hidden sm:inline uppercase tracking-widest text-[10px] text-zinc-400 font-mono">
              Click to view fullscreen cinematic sequence
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
