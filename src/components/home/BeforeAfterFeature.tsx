import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';
import { optimizeCloudinaryImage } from '../../utils/media';
import { ArrowUpRight } from 'lucide-react';

interface ComparisonPair {
  id: string;
  tabLabel: string;
  beforeImage: string;
  beforeLabel: string;
  afterImage: string;
  afterLabel: string;
  heading: string;
  description: string;
  projectSlug: string;
}

export function BeforeAfterFeature() {
  const [activeTab, setActiveTab] = useState(0);

  const comparisons: ComparisonPair[] = [
    {
      id: 'client-to-ai',
      tabLabel: '3D Viewport → Final CGI',
      beforeImage: '/images/before_after/villa_before.webp',
      beforeLabel: '3D MODEL',
      afterImage: '/images/before_after/villa_after.webp',
      afterLabel: 'FINAL CGI',
      heading: 'From preliminary concept render to photorealistic dusk reality.',
      description: 'The client supplied 2 rough preliminary concept renders. Our studio rebuilt lighting physics, layered botanical landscaping, and created high-converting marketing visuals in 3 weeks.',
      projectSlug: 'volga-park',
    },
    {
      id: 'viewport-to-final',
      tabLabel: 'Schematic Massing → Final Cinema Still',
      beforeImage: optimizeCloudinaryImage('https://res.cloudinary.com/mvmsbgon/image/upload/v1789992497/projects/lotus-mall/lotus-mall_still_3.jpg', 1400),
      beforeLabel: 'SCHEMATIC MASSING',
      afterImage: optimizeCloudinaryImage('https://res.cloudinary.com/mvmsbgon/image/upload/v1789992495/projects/lotus-mall/lotus-mall_still_1.jpg', 1400),
      afterLabel: 'FINAL CINEMA STILL',
      heading: 'From geometric massing to iconic retail & hotel architecture.',
      description: 'Volumetric masterplan models and curtainwall blueprints transformed into a luminous mixed-use commercial and hospitality destination.',
      projectSlug: 'lotus-mall',
    },
    {
      id: 'plot-to-development',
      tabLabel: 'Construction Framework → Final Night CGI',
      beforeImage: optimizeCloudinaryImage('https://res.cloudinary.com/mvmsbgon/image/upload/v1789990863/projects/effect-archi/make_villa_on_time_constr_120220.jpg', 1400),
      beforeLabel: 'CONSTRUCTION PHASE',
      afterImage: optimizeCloudinaryImage('https://res.cloudinary.com/mvmsbgon/image/upload/v1789990851/projects/effect-archi/A_high-end_architectural__aadba3.jpg', 1400),
      afterLabel: 'FINAL ARCHITECTURAL NIGHT STILL',
      heading: 'From on-site construction framework to luminous midnight photorealism.',
      description: 'Progressive construction framework and structural formwork transformed into an evocative midnight architectural masterpiece with ambient warm lighting.',
      projectSlug: 'architecture-insight',
    },
    {
      id: 'old-to-renovated',
      tabLabel: 'Old Building → Renovated Building',
      beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2200&q=80',
      beforeLabel: 'SOURCE',
      afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2200&q=85',
      afterLabel: 'FINAL',
      heading: 'Visualizing potential across historical adaptive reuse.',
      description: 'A 1943 reinforced concrete monolith reimagined into a contemporary cultural foundation and rooftop lantern over Hamburg.',
      projectSlug: 'bunker-37',
    },
  ];

  const current = comparisons[activeTab];

  return (
    <section className="bg-[#F4F2EE] text-[#11110F] py-28 md:py-40 border-t border-[#11110F]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header with Side-in Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 border-b border-[#11110F]/15 pb-12">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#77736C] font-mono font-semibold block mb-4">
              06 / TRANSFORMATION PROOF
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#11110F] leading-[1.02]">
              EXPLAINING OUR VALUE <br />
              <span className="font-serif italic font-normal text-[#11110F]">IN TWO SECONDS.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <p className="text-[#77736C] text-sm sm:text-base font-light leading-relaxed mb-6">
              Drag the hairline slider to inspect how we transform blueprints, raw CAD, and client concept sketches into sensory marketing reality.
            </p>
            <Link
              to={`/work/${current.projectSlug}`}
              className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-semibold text-[#11110F] hover:text-[#77736C] transition-colors pb-1 border-b border-[#11110F]"
            >
              <span>View Project Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* 4 Interactive Comparison Mode Tabs */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-[#11110F]/10"
        >
          {comparisons.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 text-xs font-mono uppercase tracking-[0.16em] transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#11110F] text-white font-semibold border-[#11110F]'
                    : 'bg-white/80 text-[#77736C] hover:text-[#11110F] border-[#11110F]/15 hover:bg-white'
                }`}
              >
                {item.tabLabel}
              </button>
            );
          })}
        </motion.div>

        {/* Active Comparison Context Bar */}
        <div className="mb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 text-xs text-[#77736C]">
          <h3 className="font-display text-lg font-medium text-[#11110F]">
            {current.heading}
          </h3>
          <span className="text-xs text-[#77736C] font-light max-w-lg text-left sm:text-right">
            {current.description}
          </span>
        </div>

        {/* Interactive Comparison Slider (Slide from Right) */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="border border-[#11110F]/15 shadow-sm"
        >
          <BeforeAfterSlider
            beforeImage={current.beforeImage}
            beforeLabel={current.beforeLabel}
            afterImage={current.afterImage}
            afterLabel={current.afterLabel}
            aspectRatio="aspect-[16/9] md:aspect-[21/9]"
          />
        </motion.div>
      </div>
    </section>
  );
}
