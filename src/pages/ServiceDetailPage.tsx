import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, HelpCircle } from 'lucide-react';
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
    <main className="w-full bg-[#f7f6f2] text-[#121214] pt-28 md:pt-36">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
              Pillar {service.number}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
              Specialized Atelier Service
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-black leading-[1.04] mb-6">
            {service.heroHeadline}
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 font-light max-w-2xl leading-relaxed">
            {service.heroSubhead}
          </p>
        </div>
      </div>

      {/* Hero Visual Frame */}
      <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-zinc-900 overflow-hidden mb-24 md:mb-36">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover filter brightness-95"
        />
      </div>

      {/* Problem & Solution (Commercial Clarity - OMEGA / The Boundary Influence) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 border-t border-black/10 pt-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-red-700 font-semibold block mb-3 font-mono">
              The Industry Challenge
            </span>
            <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-black mb-4">
              Why traditional visualization falls short.
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
              {service.problem}
            </p>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-700 font-semibold block mb-3 font-mono">
              The Vantage Approach
            </span>
            <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-black mb-4">
              Architectural truth with cinematic emotion.
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
              {service.solution}
            </p>
          </div>
        </div>
      </div>

      {/* Complete Deliverables Breakdown */}
      <div className="bg-white border-y border-black/10 py-24 md:py-32 mb-24 md:mb-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
              Output Matrix
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-black mb-4">
              What we deliver.
            </h2>
            <p className="text-zinc-600 text-sm font-light">
              Every asset is calibrated for technical architectural rigor and high-converting marketing impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.deliverables.map((item, idx) => (
              <div
                key={item.name}
                className="p-8 border border-black/10 bg-zinc-50/50 flex flex-col justify-between hover:border-black transition-colors"
              >
                <div>
                  <span className="text-xs font-mono text-zinc-400 block mb-3">
                    0{idx + 1}
                  </span>
                  <h4 className="text-lg font-medium text-black mb-2 tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-black uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Production Ready</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow Step-by-Step */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-36">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
            Atelier Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-black mb-4">
            Production workflow.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {service.workflow.map((wf) => (
            <div key={wf.step} className="border-t-2 border-black pt-6">
              <span className="text-2xl font-light text-zinc-400 font-mono block mb-2">
                {wf.step}
              </span>
              <h4 className="text-lg font-medium text-black mb-2 tracking-tight">
                {wf.title}
              </h4>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                {wf.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-36">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
              Clarity & Terms
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-black mb-4">
              Frequently asked questions.
            </h2>
          </div>

          <div className="divide-y divide-black/10 border-t border-b border-black/10">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-zinc-400 mt-1 flex-shrink-0" />
                  <h4 className="text-lg font-medium text-black tracking-tight">
                    {faq.q}
                  </h4>
                </div>
                <div className="lg:col-span-7 text-sm text-zinc-600 font-light leading-relaxed">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action CTA Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
        <div className="p-12 md:p-16 bg-white border border-black/10 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-3xl font-light text-black mb-4">
            Discuss {service.title}
          </h3>
          <p className="text-zinc-600 text-sm font-light mb-8 max-w-lg mx-auto">
            Ready to receive an itemized proposal and timeline for your upcoming project?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
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
