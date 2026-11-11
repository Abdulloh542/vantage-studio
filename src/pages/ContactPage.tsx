import { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { optimizeCloudinaryImage } from '../utils/media';
import { RevealFrame } from '../components/common/RevealFrame';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const requirements = [
    {
      step: '01',
      title: '3D Model or 2D Plans',
      description:
        'Revit, SketchUp, Rhino, or 2D CAD floor plans and elevations. No 3D model? We build it directly from your drawings.',
      formats: '.DWG · .SKP · .RVT · .FBX · .PDF',
      image: optimizeCloudinaryImage(
        'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990861/projects/effect-archi/make_plan_3d_realistic_2K_fb6c40.jpg',
        900
      ),
    },
    {
      step: '02',
      title: 'Materials & Finishes',
      description:
        'Facade materials, wood veneers, concrete finishes, metal coatings, and paint codes (RAL / Pantone) or reference photos.',
      formats: 'Material Board · Manufacturer Codes · Photos',
      image: optimizeCloudinaryImage(
        'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982065/projects/bunker-37/Create_an_architectural_concept_board_20.jpg',
        900
      ),
    },
    {
      step: '03',
      title: 'Atmosphere & Lighting',
      description:
        'Target time-of-day: golden hour dusk, soft overcast daylight, twilight blue hour, or nocturnal interior illumination.',
      formats: 'Moodboard · Reference Renders · Style Guide',
      image: optimizeCloudinaryImage(
        'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990146/projects/volga-park/Architectural_close_view_sunny_day_20260.jpg',
        900
      ),
    },
    {
      step: '04',
      title: 'Site Photos & Desired Angles',
      description:
        'Drone aerial plates, site photos for photorealistic composite matching, and preferred camera view directions.',
      formats: 'Drone 4K Stills · GPS Coordinates · Marked Plans',
      image: optimizeCloudinaryImage(
        'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990222/projects/volga-park/aerial_overview_4k_202c48.jpg',
        900
      ),
    },
  ];

  return (
    <main className="w-full bg-[#EDEAE4] text-[#111111] select-none">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: OMNYA × ATLAS STUDIO CONTACT & MINIMALIST FORM
          ───────────────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-28 border-b border-[#111111]/12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Two-Tone Editorial Heading & Key Details */}
            <div className="lg:col-span-6 lg:pr-8 lg:border-r border-[#111111]/12 space-y-12">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#B86B4B]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#6B6761]">
                    Direct Studio Line // Response Within 24h
                  </span>
                </div>
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.04em] text-[#111111] leading-[1.02] mb-5">
                  Talk <span className="text-[#87837D]">to us</span>
                </h1>
                <p className="font-sans text-sm sm:text-base text-[#6B6761] leading-relaxed max-w-md">
                  Send us your floor plans, 3D model, or brief. We reply within 24 hours with a clear timeline and first camera views in 1–2 days.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-7 pt-2">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#87837D] block mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:hello@atlasstudio.uz"
                    className="font-sans font-medium text-lg sm:text-xl text-[#111111] hover:text-[#B86B4B] transition-colors"
                  >
                    hello@atlasstudio.uz
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#87837D] block mb-1">
                    Instagram
                  </span>
                  <a
                    href="https://www.instagram.com/atlas.studio.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-medium text-lg sm:text-xl text-[#111111] hover:text-[#B86B4B] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>@atlas.studio.uz</span>
                    <span className="text-sm text-[#B86B4B]">↗</span>
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#87837D] block mb-1">
                    Studio Hubs
                  </span>
                  <p className="font-sans font-medium text-lg sm:text-xl text-[#111111]">
                    Tashkent &middot; Dubai &middot; Global Delivery
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#87837D] block mb-1">
                    Office hours
                  </span>
                  <p className="font-sans font-medium text-base sm:text-lg text-[#6B6761]">
                    Monday to Saturday: 9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Follow Us & Clean Form */}
            <div className="lg:col-span-6 lg:pl-4">
              {/* Follow Us Bar */}
              <div className="flex items-center justify-between pb-5 mb-8 border-b border-[#111111]/12 text-xs font-mono text-[#6B6761]">
                <span>Direct channels:</span>
                <div className="flex items-center gap-5 text-xs sm:text-sm text-[#111111]">
                  <a
                    href="https://www.instagram.com/atlas.studio.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B86B4B] transition-colors font-medium tracking-wider uppercase"
                  >
                    Instagram (@atlas.studio.uz)
                  </a>
                </div>
              </div>

              {/* Minimalist Form */}
              {submitted ? (
                <div className="bg-white/75 backdrop-blur-sm p-10 md:p-14 rounded-[10px] border border-[#111111]/12 text-center">
                  <CheckCircle2 className="w-10 h-10 text-[#B86B4B] mx-auto mb-4" />
                  <h3 className="font-display text-2xl md:text-3xl font-normal text-[#111111] mb-2 tracking-tight">
                    Inquiry received
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#6B6761] leading-relaxed mb-8 max-w-md mx-auto">
                    Thank you. An Atlas Studio director will review your project details and respond within 24 hours with a production proposal.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-full bg-[#111111] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#B86B4B] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block font-sans text-xs text-[#6B6761] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name or studio"
                      className="w-full bg-white/75 border border-[#111111]/15 px-4 py-3.5 text-sm font-sans text-[#111111] placeholder-[#87837D] focus:outline-none focus:border-[#B86B4B] transition-colors rounded-[6px]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-sans text-xs text-[#6B6761] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="hello@company.com"
                      className="w-full bg-white/75 border border-[#111111]/15 px-4 py-3.5 text-sm font-sans text-[#111111] placeholder-[#87837D] focus:outline-none focus:border-[#B86B4B] transition-colors rounded-[6px]"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block font-sans text-xs text-[#6B6761] mb-2">
                      Service
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white/75 border border-[#111111]/15 px-4 py-3.5 text-sm font-sans text-[#111111] focus:outline-none focus:border-[#B86B4B] transition-colors rounded-[6px] appearance-none cursor-pointer"
                      >
                        <option value="">Select deliverable</option>
                        <option value="exterior">3D Architectural Visualization (Exteriors &amp; Stills)</option>
                        <option value="interior">Interior CGI &amp; Spatial Lighting Staging</option>
                        <option value="animation">4K Cinematic Animation &amp; 9:16 Reels</option>
                        <option value="vr">Interactive 3D / Masterplan Presentation</option>
                        <option value="masterplan">Full-Scale Real Estate Marketing Package</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#6B6761]">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-sans text-xs text-[#6B6761] mb-2">
                      Project brief
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, location, and target launch date..."
                      className="w-full bg-white/75 border border-[#111111]/15 px-4 py-3.5 text-sm font-sans text-[#111111] placeholder-[#87837D] focus:outline-none focus:border-[#B86B4B] transition-colors rounded-[6px] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-between rounded-full bg-[#B86B4B] hover:bg-[#A35B3D] text-white px-6 py-4 text-xs font-mono uppercase tracking-wider transition-colors group cursor-pointer shadow-sm"
                    >
                      <span className="font-semibold">Send Message</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="font-sans text-xs text-[#6B6761] mt-3">
                      By submitting, you agree to our{' '}
                      <Link to="/terms" className="underline text-[#111111] hover:opacity-75">
                        Terms
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="underline text-[#111111] hover:opacity-75">
                        Privacy policy
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: VISUAL "FROM YOUR PLAN TO THE FINAL IMAGE"
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#EDEAE4]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          {/* Minimalist Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#111111]/12">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#87837D] block mb-2">
                // PROJECT INITIATION
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-[-0.035em] text-[#111111] leading-tight">
                What we need <span className="text-[#87837D]">from you</span>
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#6B6761] max-w-sm leading-relaxed">
              Everything required to initiate your 3D architectural renders. Concise, visual, and protected under strict NDA.
            </p>
          </div>

          {/* 4 Architectural Visual Cards with Real Atlas Studio Renders & Curtain Reveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {requirements.map((item, idx) => (
              <div
                key={item.step}
                className="group bg-white/65 border border-[#111111]/12 rounded-[8px] flex flex-col justify-between overflow-hidden hover:border-[#111111]/40 transition-colors duration-200"
              >
                <div>
                  <RevealFrame
                    shutterColor="#DFDBD2"
                    delay={idx * 0.07}
                    className="relative aspect-[16/11] overflow-hidden bg-[#E2DDD5]"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#111111]/85 backdrop-blur-sm text-white font-mono text-[11px] font-medium">
                      {item.step}
                    </div>
                  </RevealFrame>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-lg sm:text-xl font-medium text-[#111111] tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#6B6761] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-[#111111]/10">
                  <span className="font-mono text-[11px] text-[#111111] font-medium block">
                    {item.formats}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mutual NDA Safeguard Footer Banner */}
          <div className="mt-12 p-6 rounded-[8px] border border-[#111111]/12 bg-white/55 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#B86B4B] shrink-0" />
              <span className="font-sans text-xs sm:text-sm text-[#111111] font-medium">
                All client 3D models, architectural drawings, and unbuilt scheme proposals are strictly safeguarded under bilateral NDA.
              </span>
            </div>
            <a
              href="mailto:hello@atlasstudio.uz?subject=Standard%20NDA%20Request"
              className="text-xs font-mono uppercase tracking-wider text-[#111111] underline hover:text-[#B86B4B] shrink-0"
            >
              Request Mutual NDA ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
