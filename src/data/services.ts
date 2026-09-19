import type { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'arch-vis',
    slug: 'architectural-visualization',
    number: '01',
    title: 'Architectural Visualization',
    shortDescription: 'Photorealistic exterior and interior imagery engineered for leading architecture studios and property developers.',
    heroHeadline: 'Make the architecture visible before it exists.',
    heroSubhead: 'We transform architectural blueprints, Revit models and material palettes into atmospheric, museum-grade imagery with uncompromising optical accuracy.',
    problem: 'Architecture that is difficult to understand is difficult to sell, approve, or fund. Traditional 3D renders often feel synthetic, flat, and detached from human emotion, failing to justify high-value investments.',
    solution: 'We treat every project as an editorial architectural photography commission. By mastering daylight physics, micro-surface imperfections, and cinematic framing, we create imagery that commands institutional respect.',
    deliverables: [
      {
        name: 'Exterior Twilight & Daytime CGI',
        description: 'Atmospheric hero viewpoints capturing facade materiality, seasonal daylighting, and landscape integration.'
      },
      {
        name: 'Luxury Interior Stills',
        description: 'Sensory interior spaces featuring bespoke furniture styling, caustic light reflections, and tactile materiality.'
      },
      {
        name: 'Aerial & Contextual Panoramas',
        description: 'Drone-matched perspectives demonstrating urban masterplan relationships, skyline positioning, and site geography.'
      },
      {
        name: 'Material & Craft Studies',
        description: 'Extreme close-up macro shots celebrating joinery, fluted stonework, custom glazing, and bespoke architectural hardware.'
      },
      {
        name: '360° Virtual Walkthroughs',
        description: 'High-resolution interactive panoramic environments for VIP client presentations and off-plan sales suites.'
      },
      {
        name: 'Fine Art Exhibition Prints',
        description: 'Up to 16K ultra-high-resolution files prepared for physical launch galleries, hoardings, and press kits.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'BIM & Material Audit',
        detail: 'Ingesting CAD / Revit / Rhino models, establishing camera horizons, and reviewing physical finish boards.'
      },
      {
        step: '02',
        title: 'Clay Composition Proofs',
        detail: 'Proposing 8–12 curated camera compositions in untextured monochrome to finalize narrative angles.'
      },
      {
        step: '03',
        title: 'Materiality & Illumination',
        detail: 'Applying physically based shaders (PBR) and calibrating exact geographic sun coordinates.'
      },
      {
        step: '04',
        title: 'Atmospheric Post-Production',
        detail: 'Integrating bespoke photography, botanical foliage, atmospheric weather, and subtle optical depth.'
      }
    ],
    faqs: [
      {
        q: 'What 3D file formats can you accept?',
        a: 'We work with all standard architectural software outputs, including Revit (.rvt), Rhino (.3dm), SketchUp (.skp), ArchiCAD, AutoCAD (.dwg), 3ds Max (.max), Blender, and IFC BIM files.'
      },
      {
        q: 'What is the typical turnaround time for a set of visuals?',
        a: 'Standard production timelines range from 2 to 3 weeks for an initial suite of 4–6 high-resolution stills, including two rounds of client review and color grading.'
      },
      {
        q: 'Can you match specific branded furniture and fixtures?',
        a: 'Yes. We model or source exact furniture pieces, light fittings, sanitaryware, and textile finishes specified in your interior design schedule.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85'
  },
  {
    id: 'ai-films',
    slug: 'ai-films',
    number: '02',
    title: 'AI Architectural Films',
    shortDescription: 'Cinematic films built from renders, models, and concepts using our proprietary AI-assisted motion pipeline.',
    heroHeadline: 'Architecture in motion, before the first foundation is poured.',
    heroSubhead: 'We fuse state-of-the-art camera simulation with AI motion synthesis to produce evocative architectural films in a fraction of traditional animation timelines.',
    problem: 'Full CGI video animation historically required months of render-farm compute and prohibitive seven-figure production budgets, putting film out of reach for agile launch campaigns.',
    solution: 'Our studio combines high-fidelity 3D cameras with proprietary AI motion synthesis models. This gives architects and developers broadcast-quality cinematic films with natural environmental dynamics (swaying trees, morning mist, shifting light) rapidly and affordably.',
    deliverables: [
      {
        name: 'Cinematic Launch Films (60s–120s)',
        description: 'Complete narrative films with cinematic pacing, original sound design, and custom orchestral scoring.'
      },
      {
        name: 'AI Image-to-Video Extensions',
        description: 'Breathtaking moving vignettes created from our approved architectural stills.'
      },
      {
        name: 'Drone FPV Simulation',
        description: 'Dynamic aerial fly-throughs moving seamlessly from high altitude down into individual penthouses.'
      },
      {
        name: 'Atmospheric Cinemagraphs',
        description: 'Subtle looping video moments designed for website heroes, digital banners, and presentation decks.'
      },
      {
        name: 'Social Media Cutdowns (9:16)',
        description: 'Vertical aspect ratio reels and stories formatted specifically for high engagement on Instagram, LinkedIn, and TikTok.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'Storyboarding & Pacing',
        detail: 'Defining the emotional trajectory, sequence lengths, and musical mood board.'
      },
      {
        step: '02',
        title: 'Keyframe Generation',
        detail: 'Establishing photorealistic hero keyframes in 3D that anchor the visual language.'
      },
      {
        step: '03',
        title: 'AI Motion Synthesis',
        detail: 'Generating temporal consistency, fluid camera sweeps, and micro-environmental dynamics.'
      },
      {
        step: '04',
        title: 'Editorial & Audio Master',
        detail: 'Color grading, cinematic film grain application, voiceover integration, and sound design.'
      }
    ],
    faqs: [
      {
        q: 'How does AI differ from traditional 3D animation?',
        a: 'Traditional animation renders every single frame from scratch in 3D software (often taking hours per frame). Our hybrid approach uses precise 3D anchor frames and generative motion models to interpolate and enhance organic elements, cutting production time by up to 60%.'
      },
      {
        q: 'Are the architectural details preserved accurately in AI films?',
        a: 'Yes. We enforce strict spatial geometry anchors so structural columns, ceiling heights, mullions, and materials remain 100% faithful to the architecture.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-person-in-an-art-gallery-41485-large.mp4'
  },
  {
    id: 'real-estate',
    slug: 'real-estate-marketing',
    number: '03',
    title: 'Real Estate Marketing',
    shortDescription: 'Commercial visual positioning and digital launch assets that drive pre-sales and investor velocity.',
    heroHeadline: 'Visual campaigns that turn architectural concepts into off-plan commitments.',
    heroSubhead: 'We partner with developers and sales agencies to craft cohesive visual suites that build prestige, command premium prices per square meter, and accelerate sales cycles.',
    problem: 'Property developments frequently suffer from fragmented visual collateral: renders from one vendor, branding from another, and disjointed marketing collateral that confuses high-net-worth buyers.',
    solution: 'We act as the single visual creative partner. From the initial investment teaser to the sales gallery interactive displays and social launch blitz, we deliver a unified world-class brand experience.',
    deliverables: [
      {
        name: 'Pre-Sales Marketing Suites',
        description: 'Curated visual assets tailored for private client brochures, investor prospectuses, and sales gallery touchscreens.'
      },
      {
        name: 'Development Hero Campaigns',
        description: 'Complete visual identity packages including signature CGI stills, lifestyle vignettes, and night views.'
      },
      {
        name: 'Floorplan & Unit Visualizers',
        description: 'Isometric cutaways and 3D floor plans that clearly communicate spatial proportions and light orientation.'
      },
      {
        name: 'Targeted Digital Ad Creatives',
        description: 'High-conversion visual formats optimized for digital acquisition and private brokerage networks.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'Commercial Positioning',
        detail: 'Analyzing the target demographic (ultra-prime residential, commercial office, or luxury hospitality) and competitive landscape.'
      },
      {
        step: '02',
        title: 'Visual Campaign Blueprint',
        detail: 'Mapping key deliverables to launch milestones: teasing, public unveiling, sales gallery opening, and final push.'
      },
      {
        step: '03',
        title: 'Asset Production & Staging',
        detail: 'Creating the complete library of interior, exterior, aerial, and lifestyle visuals.'
      },
      {
        step: '04',
        title: 'Sales Suite Deployment',
        detail: 'Delivering interactive files and print-ready proofs for seamless developer onboarding.'
      }
    ],
    faqs: [
      {
        q: 'Do you work directly with sales and marketing agencies?',
        a: 'Yes. We frequently collaborate with luxury real estate brokerages (such as Knight Frank, Savills, Sotheby’s) and developer in-house marketing teams to align on deliverables.'
      },
      {
        q: 'Can you help determine which views will sell units fastest?',
        a: 'Absolutely. Based on our portfolio of over $1B+ in visualized real estate, we advise on the most commercially impactful angles, lighting conditions, and spatial highlights.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85'
  },
  {
    id: 'renovation',
    slug: 'renovation',
    number: '04',
    title: 'Renovation & Transformation',
    shortDescription: 'Before/After comparisons, adaptive reuse visualizations, and historical restorations.',
    heroHeadline: 'Visualizing potential across heritage, adaptive reuse, and complex transformations.',
    heroSubhead: 'We bridge the gap between existing site realities and proposed architectural visions, helping stakeholders and planning authorities instantly see what could be.',
    problem: 'Adaptive reuse and renovation projects are notoriously difficult for planning boards, investors, and public stakeholders to conceptualize when looking at aging or dilapidated structures.',
    solution: 'We specialize in millimeter-accurate Before/After visualizations, 3D camera projections matched onto drone photography, and interactive digital sliders that demonstrate respect for historical fabric alongside contemporary interventions.',
    deliverables: [
      {
        name: 'Interactive Before / After Sliders',
        description: 'Web-ready interactive sliders and video wipes comparing current conditions with proposed interventions.'
      },
      {
        name: 'Planning & Landmark Visual Studies',
        description: 'Unbiased, rigorous visual assessments required for municipal heritage boards and urban design approvals.'
      },
      {
        name: 'Adaptive Reuse Commercial Studies',
        description: 'Visualizations demonstrating how industrial or heritage spaces can be converted into vibrant commercial hubs.'
      },
      {
        name: 'Construction Phasing Previews',
        description: 'Sequenced renders illustrating each phase of restoration and structural modernization.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'LiDAR & Site Photographic Survey',
        detail: 'Registering exact site lens parameters, focal lengths, camera heights, and geographic coordinates.'
      },
      {
        step: '02',
        title: '3D Camera Matching',
        detail: 'Calibrating the virtual camera to match survey photography down to fractions of a pixel.'
      },
      {
        step: '03',
        title: 'Demolition & Insertion Modeling',
        detail: 'Replacing designated elements with proposed architectural interventions and materials.'
      },
      {
        step: '04',
        title: 'Seamless Matte Blending',
        detail: 'Matching ambient daylight, weathering, cast shadows, and reflections for indistinguishable realism.'
      }
    ],
    faqs: [
      {
        q: 'Can you work with existing drone footage or site photography?',
        a: 'Yes. If you provide high-resolution RAW photography or drone video along with lens and GPS metadata, we can camera-match our 3D models directly into your footage.'
      },
      {
        q: 'Are your before/after visuals accepted by planning authorities?',
        a: 'Yes. We follow verifiable photomontage guidelines and accurate verifiable visual methods (AVVM) where required for statutory submissions.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85'
  }
];
