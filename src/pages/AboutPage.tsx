import { motion } from 'framer-motion';
import { WordReveal } from '../components/common/WordReveal';
import { RevealFrame } from '../components/common/RevealFrame';
import { optimizeCloudinaryImage } from '../utils/media';

export function AboutPage() {
  const stats = [
    { value: '1–2', label: 'DAYS TO FIRST VIEWS', note: 'Rapid clay & lighting camera previews from your plans' },
    { value: '5', label: 'DAYS TO FINAL STILLS', note: 'Photorealistic 4K architectural renders ready for launch' },
    { value: '40+', label: 'PROJECTS DELIVERED', note: 'For developers, architects & real estate funds' },
    { value: '100%', label: 'IN-HOUSE TEAM', note: '3D modeling, lighting, and cinema direction under one roof' },
  ];

  const pillars = [
    {
      name: '01 // 3D Floorplan & BIM Precision',
      role: 'Architectural Modeling & Massing',
      bio: 'From CAD blueprints, Revit schedules, or hand sketches, we build millimeter-accurate 3D architectural geometry and cutaway spatial floorplans.',
      image: optimizeCloudinaryImage(
        'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990861/projects/effect-archi/make_plan_3d_realistic_2K_fb6c40.jpg',
        1000
      ),
    },
    {
      name: '02 // Atmospheric Daylight & Dusk',
      role: 'Physically Based Lighting & Materiality',
      bio: 'Calibrating natural sun angles, interior warm illumination, water caustics, and botanical landscaping so every image feels photographed, not rendered.',
      image: optimizeCloudinaryImage(
        'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990146/projects/volga-park/Architectural_close_view_sunny_day_20260.jpg',
        1000
      ),
    },
    {
      name: '03 // 4K Cinema & 9:16 Vertical Reels',
      role: 'Cinematic Motion & Pre-Sales Storytelling',
      bio: 'Directing drone aerial sweeps, eye-level steadicam walkthroughs, and high-retention 9:16 vertical reels built for Instagram and investor launches.',
      image: optimizeCloudinaryImage(
        'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990851/projects/effect-archi/A_high-end_architectural__aadba3.jpg',
        1000
      ),
    },
  ];

  const history = [
    { year: '01', title: 'Send Your Plans', detail: 'Share your DWG floor plans, SketchUp/Revit model, or reference moodboard. We review and scope within 24 hours.' },
    { year: '02', title: 'First Views in 1–2 Days', detail: 'We build the 3D scene and send camera angle previews so you can approve composition and framing early.' },
    { year: '03', title: 'Materials & Lighting', detail: 'We apply your exact facade finishes, landscaping, and time-of-day lighting with fast interactive feedback rounds.' },
    { year: '04', title: 'Final 4K Stills & Film', detail: 'High-resolution 4K renders and cinematic walkthrough films delivered ready for billboards, web, and @atlasstudio.uz reels.' },
  ];

  return (
    <main className="w-full bg-[#F5EDE2] text-[#321E13] pt-28 md:pt-36">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Two-Tone Editorial Hero */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16 md:pb-20 border-b border-[#321E13]/15 items-end">
          <div className="md:col-span-8">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 bg-[#321E13]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#321E13]/70">
                Atlas Studio // Monograph &amp; Process
              </span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-logo text-4xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-[0.04em] text-[#321E13] leading-[1.02]"
            >
              Our Studio, One Team
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4"
          >
            <span className="font-mono text-xs text-[#321E13]/65 block mb-2 uppercase tracking-wider">
              Tashkent · Dubai · Global
            </span>
            <p className="font-sans text-sm sm:text-base text-[#321E13]/75 leading-relaxed">
              We work with developers, architects, and agencies worldwide — turning unbuilt plans into photorealistic 4K CGI and cinema films.
            </p>
          </motion.div>
        </div>

        {/* Full-Bleed Architectural Showcase with Curtain Reveal */}
        <div className="py-14 md:py-20 border-b border-[#321E13]/15">
          <RevealFrame
            shutterColor="#EAE2D6"
            className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-zinc-900 border border-[#321E13]/15"
          >
            <img
              src={optimizeCloudinaryImage(
                'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992587/projects/collective-dubai-hills/collective-dubai-hills_still_1.jpg',
                2200
              )}
              alt="Atlas Studio Architectural Visualization Showcase"
              className="w-full h-full object-cover scale-[1.035]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between font-mono text-[11px] text-white/90 uppercase tracking-[0.18em]">
              <span>ATLAS STUDIO // ARCHITECTURAL CGI</span>
              <span>@ATLASSTUDIO.UZ</span>
            </div>
          </RevealFrame>
        </div>

        {/* Metrics Row with Tabular Figures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#111111]/12 py-14 border-b border-[#111111]/12">
          {stats.map((st) => (
            <div key={st.label} className="p-6 md:p-8">
              <div className="font-display text-4xl sm:text-5xl font-normal tracking-[-0.04em] text-[#111111] tabular-nums mb-2">
                {st.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#B86B4B] mb-1 font-medium">
                {st.label}
              </div>
              <div className="font-sans text-xs sm:text-sm text-[#6B6761]">
                {st.note}
              </div>
            </div>
          ))}
        </div>

        {/* Studio Philosophy & Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-20 border-b border-[#111111]/12 items-start">
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B86B4B] inline-block" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#111111] font-medium">
                Philosophy
              </span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 space-y-6 max-w-3xl text-sm sm:text-base text-[#111111]/85 leading-relaxed">
            <WordReveal
              text="Architecture must be felt before it is built. The role of visualization is not merely computer representation, but emotional clarity."
              as="p"
              className="font-display text-2xl sm:text-3xl font-normal tracking-[-0.03em] leading-snug text-[#111111]"
              staggerMs={28}
            />
            <p className="text-sm sm:text-base text-[#6B6761] leading-relaxed">
              When reviewing a client’s CAD drawings or structural schedules, we do not simply extrude lines. We investigate how late-afternoon sunlight grazes brick and travertine, how twilight reflects across glass pavilions, and how human movement brings courtyards to life.
            </p>
          </div>
        </div>

        {/* 3 Core Craft Pillars with Curtain Reveal */}
        <div className="py-20 border-b border-[#111111]/12">
          <div className="flex items-center gap-2.5 mb-12">
            <span className="w-2 h-2 rounded-full bg-[#111111] inline-block" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#111111] font-medium">
              From Your Plan To The Final Image
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={pillar.name} className="space-y-4">
                <RevealFrame
                  shutterColor="#DFDBD2"
                  delay={idx * 0.08}
                  className="relative aspect-[4/5] w-full overflow-hidden rounded-[8px] bg-[#E2DDD5] border border-[#111111]/12"
                >
                  <img
                    src={pillar.image}
                    alt={pillar.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.035]"
                  />
                </RevealFrame>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-normal tracking-tight text-[#111111]">
                    {pillar.name}
                  </h3>
                  <span className="font-mono text-xs text-[#B86B4B] block mt-1 mb-2 uppercase tracking-wider">
                    {pillar.role}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#6B6761] leading-relaxed">
                    {pillar.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Workflow */}
        <div className="py-20">
          <div className="flex items-center gap-2.5 mb-12">
            <span className="w-2 h-2 rounded-full bg-[#B86B4B] inline-block" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#111111] font-medium">
              How A Project Runs
            </span>
          </div>

          <div className="divide-y divide-[#111111]/12 border-t border-b border-[#111111]/12">
            {history.map((h) => (
              <div key={h.year} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 font-display text-3xl font-normal text-[#B86B4B] tabular-nums">
                  {h.year}
                </div>
                <div className="md:col-span-4 font-sans text-lg font-medium tracking-tight text-[#111111]">
                  {h.title}
                </div>
                <div className="md:col-span-6 font-sans text-sm text-[#6B6761] leading-relaxed">
                  {h.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
