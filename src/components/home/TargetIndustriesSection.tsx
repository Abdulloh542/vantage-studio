import { motion } from 'framer-motion';
import { Building2, Compass, Key, Palette, HardHat, TrendingUp, ArrowUpRight } from 'lucide-react';
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
    <section className="bg-[#f7f6f2] text-[#121214] py-24 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
              Sector Specialization
            </span>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-black leading-[1.05]">
              Built for industry leaders.
            </h2>
          </div>
          <p className="text-zinc-600 text-sm max-w-md font-light leading-relaxed">
            We operate as a high-velocity visual partner tailored to the commercial needs of developers, architects, and property funds.
          </p>
        </div>

        {/* 6-Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-8 border border-black/10 flex flex-col justify-between hover:border-black transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-black mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                    {ind.need}
                  </span>

                  <h3 className="text-xl font-medium tracking-tight text-black mb-3">
                    {ind.role}
                  </h3>

                  <p className="text-xs text-zinc-600 font-light leading-relaxed">
                    {ind.solution}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-black">
                  <span className="uppercase tracking-wider text-[11px]">Commission Atelier</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
          >
            <span>Request an Industry-Specific Proposal</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
