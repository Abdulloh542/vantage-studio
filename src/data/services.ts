import type { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'arch-vis',
    slug: 'architectural-visualization',
    number: '01',
    title: 'Architectural Visualization',
    shortDescription: 'Photorealistic exterior and interior CGI engineered for leading architecture studios and property developers.',
    heroHeadline: 'Make the architecture visible before it exists.',
    heroSubhead: 'We transform architectural blueprints, Revit models and material palettes into atmospheric, museum-grade imagery with uncompromising optical accuracy.',
    problem: 'Architecture that is difficult to understand is difficult to sell, approve, or fund. Traditional 3D renders often feel synthetic, flat, and detached from human emotion, failing to justify high-value investments.',
    solution: 'We treat every project as an editorial architectural photography commission. By mastering daylight physics, micro-surface imperfections, and cinematic framing, we create imagery that commands institutional respect.',
    deliverables: [
      {
        name: 'Exterior CGI',
        description: 'Atmospheric hero viewpoints capturing facade materiality, seasonal daylighting, and landscape integration.'
      },
      {
        name: 'Interior CGI',
        description: 'Sensory interior spaces featuring bespoke furniture styling, caustic light reflections, and tactile materiality.'
      },
      {
        name: '3D Modeling & Scene Preparation',
        description: 'Precision geometry cleanup, optimization, and structural modeling directly from CAD and BIM.'
      },
      {
        name: 'Aerial & Masterplan Panoramas',
        description: 'Drone-matched perspectives demonstrating urban masterplan relationships and skyline positioning.'
      },
      {
        name: 'Fine Art Exhibition Prints (Up to 16K)',
        description: 'Ultra-high-resolution files prepared for physical launch galleries, hoardings, and press kits.'
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
    id: 'cinematic-films',
    slug: 'cinematic-films',
    number: '02',
    title: 'Cinematic Architectural Films',
    shortDescription: 'Feature-grade cinematic films, dynamic camera trajectories, and custom soundscapes bringing architecture to life.',
    heroHeadline: 'Architecture in motion, before the first foundation is poured.',
    heroSubhead: 'We fuse state-of-the-art camera simulation with AI motion synthesis to produce evocative architectural films with cinematic pacing and original sound design.',
    problem: 'Full CGI video animation historically required months of render-farm compute and prohibitive production budgets, putting film out of reach for fast-moving launch campaigns.',
    solution: 'Our studio combines high-fidelity 3D cameras with proprietary neural motion synthesis models. This gives architects and developers broadcast-quality cinematic films with natural environmental dynamics rapidly and affordably.',
    deliverables: [
      {
        name: 'Cinematic Architectural Films',
        description: 'Complete narrative films with cinematic pacing, original sound design, and custom orchestral scoring.'
      },
      {
        name: 'AI Walkthroughs & FPV Flythroughs',
        description: 'Smooth virtual camera tours navigating seamlessly through spatial sequences and private penthouse terraces.'
      },
      {
        name: 'Render-to-Video Animation',
        description: 'Converting untextured or preliminary renders into fluid, high-resolution motion sequences.'
      },
      {
        name: 'Concept Films & Investor Teasers',
        description: 'Atmospheric 30–60 second teasers designed for social media acquisition and investor presentations.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'Storyboarding & Pacing',
        detail: 'Defining the emotional trajectory, sequence lengths, camera motions, and musical mood board.'
      },
      {
        step: '02',
        title: 'Keyframe Generation',
        detail: 'Establishing photorealistic hero keyframes in 3D that anchor the visual language.'
      },
      {
        step: '03',
        title: 'Camera Trajectory Simulation',
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
        q: 'How long are your architectural films typically?',
        a: 'We produce standard 60–90 second hero launch films for sales galleries, complemented by 15–30 second social media cuts (16:9 and 9:16).'
      },
      {
        q: 'Do your films include music licensing and voiceover?',
        a: 'Yes. All films include bespoke foley sound design, licensed commercial music scores, and optional professional multilingual voiceover.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-person-in-an-art-gallery-41485-large.mp4'
  },
  {
    id: 'ai-visualization',
    slug: 'ai-visualization',
    number: '03',
    title: 'AI Visual Enhancement',
    shortDescription: 'Synthesizing micro-atmosphere, realistic daylight, and organic textures from preliminary client renders and drawings.',
    heroHeadline: 'From concept sketch to photorealism at exponential speed.',
    heroSubhead: 'We leverage custom generative neural pipelines anchored to architectural drawings to transform basic models into magazine-grade visuals without losing millimeter fidelity.',
    problem: 'Architects often possess preliminary 3D models or untextured renders that look draft-like, but lack the 6-week timeline or budget to rebuild from scratch.',
    solution: 'Our AI enhancement engine preserves geometry while generating realistic daylight diffusion, weather effects, organic vegetation, and human activity in days.',
    deliverables: [
      {
        name: 'Draft Render Enhancement',
        description: 'Upgrading basic SketchUp, Revit, or Enscape renders to photorealistic marketing quality.'
      },
      {
        name: 'Image-to-Video Synthesis',
        description: 'Breathing organic motion into still renders: wind in trees, water caustics, and passing cloud shadows.'
      },
      {
        name: 'Seasonal & Daylight Variations',
        description: 'Instantly producing dusk, golden hour, rainy, and winter atmosphere from a single base model.'
      },
      {
        name: 'Material & Textile Upscaling',
        description: 'Adding microscopic tactile depth, mortar joints, and fabric weave to smooth surfaces.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'Geometry & Depth Capture',
        detail: 'Extracting normal maps and depth buffers from your existing CAD model or preliminary renders.'
      },
      {
        step: '02',
        title: 'Prompt & Atmosphere Calibration',
        detail: 'Fine-tuning lighting conditions, geographic latitude, and material palette specifications.'
      },
      {
        step: '03',
        title: 'Neural Synthesis Pass',
        detail: 'Generating hyper-detailed textures, foliage, and atmospheric scattering.'
      },
      {
        step: '04',
        title: 'Architectural Rectification',
        detail: 'Manual retouching by trained architects to ensure structural elements remain 100% rectilinear.'
      }
    ],
    faqs: [
      {
        q: 'Does AI alter my design or dimensions?',
        a: 'No. We use architectural depth-masking and structural edge detection that locks down all building geometries, preventing distortion.'
      },
      {
        q: 'What is the minimum input you require for AI enhancement?',
        a: 'Even a simple untextured 3D screenshot or a 2D elevation drawing is enough to start.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1800&q=80'
  },
  {
    id: 'real-estate',
    slug: 'real-estate-marketing',
    number: '04',
    title: 'Real Estate Marketing',
    shortDescription: 'Commercial visual positioning and digital launch assets that drive pre-sales and investor velocity.',
    heroHeadline: 'Visual campaigns that turn architectural concepts into off-plan commitments.',
    heroSubhead: 'We partner with developers and sales agencies to craft cohesive visual suites that build prestige, command premium prices per square meter, and accelerate sales cycles.',
    problem: 'Property developments frequently suffer from fragmented visual collateral: renders from one vendor, branding from another, and disjointed marketing collateral that confuses buyers.',
    solution: 'We act as the single visual creative partner. From the initial investment teaser to the sales gallery interactive displays and social launch blitz, we deliver a unified world-class brand experience.',
    deliverables: [
      {
        name: 'Property Marketing Suites',
        description: 'Complete visual packages including signature CGI stills, lifestyle vignettes, and twilight views.'
      },
      {
        name: 'Social Media Property Content (9:16)',
        description: 'High-impact vertical video cuts optimized for Instagram, LinkedIn, and TikTok campaigns.'
      },
      {
        name: 'Location & Infrastructure Films',
        description: 'Contextual animations highlighting nearby transport hubs, coastlines, parks, and cultural amenities.'
      },
      {
        name: 'Masterplan & Phasing Animations',
        description: 'Dynamic 3D aerial flyovers illustrating masterplan development phasing and community connectivity.'
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
        a: 'Absolutely. Based on our portfolio of over $1.8B+ in visualized real estate, we advise on the most commercially impactful angles, lighting conditions, and spatial highlights.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85'
  },
  {
    id: 'renovation',
    slug: 'renovation',
    number: '05',
    title: 'Renovation Visualization',
    shortDescription: 'Before/After films, adaptive reuse visualizations, and heritage transformation simulations.',
    heroHeadline: 'Visualizing potential across heritage, adaptive reuse, and complex transformations.',
    heroSubhead: 'We bridge the gap between existing site realities and proposed architectural visions, helping stakeholders and planning authorities instantly see what could be.',
    problem: 'Adaptive reuse and renovation projects are notoriously difficult for planning boards, investors, and public stakeholders to conceptualize when looking at aging or dilapidated structures.',
    solution: 'We specialize in millimeter-accurate Before/After visualizations, 3D camera projections matched onto drone photography, and interactive digital sliders that demonstrate respect for historical fabric alongside contemporary interventions.',
    deliverables: [
      {
        name: 'Before / After Sliders & Films',
        description: 'Web-ready interactive sliders and video wipes comparing current conditions with proposed interventions.'
      },
      {
        name: 'Adaptive Reuse Stills',
        description: 'High-detail stills showing historic facades restored with modern glazing and lighting.'
      },
      {
        name: 'Existing → Proposed Transformations',
        description: 'Direct visual comparisons illustrating how outdated buildings are converted into prime commercial hubs.'
      },
      {
        name: 'Photomontage for Planning Approval',
        description: 'Verified accurate visual representations (AVVR) suitable for municipal regulatory submissions.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'Site Survey & Laser Scan Audit',
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
        a: 'Yes. We follow verifiable photomontage guidelines and accurate verifiable visual methods where required for statutory submissions.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1800&q=80'
  },
  {
    id: 'construction-films',
    slug: 'construction-films',
    number: '06',
    title: 'Construction Progress Films',
    shortDescription: 'Timelapse simulations, 4D phasing visualizations, and investor progress reports.',
    heroHeadline: 'Showcasing construction milestones with cinematic precision.',
    heroSubhead: 'We transform complex Gantt charts and engineering schedules into dynamic 4D visual stories, keeping stakeholders and future occupants engaged throughout the build.',
    problem: 'Lengthy multi-year construction timelines often create marketing vacuums where buyer momentum stalls and investors lose visual clarity on milestones.',
    solution: 'Our construction progress films combine drone photogrammetry with 4D schedule simulation, creating captivating periodic updates that sustain market anticipation.',
    deliverables: [
      {
        name: '4D Construction Phasing Films',
        description: 'Animated step-by-step sequences demonstrating excavation, superstructure, facade installation, and handover.'
      },
      {
        name: 'Drone-Matched Progress Updates',
        description: 'Overlaying future architectural phases seamlessly on top of monthly site drone surveys.'
      },
      {
        name: 'Investor Milestone Summaries',
        description: 'Quarterly executive video packages designed for institutional capital partners and board presentations.'
      },
      {
        name: 'Safety & Engineering Logistics',
        description: 'Visual representations of complex crane operations, site logistics, and structural installations.'
      }
    ],
    workflow: [
      {
        step: '01',
        title: 'Schedule & BIM Alignment',
        detail: 'Connecting BIM elements with construction timeline milestones (Primavera / MS Project).'
      },
      {
        step: '02',
        title: 'Phase Modeling',
        detail: 'Isolating structural stages: foundations, core rise, curtain wall, and interior fit-out.'
      },
      {
        step: '03',
        title: 'Dynamic Camera Sequencing',
        detail: 'Directing orbital drone-style camera trajectories that highlight key engineering achievements.'
      },
      {
        step: '04',
        title: 'Infographic & Metric Overlay',
        detail: 'Integrating milestone dates, cubic meters of concrete, and completion percentage graphics.'
      }
    ],
    faqs: [
      {
        q: 'Can you update the construction film as the actual build progresses?',
        a: 'Yes. We maintain live project files and incorporate updated drone photogrammetry every month or quarter.'
      },
      {
        q: 'Do you need full 4D BIM data, or can you work from standard drawings?',
        a: 'We can work with full 4D Synchro/Navisworks files or build the sequence manually from 2D construction milestones.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80'
  }
];
