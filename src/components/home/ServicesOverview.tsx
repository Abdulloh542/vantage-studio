import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import type { Service } from '../../types';

interface ServicesOverviewProps {
  services: Service[];
}

export function ServicesOverview({ services }: ServicesOverviewProps) {
  return (
    <section className="bg-[#0c0d11] text-white py-24 md:py-36 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>03 / Capabilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.06]">
              Four Pillars of Production
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs uppercase tracking-wider font-semibold text-white border border-white/15 transition-all shadow-md self-start md:self-auto"
          >
            <span>All Services & Deliverables</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 4-Pillar Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-zinc-800 border border-white/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-mono border border-white/15">
                      Pillar {service.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold tracking-tight text-white mb-2 group-hover:text-amber-200 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Key Deliverables Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.deliverables.slice(0, 3).map((d) => (
                    <span
                      key={d.name}
                      className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[10px] text-zinc-300 font-light"
                    >
                      {d.name}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs uppercase tracking-wider font-semibold text-zinc-300 group-hover:text-white transition-colors"
              >
                <span>Deep Dive</span>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
