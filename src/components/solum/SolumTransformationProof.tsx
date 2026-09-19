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
  timeline: string;
  outputFormat: string;
  commercialImpact: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'client-to-cgi',
    tabLabel: 'CLIENT RENDER → FINAL CGI',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=2400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
    headline: 'From preliminary concept render to photorealistic dusk reality.',
    description: 'Rebuilt lighting physics, botanical landscaping, and luxury finishes in 3 weeks.',
    projectSlug: 'riviera-residence',
    timeline: '3 WEEKS',
    outputFormat: '16K ARCHIVAL STILLS',
    commercialImpact: '100% PRE-SOLD OFF-PLAN',
  },
  {
    id: 'viewport-to-film',
    tabLabel: 'RAW 3D VIEWPORT → FINAL FILM STILL',
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85',
    headline: 'Turning raw wireframes into corporate leasing collateral.',
    description: 'Column grids and Revit blueprints transformed into luminous acoustic facades.',
    projectSlug: 'berliner-strasse-69',
    timeline: '4 WEEKS',
    outputFormat: '4K BROADCAST STILLS',
    commercialImpact: 'ANCHOR TENANT SECURED',
  },
  {
    id: 'site-to-development',
    tabLabel: 'SITE PHOTO → PROPOSED DEVELOPMENT',
    beforeImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=85',
    headline: 'Pre-selling luxury coastal estates before groundbreaking.',
    description: 'Coastal plot topography brought to life with 8 exclusive cantilevered pavilions.',
    projectSlug: 'australia-residence',
    timeline: '5 WEEKS',
    outputFormat: 'VR & SPATIAL SUITE',
    commercialImpact: '€48M ASSET CAPITALIZED',
  },
  {
    id: 'old-to-renovated',
    tabLabel: 'OLD BUILDING → RENOVATED BUILDING',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85',
    headline: 'Visualizing potential across historical adaptive reuse.',
    description: 'A 1943 reinforced concrete monolith reimagined into a cultural foundation.',
    projectSlug: 'bunker-37',
    timeline: '6 WEEKS',
    outputFormat: 'MUNICIPAL CAMPAIGN',
    commercialImpact: '100% PLANNING APPROVAL',
  },
];

export function SolumTransformationProof() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeScenario = SCENARIOS[activeTabIdx];

  return (
    <section className="w-full bg-[#0D0D0D] text-[#F6F6F2] py-20 md:py-28 px-6 md:px-10 border-b border-white/12 select-none">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 bg-white inline-block" />
          <span className="font-mono text-xs uppercase tracking-widest text-white/60">
            06 // PROOF &bull; TECHNICAL AUDIT
          </span>
        </div>

        {/* Section Header: Minimalist & Direct */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-10 border-b border-white/12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.05em] text-white leading-[0.96] uppercase">
              EXPLAINING OUR <br />
              VALUE <br />
              <span className="font-serif italic font-normal tracking-tight text-white/90 lowercase">
                <span className="uppercase">I</span>N <span className="uppercase">T</span>WO <span className="uppercase">S</span>ECONDS.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="font-sans text-sm text-white/70 leading-relaxed font-light">
              Drag the hairline slider to compare blueprints and raw CAD against final photorealistic CGI.
            </p>
            <div>
              <Link
                to={`/projects/${activeScenario.projectSlug}`}
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-medium text-white border-b border-white pb-1 hover:text-white/60 hover:border-white/60 transition-colors duration-180"
              >
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-180 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Tabs */}
        <div className="pt-8 pb-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {SCENARIOS.map((item, idx) => {
              const isActive = activeTabIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTabIdx(idx)}
                  className={`px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-180 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#0D0D0D] font-semibold shadow-md'
                      : 'bg-[#181818] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {item.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scenario Context Bar */}
        <div className="pb-5 grid grid-cols-1 md:grid-cols-12 gap-3 items-baseline">
          <div className="md:col-span-7">
            <h3 className="font-sans text-base sm:text-lg font-medium text-white tracking-[-0.02em]">
              {activeScenario.headline}
            </h3>
          </div>
          <div className="md:col-span-5">
            <p className="font-sans text-xs sm:text-sm text-white/60 font-light">
              {activeScenario.description}
            </p>
          </div>
        </div>

        {/* Comparison Viewport */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative border border-white/15 bg-black overflow-hidden shadow-xl"
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

        {/* Technical Strip */}
        <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-white/70">
          <div className="flex items-center gap-2">
            <span className="text-white/40">TIMELINE:</span>
            <span className="text-white font-medium">{activeScenario.timeline}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/40">FORMAT:</span>
            <span className="text-white font-medium">{activeScenario.outputFormat}</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-end">
            <span className="text-white/40">OUTCOME:</span>
            <span className="text-white font-medium">{activeScenario.commercialImpact}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
