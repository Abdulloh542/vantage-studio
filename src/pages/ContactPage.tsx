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
        1200
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
        1200
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
        1200
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
        1200
      ),
    },
  ];

  return (
    <main className="w-full bg-[#F5EDE2] text-[#321E13] select-none">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: ATLAS STUDIO CONTACT & MINIMALIST FORM
          ───────────────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-28 border-b border-[#321E13]/15">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading & Key Details */}
            <div className="lg:col-span-6 lg:pr-8 lg:border-r border-[#321E13]/15 space-y-12">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2 h-2 bg-[#321E13]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#321E13]/70">
                    Direct Studio Line // Response Within 24h
                  </span>
                </div>
                <h1 className="font-logo text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal uppercase tracking-[0.04em] text-[#321E13] leading-[0.98] mb-5">
                  Talk To Us
                </h1>
                <p className="font-sans text-sm sm:text-base text-[#321E13]/75 leading-relaxed max-w-md">
                  Send us your floor plans, 3D model, or project brief. We reply within 24 hours with a clear production schedule.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-7 pt-2">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#321E13]/60 block mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:hello@atlasstudio.uz"
                    className="font-sans font-semibold text-lg sm:text-xl text-[#321E13] hover:underline"
                  >
                    hello@atlasstudio.uz
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#321E13]/60 block mb-1">
                    Instagram
                  </span>
                  <a
                    href="https://www.instagram.com/atlasstudio.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-semibold text-lg sm:text-xl text-[#321E13] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>@atlasstudio.uz</span>
                    <span className="text-sm">↗</span>
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#321E13]/60 block mb-1">
                    Studio Hubs
                  </span>
                  <p className="font-sans font-semibold text-lg sm:text-xl text-[#321E13]">
                    Tashkent &middot; Dubai &middot; Global Delivery
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#321E13]/60 block mb-1">
                    Office hours
                  </span>
                  <p className="font-sans font-medium text-base sm:text-lg text-[#321E13]/80">
                    Monday to Saturday: 9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Follow Us & Clean Form */}
            <div className="lg:col-span-6 lg:pl-4">
              {/* Follow Us Bar */}
              <div className="flex items-center justify-between pb-5 mb-8 border-b border-[#321E13]/15 text-xs font-mono text-[#321E13]/70">
                <span>Official Instagram:</span>
                <div className="flex items-center gap-5 text-xs sm:text-sm text-[#321E13]">
                  <a
                    href="https://www.instagram.com/atlasstudio.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity font-semibold tracking-wider uppercase"
                  >
                    @atlasstudio.uz ↗
                  </a>
                </div>
              </div>

              {/* Minimalist Form */}
              {submitted ? (
                <div className="bg-white/80 p-10 md:p-14 border border-[#321E13]/15 text-center">
                  <CheckCircle2 className="w-10 h-10 text-[#321E13] mx-auto mb-4" />
                  <h3 className="font-logo text-2xl md:text-3xl uppercase text-[#321E13] mb-2 tracking-[0.04em]">
                    Inquiry Received
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#321E13]/75 leading-relaxed mb-8 max-w-md mx-auto">
                    Thank you. An Atlas Studio director will review your project details and respond within 24 hours with a production proposal.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#321E13] text-[#F5EDE2] text-xs font-mono uppercase tracking-wider hover:bg-[#101010] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#321E13]/75 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name or studio"
                      className="w-full bg-white/80 border border-[#321E13]/20 px-4 py-3.5 text-sm font-sans text-[#321E13] placeholder-[#321E13]/40 focus:outline-none focus:border-[#321E13] transition-colors rounded-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#321E13]/75 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="hello@company.com"
                      className="w-full bg-white/80 border border-[#321E13]/20 px-4 py-3.5 text-sm font-sans text-[#321E13] placeholder-[#321E13]/40 focus:outline-none focus:border-[#321E13] transition-colors rounded-none"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#321E13]/75 mb-2">
                      Service
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white/80 border border-[#321E13]/20 px-4 py-3.5 text-sm font-sans text-[#321E13] focus:outline-none focus:border-[#321E13] transition-colors rounded-none appearance-none cursor-pointer"
                      >
                        <option value="">Select deliverable</option>
                        <option value="exterior">3D Architectural Visualization (Exteriors &amp; Stills)</option>
                        <option value="interior">Interior CGI &amp; Spatial Lighting Staging</option>
                        <option value="animation">4K Cinematic Animation &amp; 9:16 Reels</option>
                        <option value="vr">Interactive 3D / Masterplan Presentation</option>
                        <option value="masterplan">Full-Scale Real Estate Marketing Package</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#321E13]/70">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#321E13]/75 mb-2">
                      Project Brief
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, location, and target launch date..."
                      className="w-full bg-white/80 border border-[#321E13]/20 px-4 py-3.5 text-sm font-sans text-[#321E13] placeholder-[#321E13]/40 focus:outline-none focus:border-[#321E13] transition-colors rounded-none resize-none"
                    />
                  </div>

                  {/* Atlas Studio Architectural Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-between bg-[#321E13] hover:bg-[#101010] text-[#F5EDE2] px-6 py-4 text-xs font-mono uppercase tracking-[0.16em] transition-colors group cursor-pointer"
                    >
                      <span className="font-semibold">Send Message</span>
                      <div className="w-6 h-6 border border-[#F5EDE2]/30 group-hover:border-[#F5EDE2] flex items-center justify-center transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </button>
                    <p className="font-sans text-xs text-[#321E13]/65 mt-3">
                      By submitting, you agree to our{' '}
                      <Link to="/terms" className="underline text-[#321E13] hover:opacity-75">
                        Terms
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="underline text-[#321E13] hover:opacity-75">
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
          SECTION 2: VISUAL "WHAT WE NEED FROM YOU"
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F5EDE2]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#321E13]/15">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#321E13]/65 block mb-2">
                // PROJECT INITIATION
              </span>
              <h2 className="font-logo text-3xl sm:text-5xl font-normal uppercase tracking-[0.04em] text-[#321E13] leading-tight">
                What We Need From You
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#321E13]/75 max-w-sm leading-relaxed">
              Everything required to initiate your 3D architectural renders. Concise, visual, and protected under strict NDA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {requirements.map((item) => (
              <div
                key={item.step}
                className="group bg-white/75 border border-[#321E13]/15 flex flex-col justify-between overflow-hidden hover:border-[#321E13] transition-colors duration-200"
              >
                <div>
                  <RevealFrame
                    shutterColor="#EAE2D6"
                    delay={0}
                    className="relative aspect-[16/11] overflow-hidden bg-[#EAE2D6]"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover scale-[1.035] group-hover:scale-[1.07] transition-all duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#321E13] text-[#F5EDE2] font-mono text-[11px] font-semibold">
                      {item.step}
                    </div>
                  </RevealFrame>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-logo text-xl sm:text-2xl font-medium uppercase text-[#321E13] tracking-[0.03em] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#321E13]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-[#321E13]/12">
                  <span className="font-mono text-[11px] text-[#321E13] font-medium block">
                    {item.formats}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mutual NDA Safeguard Footer Banner */}
          <div className="mt-12 p-6 border border-[#321E13]/15 bg-white/65 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#321E13] shrink-0" />
              <span className="font-sans text-xs sm:text-sm text-[#321E13] font-medium">
                All client 3D models, architectural drawings, and unbuilt scheme proposals are strictly safeguarded under bilateral NDA.
              </span>
            </div>
            <a
              href="mailto:hello@atlasstudio.uz?subject=Standard%20NDA%20Request"
              className="text-xs font-mono uppercase tracking-wider text-[#321E13] underline hover:opacity-70 shrink-0"
            >
              Request Mutual NDA ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
