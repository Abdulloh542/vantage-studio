import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { optimizeCloudinaryImage } from '../utils/media';

interface RateRow {
  id: string;
  label: string;
  info: string;
  oldPrice?: string;
  price: string;
  saveBadge?: string;
  ourPick?: boolean;
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
    titleMuted: 'priced by length',
    leftColumnHeader: 'Length',
    rightColumnHeader: 'Price*',
    rows: [
      {
        id: 'film-30s',
        label: '30 s',
        info: '30-second 4K architectural teaser or 9:16 vertical reel. Includes 3D scene setup from your Genplan, camera motion, sound design, and color grading.',
        oldPrice: '$1,190',
        price: '$890',
        saveBadge: 'You save $300',
      },
      {
        id: 'film-60s',
        label: '60 s',
        info: '60-second complete 4K architectural walkthrough covering exterior elevations, courtyard life, and key interiors (16:9 widescreen or 9:16 vertical).',
        oldPrice: '$1,790',
        price: '$1,490',
        saveBadge: 'You save $300',
        ourPick: true,
      },
      {
        id: 'film-90-120s',
        label: '90 – 120 s',
        info: '90 to 120-second flagship masterplan cinema film with aerial drone sweeps, daylight-to-dusk transitions, and custom spatial soundscape.',
        oldPrice: '$3,590',
        price: '$2,490',
        saveBadge: 'You save $1,100',
      },
    ],
    footnote:
      'Every film is delivered in crisp 4K with full commercial rights. We build the 3D scene directly from your 2D Genplan, CAD drawings, or 3D model.',
    sampleLink: {
      label: 'Watch 58s film',
      href: '/projects/volga-park',
    },
  },
  {
    id: 'archviz-video-types',
    titleDark: 'Real estate & ArchViz',
    titleMuted: 'video formats',
    leftColumnHeader: 'Project',
    rightColumnHeader: 'Price*',
    rows: [
      {
        id: 'video-reel-9x16',
        label: '9:16 Social Reel',
        info: 'High-retention vertical 4K architectural film tailored for Instagram Reels, TikTok, and mobile-first developer pre-sales.',
        price: '$790',
        saveBadge: 'Credited if you upgrade',
      },
      {
        id: 'video-genplan-3d',
        label: 'Genplan → 3D Growth',
        info: 'Signature Atlas Studio transition: your 2D blueprint or Genplan rises step-by-step into 3D structural massing and final photorealistic architecture.',
        oldPrice: '$1,690',
        price: '$1,290',
        saveBadge: 'You save $400',
      },
      {
        id: 'video-property-tour',
        label: 'Walk-through Villa / House',
        info: 'Complete eye-level and aerial walkthrough of a private residence or villa — exterior approach, garden terrace, pool caustics, and living spaces.',
        oldPrice: '$2,490',
        price: '$1,890',
        saveBadge: 'You save $600',
        ourPick: true,
      },
      {
        id: 'video-before-after',
        label: 'Before / After Transformation',
        info: 'Existing construction site, drone plate, or historic building dissolving seamlessly into your finished 3D architectural proposal.',
        oldPrice: '$2,190',
        price: '$1,590',
        saveBadge: 'You save $600',
      },
      {
        id: 'video-full-tower',
        label: 'Full Tower / Quarter Launch',
        info: 'Comprehensive real estate launch film for multi-block residential quarters, commercial plazas, shopping malls, and 5-star resorts.',
        oldPrice: '$4,900',
        price: '$3,900',
        saveBadge: 'You save $1,000',
      },
    ],
    footnote:
      'Need both 16:9 widescreen for sales galleries and 9:16 vertical for Instagram? We frame and render both aspect ratios from the same 3D scene.',
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
    rightColumnHeader: 'Price*',
    rows: [
      {
        id: 'pkg-essential',
        label: 'Essential',
        info: '5 photorealistic 4K renders + 30s vertical 9:16 film + complete 3D modeling from your 2D Genplan or DWG drawings.',
        oldPrice: '$1,990',
        price: '$1,490',
        saveBadge: 'You save $500',
      },
      {
        id: 'pkg-signature',
        label: 'Signature',
        info: '10 photorealistic 4K exterior & interior renders + 60s 4K walkthrough film + 9:16 social cutdown + full 3D architectural build.',
        oldPrice: '$3,190',
        price: '$2,290',
        saveBadge: 'You save $900',
        ourPick: true,
      },
      {
        id: 'pkg-flagship',
        label: 'Flagship',
        info: '20 photorealistic 4K renders + 90–120s widescreen 4K cinema film + 2 vertical social reels for full off-plan project launches.',
        oldPrice: '$5,200',
        price: '$3,900',
        saveBadge: 'You save $1,300',
      },
    ],
    footnote:
      'One unified 3D architectural model powers both your still renders and your motion films — keeping materials and lighting 100% consistent.',
  },
  {
    id: 'still-images',
    titleDark: 'Images',
    titleMuted: 'new views from your plans',
    leftColumnHeader: 'Views',
    rightColumnHeader: 'Price*',
    rows: [
      {
        id: 'img-1',
        label: '1',
        info: 'Single 4K photorealistic exterior or interior render built from your CAD plans or 3D model, including 2 revision rounds.',
        price: '$250',
        saveBadge: 'Credited if you upgrade',
      },
      {
        id: 'img-10',
        label: '10',
        info: '10 high-resolution 4K exterior & interior views across sunny daylight, golden hour, and nocturnal lighting.',
        oldPrice: '$1,100',
        price: '$850',
        saveBadge: 'You save $250',
      },
      {
        id: 'img-20',
        label: '20',
        info: '20 photorealistic 4K views covering building elevations, courtyards, entrance lobbies, and interior apartment layouts.',
        oldPrice: '$1,900',
        price: '$1,350',
        saveBadge: 'You save $550',
      },
      {
        id: 'img-30',
        label: '30',
        info: '30 comprehensive 4K marketing views for full residential developments, villas, or commercial masterplans.',
        oldPrice: '$2,500',
        price: '$1,750',
        saveBadge: 'You save $750',
        ourPick: true,
      },
      {
        id: 'img-monthly',
        label: '12 a month',
        info: 'Ongoing studio subscription for active developers and architectural practices — 12 fresh 4K views every month, pause or cancel anytime.',
        price: '$1,490 / month',
        saveBadge: 'You save $610 / mo',
      },
    ],
    footnote:
      'All still packages include 3D modeling from your 2D Genplan/DWG, physical material calibration, landscaping, and 2 revision rounds.',
  },
];

export function PricingPage() {
  const [openInfoId, setOpenInfoId] = useState<string | null>(null);

  const bannerImage = optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992590/projects/collective-dubai-hills/collective-dubai-hills_still_4.jpg',
    1600
  );

  return (
    <main className="w-full bg-[#F2EFE9] text-[#141413] pt-28 md:pt-36 select-none">
      {/* ========================================================= */}
      {/* 1) MINIMALIST EDITORIAL HERO ("Our prices")               */}
      {/* ========================================================= */}
      <section className="max-w-[1220px] mx-auto px-5 sm:px-10 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-5">
            <h1 className="font-sans text-6xl sm:text-7xl md:text-[84px] font-normal tracking-[-0.045em] leading-[0.94]">
              <span className="block text-[#141413]">Our</span>
              <span className="block text-[#8C8982]">prices</span>
            </h1>
          </div>

          <div className="lg:col-span-7">
            <p className="font-sans text-xs sm:text-sm text-[#605E59] leading-relaxed max-w-md">
              Clear rates from your 2D Genplan or 3D model. Choose by film length, architectural video format, or number of 4K views — with first 3D previews in 1–2 days.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2) STACKED HORIZONTAL CARDS (EXACT REFERENCE DESIGN)      */}
      {/* ========================================================= */}
      <section className="max-w-[1220px] mx-auto px-5 sm:px-10 pb-24 md:pb-32 space-y-24 md:space-y-32">
        {PRICING_GROUPS.map((group) => (
          <div
            key={group.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* Left Category Heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 pt-1">
              <h2 className="font-sans text-2xl sm:text-3xl md:text-[32px] font-normal tracking-[-0.035em] leading-[1.15]">
                <span className="text-[#141413]">{group.titleDark} </span>
                <span className="text-[#8C8982]">{group.titleMuted}</span>
              </h2>
            </div>

            {/* Right Stack of Rounded Horizontal Cards */}
            <div className="lg:col-span-7">
              {/* Top Column Labels ("Length / Project" & "Price*") */}
              <div className="flex items-center justify-between px-3 pb-3 text-xs font-sans text-[#78756E]">
                <span>{group.leftColumnHeader}</span>
                <span>{group.rightColumnHeader}</span>
              </div>

              {/* Cards Stack */}
              <div className="space-y-3.5">
                {group.rows.map((row) => {
                  const isInfoOpen = openInfoId === row.id;

                  return (
                    <div
                      key={row.id}
                      style={
                        row.ourPick
                          ? {
                              background:
                                'linear-gradient(125deg, #F6E2D3 0%, #FAF5F0 38%, #F9E3DC 72%, #EBE2F4 100%)',
                            }
                          : undefined
                      }
                      className={`group relative rounded-[20px] transition-all duration-200 ${
                        row.ourPick
                          ? 'border border-white shadow-[0_10px_30px_rgba(20,20,19,0.06)] hover:shadow-[0_14px_36px_rgba(20,20,19,0.10)]'
                          : 'bg-[#FAF9F6] border border-white/90 shadow-[0_2px_10px_rgba(20,20,19,0.025)] hover:bg-white hover:shadow-[0_8px_24px_rgba(20,20,19,0.06)]'
                      }`}
                    >
                      {/* "Our pick" Floating Black Pill Badge */}
                      {row.ourPick && (
                        <span className="absolute -top-3 left-6 z-10 px-3 py-1 rounded-full bg-[#141413] text-white font-sans text-[11px] font-medium tracking-[-0.01em] shadow-sm">
                          Our pick
                        </span>
                      )}

                      {/* Main Card Horizontal Row */}
                      <div className="flex items-center justify-between gap-4 px-6 sm:px-9 py-6 sm:py-8 min-h-[116px] sm:min-h-[142px]">
                        {/* Left: Big Clean Label + Circular "i" Info Button */}
                        <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                          <Link
                            to={`/contact?package=${encodeURIComponent(row.id)}`}
                            className="font-sans text-2xl sm:text-4xl md:text-[40px] font-normal tracking-[-0.035em] text-[#141413] leading-none hover:opacity-75 transition-opacity"
                          >
                            {row.label}
                          </Link>

                          <button
                            type="button"
                            aria-label={`Details for ${row.label}`}
                            onClick={() => setOpenInfoId(isInfoOpen ? null : row.id)}
                            onMouseEnter={() => setOpenInfoId(row.id)}
                            onMouseLeave={() => setOpenInfoId((prev) => (prev === row.id ? null : prev))}
                            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-black/[0.06] shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#141413] hover:scale-105 transition-transform cursor-pointer shrink-0"
                          >
                            <span className="font-serif italic text-xs sm:text-[13px] font-semibold leading-none">
                              i
                            </span>
                          </button>
                        </div>

                        {/* Right: Strikethrough Old Price + Big Price + Mint-Green Savings Pill */}
                        <Link
                          to={`/contact?package=${encodeURIComponent(row.id)}`}
                          className="text-right shrink-0 flex flex-col items-end"
                        >
                          {row.oldPrice && (
                            <span className="font-sans text-xs sm:text-base text-[#8C8982] line-through decoration-[#8C8982]/80 tabular-nums leading-none mb-1.5">
                              {row.oldPrice}
                            </span>
                          )}

                          <span className="font-sans text-2xl sm:text-4xl md:text-[42px] font-normal tracking-[-0.035em] text-[#141413] tabular-nums leading-none">
                            {row.price}
                          </span>

                          {row.saveBadge && (
                            <span className="mt-2.5 px-3 py-1 rounded-full bg-[#DFECE5] text-[#1E4E36] font-sans text-[11px] sm:text-xs font-medium tracking-[-0.01em] leading-none">
                              {row.saveBadge}
                            </span>
                          )}
                        </Link>
                      </div>

                      {/* Expandable / Hover Info Drawer */}
                      {isInfoOpen && (
                        <div className="px-6 sm:px-9 pb-5 pt-0">
                          <div className="p-3.5 sm:p-4 rounded-xl bg-white/90 border border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans text-[#4A4843] leading-relaxed">
                            <span>{row.info}</span>
                            <Link
                              to={`/contact?package=${encodeURIComponent(row.id)}`}
                              className="inline-flex items-center gap-1 font-medium text-[#141413] underline shrink-0"
                            >
                              <span>Select this</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Footnote & Pill Buttons Under Stack */}
              <div className="mt-5 px-2 space-y-4">
                <p className="font-sans text-xs text-[#6E6B64] leading-relaxed max-w-lg">
                  {group.footnote}
                </p>

                <div className="flex flex-wrap items-center gap-2.5">
                  {group.sampleLink && (
                    <Link
                      to={group.sampleLink.href}
                      className="px-4 py-2 rounded-full bg-white border border-black/[0.08] text-xs font-sans font-medium text-[#141413] hover:border-black/30 transition-colors"
                    >
                      {group.sampleLink.label}
                    </Link>
                  )}
                  <Link
                    to={`/contact?package=${encodeURIComponent(group.id)}`}
                    className="px-4 py-2 rounded-full bg-[#141413] text-white text-xs font-sans font-medium hover:bg-black/80 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Start a project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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

        <div className="relative z-10 max-w-[1220px] mx-auto px-5 sm:px-10 py-20 sm:py-28">
          <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.04em] leading-[1.04] max-w-2xl mb-10">
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
                  <div className="font-sans text-2xl sm:text-3xl font-normal text-white tabular-nums">
                    9
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-white/55 mt-0.5">
                    4K Stills
                  </div>
                </div>

                <div>
                  <div className="font-sans text-2xl sm:text-3xl font-normal text-white tabular-nums">
                    58s
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-white/55 mt-0.5">
                    4K Walkthrough
                  </div>
                </div>

                <div>
                  <div className="font-sans text-2xl sm:text-3xl font-normal text-white tabular-nums">
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/25 text-xs font-sans text-white hover:bg-white hover:text-[#141413] transition-colors"
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
      <section className="max-w-[1220px] mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-black/10">
          <div className="lg:col-span-5">
            <h2 className="font-sans text-xl sm:text-2xl font-normal tracking-[-0.03em] leading-[1.2]">
              <span className="text-[#141413] block">How payment works</span>
              <span className="text-[#8C8982] block">
                and when you get your previews
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="font-sans text-xs sm:text-sm text-[#605E59] leading-relaxed max-w-md">
              Every project begins with a review of your Genplan or 3D files. You approve camera angles and 3D geometry first, and only pay the remaining balance when your final 4K visuals are ready.
            </p>
          </div>
        </div>

        {/* 3 Minimalist Milestone Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-12 pb-20">
          <div>
            <div className="font-sans text-5xl sm:text-6xl font-normal tracking-[-0.04em] text-[#141413] tabular-nums">
              50%
            </div>
            <div className="font-sans text-xs sm:text-sm text-[#6E6B64] mt-2">
              To start 3D modeling &amp; scene setup
            </div>
          </div>

          <div>
            <div className="font-sans text-5xl sm:text-6xl font-normal tracking-[-0.04em] text-[#141413] tabular-nums">
              1–2 days
            </div>
            <div className="font-sans text-xs sm:text-sm text-[#6E6B64] mt-2">
              First 3D camera &amp; massing previews
            </div>
          </div>

          <div>
            <div className="font-sans text-5xl sm:text-6xl font-normal tracking-[-0.04em] text-[#141413] tabular-nums">
              50%
            </div>
            <div className="font-sans text-xs sm:text-sm text-[#6E6B64] mt-2">
              On final 4K visual approval
            </div>
          </div>
        </div>

        {/* Bottom Project Invitation Card with Pastel Mesh Gradient */}
        <div
          style={{
            background:
              'linear-gradient(125deg, #F6E2D3 0%, #FAF5F0 40%, #EBE2F4 100%)',
          }}
          className="p-8 sm:p-12 rounded-[24px] border border-white shadow-[0_10px_30px_rgba(20,20,19,0.05)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div className="space-y-1.5 max-w-md">
            <h3 className="font-sans text-3xl sm:text-4xl font-normal tracking-[-0.035em] leading-[1.08]">
              <span className="text-[#141413] block">Your project</span>
              <span className="text-[#141413] block">could be next</span>
              <span className="text-[#8C8982] block">send your Genplan today</span>
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-[#141413] text-white font-sans text-xs sm:text-sm font-medium hover:bg-black/80 transition-colors inline-flex items-center gap-2"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/projects"
              className="px-5 py-3 rounded-full bg-white border border-black/[0.08] text-[#141413] font-sans text-xs sm:text-sm font-medium hover:border-black/30 transition-colors"
            >
              See selected work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
