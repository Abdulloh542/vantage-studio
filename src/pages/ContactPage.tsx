import { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { optimizeCloudinaryImage } from '../utils/media';

const PACKAGE_TO_SERVICE: Record<string, string> = {
  'films-by-seconds': 'film-60s',
  'film-30s': 'film-30s',
  'film-60s': 'film-60s',
  'film-90-120s': 'film-90-120s',
  'film-150s': 'film-150s',
  'archviz-video-types': 'video-property-tour',
  'video-reel-9x16': 'video-reel-9x16',
  'video-genplan-3d': 'video-genplan-3d',
  'video-property-tour': 'video-property-tour',
  'video-before-after': 'video-before-after',
  'video-drone-match': 'video-drone-match',
  'video-day-night': 'video-day-night',
  'launch-packages': 'pkg-signature',
  'pkg-essential': 'pkg-essential',
  'pkg-signature': 'pkg-signature',
  'pkg-flagship': 'pkg-flagship',
  'still-images': 'img-10',
  'img-1': 'img-1',
  'img-5': 'img-5',
  'img-10': 'img-10',
  'img-20': 'img-20',
  'img-monthly': 'img-monthly',
};

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(() => {
    const pkg = searchParams.get('package') || '';
    return {
      name: '',
      email: '',
      service: PACKAGE_TO_SERVICE[pkg] || '',
      message: '',
    };
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const requirements = [
    {
      step: '01',
      title: 'Genplan or 2D CAD Plans',
      description:
        'Site masterplan (Genplan), AutoCAD DWG floor plans, elevations, Revit, or SketchUp. No 3D model? We build it from your drawings.',
      formats: '.DWG · .SKP · .RVT · .FBX · .PDF',
      image: optimizeCloudinaryImage(
        'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990861/projects/effect-archi/make_plan_3d_realistic_2K_fb6c40.jpg',
        800
      ),
    },
    {
      step: '02',
      title: 'Materials & Finishes',
      description:
        'Facade stone, brickwork, wood veneers, concrete finishes, metal coatings, and RAL codes or reference photos.',
      formats: 'Material Board · Manufacturer Codes · Photos',
      image: optimizeCloudinaryImage(
        'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990856/projects/effect-archi/Extract_and_upscale_from__c11a74.jpg',
        800
      ),
    },
    {
      step: '03',
      title: 'Atmosphere & Lighting',
      description:
        'Target time-of-day: sunny daylight, golden hour dusk, twilight blue hour, or nocturnal architectural illumination.',
      formats: 'Moodboard · Reference Renders · Style Guide',
      image: optimizeCloudinaryImage(
        'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990146/projects/volga-park/Architectural_close_view_sunny_day_20260.jpg',
        800
      ),
    },
    {
      step: '04',
      title: 'Site Context & Camera Angles',
      description:
        'Drone aerial plates, site photos for composite matching, and preferred exterior/interior camera directions.',
      formats: 'Drone 4K Stills · GPS Coordinates · Marked Plans',
      image: optimizeCloudinaryImage(
        'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990222/projects/volga-park/aerial_overview_4k_202c48.jpg',
        800
      ),
    },
  ];

  return (
    <main className="w-full bg-white text-[#101010] select-none">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: SOLUM CONTACT & MINIMALIST FORM
          ───────────────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-28 border-b border-[#101010]/12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading & Key Details */}
            <div className="lg:col-span-6 lg:pr-8 lg:border-r border-[#101010]/12 space-y-12">
              <div>
                <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[108px] font-semibold tracking-[-0.06em] text-[#101010] leading-[0.9] uppercase mb-6">
                  Contact
                </h1>
                <p className="font-sans text-sm sm:text-base text-[#757575] leading-relaxed max-w-md">
                  We believe that great architecture is about creating spaces that inspire, connect, and endure.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-8 pt-2">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:hello@atlasstudio.uz"
                    className="font-sans font-semibold text-lg sm:text-xl text-[#101010] hover:underline"
                  >
                    hello@atlasstudio.uz
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1">
                    Instagram
                  </span>
                  <a
                    href="https://www.instagram.com/atlasstudio.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-semibold text-lg sm:text-xl text-[#101010] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>@atlasstudio.uz</span>
                    <span className="text-sm">↗</span>
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1">
                    Phone
                  </span>
                  <a
                    href="tel:+442079460920"
                    className="font-sans font-semibold text-lg sm:text-xl text-[#101010] hover:underline"
                  >
                    +44 (0) 20 7946 0920
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1">
                    Address
                  </span>
                  <p className="font-sans font-semibold text-lg sm:text-xl text-[#101010]">
                    18 Berkeley Square, Mayfair, London W1J 6BQ
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1">
                    Office hours
                  </span>
                  <p className="font-sans font-semibold text-lg sm:text-xl text-[#101010]">
                    Monday to Friday: 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Follow Us & Clean Form */}
            <div className="lg:col-span-6 lg:pl-4">
              {/* Follow Us Bar */}
              <div className="flex items-center justify-between pb-5 mb-8 border-b border-[#101010]/12 text-xs font-mono text-[#757575]">
                <span>Follow us:</span>
                <div className="flex items-center gap-5 text-xs sm:text-sm text-[#101010]">
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity font-semibold tracking-wider uppercase"
                  >
                    𝕏
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity font-semibold tracking-wider uppercase"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/atlasstudio.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity font-semibold tracking-wider uppercase"
                  >
                    Instagram (@atlasstudio.uz)
                  </a>
                </div>
              </div>

              {/* Minimalist Form */}
              {submitted ? (
                <div className="bg-[#F9F9F8] p-10 md:p-14 border border-[#101010]/12 text-center">
                  <CheckCircle2 className="w-10 h-10 text-[#101010] mx-auto mb-4" />
                  <h3 className="font-display text-2xl md:text-3xl font-semibold uppercase text-[#101010] mb-2 tracking-tight">
                    Inquiry Received
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed mb-8 max-w-md mx-auto">
                    Thank you. An atelier director will review your project details and respond within 24 hours with a production proposal.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#101010] text-white text-xs font-mono uppercase tracking-wider hover:bg-black transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block font-sans text-xs text-[#757575] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-[#F9F9F8] border border-[#101010]/10 px-4 py-3 text-sm font-sans text-[#101010] placeholder-[#757575]/50 focus:outline-none focus:border-[#101010] transition-colors rounded-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-sans text-xs text-[#757575] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="hello@email.com"
                      className="w-full bg-[#F9F9F8] border border-[#101010]/10 px-4 py-3 text-sm font-sans text-[#101010] placeholder-[#757575]/50 focus:outline-none focus:border-[#101010] transition-colors rounded-none"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block font-sans text-xs text-[#757575] mb-2">
                      Service
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#F9F9F8] border border-[#101010]/10 px-4 py-3 text-sm font-sans text-[#101010] focus:outline-none focus:border-[#101010] transition-colors rounded-none appearance-none cursor-pointer"
                      >
                        <option value="">Select service or rate</option>
                        <optgroup label="Films by Duration">
                          <option value="film-30s">15–30s Architectural Film ($690)</option>
                          <option value="film-60s">60s Architectural Walkthrough Film ($1,290)</option>
                          <option value="film-90-120s">90–120s Masterplan Cinema Film ($2,190)</option>
                          <option value="film-150s">150s+ Extended Documentary Film ($2,950)</option>
                        </optgroup>
                        <optgroup label="ArchViz &amp; Real Estate Video Formats">
                          <option value="video-reel-9x16">9:16 Vertical Social Reel ($890)</option>
                          <option value="video-genplan-3d">Genplan → 3D Growth Film ($1,350)</option>
                          <option value="video-property-tour">Real Estate Property Presentation ($1,650)</option>
                          <option value="video-before-after">Before / After Renovation Film ($1,450)</option>
                          <option value="video-drone-match">Drone Aerial 3D Composite ($1,100)</option>
                          <option value="video-day-night">Day-to-Night Lighting Study ($650)</option>
                        </optgroup>
                        <optgroup label="Launch Packages (Images + Film)">
                          <option value="pkg-essential">Essential Launch — 5 Views + 30s Reel ($1,490)</option>
                          <option value="pkg-signature">Signature Launch — 10 Views + 60s Film ($2,490)</option>
                          <option value="pkg-flagship">Flagship Launch — 20 Views + 90–120s Film ($3,900)</option>
                        </optgroup>
                        <optgroup label="3D Still Images (from Genplan)">
                          <option value="img-1">1 × 4K View ($250)</option>
                          <option value="img-5">5 × 4K Views ($950)</option>
                          <option value="img-10">10 × 4K Views ($1,600)</option>
                          <option value="img-20">20 × 4K Views ($2,600)</option>
                          <option value="img-monthly">Monthly Partner — 12 Views/mo ($1,800/mo)</option>
                        </optgroup>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#757575]">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-sans text-xs text-[#757575] mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Project inquiry..."
                      className="w-full bg-[#F9F9F8] border border-[#101010]/10 px-4 py-3 text-sm font-sans text-[#101010] placeholder-[#757575]/50 focus:outline-none focus:border-[#101010] transition-colors rounded-none resize-none"
                    />
                  </div>

                  {/* Full-width Solum Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-between bg-[#101010] text-white px-5 py-3.5 text-xs font-mono uppercase tracking-wider hover:bg-black transition-colors group cursor-pointer"
                    >
                      <span className="font-semibold">Send Message</span>
                      <div className="w-6 h-6 border border-white/30 group-hover:border-white flex items-center justify-center transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </button>
                    <p className="font-sans text-xs text-[#757575] mt-3">
                      By submitting, you agree to our{' '}
                      <Link to="/terms" className="underline text-[#101010] hover:opacity-75">
                        Terms
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="underline text-[#101010] hover:opacity-75">
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
          SECTION 2: VISUAL "WHAT WE NEED FROM YOU" (MINIMALIST CARDS WITH IMAGES)
          Direct visual answers with real imagery, concise punchy copy, no clutter
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          {/* Minimalist Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#101010]/12">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-2">
                // PROJECT INITIATION
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.05em] text-[#101010] uppercase leading-none">
                What We Need From You.
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#757575] max-w-sm leading-relaxed">
              Everything required to initiate your 3D architectural renders. Concise, visual, and protected under strict NDA.
            </p>
          </div>

          {/* 4 Architectural Visual Cards with Real Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {requirements.map((item) => (
              <div
                key={item.step}
                className="group bg-[#FFFFFF] border border-[#101010]/12 flex flex-col justify-between overflow-hidden hover:border-[#101010] transition-colors duration-200"
              >
                {/* Visual Image Header with Number Badge */}
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#F4F4F0]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#101010] text-white font-mono text-xs font-semibold">
                      {item.step}
                    </div>
                  </div>

                  {/* Concise Title & Punchy Description */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-lg sm:text-xl font-semibold uppercase text-[#101010] tracking-tight mb-2.5">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Accepted Formats Badge */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-[#101010]/10">
                  <span className="font-mono text-[11px] text-[#101010] font-medium block">
                    {item.formats}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mutual NDA Safeguard Footer Banner */}
          <div className="mt-12 p-6 border border-[#101010]/12 bg-[#F9F9F8] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#101010] shrink-0" />
              <span className="font-sans text-xs sm:text-sm text-[#101010] font-medium">
                All client 3D models, architectural drawings, and scheme proposals are strictly safeguarded under bilateral NDA.
              </span>
            </div>
            <a
              href="mailto:hello@atlasstudio.uz?subject=Standard%20NDA%20Request"
              className="text-xs font-mono uppercase tracking-wider text-[#101010] underline hover:opacity-70 shrink-0"
            >
              Request Mutual NDA ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
