import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  heroImage: string;
  tag: string;
  headline: string;
  description: string;
  businessImpact: string;
  deliverables: string[];
}

const COMMERCIAL_SERVICES: ServiceItem[] = [
  {
    id: 'real-estate-films',
    number: '01',
    title: 'Real Estate Films & Walkthroughs',
    category: 'CINEMATIC MOTION',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85',
    tag: '4K BROADCAST & AI MOTION',
    headline: 'Cinematic films engineered to pre-sell unbuilt developments.',
    description:
      'Sweeping 4K drone choreography and fluid interior Steadicam paths that sell luxury spaces before groundbreaking.',
    businessImpact: '+340% off-plan pre-sales velocity.',
    deliverables: [
      '4K Cinematic Launch Trailers',
      'Virtual Architectural Walkthroughs',
      '9:16 Social Media Video Cuts',
      'Bespoke Soundtrack & Spatial Audio',
    ],
  },
  {
    id: 'architectural-cgi',
    number: '02',
    title: 'Architectural Visualization',
    category: 'PHOTOREALISTIC STILLS',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
    tag: 'UP TO 16K STILLS',
    headline: 'Museum-grade CGI capturing material physics and daylight.',
    description:
      'Sensory exterior and interior stills capturing daylight, dusk, and natural surface reflections.',
    businessImpact: 'Secures planning permits and anchor investor commitments.',
    deliverables: [
      'Daylight & Dusk Exterior CGI',
      'Tactile Luxury Interior Stills',
      'Aerial Masterplan Perspectives',
      '16K Master Files for Physical Hoardings',
    ],
  },
  {
    id: 'ai-enhancement',
    number: '03',
    title: 'AI Architectural Enhancement',
    category: 'NEURAL ACCELERATION',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85',
    tag: 'PROPRIETARY PIPELINE',
    headline: 'Rough sketches transformed into photoreal visuals in days.',
    description:
      'Proprietary neural relighting pipeline delivering high-converting architectural imagery at 3x standard speed.',
    businessImpact: 'Reduces visual production cycles by 60%.',
    deliverables: [
      'Neural Concept Variations',
      'Atmospheric Weather Simulation',
      'Botanical & Landscaping Layering',
      'Rapid Pre-Marketing Teasers',
    ],
  },
  {
    id: 'construction-timelapse',
    number: '04',
    title: 'Construction Timelapse',
    category: 'DEVELOPMENT STORYTELLING',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85',
    tag: 'INVESTOR CAMPAIGNS',
    headline: 'Documenting the rising icon from site excavation to delivery.',
    description:
      'Hybrid drone timelapse footage combined with 3D CGI projections to showcase construction milestones to investors.',
    businessImpact: 'Ongoing investor transparency and media momentum.',
    deliverables: [
      'Quarterly Milestone Videos',
      'Drone Footage + 3D CGI Overlays',
      'Completion & Launch Reels',
      'Broadcast PR Packages',
    ],
  },
  {
    id: 'spatial-bim',
    number: '05',
    title: '3D Spatial Modeling & VR',
    category: 'REAL-TIME SALES',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85',
    tag: 'INTERACTIVE GALLERIA',
    headline: 'BIM models converted into touchscreen apps and VR suites.',
    description:
      'Interactive real-time environments for sales gallery kiosks, web unit configurators, and VR headsets.',
    businessImpact: 'Empowers remote international off-plan sales.',
    deliverables: [
      'BIM & CAD Structural Optimization',
      'Sales Gallery Touchscreen Apps',
      'Web-Based 3D Unit Navigators',
      'Unreal Engine VR Tours',
    ],
  },
];

export function SolumServices() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = COMMERCIAL_SERVICES[activeIdx];

  return (
    <section className="w-full bg-[#111111] text-[#F6F6F2] py-20 md:py-28 px-6 md:px-10 border-b border-white/12 select-none">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header: Minimalist & Direct */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/12 items-end">
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-white/60 font-medium">
                02 // SERVICES
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.05em] text-white uppercase leading-[0.95]">
              WHAT WE DO.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed max-w-xl font-light">
              We turn architectural plans into photorealistic CGI and cinematic marketing films that sell developments.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end">
            <Link
              to="/contact"
              className="solum-btn px-6 py-3.5 border border-white text-white text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-[#111111] transition-colors duration-180"
            >
              <span>START A PROJECT</span>
              <span className="btn-arrow ml-3">
                <ArrowRight className="w-4 h-4 inline-block" />
              </span>
            </Link>
          </div>
        </div>

        {/* Minimalist Service Tabs */}
        <div className="pt-6 pb-8 overflow-x-auto no-scrollbar border-b border-white/12">
          <div className="flex items-center gap-2 min-w-max">
            {COMMERCIAL_SERVICES.map((srv, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-180 cursor-pointer flex items-center gap-2.5 ${
                    isActive
                      ? 'bg-white text-[#111111] font-semibold shadow-md'
                      : 'bg-white/[0.04] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-black/60' : 'text-white/40'}`}>
                    0{idx + 1}
                  </span>
                  <span>{srv.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Service Showcase Chamber */}
        <div className="pt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Short, Punchy Proposition (Col 1-6) */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="font-mono text-xs text-white/40 block mb-1.5 uppercase tracking-widest">
                    DISCIPLINE 0{activeIdx + 1} &bull; {activeService.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase tracking-tight text-white leading-tight">
                    {activeService.headline}
                  </h3>
                </div>

                <p className="font-sans text-sm sm:text-base text-white/75 font-light leading-relaxed">
                  {activeService.description}
                </p>

                {/* Minimal Outcome Note */}
                <div className="py-2.5 px-4 bg-white/[0.03] border-l border-white border-y border-r border-white/10 font-mono text-xs text-white/90">
                  <span className="text-white/40 mr-2">OUTCOME:</span>
                  <span>{activeService.businessImpact}</span>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeService.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 font-mono text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/40 flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commission Link */}
                <div className="pt-3">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-white border-b border-white pb-1 hover:text-white/70 hover:border-white/70 transition-colors"
                  >
                    <span>COMMISSION THIS SERVICE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Clean Media Frame (Col 7-12) */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black border border-white/15 shadow-xl">
                  <img
                    src={activeService.heroImage}
                    alt={activeService.title}
                    className="w-full h-full object-cover filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-white bg-black/70 backdrop-blur-sm px-2.5 py-1 border border-white/20">
                      {activeService.tag}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
