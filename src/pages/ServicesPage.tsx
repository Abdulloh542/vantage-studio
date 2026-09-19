import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const DETAILED_SERVICES = [
  {
    number: '01',
    slug: 'real-estate-films',
    title: 'Real Estate Films & AI Walkthroughs',
    category: 'CINEMATIC MOTION & MARKETING FILMS',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85',
    headline: 'Cinematic films that command institutional capital and pre-sell developments off-plan.',
    description:
      'We choreograph sweeping 4K drone passes, fluid interior Steadicam movements, and daylight-to-dusk lighting transitions. Our films transform blueprints and raw architectural CAD into emotional cinematic stories that buyers and investment committees fall in love with before ground is broken.',
    businessOutcome: 'Average +340% increase in international off-plan pre-sales velocity and investor engagement.',
    deliverables: [
      '60-90s Cinematic Launch Trailer (4K Broadcast Quality)',
      'Virtual Architectural Walkthroughs & Steadicam Paths',
      'Social Media 9:16 Vertical Video Suites for Instagram & TikTok',
      'High-Resolution Drone Footage Integration & Aerial Tracking',
      'Custom Bespoke Musical Score & Spatial Sound Design',
    ],
  },
  {
    number: '02',
    slug: 'architectural-visualization',
    title: 'Architectural Visualization (Interior & Exterior CGI)',
    category: 'PHOTOREALISTIC STILLS UP TO 16K',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
    headline: 'Museum-grade CGI capturing material physics, natural illumination, and human scale.',
    description:
      'We treat every architectural visualization as an editorial photography commission. By accurately simulating sun trajectories, micro-surface imperfections in stone, wood, and concrete, and botanical landscaping, we produce evocative imagery that commands premium pricing.',
    businessOutcome: 'Secures expedited municipal planning approvals and early anchor tenant commitments.',
    deliverables: [
      'Daylight, Overcast & Atmospheric Dusk Hero Viewpoints',
      'Sensory Luxury Interior CGI with Custom Furniture Curation',
      'Aerial Masterplan Perspectives & Urban Context Compositing',
      'Material & Texture Sample Close-Up Vignettes',
      'Ultra-High-Resolution 16K Master Files for Physical Hoardings',
    ],
  },
  {
    number: '03',
    slug: 'ai-architectural-enhancement',
    title: 'AI Architectural Enhancement & Neural Relighting',
    category: 'PROPRIETARY AI PIPELINE',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=85',
    headline: 'Transform rough preliminary sketches and untextured 3D models into photoreal visuals in days.',
    description:
      'Using our proprietary neural rendering technology, we ingest preliminary architect sketch concepts, apply physically accurate material shaders, calibrate atmospheric daylight, and generate multi-angle marketing visuals in a fraction of traditional production schedules.',
    businessOutcome: 'Accelerates visual turnarounds by 60%, empowering rapid design testing and early investor teasers.',
    deliverables: [
      'Rapid Concept Generation & Lighting Iterations',
      'Atmospheric Weather Simulation (Rain, Fog, Golden Hour, Dusk)',
      'Vegetation, Landscaping & Biophilic Surface Synthesis',
      'Rapid Turnaround Marketing Teasers for Press Releases',
      'Seamless Upscaling to Ultra-High Resolution',
    ],
  },
  {
    number: '04',
    slug: 'construction-timelapse-marketing',
    title: 'Construction Timelapse & Marketing Videos',
    category: 'DEVELOPMENT STORYTELLING',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85',
    headline: 'Documenting the rising architectural landmark from ground breaking to topping out.',
    description:
      'We combine on-site robotic drone timelapse captures with 3D CGI projections to illustrate construction milestones, facade installation, and final architectural fruition for institutional investors, city councils, and future corporate tenants.',
    businessOutcome: 'Provides continuous milestone visibility, investor confidence, and ongoing marketing momentum.',
    deliverables: [
      'Quarterly Investor Progress Videos & Milestone Briefs',
      'Hybrid Site Drone Footage + 3D Render Overlays',
      'Topping-Out & Completion Launch Reels',
      'Facade Installation & Engineering Spotlights',
      'Broadcast-Quality PR Video Packages for Press & Media',
    ],
  },
  {
    number: '05',
    slug: 'spatial-bim-interactive-vr',
    title: '3D Spatial Modeling & Interactive Sales Suites',
    category: 'REAL-TIME COMPUTATION',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85',
    headline: 'Millimeter-precise Revit structural translation into interactive touchscreen apps and VR suites.',
    description:
      'We optimize heavy architectural BIM and AutoCAD geometry into lightweight, interactive real-time environments for sales gallery touchscreen tables, web-based unit selectors, and Unreal Engine virtual reality headsets.',
    businessOutcome: 'Empowers prospective international buyers to configure penthouses and walk through floorplans remotely.',
    deliverables: [
      'BIM, Revit & Rhino Model Optimization & Topology Cleanup',
      'Custom Sales Gallery Touchscreen Application',
      'Web-Based 3D Apartment Selector & Sun Study Tool',
      'Unreal Engine Virtual Reality Walkthrough Suites',
      'Interactive Material & Finish Switcher for Clients',
    ],
  },
];

export function ServicesPage() {
  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Header: Editorial Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16 border-b border-[#101010]/12 items-end">
          <div className="md:col-span-8 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010] font-medium">
                COMMERCIAL CAPABILITIES &bull; 05 DISCIPLINES
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]"
            >
              VISUAL PRODUCTION FOR UNBUILT ARCHITECTURE.
            </motion.h1>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <Link
              to="/contact"
              className="solum-btn px-6 py-4 border border-[#101010] text-[#101010] text-xs font-mono uppercase tracking-wider hover:bg-[#101010] hover:text-white transition-colors duration-180"
            >
              <span>COMMISSION A PROJECT</span>
              <span className="btn-arrow ml-3">
                <ArrowRight className="w-4 h-4 inline-block" />
              </span>
            </Link>
          </div>
        </div>

        {/* Stack of 5 Commercial Services */}
        <div className="divide-y divide-[#101010]/12">
          {DETAILED_SERVICES.map((srv) => (
            <motion.div
              key={srv.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              {/* Media Frame (Col 1-6) */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border border-[#101010]/12 group">
                  <img
                    src={srv.heroImage}
                    alt={srv.title}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-95 contrast-105 transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-white bg-black/70 backdrop-blur-sm px-3 py-1.5 border border-white/20">
                      {srv.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text & Deliverables Column (Col 7-12) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="font-mono text-xs sm:text-sm text-[#757575] block mb-2 font-medium">
                    DISCIPLINE {srv.number}
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold uppercase tracking-tight text-[#101010]">
                    {srv.title}
                  </h2>
                </div>

                <p className="font-sans text-sm sm:text-base text-[#101010]/80 leading-relaxed font-light">
                  {srv.description}
                </p>

                {/* Business Impact Box */}
                <div className="p-4 bg-[#F8F7F4] border-l-2 border-[#101010] border-y border-r border-[#101010]/10">
                  <span className="font-mono text-xs uppercase text-[#757575] block mb-1">
                    COMMERCIAL OUTCOME:
                  </span>
                  <p className="font-sans text-sm text-[#101010] font-medium">
                    {srv.businessOutcome}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-[#101010]/12 space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block font-medium">
                    TYPICAL DELIVERABLES:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {srv.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#101010]/85">
                        <CheckCircle2 className="w-4 h-4 text-[#101010]/50 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 flex items-center gap-6">
                  <Link
                    to="/contact"
                    className="solum-btn px-6 py-3.5 bg-[#101010] text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
                  >
                    <span>COMMISSION THIS SERVICE</span>
                    <span className="btn-arrow ml-3">
                      <ArrowRight className="w-3.5 h-3.5 inline-block" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
