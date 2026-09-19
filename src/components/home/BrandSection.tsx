import { motion } from 'framer-motion';

const BRANDS = [
  'FOSTER + PARTNERS',
  'HERZOG & DE MEURON',
  'GENSLER',
  'PATRIZIA DEV',
  'BROOKFIELD REALTY',
  'CBRE GLOBAL',
  'BIG BJARKE INGELS',
  'HINES REAL ESTATE',
  'ZAHA HADID ARCH',
  'JLL CAPITAL',
  'SKIDMORE OWINGS & MERRILL',
];

export function BrandSection() {
  return (
    <section className="bg-[#FAF9F6] text-[#0B0B0A] py-16 md:py-24 border-b border-black/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mb-8">
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-black/50 font-medium"
          >
            COLLABORATING PARTNERS //
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-black/40"
          >
            *(2014 - 2026)
          </motion.span>
        </div>
      </div>

      {/* Infinite Smooth Ticker Marquee */}
      <div className="relative overflow-hidden w-full whitespace-nowrap">
        <div className="inline-flex gap-16 md:gap-24 animate-marquee py-3">
          {BRANDS.concat(BRANDS).map((brand, idx) => (
            <span
              key={idx}
              className="font-display text-sm md:text-base tracking-[0.25em] uppercase text-black/50 hover:text-black transition-colors font-medium cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
