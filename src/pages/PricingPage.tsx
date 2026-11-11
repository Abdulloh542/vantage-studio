import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Play, Layers, Sparkles } from 'lucide-react';
import { optimizeCloudinaryImage, optimizeCloudinaryVideo } from '../utils/media';

type VisualKind = 'video' | '9x16-video' | 'split-before-after' | 'split-plan-3d' | 'fan-collage' | 'grid-4' | 'single-still';

interface RateRow {
  id: string;
  label: string;
  tag: string;
  info: string;
  oldPrice?: string;
  price: string;
  saveBadge?: string;
  ourPick?: boolean;
  visualKind: VisualKind;
  primaryImage: string;
  secondaryImage?: string;
  tertiaryImage?: string;
  quaternaryImage?: string;
  videoUrl?: string;
  badgeText?: string;
}

interface PricingGroup {
  id: string;
  titleDark: string;
  titleMuted: string;
  subtitle: string;
  leftColumnHeader: string;
  rightColumnHeader: string;
  rows: RateRow[];
  footnote: string;
  sampleLink?: {
    label: string;
    href: string;
  };
}

const IMG = {
  volgaSunny: optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990146/projects/volga-park/Architectural_close_view_sunny_day_20260.jpg',
    700
  ),
  volgaCourtyard: optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990149/projects/volga-park/Courtyard_facade_composition_tre__4K_202.jpg',
    700
  ),
  volgaAerial: optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990222/projects/volga-park/aerial_overview_4k_202c48.jpg',
    700
  ),
  bunkerHero: optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982051/projects/bunker-37/add_rooftop_on_first_image_202606191833.jpg',
    700
  ),
  insightAerial: optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990854/projects/effect-archi/A_photorealistic__highly__e6837b.jpg',
    700
  ),
  insightNight: optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990851/projects/effect-archi/A_high-end_architectural__aadba3.jpg',
    700
  ),
  insightPlan3D: optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990861/projects/effect-archi/make_plan_3d_realistic_2K_fb6c40.jpg',
    700
  ),
  insightConstr: optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990863/projects/effect-archi/make_villa_on_time_constr_120220.jpg',
    700
  ),
  lotusHero: optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992496/projects/lotus-mall/lotus-mall_still_2.jpg',
    700
  ),
  lotusAtrium: optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992497/projects/lotus-mall/lotus-mall_still_3.jpg',
    700
  ),
  dubaiPool: optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992587/projects/collective-dubai-hills/collective-dubai-hills_still_1.jpg',
    700
  ),
  dubaiTwilight: optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992590/projects/collective-dubai-hills/collective-dubai-hills_still_4.jpg',
    700
  ),
  navoiNight: optimizeCloudinaryImage(
    'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992648/projects/navoi-plaza/navoi-plaza_still_3.jpg',
    700
  ),
  villaBefore: '/images/before_after/villa_before.webp',
  villaAfter: '/images/before_after/villa_after.webp',
};

const VID = {
  volga: optimizeCloudinaryVideo(
    'https://res.cloudinary.com/mvmsbgon/video/upload/v1789990140/projects/volga-park/volga_park_film_v1.mp4',
    640
  ),
  bunker: optimizeCloudinaryVideo(
    'https://res.cloudinary.com/mvmsbgon/video/upload/v1789983235/projects/bunker-37/bunker_37_film_v2.mp4',
    640
  ),
  insight9x16: optimizeCloudinaryVideo(
    'https://res.cloudinary.com/mvmsbgon/video/upload/v1789992406/projects/architecture-insight/architecture_insight_film_9x16.mp4',
    540
  ),
  lotus: optimizeCloudinaryVideo(
    'https://res.cloudinary.com/mvmsbgon/video/upload/v1789992494/projects/lotus-mall/lotus-mall_film.mp4',
    640
  ),
  dubai: optimizeCloudinaryVideo(
    'https://res.cloudinary.com/mvmsbgon/video/upload/v1789992584/projects/collective-dubai-hills/collective-dubai-hills_film.mp4',
    640
  ),
  navoi9x16: optimizeCloudinaryVideo(
    'https://res.cloudinary.com/mvmsbgon/video/upload/v1789992643/projects/navoi-plaza/navoi-plaza_film.mp4',
    540
  ),
};

const PRICING_GROUPS: PricingGroup[] = [
  {
    id: 'films-by-seconds',
    titleDark: 'Films',
    titleMuted: 'priced by length',
    subtitle: 'Cinematic 4K architectural motion priced transparently by duration.',
    leftColumnHeader: 'Length & Visual Preview',
    rightColumnHeader: 'Price*',
    rows: [
      {
        id: 'film-30s',
        label: '30 s',
        tag: '6–8 shots · 4K Teaser or Reel',
        info: '30-second 4K architectural teaser or 9:16 vertical reel. Includes 3D scene setup from your Genplan, camera motion, sound design, and color grading.',
        oldPrice: '$1,190',
        price: '$890',
        saveBadge: 'You save $300',
        visualKind: 'video',
        primaryImage: IMG.lotusHero,
        videoUrl: VID.lotus,
        badgeText: '00:30 · 4K',
      },
      {
        id: 'film-60s',
        label: '60 s',
        tag: '12–16 shots · Full Walkthrough',
        info: '60-second complete 4K architectural walkthrough covering exterior elevations, courtyard life, and key interiors (16:9 widescreen or 9:16 vertical).',
        oldPrice: '$1,790',
        price: '$1,490',
        saveBadge: 'You save $300',
        ourPick: true,
        visualKind: 'video',
        primaryImage: IMG.volgaSunny,
        videoUrl: VID.volga,
        badgeText: '01:00 · 4K',
      },
      {
        id: 'film-90-120s',
        label: '90 – 120 s',
        tag: '22+ shots · Masterplan Cinema',
        info: '90 to 120-second flagship masterplan cinema film with aerial drone sweeps, daylight-to-dusk transitions, and custom spatial soundscape.',
        oldPrice: '$3,590',
        price: '$2,490',
        saveBadge: 'You save $1,100',
        visualKind: 'video',
        primaryImage: IMG.dubaiTwilight,
        videoUrl: VID.dubai,
        badgeText: '02:00 · 4K',
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
    subtitle: 'Tailored production styles from vertical social reels to Genplan-to-3D growth films.',
    leftColumnHeader: 'Format & Visual Style',
    rightColumnHeader: 'Price*',
    rows: [
      {
        id: 'video-reel-9x16',
        label: '9:16 Social Reel',
        tag: 'Vertical 4K · Instagram & Pre-Sales',
        info: 'High-retention vertical 4K architectural film tailored for Instagram Reels, TikTok, and mobile-first developer pre-sales.',
        price: '$790',
        saveBadge: 'Credited if you upgrade',
        visualKind: '9x16-video',
        primaryImage: IMG.insightAerial,
        secondaryImage: IMG.navoiNight,
        videoUrl: VID.insight9x16,
        badgeText: '9:16 REEL',
      },
      {
        id: 'video-genplan-3d',
        label: 'Genplan → 3D Growth',
        tag: '2D Blueprint rising into 3D CGI',
        info: 'Signature Atlas Studio transition: your 2D blueprint or Genplan rises step-by-step into 3D structural massing and final photorealistic architecture.',
        oldPrice: '$1,690',
        price: '$1,290',
        saveBadge: 'You save $400',
        visualKind: 'split-plan-3d',
        primaryImage: IMG.insightPlan3D,
        secondaryImage: IMG.insightNight,
        badgeText: 'PLAN → 3D',
      },
      {
        id: 'video-property-tour',
        label: 'Walk-through Villa / House',
        tag: 'Exterior + Garden + Interior Tour',
        info: 'Complete eye-level and aerial walkthrough of a private residence or villa — exterior approach, garden terrace, pool caustics, and living spaces.',
        oldPrice: '$2,490',
        price: '$1,890',
        saveBadge: 'You save $600',
        ourPick: true,
        visualKind: 'video',
        primaryImage: IMG.villaAfter,
        videoUrl: VID.dubai,
        badgeText: 'VILLA TOUR',
      },
      {
        id: 'video-before-after',
        label: 'Before / After Transformation',
        tag: 'Existing Site → Proposed Architecture',
        info: 'Existing construction site, drone plate, or historic building dissolving seamlessly into your finished 3D architectural proposal.',
        oldPrice: '$2,190',
        price: '$1,590',
        saveBadge: 'You save $600',
        visualKind: 'split-before-after',
        primaryImage: IMG.villaBefore,
        secondaryImage: IMG.villaAfter,
        videoUrl: VID.bunker,
        badgeText: 'BEFORE / AFTER',
      },
      {
        id: 'video-full-tower',
        label: 'Full Tower / Quarter Launch',
        tag: 'Multi-Block Masterplan & Aerials',
        info: 'Comprehensive real estate launch film for multi-block residential quarters, commercial plazas, shopping malls, and 5-star resorts.',
        oldPrice: '$4,900',
        price: '$3,900',
        saveBadge: 'You save $1,000',
        visualKind: 'video',
        primaryImage: IMG.volgaAerial,
        videoUrl: VID.volga,
        badgeText: 'MASTERPLAN',
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
    subtitle: 'Complete pre-sales kits combining 4K still renders and motion films from one unified 3D build.',
    leftColumnHeader: 'Package & Deliverables',
    rightColumnHeader: 'Price*',
    rows: [
      {
        id: 'pkg-essential',
        label: 'Essential',
        tag: '5 × 4K Stills + 30s Vertical Reel',
        info: '5 photorealistic 4K renders + 30s vertical 9:16 film + complete 3D modeling from your 2D Genplan or DWG drawings.',
        oldPrice: '$1,990',
        price: '$1,490',
        saveBadge: 'You save $500',
        visualKind: 'fan-collage',
        primaryImage: IMG.volgaSunny,
        secondaryImage: IMG.insightAerial,
        tertiaryImage: IMG.volgaCourtyard,
        badgeText: '5 IMG + FILM',
      },
      {
        id: 'pkg-signature',
        label: 'Signature',
        tag: '10 × 4K Stills + 60s 4K Film + Reel',
        info: '10 photorealistic 4K exterior & interior renders + 60s 4K walkthrough film + 9:16 social cutdown + full 3D architectural build.',
        oldPrice: '$3,190',
        price: '$2,290',
        saveBadge: 'You save $900',
        ourPick: true,
        visualKind: 'fan-collage',
        primaryImage: IMG.dubaiTwilight,
        secondaryImage: IMG.lotusHero,
        tertiaryImage: IMG.volgaSunny,
        videoUrl: VID.dubai,
        badgeText: '10 IMG + 60S',
      },
      {
        id: 'pkg-flagship',
        label: 'Flagship',
        tag: '20 × 4K Stills + 120s Film + 2 Reels',
        info: '20 photorealistic 4K renders + 90–120s widescreen 4K cinema film + 2 vertical social reels for full off-plan project launches.',
        oldPrice: '$5,200',
        price: '$3,900',
        saveBadge: 'You save $1,300',
        visualKind: 'grid-4',
        primaryImage: IMG.volgaAerial,
        secondaryImage: IMG.lotusHero,
        tertiaryImage: IMG.dubaiPool,
        quaternaryImage: IMG.bunkerHero,
        videoUrl: VID.lotus,
        badgeText: '20 IMG + 120S',
      },
    ],
    footnote:
      'One unified 3D architectural model powers both your still renders and your motion films — keeping materials and lighting 100% consistent.',
  },
  {
    id: 'still-images',
    titleDark: 'Images',
    titleMuted: 'new views from your plans',
    subtitle: 'Photorealistic 4K exterior & interior renders built directly from your 2D drawings.',
    leftColumnHeader: 'Views & Gallery Preview',
    rightColumnHeader: 'Price*',
    rows: [
      {
        id: 'img-1',
        label: '1',
        tag: 'Single 4K Hero Render ($250 / view)',
        info: 'Single 4K photorealistic exterior or interior render built from your CAD plans or 3D model, including 2 revision rounds.',
        price: '$250',
        saveBadge: 'Credited if you upgrade',
        visualKind: 'single-still',
        primaryImage: IMG.volgaSunny,
        badgeText: '1 × 4K VIEW',
      },
      {
        id: 'img-10',
        label: '10',
        tag: '10 × 4K Renders ($85 / view)',
        info: '10 high-resolution 4K exterior & interior views across sunny daylight, golden hour, and nocturnal lighting.',
        oldPrice: '$1,100',
        price: '$850',
        saveBadge: 'You save $250',
        visualKind: 'fan-collage',
        primaryImage: IMG.volgaCourtyard,
        secondaryImage: IMG.volgaSunny,
        tertiaryImage: IMG.lotusAtrium,
        badgeText: '10 VIEWS',
      },
      {
        id: 'img-20',
        label: '20',
        tag: '20 × 4K Renders ($67 / view)',
        info: '20 photorealistic 4K views covering building elevations, courtyards, entrance lobbies, and interior apartment layouts.',
        oldPrice: '$1,900',
        price: '$1,350',
        saveBadge: 'You save $550',
        visualKind: 'fan-collage',
        primaryImage: IMG.lotusHero,
        secondaryImage: IMG.dubaiPool,
        tertiaryImage: IMG.bunkerHero,
        badgeText: '20 VIEWS',
      },
      {
        id: 'img-30',
        label: '30',
        tag: '30 × 4K Renders ($58 / view)',
        info: '30 comprehensive 4K marketing views for full residential developments, villas, or commercial masterplans.',
        oldPrice: '$2,500',
        price: '$1,750',
        saveBadge: 'You save $750',
        ourPick: true,
        visualKind: 'grid-4',
        primaryImage: IMG.dubaiTwilight,
        secondaryImage: IMG.volgaSunny,
        tertiaryImage: IMG.lotusHero,
        quaternaryImage: IMG.villaAfter,
        badgeText: '30 VIEWS',
      },
      {
        id: 'img-monthly',
        label: '12 a month',
        tag: 'Ongoing Developer Studio Partner',
        info: 'Ongoing studio subscription for active developers and architectural practices — 12 fresh 4K views every month, pause or cancel anytime.',
        price: '$1,490 / mo',
        saveBadge: 'You save $610 / mo',
        visualKind: 'split-plan-3d',
        primaryImage: IMG.insightConstr,
        secondaryImage: IMG.villaAfter,
        badgeText: '12 / MONTH',
      },
    ],
    footnote:
      'All still packages include 3D modeling from your 2D Genplan/DWG, physical material calibration, landscaping, and 2 revision rounds.',
  },
];

/**
 * Creative Inline Visual Thumbnail rendered inside every single pricing row
 * so each price immediately shows its matching video, 9:16 reel, before/after split, or fanned render stack.
 */
function RowVisualThumbnail({ row }: { row: RateRow }) {
  if (row.visualKind === 'video' && row.videoUrl) {
    return (
      <div className="relative w-24 h-16 sm:w-36 sm:h-24 rounded-xl overflow-hidden bg-[#101010] border border-black/10 shrink-0 shadow-sm group-hover:scale-[1.03] transition-transform duration-300">
        <video
          src={row.videoUrl}
          poster={row.primaryImage}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-[9px] font-mono text-white">
          <span className="inline-flex items-center gap-1">
            <Play className="w-2.5 h-2.5 fill-white" />
            <span>{row.badgeText}</span>
          </span>
        </div>
      </div>
    );
  }

  if (row.visualKind === '9x16-video' && row.videoUrl) {
    return (
      <div className="relative w-24 h-16 sm:w-36 sm:h-24 rounded-xl overflow-hidden bg-[#121212] border border-black/10 shrink-0 flex items-center justify-center shadow-sm group-hover:scale-[1.03] transition-transform duration-300">
        {/* Blurred ambient backdrop */}
        <img
          src={row.secondaryImage || row.primaryImage}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-35 scale-110"
        />
        {/* Crisp 9:16 vertical phone frame in center */}
        <div className="relative z-10 w-10 sm:w-12 h-full border-x border-white/30 bg-black overflow-hidden shadow-lg">
          <video
            src={row.videoUrl}
            poster={row.primaryImage}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
        <span className="absolute bottom-1.5 left-2 z-20 px-1.5 py-0.5 rounded bg-black/75 text-[8px] font-mono text-white uppercase tracking-wider">
          9:16
        </span>
      </div>
    );
  }

  if (row.visualKind === 'split-before-after' || row.visualKind === 'split-plan-3d') {
    return (
      <div className="relative w-24 h-16 sm:w-36 sm:h-24 rounded-xl overflow-hidden bg-[#101010] border border-black/10 shrink-0 grid grid-cols-2 shadow-sm group-hover:scale-[1.03] transition-transform duration-300">
        <div className="relative h-full overflow-hidden border-r border-white/70">
          <img
            src={row.primaryImage}
            alt="Before / Plan"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full overflow-hidden">
          <img
            src={row.secondaryImage || row.primaryImage}
            alt="After / 3D Render"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 py-1 px-2 bg-gradient-to-t from-black/75 to-transparent text-center">
          <span className="font-mono text-[8px] sm:text-[9px] text-white uppercase tracking-wider">
            {row.badgeText}
          </span>
        </div>
      </div>
    );
  }

  if (row.visualKind === 'fan-collage') {
    return (
      <div className="relative w-24 h-16 sm:w-36 sm:h-24 shrink-0 flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-300">
        {/* Back Left Card */}
        <div className="absolute left-1 sm:left-2 top-2 w-14 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden border border-white shadow-md -rotate-6 bg-zinc-200">
          <img
            src={row.secondaryImage || row.primaryImage}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Back Right Card */}
        <div className="absolute right-1 sm:right-2 top-2 w-14 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden border border-white shadow-md rotate-6 bg-zinc-200">
          <img
            src={row.tertiaryImage || row.primaryImage}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Center Hero Card */}
        <div className="relative z-10 w-16 h-13 sm:w-24 sm:h-20 rounded-lg overflow-hidden border-2 border-white shadow-lg bg-black">
          <img
            src={row.primaryImage}
            alt={row.label}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/65 py-0.5 text-center">
            <span className="font-mono text-[8px] text-white uppercase tracking-wider">
              {row.badgeText}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (row.visualKind === 'grid-4') {
    const imgs = [
      row.primaryImage,
      row.secondaryImage || row.primaryImage,
      row.tertiaryImage || row.primaryImage,
      row.quaternaryImage || row.primaryImage,
    ];
    return (
      <div className="relative w-24 h-16 sm:w-36 sm:h-24 rounded-xl overflow-hidden bg-[#101010] border border-black/10 shrink-0 grid grid-cols-2 grid-rows-2 gap-[1px] shadow-sm group-hover:scale-[1.03] transition-transform duration-300">
        {imgs.map((src, i) => (
          <img key={i} src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-1">
          <span className="font-mono text-[8px] sm:text-[9px] text-white uppercase tracking-wider">
            {row.badgeText}
          </span>
        </div>
      </div>
    );
  }

  // Default: single-still
  return (
    <div className="relative w-24 h-16 sm:w-36 sm:h-24 rounded-xl overflow-hidden bg-zinc-100 border border-black/10 shrink-0 shadow-sm group-hover:scale-[1.03] transition-transform duration-300">
      <img
        src={row.primaryImage}
        alt={row.label}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 py-1 px-2 bg-gradient-to-t from-black/70 to-transparent">
        <span className="font-mono text-[8px] sm:text-[9px] text-white uppercase tracking-wider">
          {row.badgeText}
        </span>
      </div>
    </div>
  );
}

export function PricingPage() {
  const [openInfoId, setOpenInfoId] = useState<string | null>(null);
  const [activeRowByGroup, setActiveRowByGroup] = useState<Record<string, string>>({});

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 select-none">
      {/* ========================================================= */}
      {/* 1) CREATIVE EDITORIAL HERO ON PURE WHITE CANVAS           */}
      {/* ========================================================= */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-10 pb-14 md:pb-20 border-b border-[#101010]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F2] border border-[#101010]/10 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#101010]" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#101010]">
                TRANSPARENT PRODUCTION RATES
              </span>
            </div>

            <h1 className="font-sans text-6xl sm:text-7xl md:text-[84px] font-normal tracking-[-0.045em] leading-[0.94]">
              <span className="block text-[#101010]">Our</span>
              <span className="block text-[#8C8C88]">prices</span>
            </h1>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <p className="font-sans text-xs sm:text-sm text-[#555552] leading-relaxed max-w-md">
              Clear rates from your 2D Genplan or 3D model. Every tier below includes its real visual format — choose by film seconds, ArchViz style, or number of 4K views.
            </p>

            {/* Mini Visual Reel Pill in Hero */}
            <Link
              to="/projects"
              className="group flex items-center gap-3 p-2 pr-4 rounded-full bg-[#F7F7F5] border border-[#101010]/10 hover:border-[#101010] transition-colors shrink-0"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-black relative">
                <img src={IMG.volgaSunny} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <span className="block font-sans text-xs font-medium text-[#101010]">
                  Explore 6 Works
                </span>
                <span className="block font-mono text-[10px] text-[#757572]">
                  4K Films &amp; Stills ↗
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2) INTERACTIVE VISUAL PRICING SECTIONS (PURE WHITE BG)    */}
      {/* ========================================================= */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-10 py-20 md:py-28 space-y-24 md:space-y-32">
        {PRICING_GROUPS.map((group) => {
          const defaultRow = group.rows.find((r) => r.ourPick) || group.rows[0];
          const activeRowId = activeRowByGroup[group.id] || defaultRow.id;
          const activeRow = group.rows.find((r) => r.id === activeRowId) || defaultRow;

          return (
            <div
              key={group.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-12 first:pt-0 border-t first:border-t-0 border-[#101010]/10"
            >
              {/* Left Sticky Column: Heading + Live Interactive Visual Showcase Card */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
                <div>
                  <h2 className="font-sans text-2xl sm:text-3xl md:text-[34px] font-normal tracking-[-0.035em] leading-[1.12]">
                    <span className="text-[#101010]">{group.titleDark} </span>
                    <span className="text-[#8C8C88]">{group.titleMuted}</span>
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#666662] mt-2.5 leading-relaxed max-w-sm">
                    {group.subtitle}
                  </p>
                </div>

                {/* Live Interactive Visual Preview Stage on Left (Updates as you hover rows!) */}
                <div className="hidden lg:block rounded-[22px] overflow-hidden border border-[#101010]/12 bg-[#101010] text-white shadow-[0_14px_36px_rgba(16,16,16,0.08)]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                    {activeRow.videoUrl ? (
                      <video
                        key={activeRow.videoUrl}
                        src={activeRow.videoUrl}
                        poster={activeRow.primaryImage}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    ) : activeRow.visualKind === 'split-before-after' ||
                      activeRow.visualKind === 'split-plan-3d' ? (
                      <div className="w-full h-full grid grid-cols-2">
                        <img
                          src={activeRow.primaryImage}
                          alt=""
                          className="w-full h-full object-cover border-r border-white/40"
                        />
                        <img
                          src={activeRow.secondaryImage || activeRow.primaryImage}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <img
                        key={activeRow.primaryImage}
                        src={activeRow.primaryImage}
                        alt={activeRow.label}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                    {/* Top Preview Pill */}
                    <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 font-mono text-[10px] uppercase tracking-wider text-white flex items-center gap-1.5">
                      <Layers className="w-3 h-3" />
                      <span>Previewing: {activeRow.label}</span>
                    </div>

                    {/* Bottom Live Caption */}
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-4">
                      <div>
                        <div className="font-sans text-lg font-medium text-white leading-tight">
                          {activeRow.tag}
                        </div>
                        <div className="font-mono text-[11px] text-white/70 mt-0.5">
                          {activeRow.price} {activeRow.saveBadge ? `· ${activeRow.saveBadge}` : ''}
                        </div>
                      </div>
                      <Link
                        to={`/contact?package=${encodeURIComponent(activeRow.id)}`}
                        className="px-3.5 py-1.5 rounded-full bg-white text-[#101010] font-sans text-xs font-medium hover:bg-neutral-200 transition-colors shrink-0"
                      >
                        Select ↗
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Stack of Visual Pricing Cards */}
              <div className="lg:col-span-7">
                {/* Column Headers */}
                <div className="flex items-center justify-between px-3 pb-3 text-xs font-sans text-[#787872]">
                  <span>{group.leftColumnHeader}</span>
                  <span>{group.rightColumnHeader}</span>
                </div>

                {/* Cards Stack */}
                <div className="space-y-4">
                  {group.rows.map((row) => {
                    const isInfoOpen = openInfoId === row.id;

                    return (
                      <div
                        key={row.id}
                        onMouseEnter={() =>
                          setActiveRowByGroup((prev) => ({ ...prev, [group.id]: row.id }))
                        }
                        style={
                          row.ourPick
                            ? {
                                background:
                                  'linear-gradient(125deg, #F8E5D6 0%, #FFFDFB 40%, #FAE6DF 74%, #EFE6F7 100%)',
                              }
                            : undefined
                        }
                        className={`group relative rounded-[22px] transition-all duration-200 ${
                          row.ourPick
                            ? 'border border-[#101010]/20 shadow-[0_12px_32px_rgba(16,16,16,0.07)] hover:shadow-[0_16px_40px_rgba(16,16,16,0.11)]'
                            : 'bg-[#F8F8F7] border border-[#101010]/[0.08] hover:bg-white hover:border-[#101010]/25 hover:shadow-[0_10px_28px_rgba(16,16,16,0.06)]'
                        }`}
                      >
                        {/* "Our pick" Floating Black Pill Badge */}
                        {row.ourPick && (
                          <span className="absolute -top-3 left-6 z-20 px-3 py-1 rounded-full bg-[#101010] text-white font-sans text-[11px] font-medium tracking-[-0.01em] shadow-sm">
                            Our pick
                          </span>
                        )}

                        {/* Main Card Row: [Visual Media Thumbnail] + [Title & Info] + [Price & Save Pill] */}
                        <div className="flex items-center justify-between gap-3.5 sm:gap-6 p-4 sm:px-6 sm:py-5 min-h-[108px] sm:min-h-[132px]">
                          {/* Left Side: Visual Thumbnail + Label + Info Icon */}
                          <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
                            <Link
                              to={`/contact?package=${encodeURIComponent(row.id)}`}
                              className="shrink-0"
                            >
                              <RowVisualThumbnail row={row} />
                            </Link>

                            <div className="min-w-0">
                              <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
                                <Link
                                  to={`/contact?package=${encodeURIComponent(row.id)}`}
                                  className="font-sans text-xl sm:text-3xl md:text-[34px] font-normal tracking-[-0.035em] text-[#101010] leading-tight hover:opacity-75 transition-opacity"
                                >
                                  {row.label}
                                </Link>

                                <button
                                  type="button"
                                  aria-label={`Details for ${row.label}`}
                                  onClick={() => setOpenInfoId(isInfoOpen ? null : row.id)}
                                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-black/10 shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#101010] hover:scale-105 transition-transform cursor-pointer shrink-0"
                                >
                                  <span className="font-serif italic text-xs sm:text-[13px] font-semibold leading-none">
                                    i
                                  </span>
                                </button>
                              </div>

                              <span className="block font-sans text-[11px] sm:text-xs text-[#6E6E6A] mt-1 truncate sm:whitespace-normal">
                                {row.tag}
                              </span>
                            </div>
                          </div>

                          {/* Right Side: Strikethrough Old Price + Big Price + Mint-Green Savings Pill */}
                          <Link
                            to={`/contact?package=${encodeURIComponent(row.id)}`}
                            className="text-right shrink-0 flex flex-col items-end pl-2"
                          >
                            {row.oldPrice && (
                              <span className="font-sans text-xs sm:text-sm text-[#8C8982] line-through decoration-[#8C8982]/80 tabular-nums leading-none mb-1">
                                {row.oldPrice}
                              </span>
                            )}

                            <span className="font-sans text-xl sm:text-3xl md:text-[38px] font-normal tracking-[-0.035em] text-[#101010] tabular-nums leading-none">
                              {row.price}
                            </span>

                            {row.saveBadge && (
                              <span className="mt-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#DFECE5] text-[#1E4E36] font-sans text-[10px] sm:text-xs font-medium tracking-[-0.01em] leading-none whitespace-nowrap">
                                {row.saveBadge}
                              </span>
                            )}
                          </Link>
                        </div>

                        {/* Expandable Info Drawer when "i" is clicked */}
                        {isInfoOpen && (
                          <div className="px-4 sm:px-6 pb-4 pt-0">
                            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans text-[#444440] leading-relaxed shadow-sm">
                              <span>{row.info}</span>
                              <Link
                                to={`/contact?package=${encodeURIComponent(row.id)}`}
                                className="inline-flex items-center gap-1 font-medium text-[#101010] underline shrink-0"
                              >
                                <span>Select this package</span>
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
                <div className="mt-5 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="font-sans text-xs text-[#6E6E6A] leading-relaxed max-w-md">
                    {group.footnote}
                  </p>

                  <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                    {group.sampleLink && (
                      <Link
                        to={group.sampleLink.href}
                        className="px-4 py-2 rounded-full bg-white border border-black/15 text-xs font-sans font-medium text-[#101010] hover:border-black transition-colors"
                      >
                        {group.sampleLink.label}
                      </Link>
                    )}
                    <Link
                      to={`/contact?package=${encodeURIComponent(group.id)}`}
                      className="px-4 py-2 rounded-full bg-[#101010] text-white text-xs font-sans font-medium hover:bg-black/80 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Start a project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ========================================================= */}
      {/* 3) FULL-WIDTH ARCHITECTURAL CASE STUDY PROOF BANNER       */}
      {/* ========================================================= */}
      <section className="relative w-full bg-[#0D0D0D] text-white overflow-hidden">
        <img
          src={IMG.dubaiTwilight}
          alt="Collective Dubai Hills Twilight Architecture"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/75 pointer-events-none" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-10 py-20 sm:py-28">
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
      {/* 4) HOW PAYMENT WORKS & WHEN YOU GET PREVIEWS (PURE WHITE) */}
      {/* ========================================================= */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-10 py-20 sm:py-28 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-[#101010]/10">
          <div className="lg:col-span-5">
            <h2 className="font-sans text-xl sm:text-2xl font-normal tracking-[-0.03em] leading-[1.2]">
              <span className="text-[#101010] block">How payment works</span>
              <span className="text-[#8C8C88] block">
                and when you get your previews
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="font-sans text-xs sm:text-sm text-[#555552] leading-relaxed max-w-md">
              Every project begins with a review of your Genplan or 3D files. You approve camera angles and 3D geometry first, and only pay the remaining balance when your final 4K visuals are ready.
            </p>
          </div>
        </div>

        {/* 3 Minimalist Milestone Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-12 pb-20">
          <div>
            <div className="font-sans text-5xl sm:text-6xl font-normal tracking-[-0.04em] text-[#101010] tabular-nums">
              50%
            </div>
            <div className="font-sans text-xs sm:text-sm text-[#6E6E6A] mt-2">
              To start 3D modeling &amp; scene setup
            </div>
          </div>

          <div>
            <div className="font-sans text-5xl sm:text-6xl font-normal tracking-[-0.04em] text-[#101010] tabular-nums">
              1–2 days
            </div>
            <div className="font-sans text-xs sm:text-sm text-[#6E6E6A] mt-2">
              First 3D camera &amp; massing previews
            </div>
          </div>

          <div>
            <div className="font-sans text-5xl sm:text-6xl font-normal tracking-[-0.04em] text-[#101010] tabular-nums">
              50%
            </div>
            <div className="font-sans text-xs sm:text-sm text-[#6E6E6A] mt-2">
              On final 4K visual approval
            </div>
          </div>
        </div>

        {/* Creative Bottom Invitation Card with Fanned Visual Stack */}
        <div
          style={{
            background:
              'linear-gradient(125deg, #F8E5D6 0%, #FFFDFB 42%, #EFE6F7 100%)',
          }}
          className="p-8 sm:p-12 rounded-[26px] border border-[#101010]/12 shadow-[0_12px_36px_rgba(16,16,16,0.06)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
        >
          <div className="space-y-4 max-w-md">
            <h3 className="font-sans text-3xl sm:text-4xl font-normal tracking-[-0.035em] leading-[1.08]">
              <span className="text-[#101010] block">Your project</span>
              <span className="text-[#101010] block">could be next</span>
              <span className="text-[#8C8C88] block">send your Genplan today</span>
            </h3>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-[#101010] text-white font-sans text-xs sm:text-sm font-medium hover:bg-black/80 transition-colors inline-flex items-center gap-2"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="px-5 py-3 rounded-full bg-white border border-black/10 text-[#101010] font-sans text-xs sm:text-sm font-medium hover:border-black/30 transition-colors"
              >
                See selected work
              </Link>
            </div>
          </div>

          {/* Fanned 3-Card Architectural Showcase on Right (Just like Reference Bottom Card!) */}
          <div className="relative h-36 sm:h-44 w-full max-w-[360px] flex items-center justify-center self-center lg:self-auto">
            <div className="w-28 sm:w-36 aspect-[4/3] rounded-xl overflow-hidden border-2 border-white shadow-lg -rotate-12 -mr-6 bg-black">
              <img src={IMG.volgaSunny} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 w-32 sm:w-40 aspect-[4/3] rounded-xl overflow-hidden border-2 border-white shadow-xl -translate-y-2 bg-black">
              <img src={IMG.dubaiTwilight} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="w-28 sm:w-36 aspect-[4/3] rounded-xl overflow-hidden border-2 border-white shadow-lg rotate-12 -ml-6 bg-black">
              <img src={IMG.lotusHero} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
