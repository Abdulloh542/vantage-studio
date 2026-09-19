import { motion } from 'framer-motion';
import { Building2, Compass, Key, Palette, HardHat, TrendingUp, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TargetIndustriesSection() {
  const industries = [
    {
      role: 'Real Estate Developers',
      icon: Building2,
      need: 'Off-Plan Pre-Sales Velocity',
      solution: 'Turn 2D floor plans into emotive launch films and penthouses that secure early buyer deposits.',
    },
    {
      role: 'Architecture Studios',
      icon: Compass,
      need: 'Competition & Jury Tenders',
      solution: 'Translate complex spatial BIM models into museum-grade imagery that wins competitive civic commissions.',
    },
    {
      role: 'Real Estate Agencies & Brokerages',
      icon: Key,
      need: 'High-Converting Buyer Collateral',
      solution: 'Provide luxury brochures, 9:16 social reels, and interactive touchscreen assets for sales galleries.',
    },
    {
      role: 'Interior Designers',
      icon: Palette,
      need: 'Tactile Material Precision',
      solution: 'Sample real-world fabrics, custom joinery, fluted marble, and exact lighting specifications.',
    },
    {
      role: 'Construction Companies',
      icon: HardHat,
      need: 'Phasing & Landmark Approvals',
      solution: 'Sequenced 3D simulations showing site logistics, structural progress, and finished handover quality.',
    },
    {
      role: 'Property Investment Funds',
      icon: TrendingUp,
      need: 'Institutional Capital Deck Assets',
      solution: 'High-impact masterplan visual teasers that justify nine-figure capital allocations before groundbreaking.',
    },
  ];

  return (
    <section className="bg-[#090a0d] text-white py-24 md:py-36 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>08 / Target Sectors</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Built for Industry Leaders
            </h2>
          </div>
          <p className="text-zinc-300 text-sm max-w-md font-light leading-relaxed">
            We operate as a high-velocity visual partner tailored to the commercial needs of developers, architects, and property funds worldwide.
          </p>
        </div>

        {/* 6-Industry Grid (Rounded Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-white/25 transition-all group shadow-xl"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-200 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                    {ind.need}
                  </span>

                  <h3 className="font-display text-xl font-bold tracking-tight text-white mb-3 group-hover:text-amber-200 transition-colors">
                    {ind.role}
                  </h3>

                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    {ind.solution}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  <span className="uppercase tracking-wider text-[11px]">Commission Atelier</span>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-2xl"
          >
            <span>Request an Industry-Specific Proposal</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
