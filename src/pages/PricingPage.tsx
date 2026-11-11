import { useState } from 'react';
import { SolumPricing } from '../components/solum/SolumPricing';
import { SolumCallToAction } from '../components/solum/SolumCallToAction';
import { Plus, Minus } from 'lucide-react';

interface PricingFAQItem {
  q: string;
  a: string;
}

const PRICING_FAQS: PricingFAQItem[] = [
  {
    q: 'We only have a 2D Genplan or AutoCAD drawings — is 3D modeling included?',
    a: 'Yes. Every package includes building the 3D architectural geometry directly from your 2D DWG floorplans, elevations, site masterplan (Genplan), or sketches. If you already have a clean Revit, Rhino, or SketchUp model, we apply a fast-track discount.',
  },
  {
    q: 'Can we commission just 1 or 2 individual renders instead of a full package?',
    a: 'Absolutely. Individual 4K architectural exterior or interior views start at $350 per angle depending on spatial complexity, with a 2–4 business day turnaround.',
  },
  {
    q: 'How do revision rounds work during production?',
    a: 'We work in clear checkpoints: first you approve 3D camera angles and greyscale massing, then lighting and materials, and finally high-resolution 4K output. Two structured revision rounds are included at no extra charge.',
  },
  {
    q: 'What are the payment milestones and confidentiality guarantees?',
    a: 'Standard commissions operate on a 50% deposit upon kickoff and 50% upon final 4K preview approval. All architectural drawings, BIM files, and unannounced developments are strictly protected under bilateral NDA.',
  },
];

export function PricingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="w-full bg-white text-[#101010] pt-24 md:pt-28 select-none">
      {/* Core Pricing Matrix */}
      <SolumPricing isStandalonePage />

      {/* Concise Architectural FAQ Section */}
      <section className="w-full bg-white text-[#101010] py-20 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-20 border-b border-[#101010]/12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2563EB] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#757575]">
                COMMISSION DETAILS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.04em] text-[#101010] leading-tight">
              Common Questions
            </h2>
            <p className="font-sans text-sm text-[#757575] leading-relaxed">
              Everything architects and property developers ask before sending their Genplan or drawings.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#101010]/12 border-t border-b border-[#101010]/12">
            {PRICING_FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.q} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <span className="font-sans text-base sm:text-lg font-medium text-[#101010] group-hover:text-[#2563EB] transition-colors">
                      {item.q}
                    </span>
                    <span className="w-7 h-7 border border-[#101010]/15 flex items-center justify-center flex-shrink-0 text-[#101010]">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-3 pr-10 font-sans text-sm text-[#555555] leading-relaxed">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <SolumCallToAction />
    </main>
  );
}
