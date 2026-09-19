import { motion } from 'framer-motion';
import { Sparkles, MapPin } from 'lucide-react';

export function TrustSection() {
  const partners = [
    { name: 'ARCHITECTURE STUDIO', role: 'International Masterplanners' },
    { name: 'PATRIZIA REAL ESTATE', role: 'Pan-European Investment Fund' },
    { name: 'SHERPA DEVELOPMENTS', role: 'Luxury Residential Group' },
    { name: 'GALA DEVELOPMENTS', role: 'Commercial Real Estate' },
    { name: 'KAURI CAB URBAN', role: 'Metropolitan Housing Fund' },
    { name: 'EZA ARCHITEKTEN', role: 'Swiss Architectural Atelier' },
    { name: 'CASTELMAN PARTNERS', role: 'Hospitality Assets' },
    { name: 'HAMMER & SCHMIDT', role: 'Heritage Restoration' },
  ];

  const locations = [
    { city: 'London', role: 'Creative Direction & Client Strategy', address: '18 Berkeley Square, Mayfair' },
    { city: 'Zurich', role: 'BIM & Technical Precision Hub', address: 'Gotthardstrasse 26, Enge' },
    { city: 'Tashkent', role: 'Central Asia Production Center', address: 'Amir Timur Avenue 107B' },
  ];

  return (
    <section className="bg-[#090a0d] text-white py-24 md:py-32 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>10 / Social Proof & Network</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Trusted by teams shaping the skyline.
          </h2>
        </div>

        {/* Minimalist Monochrome Partner Glass Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 pb-16 border-b border-white/10">
          {partners.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center group hover:border-white/30 hover:bg-white/[0.08] transition-all"
            >
              <span className="font-display text-xs font-bold tracking-widest text-zinc-300 uppercase group-hover:text-white transition-colors">
                {p.name}
              </span>
              <span className="text-[10px] text-zinc-400 font-light mt-1 font-mono">
                {p.role}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Global Hubs Grid (Rounded Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          {locations.map((loc) => (
            <div key={loc.city} className="glass-card rounded-3xl p-7 border border-white/10">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-2">
                Studio Hub
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-1">
                {loc.city}
              </h3>
              <p className="text-xs text-amber-200/90 font-medium mb-2">
                {loc.role}
              </p>
              <p className="text-xs text-zinc-300 font-light flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{loc.address}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
