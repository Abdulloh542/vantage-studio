import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '../../types';

interface ServicesOverviewProps {
  services: Service[];
}

export function ServicesOverview({ services }: ServicesOverviewProps) {
  return (
    <section className="bg-[#f7f6f2] text-[#121214] py-24 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
              03 — What We Do
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black leading-[1.08]">
              Comprehensive digital solutions for real estate & architecture.
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black hover:text-zinc-600 transition-colors pb-1 border-b border-black self-start md:self-auto"
          >
            <span>All Services & Deliverables</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Editorial 4-Pillar Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-black/15 pt-8 flex flex-col justify-between hover:border-black transition-colors duration-300"
            >
              <div>
                {/* Ghost Number + Service Title */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-4xl md:text-5xl font-light text-zinc-300 group-hover:text-black transition-colors duration-300 font-mono">
                    {service.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400">
                    Pillar
                  </span>
                </div>

                <h3 className="text-xl font-medium tracking-tight text-black mb-3">
                  {service.title}
                </h3>

                <p className="text-xs text-zinc-600 font-light leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Key Deliverables Bullet Points */}
                <ul className="space-y-2 mb-8 border-t border-black/10 pt-4">
                  {service.deliverables.slice(0, 4).map((d) => (
                    <li
                      key={d.name}
                      className="text-[11px] text-zinc-700 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-black/40 rounded-full" />
                      <span>{d.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Link */}
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center justify-between w-full pt-4 border-t border-black/10 text-xs uppercase tracking-widest font-semibold text-black group-hover:text-zinc-600 transition-colors"
              >
                <span>Explore Service</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
