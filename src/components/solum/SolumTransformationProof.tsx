import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';

interface Scenario {
  id: string;
  tabLabel: string;
  beforeImage: string;
  afterImage: string;
  headline: string;
  description: string;
  projectSlug: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'client-to-cgi',
    tabLabel: 'CLIENT RENDER → FINAL CGI',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=2400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
    headline: 'From preliminary concept render to photorealistic dusk reality.',
    description:
      'The client supplied 2 rough preliminary concept renders. Our studio rebuilt lighting physics, layered botanical landscaping, and created high-converting marketing visuals in 3 weeks.',
    projectSlug: 'riviera-residence',
  },
  {
    id: 'viewport-to-film',
    tabLabel: 'RAW 3D VIEWPORT → FINAL FILM STILL',
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85',
    headline: 'Turning raw wireframes into luminous corporate leasing collateral.',
    description:
      'Raw structural column grids and Revit blueprints transformed into a luminous corporate headquarters with triple-glazed acoustic facades and dusk reflections.',
    projectSlug: 'berliner-strasse-69',
  },
  {
    id: 'site-to-development',
    tabLabel: 'SITE PHOTO → PROPOSED DEVELOPMENT',
    beforeImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=85',
    headline: 'Pre-selling luxury coastal estates before groundbreaking.',
    description:
      'Empty coastal terrain brought to life with 8 exclusive cantilevered pavilions, resulting in a 100% off-plan sellout within 120 days of visual launch.',
    projectSlug: 'australia-residence',
  },
  {
    id: 'old-to-renovated',
    tabLabel: 'OLD BUILDING → RENOVATED BUILDING',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85',
    headline: 'Visualizing potential across historical adaptive reuse.',
    description:
      'A 1943 reinforced concrete monolith reimagined into a contemporary cultural foundation and rooftop lantern over Hamburg.',
    projectSlug: 'bunker-37',
  },
];

export function SolumTransformationProof() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeScenario = SCENARIOS[activeTabIdx];

  return (
    <section className="w-full bg-[#FAF9F6] text-[#101010] py-24 md:py-[120px] px-6 md:px-10 border-b border-[#101010]/12 select-none">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#101010]/80">
            05 / TRANSFORMATION PROOF
          </span>
        </div>

        {/* Top Header: Big Headline Left, Copy & Link Right (Exact Image 1 layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-12 border-b border-[#101010]/12">
          {/* Left: Two/Three-Line Big Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.05em] text-[#101010] leading-[0.96] uppercase">
              EXPLAINING OUR <br />
              VALUE <br />
              <span className="font-serif italic font-normal tracking-tight lowercase">
                <span className="uppercase">I</span>N <span className="uppercase">T</span>WO <span className="uppercase">S</span>ECONDS.
              </span>
            </h2>
          </motion.div>

          {/* Right: Explanatory Copy & Project Link */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="font-sans text-sm sm:text-base text-[#101010]/75 leading-relaxed max-w-lg font-light">
              Drag the hairline slider to inspect how we transform blueprints, raw CAD, and client concept sketches into sensory marketing reality.
            </p>
            <div>
              <Link
                to={`/projects/${activeScenario.projectSlug}`}
                className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wider font-medium text-[#101010] border-b border-[#101010] pb-1 hover:text-[#757575] hover:border-[#757575] transition-colors duration-180"
              >
                <span>VIEW PROJECT CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-180 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 4 Tabs Row (Exact Image 1 styling: Black active tab, white inactive tabs with hairline borders) */}
        <div className="pt-10 pb-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-3 min-w-max">
            {SCENARIOS.map((item, idx) => {
              const isActive = activeTabIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`px-6 py-3.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#111111] text-white font-medium shadow-sm'
                      : 'bg-white text-[#101010]/80 border border-[#101010]/15 hover:border-[#101010] hover:text-[#101010]'
                  }`}
                >
                  {item.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Scenario Context Line: Heading Left, Detailed Description Right */}
        <div className="pb-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
          <div className="md:col-span-7">
            <h3 className="font-sans text-base sm:text-lg font-medium text-[#101010] tracking-[-0.02em]">
              {activeScenario.headline}
            </h3>
          </div>
          <div className="md:col-span-5">
            <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed font-light">
              {activeScenario.description}
            </p>
          </div>
        </div>

        {/* Interactive Comparison Slider Container with 1px Hairline Border */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative border border-[#101010]/15 bg-[#101010] overflow-hidden shadow-sm"
          >
            <BeforeAfterSlider
              beforeImage={activeScenario.beforeImage}
              beforeLabel="SOURCE"
              afterImage={activeScenario.afterImage}
              afterLabel="FINAL"
              aspectRatio="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10]"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
