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
        name: 'Exterior Visualization',
        description: 'Atmospheric hero viewpoints capturing facade materiality, seasonal daylighting, and landscape integration.'
      },
      {
        name: 'Interior Visualization',
        description: 'Sensory interior spaces featuring bespoke furniture styling, caustic light reflections, and tactile materiality.'
      },
      {
        name: '3D Modeling & CAD Ingestion',
        description: 'Precision geometry cleanup and structural modeling directly from Revit, Rhino, and AutoCAD.'
      },
      {
        name: 'Photorealistic Enhancement',
        description: 'Layering tactile material depth, micro-imperfections, and ambient atmosphere into computer graphics.'
      },
      {
        name: 'Aerial & Masterplan Panoramas',
        description: 'Drone-matched perspectives demonstrating urban masterplan relationships and skyline positioning.'
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
    solution: 'Our studio combines high-fidelity 3D cameras with proprietary AI motion synthesis models. This gives architects and developers broadcast-quality cinematic films with natural environmental dynamics rapidly and affordably.',
    deliverables: [
      {
        name: 'Cinematic Architectural Films',
        description: 'Complete narrative films with cinematic pacing, original sound design, and custom orchestral scoring.'
      },
      {
        name: 'AI Walkthroughs & FPV',
        description: 'Smooth virtual camera tours navigating seamlessly through spaces and private penthouse terraces.'
      },
      {
        name: 'Image-to-Video Synthesis',
        description: 'Breathtaking moving vignettes generated directly from approved 3D stills.'
      },
      {
        name: 'Render-to-Video Animation',
        description: 'Converting untextured or preliminary renders into fluid, high-resolution motion sequences.'
      },
      {
        name: 'Concept Films & Teasers',
        description: 'Atmospheric 15–30 second teasers designed for social media acquisition and investor teasers.'
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
    problem: 'Property developments frequently suffer from fragmented visual collateral: renders from one vendor, branding from another, and disjointed marketing collateral that confuses buyers.',
    solution: 'We act as the single visual creative partner. From the initial investment teaser to the sales gallery interactive displays and social launch blitz, we deliver a unified world-class brand experience.',
    deliverables: [
      {
        name: 'Property Presentation Films',
        description: 'Hero marketing films crafted specifically for private buyer presentations and launch galas.'
      },
      {
        name: 'Development Marketing Suites',
        description: 'Complete visual identity packages including signature CGI stills, lifestyle vignettes, and night views.'
      },
      {
        name: 'Location & Infrastructure Videos',
        description: 'Contextual animations highlighting nearby transport hubs, coastlines, parks, and cultural amenities.'
      },
      {
        name: 'Map & Masterplan Animations',
        description: 'Dynamic 3D aerial flyovers illustrating masterplan phasing and community connectivity.'
      },
      {
        name: 'Social Media Reels (9:16)',
        description: 'High-impact vertical video cuts optimized for Instagram, LinkedIn, and TikTok property campaigns.'
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
    title: 'Renovation & Construction',
    shortDescription: 'Before/After films, adaptive reuse visualizations, and construction timelapse simulations.',
    heroHeadline: 'Visualizing potential across heritage, adaptive reuse, and complex transformations.',
    heroSubhead: 'We bridge the gap between existing site realities and proposed architectural visions, helping stakeholders and planning authorities instantly see what could be.',
    problem: 'Adaptive reuse and renovation projects are notoriously difficult for planning boards, investors, and public stakeholders to conceptualize when looking at aging or dilapidated structures.',
    solution: 'We specialize in millimeter-accurate Before/After visualizations, 3D camera projections matched onto drone photography, and interactive digital sliders that demonstrate respect for historical fabric alongside contemporary interventions.',
    deliverables: [
      {
        name: 'Before / After Films & Sliders',
        description: 'Web-ready interactive sliders and video wipes comparing current conditions with proposed interventions.'
      },
      {
        name: 'Construction Timelapse Previews',
        description: 'Sequenced renders illustrating each phase of restoration and structural modernization.'
      },
      {
        name: 'Renovation Visualization',
        description: 'High-detail stills showing historic facades restored with modern glazing and lighting.'
      },
      {
        name: 'Existing → Proposed Transformation',
        description: 'Direct visual comparisons illustrating how outdated buildings are converted into prime commercial hubs.'
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
