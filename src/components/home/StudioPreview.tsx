import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StudioPreview() {
  const hubs = [
    { city: 'LONDON', desc: 'Mayfair atelier directing institutional real estate campaigns & strategy.' },
    { city: 'ZURICH', desc: 'Enge engineering hub anchoring BIM precision & physical daylight physics.' },
    { city: 'TASHKENT', desc: 'Central Asia creative production lab delivering 4K cinematic animation.' },
  ];

  return (
    <section className="bg-[#0B0B0A] text-[#FAF9F6] py-28 md:py-40 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 border-b border-white/10 pb-16">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A880] block mb-4">
              08 / ATELIER MANIFESTO
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[0.98] text-white">
              We build visual experiences for architecture <br />
              <span className="italic font-serif font-light text-white/80">that has not been built yet.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-6 text-white/70 font-light text-base md:text-lg leading-relaxed pt-2">
            <p className="font-normal text-white text-lg md:text-xl">
              We are an architectural visualization studio specializing in photorealistic imagery and cinematic real estate films.
            </p>
            <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
              With more than 6 years of experience in architectural visualization, our atelier combines 3D production, generative neural motion, and cinematic storytelling to transform architectural concepts into compelling visual experiences that command capital.
            </p>
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] font-medium text-white hover:text-[#C5A880] transition-colors pb-1 border-b border-white"
              >
                <span>Read Full Studio Philosophy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Studio Atmosphere Photography Frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] md:aspect-[21/9] bg-zinc-900 overflow-hidden border border-white/10 mb-16"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85"
            alt="Vantage Studio Architectural Atelier Loft"
            loading="lazy"
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white pointer-events-none">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A880] block mb-1">
                ATELIER CULTURE
              </span>
              <span className="text-sm font-light">Where architectural drawing meets cinematic storytelling.</span>
            </div>
            <div className="font-mono text-xs text-white/50 tracking-wider uppercase">
              STUDIO PROTOCOLS // 2026
            </div>
          </div>
        </motion.div>

        {/* 3 Global Atelier Hubs Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
          {hubs.map((hub) => (
            <div key={hub.city} className="space-y-2 border-l border-white/10 pl-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] block">
                {hub.city} ATELIER
              </span>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                {hub.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
