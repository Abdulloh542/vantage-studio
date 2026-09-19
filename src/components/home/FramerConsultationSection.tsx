import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FramerSectionHeader, FramerCard } from '../common/FramerReveal';

export function FramerConsultationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Architectural Visualization',
    budget: '$25,000 – $50,000',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="bg-[#FAF9F6] text-[#0B0B0A] py-24 md:py-36 border-b border-black/10 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Signature Framer Section Header */}
        <FramerSectionHeader
          eyebrow="START YOUR JOURNEY //"
          title="CONSULTATION"
          subtag="*(PROJECT INQUIRY)"
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Context Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#0B0B0A] leading-tight">
              Ready to visualize your next landmark?
            </h3>
            <p className="font-sans text-sm md:text-base text-black/70 leading-relaxed font-light">
              Submit your preliminary blueprints, 3D files, or sketch concepts. Our lead directors respond within 24 hours with feasibility assessment, milestone scope, and pricing.
            </p>

            <div className="p-6 bg-[#F4F2EE] border border-black/10 space-y-4 text-xs font-mono">
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span className="text-black/50">AVERAGE RESPONSE</span>
                <span className="text-black font-semibold">&lt; 24 HOURS</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-2">
                <span className="text-black/50">CONFIDENTIALITY</span>
                <span className="text-black font-semibold">MUTUAL NDA READY</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black/50">FORMAT INGESTION</span>
                <span className="text-black font-semibold">REVIT / CAD / 3DS / SKP</span>
              </div>
            </div>
          </div>

          {/* Right Form Column (Interio Consultation Form Formula) */}
          <div className="lg:col-span-7">
            <FramerCard className="bg-[#F4F2EE] border border-black/10 p-8 sm:p-12">
              {submitted ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="w-12 h-12 text-[#C5A880] mx-auto mb-4" />
                  <h4 className="font-display text-2xl font-normal text-[#0B0B0A] mb-2">
                    Inquiry Received
                  </h4>
                  <p className="font-sans text-sm text-black/60 max-w-sm mx-auto">
                    Thank you, {formData.name}. Our studio director will review your project requirements and connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-mono text-xs uppercase tracking-widest text-black/60 block mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-white border border-black/10 px-4 py-3.5 text-xs font-sans text-black focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-xs uppercase tracking-widest text-black/60 block mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="eleanor@studio.com"
                        className="w-full bg-white border border-black/10 px-4 py-3.5 text-xs font-sans text-black focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-mono text-xs uppercase tracking-widest text-black/60 block mb-2">
                        PROJECT TYPE
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-white border border-black/10 px-4 py-3.5 text-xs font-sans text-black focus:outline-none focus:border-black transition-colors cursor-pointer"
                      >
                        <option>Architectural Visualization</option>
                        <option>Cinematic Real Estate Film</option>
                        <option>AI Spatial Walkthrough</option>
                        <option>Off-Plan Launch Suite</option>
                        <option>Adaptive Reuse &amp; Renovation</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-mono text-xs uppercase tracking-widest text-black/60 block mb-2">
                        PROJECT BUDGET
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-white border border-black/10 px-4 py-3.5 text-xs font-sans text-black focus:outline-none focus:border-black transition-colors cursor-pointer"
                      >
                        <option>$10,000 – $25,000</option>
                        <option>$25,000 – $50,000</option>
                        <option>$50,000 – $100,000</option>
                        <option>$100,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-black/60 block mb-2">
                      PROJECT DETAILS &amp; TIMELINE
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Describe the architectural typology, site location, timeline expectations, or desired deliverables..."
                      className="w-full bg-white border border-black/10 p-4 text-xs font-sans text-black focus:outline-none focus:border-black transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#0B0B0A] text-white font-mono text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-2 hover:bg-[#C5A880] hover:text-black transition-all duration-200"
                  >
                    <span>START PROJECT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </FramerCard>
          </div>
        </div>
      </div>
    </section>
  );
}
