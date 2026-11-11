import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

interface PricingTier {
  id: string;
  code: string;
  name: string;
  price: string;
  priceSub: string;
  turnaround: string;
  summary: string;
  featured?: boolean;
  badge?: string;
  features: string[];
  ctaLabel: string;
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'stills',
    code: '01 // CGI STILLS',
    name: '3D Visualization Pack',
    price: '$1,400',
    priceSub: 'or from $350 / single view',
    turnaround: '3–5 Days Delivery',
    summary: 'Ideal for private villas, interiors, and architectural facade approvals starting from 2D drawings.',
    features: [
      '3D modeling directly from Genplan / DWG',
      '5 photorealistic 4K exterior or interior views',
      'Daylight & dusk atmospheric calibration',
      '2 structured revision rounds included',
      'Full commercial web & print rights',
    ],
    ctaLabel: 'Select Stills Pack',
  },
  {
    id: 'reel',
    code: '02 // SOCIAL CINEMA',
    name: '9:16 Reel + Stills',
    price: '$2,200',
    priceSub: 'Complete social pre-sales kit',
    turnaround: '5–7 Days Delivery',
    summary: 'Engineered for high-converting Instagram launches, developer reels, and mobile-first property sales.',
    featured: true,
    badge: 'MOST POPULAR',
    features: [
      'Complete 3D architectural & site build',
      '45–60s 4K vertical (9:16) architectural film',
      '4 high-resolution 4K hero renders',
      'Smooth camera choreography & sound design',
      '2 revision rounds + ready-to-post masters',
    ],
    ctaLabel: 'Start Reel Campaign',
  },
  {
    id: 'launch',
    code: '03 // FULL LAUNCH',
    name: '4K Walkthrough Campaign',
    price: '$3,900',
    priceSub: 'Flagship developer package',
    turnaround: '7–10 Days Delivery',
    summary: 'Comprehensive visual campaign for residential complexes, commercial plazas, and investor pitches.',
    features: [
      'Full masterplan, facade & landscape 3D build',
      '60–90s 4K widescreen (16:9) cinema film',
      '8 photorealistic exterior & interior 4K stills',
      'Bonus 9:16 vertical social reel cutdown',
      'Bespoke color grading & spatial audio mix',
    ],
    ctaLabel: 'Select Launch Pack',
  },
  {
    id: 'custom',
    code: '04 // ENTERPRISE',
    name: 'Masterplan & Custom',
    price: 'Custom',
    priceSub: 'Tailored to project scale',
    turnaround: 'Dedicated Studio Team',
    summary: 'Bespoke production for multi-block urban quarters, shopping malls, 5-star hotels, and resorts.',
    features: [
      'Large-scale urban quarters & hospitality',
      'Before / After & construction phase films',
      'Real drone footage 3D composite matching',
      'Dedicated art director & bilateral NDA',
      'Preferred retainer rates for developers',
    ],
    ctaLabel: 'Request Custom Quote',
  },
];

interface SolumPricingProps {
  isStandalonePage?: boolean;
}

export function SolumPricing({ isStandalonePage = false }: SolumPricingProps) {
  return (
    <section
      id="pricing"
      className="w-full bg-white text-[#101010] py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-20 border-b border-[#101010]/12 select-none"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#101010]/12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2563EB] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block">
                05 // Transparent Production Rates
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-[#101010] leading-[1.02]">
              Packages &amp; Pricing
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#757575] max-w-2xl font-normal leading-relaxed">
              Predictable, transparent pricing from 2D Genplan and CAD drawings to photorealistic 4K CGI stills and cinema walkthrough films.
            </p>
          </div>

          {!isStandalonePage && (
            <div>
              <Link
                to="/pricing"
                className="solum-btn px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-[#101010] hover:bg-[#101010] hover:text-white"
              >
                <span>Full Pricing &amp; FAQ</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2.5 btn-arrow" />
              </Link>
            </div>
          )}
        </div>

        {/* 4-Column Architectural Pricing Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-x border-b border-[#101010]/12 divide-y md:divide-y-0 border-t-0">
          {PRICING_TIERS.map((tier, idx) => {
            const isFeatured = Boolean(tier.featured);

            return (
              <div
                key={tier.id}
                className={`flex flex-col justify-between p-7 sm:p-8 lg:p-9 transition-colors ${
                  isFeatured
                    ? 'bg-[#101010] text-white'
                    : 'bg-white text-[#101010] hover:bg-[#FAFAFA]'
                } ${
                  idx < 3 ? 'xl:border-r xl:border-[#101010]/12' : ''
                } ${
                  idx % 2 === 0 ? 'md:border-r md:border-[#101010]/12' : ''
                } ${
                  idx < 2 ? 'md:border-b xl:border-b-0 md:border-[#101010]/12' : ''
                }`}
              >
                <div>
                  {/* Top Meta Row */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span
                      className={`font-mono text-[11px] uppercase tracking-wider ${
                        isFeatured ? 'text-white/65' : 'text-[#757575]'
                      }`}
                    >
                      {tier.code}
                    </span>
                    {tier.badge ? (
                      <span className="px-2.5 py-0.5 bg-[#2563EB] text-white font-mono text-[10px] font-semibold uppercase tracking-wider">
                        {tier.badge}
                      </span>
                    ) : (
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border ${
                          isFeatured
                            ? 'border-white/20 text-white/75'
                            : 'border-[#101010]/15 text-[#757575]'
                        }`}
                      >
                        {tier.turnaround}
                      </span>
                    )}
                  </div>

                  {/* Package Name */}
                  <h3
                    className={`font-display text-xl sm:text-2xl font-semibold tracking-tight mb-3 ${
                      isFeatured ? 'text-white' : 'text-[#101010]'
                    }`}
                  >
                    {tier.name}
                  </h3>

                  {/* Price Block */}
                  <div className="pb-6 mb-6 border-b border-current/12">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl sm:text-5xl font-semibold tracking-[-0.04em] tabular-nums">
                        {tier.price}
                      </span>
                    </div>
                    <span
                      className={`font-mono text-xs block mt-1.5 ${
                        isFeatured ? 'text-white/60' : 'text-[#757575]'
                      }`}
                    >
                      {tier.priceSub} &bull; {tier.turnaround}
                    </span>
                  </div>

                  {/* Summary */}
                  <p
                    className={`font-sans text-xs sm:text-sm leading-relaxed mb-6 ${
                      isFeatured ? 'text-white/75' : 'text-[#555555]'
                    }`}
                  >
                    {tier.summary}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans">
                        <Check
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            isFeatured ? 'text-[#3B82F6]' : 'text-[#2563EB]'
                          }`}
                        />
                        <span className={isFeatured ? 'text-white/90' : 'text-[#101010]/85'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Link
                  to={`/contact?package=${tier.id}`}
                  className={`w-full py-3.5 px-5 font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-between transition-colors group border ${
                    isFeatured
                      ? 'bg-white text-[#101010] border-white hover:bg-[#F4F4F0]'
                      : 'bg-white text-[#101010] border-[#101010] hover:bg-[#101010] hover:text-white'
                  }`}
                >
                  <span>{tier.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Modular Add-Ons & Terms Strip */}
        <div className="mt-8 p-5 sm:p-6 bg-[#F9F9F8] border border-[#101010]/12 flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-xs font-mono text-[#555555]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              <strong className="text-[#101010]">SINGLE 4K VIEW:</strong> FROM $350
            </span>
            <span className="hidden sm:inline text-[#101010]/25">|</span>
            <span>
              <strong className="text-[#101010]">EXTRA 9:16 REEL CUT:</strong> +$450
            </span>
            <span className="hidden sm:inline text-[#101010]/25">|</span>
            <span>
              <strong className="text-[#101010]">TERMS:</strong> 50% START / 50% FINAL DELIVERY
            </span>
          </div>
          <Link
            to="/contact"
            className="text-[#101010] font-semibold underline hover:opacity-70 shrink-0"
          >
            NEED A CUSTOM QUOTE? SEND YOUR GENPLAN →
          </Link>
        </div>
      </div>
    </section>
  );
}
