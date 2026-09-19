import { useState } from 'react';
import { motion } from 'framer-motion';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      tabLabel: 'Client Render → AI Enhanced',
      beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=2200&q=80',
      beforeLabel: 'CLIENT CONCEPT RENDER',
      afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85',
      afterLabel: 'AI-ENHANCED FINAL CGI',
      heading: 'From preliminary concept render to photorealistic dusk reality.',
      description: 'The client supplied 2 rough preliminary concept renders. Our studio rebuilt lighting physics, layered botanical landscaping, and created high-converting marketing visuals in 3 weeks.',
      projectSlug: 'riviera-residence',
    },
    {
      id: 'viewport-to-final',
      tabLabel: '3ds Max Viewport → Final Image',
      beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=80',
      beforeLabel: '3DS MAX CAD VIEWPORT',
      afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85',
      afterLabel: 'FINAL MARKETING STILL',
      heading: 'Turning raw wireframes into corporate leasing collateral.',
      description: 'Raw structural column grids and Revit blueprints transformed into a luminous corporate headquarters with triple-glazed acoustic facades.',
      projectSlug: 'berliner-strasse-69',
    },
    {
      id: 'plot-to-development',
      tabLabel: 'Empty Plot → Proposed Development',
      beforeImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=80',
      beforeLabel: 'EMPTY COASTAL PLOT',
      afterImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2200&q=85',
      afterLabel: 'OCEANFRONT VILLA CGI',
      heading: 'Pre-selling luxury estates before groundbreaking.',
      description: 'Empty coastal sand topography brought to life with 8 exclusive cantilevered pavilions, resulting in a 100% off-plan sellout within 120 days.',
      projectSlug: 'australia-residence',
    },
    {
      id: 'old-to-renovated',
      tabLabel: 'Old Building → Renovated Building',
      beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2200&q=80',
      beforeLabel: 'EXISTING RAW BUNKER',
      afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2200&q=85',
      afterLabel: 'RESTORED CULTURAL PAVILION',
      heading: 'Visualizing potential across historical adaptive reuse.',
      description: 'A 1943 reinforced concrete monolith reimagined into a contemporary cultural foundation and rooftop lantern over Hamburg.',
      projectSlug: 'bunker-37',
    },
  ];

  const current = comparisons[activeTab];

  return (
    <section className="bg-[#0c0d11] text-white py-24 md:py-36 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>05 / Transformation Engine</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Instant Value Proof
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <Link
              to={`/work/${current.projectSlug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs uppercase tracking-wider font-semibold text-white border border-white/15 transition-all shadow-md"
            >
              <span>View Full Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Interactive Scenario Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {comparisons.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-white text-black font-semibold border-white shadow-xl scale-105'
                    : 'glass-pill-dark text-zinc-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Context Note */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <h3 className="font-display text-base sm:text-lg font-semibold text-white">
            {current.heading}
          </h3>
          <span className="text-zinc-400 font-light text-xs max-w-md text-left sm:text-right">
            {current.description}
          </span>
        </div>

        {/* Interactive Comparison Slider inside Curved Container (Axioma style) */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          data-cursor="DRAG"
          className="rounded-[32px] sm:rounded-[40px] overflow-hidden border border-white/15 shadow-2xl"
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
