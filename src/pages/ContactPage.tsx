import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Box,
  Compass,
  Layers,
  Sun,
  Camera,
  Maximize2,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
      title: '3D Digital Model & Geometry',
      category: 'Primary Geometry',
      icon: Box,
      description:
        'The raw digital envelope and spatial geometry of the building, architectural exterior, or interior layout.',
      formats: ['.FBX', '.OBJ', '.SKP (SketchUp)', '.RVT (Revit)', '.3DM (Rhino)', '.DWG (3D)'],
      note: 'No 3D model yet? We can construct complete 3D digital geometry directly from your 2D CAD elevations.',
      keyCheck: 'Purged geometry & 1:1 real-world scale',
    },
    {
      step: '02',
      title: '2D Architectural Plans & Elevations',
      category: 'Dimensional Precision',
      icon: Compass,
      description:
        'Dimensioned floor plans, structural sections, site masterplans, ceiling layouts, and facade elevations.',
      formats: ['.DWG', '.DXF', '.PDF (Vector)', '.PLN (Archicad)'],
      note: 'Ensures millimetric spatial accuracy, true structural thicknesses, window reveals, and ceiling heights.',
      keyCheck: 'Clear ceiling heights & window schedules',
    },
    {
      step: '03',
      title: 'Material Specifications & Finishes',
      category: 'Surface Realism',
      icon: Layers,
      description:
        'Finish schedule, wood veneers, concrete textures, stone selections, metal coatings, and glazing specifications.',
      formats: ['Material Schedule', 'High-Res Photos', 'Manufacturer Codes', 'RAL / Pantone'],
      note: 'Calibrates our physical PBR shaders for authentic surface roughness, reflectance, and microscopic tactile depth.',
      keyCheck: 'Exact manufacturer product references',
    },
    {
      step: '04',
      title: 'Atmosphere, Mood & Lighting Direction',
      category: 'Cinematic Mood',
      icon: Sun,
      description:
        'Target time-of-day: golden hour dusk, crisp Scandinavian overcast daylight, twilight blue hour, or nocturnal glow.',
      formats: ['Moodboard', 'Reference Renders', 'Style Guide', 'Pinterest Board'],
      note: 'Directs HDR environmental sun angle, warm artificial interior luminaires, and evocative storytelling.',
      keyCheck: 'Season, time-of-day & interior mood tone',
    },
    {
      step: '05',
      title: 'Site Context & Drone Photography',
      category: 'Photo-Montage',
      icon: Camera,
      description:
        'High-resolution drone aerial panoramas, street-level views, and adjacent landscape or cityscape plates.',
      formats: ['4K Drone Stills', 'RAW / TIFF', 'GPS Coordinates', 'Google Earth KML'],
      note: 'Enables millimetric camera matching and seamless photorealistic composite into actual surroundings.',
      keyCheck: 'Focal length & camera sensor metadata',
    },
    {
      step: '06',
      title: 'Camera Viewpoints & Target Deliverables',
      category: 'Final Output',
      icon: Maximize2,
      description:
        'Preferred camera angles (pedestrian eye-level, architectural hero corner, aerial overview) and aspect ratios.',
      formats: ['Marked Floorplans', '4K UHD (3840×2160)', '8K Ultra-Print', '60fps Cinematic Film'],
      note: 'Streamlines our camera framing stage and ensures every visual is optimized for your marketing pitch.',
      keyCheck: 'Target aspect ratios & resolution spec',
    },
  ];

  return (
    <main className="w-full bg-white text-[#101010] select-none">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: SIGNATURE SOLUM CONTACT & INQUIRY FORM
          ───────────────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-28 border-b border-[#101010]/12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading & Contact Coordinates */}
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
              <div className="space-y-8 pt-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1.5">
                    Email
                  </span>
                  <a
                    href="mailto:hello@vantagestudio.com"
                    className="font-sans font-semibold text-lg sm:text-xl text-[#101010] hover:underline"
                  >
                    hello@vantagestudio.com
                  </a>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1.5">
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
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1.5">
                    Address
                  </span>
                  <p className="font-sans font-semibold text-lg sm:text-xl text-[#101010]">
                    18 Berkeley Square, Mayfair, London W1J 6BQ
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-1.5">
                    Office hours
                  </span>
                  <p className="font-sans font-semibold text-lg sm:text-xl text-[#101010]">
                    Monday to Friday: 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Social Links & Minimalist Form */}
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
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity font-semibold tracking-wider uppercase"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              {/* Form Area */}
              {submitted ? (
                <div className="bg-[#F9F9F8] p-10 md:p-14 border border-[#101010]/12 text-center">
                  <CheckCircle2 className="w-10 h-10 text-[#101010] mx-auto mb-4" />
                  <h3 className="font-display text-2xl md:text-3xl font-semibold uppercase text-[#101010] mb-2 tracking-tight">
                    Inquiry Received
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed mb-8 max-w-md mx-auto">
                    Thank you for reaching out. An atelier director will review your project details and respond within 24 hours with an itemized delivery schedule.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#101010] text-white text-xs font-mono uppercase tracking-wider hover:bg-black transition-colors"
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
                        <option value="">Select service</option>
                        <option value="exterior">3D Architectural Visualization (Exteriors &amp; Stills)</option>
                        <option value="interior">Interior CGI &amp; Spatial Lighting Staging</option>
                        <option value="animation">4K Cinematic Animation &amp; Drone Motion</option>
                        <option value="vr">Interactive 360 / VR Presentation</option>
                        <option value="masterplan">Full-Scale Real Estate Marketing Package</option>
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
          SECTION 2: WHAT WE NEED FROM YOU (PROJECT INITIATION MATRIX)
          Replaces generic FAQ with rich visual technical onboarding cards
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#101010]/12 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#757575]">
                  PROJECT INITIATION &bull; ASSET CHECKLIST
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-[-0.05em] text-[#101010] leading-[0.95] uppercase">
                What We Need <br />From You.
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed">
                To guarantee photorealistic precision and ensure an expedited turnaround schedule, here is the material checklist our 3D atelier requires before commencing production.
              </p>
            </div>
          </div>

          {/* 6 Visual Specification Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
            {requirements.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-[#F9F9F8] p-7 md:p-8 border border-[#101010]/10 flex flex-col justify-between hover:border-[#101010] transition-colors duration-200 group"
                >
                  {/* Top Row: Index & Category Pill */}
                  <div>
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#101010]/10">
                      <span className="font-mono text-xs text-[#757575] font-semibold">
                        {item.step}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#757575]">
                          {item.category}
                        </span>
                        <div className="w-8 h-8 border border-[#101010]/15 flex items-center justify-center bg-white group-hover:border-[#101010] transition-colors">
                          <IconComponent className="w-4 h-4 text-[#101010]" />
                        </div>
                      </div>
                    </div>

                    {/* Title & Core Description */}
                    <h3 className="font-display text-xl sm:text-2xl font-semibold uppercase text-[#101010] tracking-[-0.03em] mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Accepted Formats Badges */}
                    <div className="mb-6">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#757575] block mb-2">
                        Accepted Formats &bull; Deliverables:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.formats.map((fmt) => (
                          <span
                            key={fmt}
                            className="bg-white border border-[#101010]/15 px-2 py-0.5 text-[11px] font-mono text-[#101010] font-medium"
                          >
                            {fmt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Note & Key Requirement */}
                  <div className="pt-5 border-t border-[#101010]/10 space-y-2.5">
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#101010] shrink-0 mt-0.5" />
                      <span className="font-mono text-[11px] text-[#101010] font-medium">
                        {item.keyCheck}
                      </span>
                    </div>
                    <p className="font-sans text-[11px] text-[#757575] leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Security / Briefing Banner */}
          <div className="mt-12 p-6 md:p-8 border border-[#101010]/12 bg-[#F9F9F8] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-[#101010]/20 bg-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#101010]" />
              </div>
              <div>
                <h4 className="font-display text-base font-semibold uppercase text-[#101010] tracking-tight mb-1">
                  Mutual Non-Disclosure &amp; Intellectual Property Protection
                </h4>
                <p className="font-sans text-xs text-[#757575] leading-relaxed max-w-2xl">
                  All blueprints, CAD drawings, 3D geometry, and competition proposals shared with Vantage Studio are strictly protected under international bilateral Non-Disclosure Agreements (NDA).
                </p>
              </div>
            </div>

            <a
              href="mailto:hello@vantagestudio.com?subject=Project%20Files%20%26%20NDA%20Inquiry"
              className="px-6 py-3 bg-[#101010] text-white text-xs font-mono uppercase tracking-wider hover:bg-black transition-colors shrink-0"
            >
              Request Standard NDA ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
