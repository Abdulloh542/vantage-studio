import { motion } from 'framer-motion';

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
    { city: 'Tashkent', role: 'Central Asia Production Atelier', address: 'Amir Timur Avenue 107B' },
  ];

  return (
    <section className="bg-[#f7f6f2] text-[#121214] py-24 md:py-32 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
            08 — Social Proof & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black">
            Trusted by teams building what comes next.
          </h2>
        </div>

        {/* Understated Minimalist Monochrome Partner Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 pb-16 border-b border-black/10">
          {partners.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 border border-black/10 bg-white/40 flex flex-col items-center justify-center text-center group hover:bg-white hover:border-black transition-all duration-300"
            >
              <span className="text-xs font-semibold tracking-widest text-zinc-800 uppercase group-hover:text-black">
                {p.name}
              </span>
              <span className="text-[10px] text-zinc-500 font-light mt-1">
                {p.role}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Global Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          {locations.map((loc) => (
            <div key={loc.city} className="border-l border-black/15 pl-6">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                Studio Hub
              </span>
              <h3 className="text-2xl font-light tracking-tight text-black mb-1">
                {loc.city}
              </h3>
              <p className="text-xs text-zinc-700 font-medium mb-1">
                {loc.role}
              </p>
              <p className="text-xs text-zinc-500 font-light">
                {loc.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
