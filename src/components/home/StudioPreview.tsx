import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StudioPreview() {
  return (
    <section className="bg-[#f7f6f2] text-[#121214] py-24 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
              09 — Atelier Culture
            </span>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-black leading-[1.05]">
              Turning architecture <br />
              <span className="font-normal italic text-zinc-700">into visual experiences.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-6 text-zinc-700 font-light text-base leading-relaxed">
            <p>
              We are an international creative production studio uniting trained architects, 3D artists, film directors, and computational researchers under one roof.
            </p>
            <p className="text-sm text-zinc-500 font-normal">
              We leverage AI as a production advantage—not as our core identity. The soul of our imagery stems from deep architectural appreciation, precise lighting studies, and an obsession with material truth.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black hover:text-zinc-600 transition-colors pb-1 border-b border-black"
              >
                <span>Read Full Studio Story</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Studio Atmosphere Photography Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[16/9] md:aspect-[21/9] bg-zinc-200 overflow-hidden shadow-xl border border-black/10"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85"
            alt="Vantage Studio Architecture Loft Atelier"
            loading="lazy"
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 text-white pointer-events-none">
            <span className="text-[10px] uppercase tracking-widest text-zinc-300 block mb-1">
              London & Zurich Ateliers
            </span>
            <span className="text-sm font-light">Where architectural drawing meets cinematic storytelling.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
