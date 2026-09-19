import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, HelpCircle, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/services';
import { FinalCTASection } from '../components/home/FinalCTASection';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const service = useMemo(() => {
    return SERVICES.find((s) => s.slug === slug);
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main className="w-full bg-[#090a0d] text-white pt-28 md:pt-36">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs uppercase tracking-wider text-zinc-300 font-mono transition-all border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Pillar {service.number} — Specialized Atelier Service</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.04] mb-6">
            {service.heroHeadline}
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 font-light max-w-2xl leading-relaxed">
            {service.heroSubhead}
          </p>
        </div>
      </div>

      {/* Hero Visual Frame (Curved Axioma Container) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[32px] sm:rounded-[40px] overflow-hidden border border-white/15 bg-zinc-900 shadow-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover filter brightness-95 contrast-[1.05]"
          />
        </div>
      </div>

      {/* Problem & Solution Split Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="glass-card rounded-3xl p-8 border border-red-500/20 bg-red-950/10">
            <span className="text-[10px] uppercase tracking-widest text-red-400 font-mono font-semibold block mb-3">
              The Industry Challenge
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
              Why traditional visualization falls short.
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              {service.problem}
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 border border-emerald-500/30 bg-emerald-950/20">
            <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono font-semibold block mb-3">
              The Vantage Approach
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
              Architectural truth with cinematic emotion.
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              {service.solution}
            </p>
          </div>
        </div>
      </div>

      {/* Complete Deliverables Breakdown */}
      <div className="bg-[#0c0d11] border-y border-white/10 py-20 md:py-32 mb-20 md:mb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-14">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-3">
              Output Matrix
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              What We Deliver
            </h2>
            <p className="text-zinc-300 text-sm font-light">
              Every asset is calibrated for technical architectural rigor and high-converting marketing impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {service.deliverables.map((item, idx) => (
              <div
                key={item.name}
                className="glass-card rounded-3xl p-7 border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all shadow-xl"
              >
                <div>
                  <span className="text-xs font-mono text-zinc-500 block mb-3">
                    0{idx + 1}
                  </span>
                  <h4 className="font-display text-lg font-bold text-white mb-2 tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Production Ready</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow Step-by-Step */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-3">
            Atelier Methodology
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Production Workflow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {service.workflow.map((wf) => (
            <div key={wf.step} className="glass-card rounded-3xl p-6 border border-white/10">
              <span className="font-display text-3xl font-bold text-white/30 block mb-2 font-mono">
                {wf.step}
              </span>
              <h4 className="font-display text-base font-bold text-white mb-2 tracking-tight">
                {wf.title}
              </h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {wf.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-3">
              Clarity & Terms
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-amber-200 mt-1 flex-shrink-0" />
                  <h4 className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.q}
                  </h4>
                </div>
                <div className="lg:col-span-7 text-sm text-zinc-300 font-light leading-relaxed">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action CTA Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
        <div className="p-10 md:p-14 glass-card rounded-[32px] sm:rounded-[40px] border border-white/15 shadow-2xl max-w-3xl mx-auto">
          <h3 className="font-display text-3xl font-bold text-white mb-4">
            Discuss {service.title}
          </h3>
          <p className="text-zinc-300 text-sm font-light mb-8 max-w-lg mx-auto">
            Ready to receive an itemized proposal and timeline for your upcoming project?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-xl"
          >
            <span>Request Proposal</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Final Dark CTA */}
      <FinalCTASection />
    </main>
  );
}
