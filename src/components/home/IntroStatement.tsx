import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Compass, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export function IntroStatement() {
  const stats = [
    {
      number: '6+',
      label: 'Years of Practice',
      detail: 'Pioneering architectural CGI and generative AI films for global ateliers.',
      icon: Award,
    },
    {
      number: '100+',
      label: 'Projects Delivered',
      detail: 'Completed for premier developers, architects, and luxury funds worldwide.',
      icon: Compass,
    },
    {
      number: '$1B+',
      label: 'Real Estate Visualized',
      detail: 'Off-plan sales value launched with our digital visual campaigns.',
      icon: Layers,
    },
  ];

  return (
    <section id="intro-statement" className="bg-[#0c0d11] text-white py-24 md:py-32 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label Pill */}
        <div className="mb-10 flex items-center justify-between">
          <span className="px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono border border-white/10">
            01 / Atelier Proposition
          </span>
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono hidden sm:inline">
            London • Zurich • Tashkent
          </span>
        </div>

        {/* Editorial Statement (Kontra & Axioma inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-16 border-b border-white/10">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]"
            >
              Vantage Studio — a creative atelier{' '}
              <span className="font-normal italic text-amber-200/90 font-serif">
                focused on light, form & AI-assisted motion.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 text-zinc-300 text-sm md:text-base font-light leading-relaxed"
            >
              <p>
                From preliminary sketch concepts to international pre-sales launches, we craft imagery and films that allow unbuilt spaces to be emotionally experienced.
              </p>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                By combining physical 3D light transport with neural AI motion synthesis, we deliver broadcast-quality architectural campaigns in weeks rather than months.
              </p>
            </motion.div>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs font-semibold uppercase tracking-wider text-white border border-white/15 transition-all shadow-md"
              >
                <span>About Our Atelier</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Rounded Glass Metric Cards (Zero Space & Axioma style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                      Metric 0{idx + 1}
                    </span>
                  </div>

                  <div className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                    {stat.number}
                  </div>

                  <div className="text-xs uppercase tracking-wider text-zinc-200 font-semibold mb-2">
                    {stat.label}
                  </div>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {stat.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
