import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, Film, Sparkles, Building2, Layers, Video } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  icon: typeof Film;
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
    title: 'Real Estate Films & AI Walkthroughs',
    category: 'CINEMATIC MOTION',
    icon: Film,
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85',
    tag: '4K BROADCAST & AI MOTION',
    headline: 'Cinematic films that command capital and pre-sell developments.',
    description:
      'We choreograph 4K drone passes, fluid interior Steadicam paths, and photorealistic daylight trajectories that make buyers fall in love with unbuilt architecture before ground is broken.',
    businessImpact: 'Average +340% increase in international buyer engagement and off-plan sales velocity.',
    deliverables: [
      '60-90s Cinematic Launch Trailer',
      'Virtual Architectural Walkthroughs',
      'Social Media 9:16 Vertical Cuts',
      '4K Drone & Horizon Compositing',
      'Original Soundtrack & Sound Design',
    ],
  },
  {
    id: 'architectural-cgi',
    number: '02',
    title: 'Architectural Visualization (Interior & Exterior)',
    category: 'PHOTOREALISTIC STILLS',
    icon: Building2,
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
    tag: 'UP TO 16K RESOLUTION',
    headline: 'Museum-grade CGI capturing material physics and emotional atmosphere.',
    description:
      'From tactile limestone facade reflections to golden-hour sun illumination, our visuals treat every architectural project with the dignity of high-end architectural photography.',
    businessImpact: 'Secures municipal planning approvals and private anchor investor commitments.',
    deliverables: [
      'Daylight & Dusk Exterior CGI',
      'Tactile Luxury Interior Stills',
      'Aerial Masterplan Perspectives',
      'Micro-Materiality & Finish Proofs',
      'Ultra-Res Files for Physical Hoardings',
    ],
  },
  {
    id: 'ai-enhancement',
    number: '03',
    title: 'AI Architectural Enhancement & Neural Relighting',
    category: 'AI ACCELERATION',
    icon: Sparkles,
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85',
    tag: 'PROPRIETARY NEURAL PIPELINE',
    headline: 'Turn sketch concepts and raw 3D views into photoreal reality in days.',
    description:
      'Using our proprietary AI neural relighting pipeline, we ingest preliminary architect models, simulate hyper-realistic atmospheric light, and deliver stunning marketing visuals at 3x standard speed.',
    businessImpact: 'Reduces visual production cycles by 60% without compromising optical fidelity.',
    deliverables: [
      'Rapid Neural Concept Variations',
      'Multi-Atmosphere Simulation (Sun/Rain/Dusk)',
      'Vegetation & Botanical Layering',
      'Lighting Physics Calibration',
      'Iterative Pre-Marketing Imagery',
    ],
  },
  {
    id: 'construction-timelapse',
    number: '04',
    title: 'Construction Timelapse & Marketing Videos',
    category: 'DEVELOPMENT STORYTELLING',
    icon: Video,
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85',
    tag: 'INVESTOR CAMPAIGNS',
    headline: 'Documenting the rising icon from site excavation to ribbon cutting.',
    description:
      'Dynamic visual pacing combining drone timelapse footage with predictive 3D CGI overlays to show institutional investors and future tenants exact milestone progress.',
    businessImpact: 'Builds relentless transparency and ongoing press momentum during multi-year builds.',
    deliverables: [
      'Hybrid Site Drone + 3D CGI Timelapse',
      'Quarterly Investor Progress Videos',
      'Phase Completion Milestones',
      'Facade Installation Highlights',
      'PR & Executive Interview Packages',
    ],
  },
  {
    id: 'spatial-bim',
    number: '05',
    title: '3D Spatial Modeling & Interactive VR',
    category: 'PRECISION COMPUTATION',
    icon: Layers,
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85',
    tag: 'REAL-TIME SALES SUITES',
    headline: 'Millimeter-precise structural modeling and immersive sales galleria.',
    description:
      'Direct translation of Revit, BIM, and AutoCAD files into lightweight real-time models for touchscreen sales gallery kiosks, web-based unit configurators, and VR headsets.',
    businessImpact: 'Empowers prospective buyers to explore custom penthouse layouts and finishes in real-time.',
    deliverables: [
      'BIM & CAD Structural Optimization',
      'Interactive Sales Gallery Touchscreen App',
      'Web-Based 3D Unit Navigator',
      'Unreal Engine VR Immersive Tours',
      'Direct Floorplan Configurator',
    ],
  },
];

export function SolumServices() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = COMMERCIAL_SERVICES[activeIdx];

  return (
    <section className="w-full bg-[#111111] text-[#F6F6F2] py-24 md:py-[120px] px-6 md:px-10 border-b border-white/12 select-none">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header: 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-14 border-b border-white/12 items-end">
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-white/70 font-medium">
                02 // COMMERCIAL SERVICES &amp; CAPABILITIES
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.05em] text-white uppercase leading-[0.95]">
              WHAT WE DO &amp; SELL.
            </h2>
            <p className="font-sans text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl font-light">
              We turn architectural plans, raw CAD, and BIM models into photorealistic CGI and cinematic marketing films that pre-sell developments and justify premium valuations.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end">
            <Link
              to="/contact"
              className="solum-btn px-6 py-4 border border-white text-white text-xs sm:text-sm font-mono uppercase tracking-wider hover:bg-white hover:text-[#111111] transition-colors duration-180"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <span className="btn-arrow ml-3">
                <ArrowRight className="w-4 h-4 inline-block" />
              </span>
            </Link>
          </div>
        </div>

        {/* Horizontal Service Category Navigation Bar */}
        <div className="pt-8 pb-10 overflow-x-auto no-scrollbar border-b border-white/12">
          <div className="flex items-center gap-2 min-w-max">
            {COMMERCIAL_SERVICES.map((srv, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-5 py-3.5 font-mono text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-3 ${
                    isActive
                      ? 'bg-white text-[#111111] font-semibold shadow-lg'
                      : 'bg-white/[0.04] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span className={`text-xs ${isActive ? 'text-black/60' : 'text-white/40'}`}>
                    0{idx + 1}
                  </span>
                  <span>{srv.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Service Showcase Chamber */}
        <div className="pt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Left Column: Commercial Proposition & Deliverables (Col 1-6) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="font-mono text-xs sm:text-sm text-white/50 block mb-2 uppercase tracking-widest font-medium">
                    PHASE 0{activeIdx + 1} &bull; {activeService.category}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase tracking-tight text-white leading-tight">
                    {activeService.headline}
                  </h3>
                </div>

                <p className="font-sans text-base sm:text-lg text-white/75 font-light leading-relaxed">
                  {activeService.description}
                </p>

                {/* Commercial ROI Banner */}
                <div className="p-4 bg-white/[0.04] border-l-2 border-white border-y border-r border-white/10">
                  <span className="font-mono text-xs text-white/50 block uppercase mb-1">
                    COMMERCIAL OUTCOME:
                  </span>
                  <p className="font-sans text-sm text-white/95 font-medium">
                    {activeService.businessImpact}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-white/12 space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-white/50 block">
                    INCLUDED DELIVERABLES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2.5 font-mono text-xs sm:text-sm text-white/85">
                        <CheckCircle2 className="w-4 h-4 text-white/50 flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-white border-b border-white pb-1 hover:text-white/70 hover:border-white/70 transition-colors"
                  >
                    <span>COMMISSION {activeService.title.toUpperCase()}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Cinematic Media Frame (Col 7-12) */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black border border-white/15 shadow-2xl">
                  <img
                    src={activeService.heroImage}
                    alt={activeService.title}
                    className="w-full h-full object-cover filter brightness-95 contrast-105"
                  />
                  {/* Subtle Gradient & Tag Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-mono text-xs uppercase tracking-widest text-white bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-white/20">
                      {activeService.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs font-mono text-white/80">
                    <span>STUDIO MASTER ATELIER</span>
                    <span>READY FOR SPECIFICATION &bull; 2026</span>
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
