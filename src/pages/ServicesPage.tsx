import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';

interface ServiceDetail {
  number: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  pills: string[];
  businessOutcome: string;
  deliverables: string[];
  hasDemo?: boolean;
  demoUrl?: string;
}

const DETAILED_SERVICES: ServiceDetail[] = [
  {
    number: '01',
    slug: 'visual-content',
    title: 'Visual Content',
    tagline: 'CGI for real estate: photorealistic renders, 4K animation films, and virtual tours that turn unbuilt concepts into experiences that sell.',
    description:
      'We treat every architectural visualization as an editorial photography commission. By accurately simulating sun trajectories, micro-surface imperfections in stone, wood, and concrete, and botanical landscaping, we produce evocative imagery and cinematic films that command institutional capital.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
    pills: ['3D Rendering', '3D Animations', 'Virtual Tours', 'Drone Compositing'],
    businessOutcome: 'Average +340% increase in international off-plan pre-sales velocity and investor engagement.',
    deliverables: [
      '60-90s Cinematic Launch Trailer (4K Broadcast Quality)',
      'Virtual Architectural Walkthroughs & Steadicam Paths',
      'Ultra-High-Resolution 16K Master Files for Physical Hoardings',
      'Daylight, Overcast & Atmospheric Dusk Hero Viewpoints',
      'Custom Bespoke Musical Score & Spatial Sound Design',
    ],
  },
  {
    number: '02',
    slug: 'sales-experiences',
    title: 'Sales Experiences',
    tagline: 'Interactive platforms that turn browsers into buyers. Move beyond static renders. Give buyers the power to explore, customize, and commit before construction.',
    description:
      'We optimize heavy architectural BIM and AutoCAD geometry into lightweight, interactive real-time environments for sales gallery touchscreen tables, web-based unit selectors, and Unreal Engine virtual reality headsets.',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85',
    pills: ['Interactive CRM', 'UX Research & Strategy', 'Touchscreen Sales Apps', 'Web-Based 3D'],
    businessOutcome: 'Empowers prospective international buyers to configure penthouses and walk through floorplans remotely.',
    deliverables: [
      'Custom Sales Gallery Touchscreen Application',
      'Web-Based 3D Apartment Selector & Sun Study Tool',
      'Unreal Engine Virtual Reality Walkthrough Suites',
      'Interactive Material & Finish Switcher for Clients',
      'Live Unit Availability & Reservation System Integration',
    ],
    hasDemo: true,
    demoUrl: '/projects/riviera-residence',
  },
  {
    number: '03',
    slug: 'brand-identity',
    title: 'Brand Identity',
    tagline: 'Strategic design systems that define market presence. Great architectural developments deserve great branding.',
    description:
      'From editorial typography and launch monographs to bespoke digital landing pages and marketing suites, we build cohesive brand universes that communicate prestige and drive rapid off-plan pre-sales velocity.',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85',
    pills: ['Visual Identity', 'Brand Storytelling', 'Web Design & Development', 'Brochures & Signage'],
    businessOutcome: 'Elevates development perceived value and anchors premium price-per-square-meter positioning.',
    deliverables: [
      'Bespoke Development Logo, Typography & Color Palette',
      'Architectural Marketing Website & Mobile Microsite',
      'Hardcover Luxury Sales Book & Editorial Brochure Design',
      'Site Hoarding & Presentation Gallery Environmental Signage',
      'Digital Advertising Campaign Toolkits for Global Rollout',
    ],
  },
  {
    number: '04',
    slug: 'construction-timelapse-marketing',
    title: 'Development Storytelling & Aerial Drone',
    tagline: 'Documenting the rising architectural landmark from ground breaking to topping out.',
    description:
      'We combine on-site robotic drone timelapse captures with 3D CGI projections to illustrate construction milestones, facade installation, and final architectural fruition for institutional investors, city councils, and future corporate tenants.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85',
    pills: ['Drone Timelapse', 'Investor Briefs', 'Facade Tracking', 'PR Film Packages'],
    businessOutcome: 'Provides continuous milestone visibility, investor confidence, and sustained marketing momentum.',
    deliverables: [
      'Quarterly Investor Progress Videos & Milestone Briefs',
      'Hybrid Site Drone Footage + 3D Render Overlays',
      'Topping-Out & Completion Launch Reels',
      'Facade Installation & Engineering Spotlights',
      'Broadcast-Quality PR Video Packages for Press & Media',
    ],
  },
];

export function ServicesPage() {
  return (
    <main className="w-full bg-[#0A0A0A] text-white pt-28 md:pt-36 pb-24 md:pb-36 select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14">
        {/* ========================================================= */}
        {/* HEADER: EDITORIAL HERO STATEMENT                          */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16 border-b border-white/10 items-end">
          <div className="md:col-span-8 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-white rounded-full inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-white/50 font-medium">
                COMMERCIAL CAPABILITIES // 04 DISCIPLINES
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.02]"
            >
              Comprehensive digital solutions that transform real estate from concept to close.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="font-sans text-sm sm:text-base lg:text-lg text-white/60 font-light max-w-2xl leading-relaxed"
            >
              From photorealistic visualization to interactive platforms that accelerate sales, we are your end-to-end digital partner.
            </motion.p>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full bg-white hover:bg-white/90 text-black text-xs sm:text-sm font-sans font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.35)] inline-flex items-center gap-2"
            >
              <span>COMMISSION A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CINEMATIC FULL-WIDTH LANDSCAPE CARDS                      */}
        {/* ========================================================= */}
        <div className="space-y-10 sm:space-y-14 pt-14 sm:pt-20">
          {DETAILED_SERVICES.map((srv, index) => (
            <motion.div
              key={srv.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-full rounded-2xl sm:rounded-3xl overflow-hidden min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 border border-white/10 bg-zinc-950 shadow-2xl transition-all duration-500 hover:border-white/25"
            >
              {/* Background Image with Hover Zoom */}
              <img
                src={srv.heroImage}
                alt={srv.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.70] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
              />

              {/* Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/35 md:bg-gradient-to-r md:from-black/95 md:via-black/75 md:to-black/35 pointer-events-none" />

              {/* Top / Content Area */}
              <div className="relative z-10 max-w-4xl space-y-4">
                <div className="space-y-2">
                  <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                    {srv.number} {srv.title}
                  </h2>
                  <p className="font-sans text-sm sm:text-base lg:text-lg text-white/90 font-medium leading-relaxed">
                    {srv.tagline}
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-3xl">
                  {srv.description}
                </p>

                {/* Commercial Impact Callout */}
                <div className="inline-block p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 max-w-xl">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-white/50 block mb-1">
                    COMMERCIAL OUTCOME
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-white/90 font-medium">
                    {srv.businessOutcome}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-2">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white/40 block mb-2">
                    CORE DELIVERABLES
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-3xl">
                    {srv.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs sm:text-sm font-mono text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/50 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Interactive Bar */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Frosted Glass Category Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {srv.pills.map((pill) => (
                    <span
                      key={pill}
                      className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-sans text-white/90 tracking-wide transition-colors cursor-default"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Split Action Buttons */}
                <div className="flex items-center gap-3 flex-shrink-0 self-start sm:self-auto">
                  {srv.hasDemo && (
                    <Link
                      to={srv.demoUrl || '/projects'}
                      className="px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-xs sm:text-sm font-sans font-medium text-white transition-all duration-200 inline-flex items-center gap-1.5"
                    >
                      <span>View Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                    </Link>
                  )}

                  <Link
                    to="/contact"
                    className="px-6 py-2.5 rounded-full bg-white hover:bg-white/90 text-black text-xs sm:text-sm font-sans font-semibold transition-all duration-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.35)] inline-flex items-center gap-2"
                  >
                    <span>Start a project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* CLOSING STATEMENT BANNER                                  */}
        {/* ========================================================= */}
        <div className="mt-20 sm:mt-28 pt-12 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Making the invisible,
              <br />
              unforgettable.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/50 max-w-md font-light">
              We craft visual architectures and interactive platforms that empower developers to pre-sell architectural developments with confidence.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full bg-white hover:bg-white/90 text-black font-sans text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:shadow-[0_0_28px_rgba(255,255,255,0.4)] inline-flex items-center gap-3 self-start md:self-auto"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
