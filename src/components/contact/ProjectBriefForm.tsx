import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, UploadCloud, AlertCircle } from 'lucide-react';
import type { ProjectBrief } from '../../types';

export function ProjectBriefForm() {
  const [formData, setFormData] = useState<ProjectBrief>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Architectural Visualization',
    estimatedScope: 'Medium (4–8 Stills)',
    timeline: '1–2 Months',
    videoDuration: '90s Signature Film',
    budgetRange: '$15k – $35k',
    message: '',
    deliverables: ['Exterior Stills', 'Interior Stills'],
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Architectural Visualization',
    'AI Architectural Film',
    'Real Estate Marketing Suite',
    'Renovation & Transformation',
    'Competition Entry',
  ];

  const scopeOptions = [
    'Boutique (1–3 Hero Stills)',
    'Medium (4–8 Stills)',
    'Comprehensive (10+ Stills & Walkthrough)',
    'Film Campaign (Stills + 90s Film)',
  ];

  const deliverableOptions = [
    'Exterior CGI',
    'Interior CGI',
    'Cinematic AI Film',
    'Interactive 360 Walkthrough',
    'Before / After Comparison',
    'Social Cutdowns (9:16)',
  ];

  const toggleDeliverable = (item: string) => {
    setFormData((prev) => {
      const exists = prev.deliverables.includes(item);
      if (exists) {
        return { ...prev, deliverables: prev.deliverables.filter((d) => d !== item) };
      } else {
        return { ...prev, deliverables: [...prev.deliverables, item] };
      }
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid business email.');
      return;
    }
    if (!formData.company.trim()) {
      setErrorMessage('Please specify your company or architecture studio.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable studio brief ingestion
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="glass-card rounded-[32px] sm:rounded-[40px] p-8 md:p-12 border border-white/15 text-white shadow-2xl">
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-display text-3xl font-bold tracking-tight text-white mb-3">
            Project Brief Received
          </h3>
          <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed mb-8">
            Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our studio partners will review your architectural specifications and contact you within 24 business hours to schedule an introductory video call.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                projectType: 'Architectural Visualization',
                estimatedScope: 'Medium (4–8 Stills)',
                timeline: '1–2 Months',
                budgetRange: '$15k – $35k',
                message: '',
                deliverables: [],
              });
              setFileName(null);
            }}
            className="px-6 py-3 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all"
          >
            Submit Another Brief
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {errorMessage && (
            <div className="p-4 rounded-2xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Step 1: Project Typology */}
          <div>
            <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-3">
              01. Project Typology
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {projectTypes.map((type) => {
                const isSelected = formData.projectType === type;
                return (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setFormData({ ...formData, projectType: type })}
                    className={`px-4 py-3 rounded-2xl text-left text-xs font-medium tracking-wide transition-all border ${
                      isSelected
                        ? 'bg-white text-black border-white shadow-xl font-semibold'
                        : 'bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/10 border-white/10'
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Desired Deliverables */}
          <div>
            <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-3">
              02. Desired Deliverables
            </label>
            <div className="flex flex-wrap gap-2">
              {deliverableOptions.map((item) => {
                const isSelected = formData.deliverables.includes(item);
                return (
                  <button
                    type="button"
                    key={item}
                    onClick={() => toggleDeliverable(item)}
                    className={`px-4 py-2 rounded-full text-xs font-mono transition-all border ${
                      isSelected
                        ? 'bg-amber-200/90 text-black border-amber-200 font-semibold shadow-md'
                        : 'bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/10 border-white/10'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Scope Options */}
          <div>
            <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-3">
              03. Estimated Scope
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {scopeOptions.map((scope) => {
                const isSelected = formData.estimatedScope === scope;
                return (
                  <button
                    type="button"
                    key={scope}
                    onClick={() => setFormData({ ...formData, estimatedScope: scope })}
                    className={`px-4 py-2.5 rounded-2xl text-left text-xs font-medium tracking-wide transition-all border ${
                      isSelected
                        ? 'bg-white text-black border-white shadow-xl font-semibold'
                        : 'bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/10 border-white/10'
                    }`}
                  >
                    {scope}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Scope & Budget Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-2">
                Timeline Target
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-white/15 text-xs text-white focus:outline-none focus:border-white"
              >
                <option value="Urgent (< 3 Weeks)">Urgent (&lt; 3 Weeks)</option>
                <option value="1–2 Months">1–2 Months</option>
                <option value="3–6 Months">3–6 Months</option>
                <option value="Flexible / Masterplan">Flexible / Masterplan</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-2">
                Budget Range
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-white/15 text-xs text-white focus:outline-none focus:border-white"
              >
                <option value="$10k – $20k">$10,000 – $20,000</option>
                <option value="$20k – $40k">$20,000 – $40,000</option>
                <option value="$40k – $80k">$40,000 – $80,000</option>
                <option value="$80k+ (Full Campaign)">$80,000+ (Full Campaign)</option>
              </select>
            </div>
          </div>

          {/* Step 4: Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                placeholder="e.g. David Chipperfield"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                required
              />
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-1.5">
                Company / Architecture Studio *
              </label>
              <input
                type="text"
                placeholder="e.g. Atelier Foster & Partners"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                required
              />
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-1.5">
                Business Email *
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                required
              />
            </div>

            <div>
              <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-1.5">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                placeholder="+44 20 7946 0912"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white"
              />
            </div>
          </div>

          {/* Step 5: Message */}
          <div>
            <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-1.5">
              Project Description & Context
            </label>
            <textarea
              rows={4}
              placeholder="Provide context regarding the project location, architectural status (Revit/Rhino models ready, sketch stage, or competition), and your primary communication goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white resize-none"
            />
          </div>

          {/* Step 6: File Upload */}
          <div>
            <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-1.5">
              Attach Architectural Plans / CAD / PDF (Optional)
            </label>
            <label className="border border-dashed border-white/20 hover:border-white/50 p-6 rounded-2xl flex flex-col items-center justify-center cursor-pointer bg-white/[0.02] hover:bg-white/[0.05] transition-all">
              <UploadCloud className="w-6 h-6 text-zinc-400 mb-2" />
              <span className="text-xs text-zinc-200 font-medium">
                {fileName ? fileName : 'Drag & drop architectural drawings or click to browse'}
              </span>
              <span className="text-[10px] text-zinc-500 mt-1 font-mono">
                PDF, DWG, RVT, ZIP up to 100MB
              </span>
              <input
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                accept=".pdf,.dwg,.zip,.rvt,.skp"
              />
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 shadow-2xl"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Processing Brief...</span>
                </div>
              ) : (
                <>
                  <span>Request a Project Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-[10px] text-zinc-500 text-center mt-3 font-mono">
              We respect strict non-disclosure agreements (NDA) upon request prior to file receipt.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
