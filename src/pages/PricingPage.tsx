import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { optimizeCloudinaryImage } from '../utils/media';

interface RateRow {
  id: string;
  label: string;
  detail?: string;
  price: string;
  unitNote: string;
  badge?: string;
  highlighted?: boolean;
}

interface PricingGroup {
  id: string;
  titleDark: string;
  titleMuted: string;
  leftColumnHeader: string;
  rightColumnHeader: string;
  rows: RateRow[];
  footnote: string;
  sampleLink?: {
    label: string;
    href: string;
  };
}

const PRICING_GROUPS: PricingGroup[] = [
  {
    id: 'films-by-seconds',
    titleDark: 'Films',
    titleMuted: 'priced by seconds',
    leftColumnHeader: 'Duration',
    rightColumnHeader: 'Rate',
    rows: [
      {
        id: 'film-30s',
        label: '15 – 30 s',
        detail: 'Teaser or vertical social cut',
        price: '$690',
        unitNote: '~$23 / sec',
      },
      {
        id: 'film-60s',
        label: '60 s',
        detail: 'Full exterior & interior walkthrough',
        price: '$1,290',
        unitNote: '~$21 / sec · Save 15%',
        badge: 'POPULAR',
        highlighted: true,
      },
      {
        id: 'film-90-120s',
        label: '90 – 120 s',
        detail: 'Masterplan & lifestyle cinema film',
        price: '$2,190',
        unitNote: '~$18 / sec · Save 25%',
      },
      {
        id: 'film-150s',
        label: '150 s +',
        detail: 'Multi-block quarter or resort film',
        price: '$2,950',
        unitNote: 'Custom sequence',
      },
    ],
    footnote:
      'Every film includes 3D scene preparation from your drawings, camera choreography, sound design, and 4K delivery in 16:9 or 9:16.',
    sampleLink: {
      label: 'Watch 58s film',
      href: '/projects/volga-park',
    },
  },
  {
    id: 'archviz-video-types',
    titleDark: 'ArchViz & real estate videos',
    titleMuted: 'by format & style',
    leftColumnHeader: 'Video format',
    rightColumnHeader: 'Rate',
    rows: [
      {
        id: 'video-reel-9x16',
        label: '9:16 Vertical Social Reel',
        detail: '45–60s mobile-first film for Instagram & pre-sales',
        price: '$890',
        unitNote: 'Ready for Reels',
      },
      {
        id: 'video-genplan-3d',
        label: 'Genplan → 3D Growth Film',
        detail: '2D CAD plan rising into 3D massing & final render',
        price: '$1,350',
        unitNote: 'Signature transition',
      },
      {
        id: 'video-property-tour',
        label: 'Real Estate Property Presentation',
        detail: '60–90s arrival, courtyard, lobby & residence tour',
        price: '$1,650',
        unitNote: 'Full pre-sales film',
        badge: 'MOST CHOSEN',
        highlighted: true,
      },
      {
        id: 'video-before-after',
        label: 'Before / After Renovation Film',
        detail: 'Existing site or structure dissolving into proposed CGI',
        price: '$1,450',
        unitNote: 'Photo / LiDAR matched',
      },
      {
        id: 'video-drone-match',
        label: 'Drone Aerial 3D Composite',
        detail: 'Unbuilt 3D architecture tracked into real drone footage',
        price: '$1,100',
        unitNote: '3D camera tracking',
      },
      {
        id: 'video-day-night',
        label: 'Day-to-Night Lighting Study',
        detail: 'Continuous sun path from morning daylight to dusk glow',
        price: '$650',
        unitNote: 'Standalone or add-on',
      },
    ],
    footnote:
      'Have only a 2D Genplan or AutoCAD file? We model the 3D architecture, terrain, and landscaping directly from your drawings.',
    sampleLink: {
      label: 'See 9:16 & 16:9 works',
      href: '/projects',
    },
  },
  {
    id: 'launch-packages',
    titleDark: 'Launch packages',
    titleMuted: 'images and film together',
    leftColumnHeader: 'Package',
    rightColumnHeader: 'Rate',
    rows: [
      {
        id: 'pkg-essential',
        label: 'Essential',
        detail: '5 × 4K views + 30s vertical reel',
        price: '$1,490',
        unitNote: 'Save $300',
      },
      {
        id: 'pkg-signature',
        label: 'Signature',
        detail: '10 × 4K views + 60s 4K film + 9:16 cutdown',
        price: '$2,490',
        unitNote: 'Save $550',
        badge: 'POPULAR',
        highlighted: true,
      },
      {
        id: 'pkg-flagship',
        label: 'Flagship',
        detail: '20 × 4K views + 90–120s cinema film + 2 reels',
        price: '$3,900',
        unitNote: 'Save $900',
      },
    ],
    footnote:
      'One unified 3D architectural build powers both your still renders and your motion films — keeping lighting and materials 100% consistent.',
  },
  {
    id: 'still-images',
    titleDark: 'Images',
    titleMuted: 'new views from your plans',
    leftColumnHeader: 'Views',
    rightColumnHeader: 'Rate',
    rows: [
      {
        id: 'img-1',
        label: '1',
        detail: 'Single exterior or interior 4K view',
        price: '$250',
        unitNote: '$250 / view',
      },
      {
        id: 'img-5',
        label: '5',
        detail: 'Villa or facade approval set',
        price: '$950',
        unitNote: '$190 / view · Save 24%',
      },
      {
        id: 'img-10',
        label: '10',
        detail: 'Complete exterior & interior presentation',
        price: '$1,600',
        unitNote: '$160 / view · Save 36%',
        badge: 'POPULAR',
        highlighted: true,
      },
      {
        id: 'img-20',
        label: '20',
        detail: 'Residential quarter or commercial complex',
        price: '$2,600',
        unitNote: '$130 / view · Save 48%',
      },
      {
        id: 'img-monthly',
        label: '12 a month',
        detail: 'Ongoing studio partner for developers',
        price: '$1,800 / month',
        unitNote: '$150 / view · Pause anytime',
      },
    ],
    footnote:
      'All still packages include 3D modeling from your 2D Genplan/DWG, physical material texturing, daylight or twilight lighting, and 2 revision rounds.',
  },
];

export function PricingPage() {
  const bannerImage = optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992590/projects/collective-dubai-hills/collective-dubai-hills_still_4.jpg',
    1600
  );

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 select-none">
      {/* ========================================================= */}
      {/* 1) MINIMALIST EDITORIAL HERO                              */}
      {/* ========================================================= */}
      <section className="max-w-[1180px] mx-auto px-6 sm:px-10 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-5">
            <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-medium tracking-[-0.045em] leading-[0.96]">
              <span className="block text-[#101010]">Our</span>
              <span className="block text-[#8E8E8A]">prices</span>
            </h1>
          </div>

          <div className="lg:col-span-7">
            <p className="font-sans text-xs sm:text-sm text-[#666662] leading-relaxed max-w-md">
              Transparent rates whether you need a 30-second architectural reel, a full real estate launch film, or 4K views built directly from your 2D Genplan.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2) STACKED HORIZONTAL RATE TABLES                         */}
      {/* ========================================================= */}
      <section className="max-w-[1180px] mx-auto px-6 sm:px-10 pb-20 md:pb-28 space-y-20 md:space-y-24">
        {PRICING_GROUPS.map((group) => (
          <div
            key={group.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-8 border-t border-[#101010]/10"
          >
            {/* Left Category Label */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <h2 className="font-sans text-xl sm:text-2xl font-medium tracking-[-0.03em] leading-[1.2]">
                <span className="text-[#101010]">{group.titleDark} </span>
                <span className="text-[#8E8E8A] font-normal">{group.titleMuted}</span>
              </h2>
            </div>

            {/* Right Horizontal Rows Stack */}
            <div className="lg:col-span-7">
              {/* Small Column Captions */}
              <div className="flex items-center justify-between px-4 pb-2 text-[11px] font-mono uppercase tracking-wider text-[#8E8E8A]">
                <span>{group.leftColumnHeader}</span>
                <span>{group.rightColumnHeader}</span>
              </div>

              {/* Rows */}
              <div className="space-y-2.5">
                {group.rows.map((row) => (
                  <Link
                    key={row.id}
                    to={`/contact?package=${encodeURIComponent(row.id)}`}
                    className={`group relative flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 rounded-xl transition-all duration-200 ${
                      row.highlighted
                        ? 'bg-[#F4F1EC] border border-[#101010]/20 hover:border-[#101010]'
                        : 'bg-[#F8F8F7] border border-[#101010]/[0.07] hover:bg-[#F2F2F0] hover:border-[#101010]/25'
                    }`}
                  >
                    {/* Optional Top-Left Pill Badge */}
                    {row.badge && (
                      <span className="absolute -top-2.5 left-5 px-2 py-0.5 rounded bg-[#101010] text-white font-mono text-[9px] font-semibold uppercase tracking-widest">
                        {row.badge}
                      </span>
                    )}

                    {/* Left: Title & Subtle Scope Note */}
                    <div className="min-w-0 pr-2">
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-base sm:text-lg md:text-xl font-medium tracking-[-0.02em] text-[#101010]">
                          {row.label}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8E8A] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      {row.detail && (
                        <span className="block font-sans text-xs text-[#757572] mt-0.5 truncate sm:whitespace-normal">
                          {row.detail}
                        </span>
                      )}
                    </div>

                    {/* Right: Price & Per-Second / Saving Note */}
                    <div className="text-right shrink-0">
                      <div className="font-sans text-lg sm:text-xl md:text-2xl font-medium tracking-[-0.03em] text-[#101010] tabular-nums">
                        {row.price}
                      </div>
                      <div className="font-mono text-[10px] sm:text-[11px] text-[#757572] tabular-nums mt-0.5">
                        {row.unitNote}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Footnote & Optional Action Row */}
              <div className="mt-4 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="font-sans text-xs text-[#757572] leading-relaxed max-w-md">
                  {group.footnote}
                </p>

                <div className="flex items-center gap-2.5 shrink-0">
                  {group.sampleLink && (
                    <Link
                      to={group.sampleLink.href}
                      className="px-3.5 py-1.5 rounded-full border border-[#101010]/15 text-[11px] font-sans font-medium text-[#101010] hover:border-[#101010] transition-colors"
                    >
                      {group.sampleLink.label}
                    </Link>
                  )}
                  <Link
                    to={`/contact?package=${encodeURIComponent(group.id)}`}
                    className="px-4 py-1.5 rounded-full bg-[#101010] text-white text-[11px] font-sans font-medium hover:bg-black/85 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Book scope</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ========================================================= */}
      {/* 3) FULL-WIDTH ARCHITECTURAL CASE STUDY PROOF BANNER       */}
      {/* ========================================================= */}
      <section className="relative w-full bg-[#0D0D0D] text-white overflow-hidden">
        <img
          src={bannerImage}
          alt="Collective Dubai Hills Twilight Architecture"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/75 pointer-events-none" />

        <div className="relative z-10 max-w-[1180px] mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.04em] leading-[1.04] max-w-2xl mb-10">
            <span className="text-white block">9 CGI stills and a 4K film</span>
            <span className="text-white/55 block">
              delivered in 7 days for pre-sales launch
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-5" />
            <div className="lg:col-span-7 space-y-6">
              <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed max-w-md">
                Starting from 2D masterplan drawings and facade elevations, our studio modeled the entire 6-block residential quarter, courtyard landscaping, and a 58-second 4K walkthrough film.
              </p>

              <div className="flex flex-wrap items-center gap-8 sm:gap-12 pt-2">
                <div>
                  <div className="font-sans text-2xl sm:text-3xl font-medium text-white tabular-nums">
                    9
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-white/55 mt-0.5">
                    4K Stills
                  </div>
                </div>

                <div>
                  <div className="font-sans text-2xl sm:text-3xl font-medium text-white tabular-nums">
                    58s
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-white/55 mt-0.5">
                    4K Walkthrough
                  </div>
                </div>

                <div>
                  <div className="font-sans text-2xl sm:text-3xl font-medium text-white tabular-nums">
                    48h
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-white/55 mt-0.5">
                    First 3D Previews
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/projects/volga-park"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/25 text-xs font-sans text-white hover:bg-white hover:text-[#101010] transition-colors"
                >
                  <span>View Volga Park case study</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4) HOW PAYMENT WORKS & WHEN YOU GET PREVIEWS (50% / 1-2d) */}
      {/* ========================================================= */}
      <section className="max-w-[1180px] mx-auto px-6 sm:px-10 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-[#101010]/10">
          <div className="lg:col-span-5">
            <h2 className="font-sans text-xl sm:text-2xl font-medium tracking-[-0.03em] leading-[1.2]">
              <span className="text-[#101010] block">How payment works</span>
              <span className="text-[#8E8E8A] font-normal block">
                and when you get your previews
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="font-sans text-xs sm:text-sm text-[#666662] leading-relaxed max-w-md">
              Every project begins with a review of your Genplan or 3D files. You approve camera angles and 3D geometry first, and only pay the remaining balance when your final 4K visuals are ready.
            </p>
          </div>
        </div>

        {/* 3 Minimalist Milestone Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-12 pb-20">
          <div>
            <div className="font-sans text-4xl sm:text-5xl font-medium tracking-[-0.04em] text-[#101010] tabular-nums">
              50%
            </div>
            <div className="font-sans text-xs sm:text-sm text-[#757572] mt-2">
              To start 3D modeling &amp; scene setup
            </div>
          </div>

          <div>
            <div className="font-sans text-4xl sm:text-5xl font-medium tracking-[-0.04em] text-[#101010] tabular-nums">
              1–2 days
            </div>
            <div className="font-sans text-xs sm:text-sm text-[#757572] mt-2">
              First 3D camera &amp; massing previews
            </div>
          </div>

          <div>
            <div className="font-sans text-4xl sm:text-5xl font-medium tracking-[-0.04em] text-[#101010] tabular-nums">
              50%
            </div>
            <div className="font-sans text-xs sm:text-sm text-[#757572] mt-2">
              On final 4K visual approval
            </div>
          </div>
        </div>

        {/* Minimalist Bottom Project Invitation Card */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#F6F5F2] border border-[#101010]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-md">
            <h3 className="font-sans text-2xl sm:text-3xl font-medium tracking-[-0.035em] leading-[1.12]">
              <span className="text-[#101010] block">Your project could be next</span>
              <span className="text-[#8E8E8A] block">send your Genplan for a 24h quote</span>
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-[#101010] text-white font-sans text-xs sm:text-sm font-medium hover:bg-black/85 transition-colors inline-flex items-center gap-2"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/projects"
              className="px-5 py-3 rounded-full bg-white border border-[#101010]/15 text-[#101010] font-sans text-xs sm:text-sm font-medium hover:border-[#101010] transition-colors"
            >
              See selected work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
