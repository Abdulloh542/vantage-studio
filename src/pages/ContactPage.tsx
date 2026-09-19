import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    typology: 'Residential',
    timeline: 'Standard (3-4 weeks)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24 md:pb-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Header: Oversized Invitation Headline & Direct Supporting Copy */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-[#101010]/12 items-end">
          <div className="col-span-1 md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
                COMMISSION INITIATION
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]">
              LET&rsquo;S DISCUSS YOUR UNBUILT VISION.
            </h1>
          </div>

          <div className="col-span-1">
            <span className="font-mono text-xs text-[#757575] block mb-2">
              SLA &bull; 24-HOUR RESPONSE
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed">
              Every inquiry receives an itemized production schedule, technical deliverable matrix, and non-disclosure agreement.
            </p>
          </div>
        </div>

        {/* 4-Column Grid: Left Rail Studio Coordinates + Right Form */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pt-16 items-start">
          {/* Left Rail: Coordinates & Protocols */}
          <div className="col-span-1 space-y-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-3">
                DIRECT COMMISSIONS
              </span>
              <a
                href="mailto:commissions@vantagestudio.com"
                className="font-mono text-sm text-[#101010] hover:underline"
              >
                commissions@vantagestudio.com
              </a>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-3">
                ATELIER LOCATIONS
              </span>
              <div className="space-y-4 font-mono text-xs text-[#757575]">
                <div>
                  <span className="text-[#101010] block font-semibold">LONDON MAYFAIR</span>
                  <span>18 Berkeley Square, London W1J 6BQ</span>
                </div>
                <div>
                  <span className="text-[#101010] block font-semibold">ZURICH ENGE</span>
                  <span>Gotthardstrasse 26, 8002 Z&uuml;rich</span>
                </div>
                <div>
                  <span className="text-[#101010] block font-semibold">TASHKENT ATELIER</span>
                  <span>Amir Timur Avenue 107B, Tashkent</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#101010]/12">
              <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block mb-2">
                MUTUAL NDA ASSURANCE
              </span>
              <p className="font-sans text-xs text-[#757575] leading-relaxed">
                All client architectural plans, Revit models, and tender files are treated under strict proprietary confidentiality.
              </p>
            </div>
          </div>

          {/* Form Area in Columns 2 to 4 */}
          <div className="col-span-1 md:col-span-3">
            {submitted ? (
              <div className="bg-[#F6F6F2] p-12 border border-[#101010]/12 text-center max-w-xl mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#101010] mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold uppercase text-[#101010] mb-2">
                  BRIEF RECEIVED
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed mb-6">
                  Thank you. An atelier director will review your project requirements and respond within 24 hours with an itemized delivery schedule.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="solum-btn px-5 py-2.5 border border-[#101010] text-xs font-mono uppercase tracking-wider hover:bg-[#101010] hover:text-white transition-colors"
                >
                  SUBMIT ANOTHER BRIEF
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Name */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#101010] mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Adrian Croft"
                      className="w-full bg-white border border-[#101010]/20 p-3 text-sm font-sans text-[#101010] placeholder-[#757575]/60 focus:outline-none focus:border-[#101010] transition-colors rounded-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#101010] mb-2">
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. adrian@croftarchitects.com"
                      className="w-full bg-white border border-[#101010]/20 p-3 text-sm font-sans text-[#101010] placeholder-[#757575]/60 focus:outline-none focus:border-[#101010] transition-colors rounded-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {/* Organization */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#101010] mb-2">
                      ORGANIZATION
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Atelier / Fund / Developer"
                      className="w-full bg-white border border-[#101010]/20 p-3 text-sm font-sans text-[#101010] placeholder-[#757575]/60 focus:outline-none focus:border-[#101010] transition-colors rounded-none"
                    />
                  </div>

                  {/* Typology */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#101010] mb-2">
                      TYPOLOGY
                    </label>
                    <select
                      value={formData.typology}
                      onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
                      className="w-full bg-white border border-[#101010]/20 p-3 text-sm font-mono text-[#101010] focus:outline-none focus:border-[#101010] transition-colors rounded-none"
                    >
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Cultural</option>
                      <option>Hospitality</option>
                      <option>Masterplan</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#101010] mb-2">
                      TIMELINE
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-white border border-[#101010]/20 p-3 text-sm font-mono text-[#101010] focus:outline-none focus:border-[#101010] transition-colors rounded-none"
                    >
                      <option>Urgent (&lt; 2 weeks)</option>
                      <option>Standard (3-4 weeks)</option>
                      <option>Flexible / Planning phase</option>
                    </select>
                  </div>
                </div>

                {/* Scope / Description */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#101010] mb-2">
                    PROJECT SCOPE &amp; AVAILABLE ASSETS *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the scheme, available materials (CAD, Revit, SketchUp, sketches), and required deliverables (CGI stills, 4K film, interactive Before/After)."
                    className="w-full bg-white border border-[#101010]/20 p-3 text-sm font-sans text-[#101010] placeholder-[#757575]/60 focus:outline-none focus:border-[#101010] transition-colors rounded-none"
                  />
                </div>

                {/* Split Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="solum-btn px-8 py-4 bg-[#101010] text-white border border-[#101010] text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-[#101010] transition-colors duration-180"
                  >
                    <span>TRANSMIT BRIEF</span>
                    <span className="btn-arrow ml-3">
                      <ArrowRight className="w-4 h-4 inline-block" />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
