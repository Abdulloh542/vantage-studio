import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    slug: 'riviera-residence',
    title: 'Riviera Residence',
    subtitle: 'Architectural Film / AI Visualization',
    location: 'Dushanbe, Tajikistan',
    year: '2025',
    client: 'Golden Horizon Developments',
    architect: 'Milan Design Atelier & Local Partners',
    category: 'Residential',
    services: ['Architectural Visualization', 'AI Film Production', 'Real Estate Marketing'],
    tags: ['All', 'CGI', 'Architecture', 'Real Estate', 'AI Film', 'Exterior', 'Residential'],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-at-dusk-40916-large.mp4',
    videoDuration: '90s 4K Film',
    clientMaterial: 'Architectural floor plans, Revit schematics and 2 early concept renders',
    transformationPipeline: [
      '3D BIM & Geometry Optimization',
      'Photorealistic Lighting & Travertine Texturing',
      'AI Generative Motion & Environmental Haze',
      'Cinematic Editing & Orchestral Master Score'
    ],
    summary: 'A signature multi-tiered residential development designed to introduce Mediterranean terraced living into Central Asia’s growing luxury property market.',
    description: [
      'The developer approached our atelier with just two preliminary concept renders and architectural CAD floor plans. They needed a complete visual marketing campaign to launch international pre-sales.',
      'From these raw inputs, our team engineered a high-fidelity 3D digital model, populated indigenous botanical landscaping, and calibrated precise summer twilight illumination.',
      'Using our proprietary AI-assisted motion pipeline, we produced a broadcast-quality 90-second marketing film in three weeks, achieving a 240% pre-launch reservation target within 60 days.'
    ],
    stats: [
      { label: 'Total Area', value: '42,000 m²' },
      { label: 'Units', value: '148 Luxury Residences' },
      { label: 'GDV', value: '$165M' },
      { label: 'Outputs', value: '18 CGI Stills + 90s Film' }
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1800&q=80',
      beforeLabel: 'CLIENT INPUT: CAD & SKETCH',
      afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
      afterLabel: 'OUR WORK: FINAL DUSK CGI',
      description: 'The core value argument: our studio took two early schematic drawings and transformed them into an emotional, photorealistic twilight marketing experience.'
    },
    process: [
      {
        step: '01',
        title: 'Input: 2 Renders + Architectural Plans',
        description: 'Ingesting basic 2D drawings and client concept renders, establishing accurate camera heights, and auditing masterplan site coordinates.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '02',
        title: '3D Visualization & Materiality',
        description: 'Rebuilding clean 3D geometry, sampling Italian travertine and aged bronze, and simulating exact twilight sun angles.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '03',
        title: 'AI Generative Enhancement',
        description: 'Injecting atmospheric moisture, foliage rustling, and subtle motion micro-details to eradicate artificial sterility.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '04',
        title: 'Cinematic AI Film Production',
        description: 'Generating steadycam sweeps, drone approaches, and penthouse walkthroughs timed to a custom musical composition.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '05',
        title: 'Final Launch Delivery',
        description: 'Exporting 8K presentation stills, 4K ProRes master films, and interactive touchscreens for the VIP sales gallery.',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
        caption: 'Cantilevered balcony terraces overlooking the central courtyard pool',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
        caption: 'Double-height living pavilion with floor-to-ceiling minimal glazing',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85',
        caption: 'Material study: Fluted travertine and brushed champagne anodized mullions',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=85',
        caption: 'Master bedroom suite opening directly onto a private garden terrace',
        aspectRatio: 'portrait'
      }
    ],
    featured: true,
    featuredOrder: 1,
    nextProjectSlug: 'bunker-37'
  },
  {
    slug: 'bunker-37',
    title: 'Bunker 37',
    subtitle: 'Renovation Visualization / Real Estate Film',
    location: 'Hamburg, Germany',
    year: '2025',
    client: 'Nordic Urban Redevelopment AG',
    architect: 'Studio Chipperfield Partner',
    category: 'Heritage',
    services: ['Renovation & Construction', 'AI Architectural Films', 'Exterior CGI'],
    tags: ['All', 'Renovation', 'Architecture', 'CGI', 'AI Film', 'Exterior', 'Heritage'],
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-person-in-an-art-gallery-41485-large.mp4',
    videoDuration: '120s Heritage Film',
    clientMaterial: 'Historical LiDAR point-cloud scans and municipal landmark conservation blueprints',
    transformationPipeline: [
      'Point Cloud Photogrammetry Ingestion',
      'Structural Glass Cantilever Insertion',
      'Atmospheric Chiaroscuro Daylight Calibration',
      'Historical Dissolve Video Sequences'
    ],
    summary: 'A monumental post-war concrete bunker transformed into an international contemporary art foundation, rooftop pavilion, and luxury lofts.',
    description: [
      'Bunker 37 represented an extraordinary preservation challenge: honoring the historic weight of 2-meter thick reinforced concrete while visualizing light-filled glass insertions and public cultural galleries.',
      'Deploying archival scans and LiDAR point-clouds, our studio built a 1:1 digital twin of the deteriorating structure.',
      'Through comparative before-and-after studies and a 2-minute cinematic visual essay, we helped the developers secure municipal landmark approval and multi-million euro private endowment funding.'
    ],
    stats: [
      { label: 'Floor Area', value: '18,500 m²' },
      { label: 'Original Year', value: '1943 (Renovated 2025)' },
      { label: 'Approval Status', value: '100% Landmark Approved' },
      { label: 'Outputs', value: '14 Stills + Heritage Film' }
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1800&q=80',
      beforeLabel: 'EXISTING CONCRETE BUNKER',
      afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85',
      afterLabel: 'PROPOSED CULTURAL PAVILION',
      description: 'Adaptive reuse visualization: weathering concrete softened by floating glass lanterns and landscaped public courtyards.'
    },
    process: [
      {
        step: '01',
        title: 'LiDAR Photogrammetry',
        description: 'Processing 45M point cloud vertices to map every structural fissure in the historic concrete.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '02',
        title: '3D Glass Insertion',
        description: 'Modeling low-iron museum glazing in contrast with raw brutalist textures, calibrating light penetration into former defense bunkers.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '03',
        title: 'AI Historical Dissolve Film',
        description: 'Creating frame-by-frame generative transitions that show the concrete monolith morphing into the new cultural complex.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
        caption: 'The main exhibition nave showing 12-meter high preserved concrete walls',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Rooftop pavilion glowing as a civic lantern over the Hamburg skyline',
        aspectRatio: 'portrait'
      }
    ],
    featured: true,
    featuredOrder: 2,
    nextProjectSlug: 'australia-residence'
  },
  {
    slug: 'australia-residence',
    title: 'Residential Development',
    subtitle: '3D Visualization / AI Walkthrough',
    location: 'Perth, Western Australia',
    year: '2025',
    client: 'Oceanic Land Holdings Pty Ltd',
    architect: 'Bespoke Coastal Studios',
    category: 'Residential',
    services: ['Architectural Visualization', 'AI Walkthrough Videos', 'Real Estate Marketing'],
    tags: ['All', 'CGI', 'Architecture', 'Real Estate', 'AI Film', 'Animation', 'Exterior', 'Residential'],
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=85',
    videoDuration: '60s AI Walkthrough',
    clientMaterial: 'Survey site boundary topography and initial landscape architect CAD concepts',
    transformationPipeline: [
      'Coastal Sand & Dune Topography 3D',
      'Native Australian Coastal Vegetation Modeling',
      'AI Drone Walkthrough Synthesis',
      'Social Media Cutdowns for Off-Plan Buyers'
    ],
    summary: 'A collection of bespoke oceanfront cliffside villas designed to capture panoramic Indian Ocean sunsets through cantilevered glass pavilions.',
    description: [
      'The developer needed to sell multi-million dollar residences off-plan while the site was still an undeveloped coastal sand ridge.',
      'Our studio generated full 3D terrain topography, simulated endemic Australian coastal flora, and choreographed an AI-assisted drone walkthrough moving seamlessly from the open ocean into private infinity terraces.',
      'All eight flagship residences were reserved within four months of the visual campaign launch.'
    ],
    stats: [
      { label: 'Residences', value: '8 Exclusive Cliff Villas' },
      { label: 'Site Area', value: '34,000 m²' },
      { label: 'Average Price', value: '$6.5M AUD' },
      { label: 'Off-Plan Sellout', value: '100% in 120 Days' }
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1800&q=80',
      beforeLabel: 'EMPTY COASTAL PLOT & WIREFRAME',
      afterImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=85',
      afterLabel: 'PROPOSED OCEANFRONT VILLA CGI',
      description: 'From an empty sand contour drawing to an ultra-luxury oceanfront living reality that accelerated buyer deposit commitments.'
    },
    process: [
      {
        step: '01',
        title: 'Geographic Sun & Wave Simulation',
        description: 'Calibrating the Western Australian golden hour solar trajectory and coastal atmospheric spray.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
        caption: 'Cantilevered infinity terrace blending seamlessly into the Indian Ocean',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85',
        caption: 'Living room with rammed-earth feature walls and cedar acoustic ceiling',
        aspectRatio: 'portrait'
      }
    ],
    featured: true,
    featuredOrder: 3,
    nextProjectSlug: 'berliner-strasse-69'
  },
  {
    slug: 'berliner-strasse-69',
    title: 'Berliner Straße 69',
    subtitle: 'Development Marketing Film & CGI',
    location: 'Leipzig, Germany',
    year: '2025',
    client: 'Saxonia Real Estate Fund',
    architect: 'Eckert & Klinke Architekten',
    category: 'Commercial',
    services: ['Real Estate Marketing', 'AI Architectural Films', 'Interior & Exterior CGI'],
    tags: ['All', 'Commercial', 'Architecture', 'CGI', 'AI Film', 'Real Estate', 'Interior'],
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85',
    videoDuration: '75s Commercial Reel',
    clientMaterial: '2D CAD elevations, structural column grid and preliminary interior schedule',
    transformationPipeline: [
      'CAD to High-Poly BIM Mesh Conversion',
      'PBR Specular Material Calibration',
      'AI Daylight Passage Simulation',
      'Marketing Teaser & Leasing Deck Production'
    ],
    summary: 'A 14-storey mixed-use office tower and urban public galleria featuring energy-positive glass facades and timber interior courtyards.',
    description: [
      'To attract institutional anchor corporate tenants prior to construction, Saxonia Real Estate required marketing visuals that communicated sustainability, employee wellness, and acoustic serenity.',
      'We constructed high-detail 3D representations of both the urban street frontage and the multi-level biophilic atrium.',
      'The marketing film generated over 50 qualified leasing inquiries within 30 days of public release.'
    ],
    stats: [
      { label: 'Tower GFA', value: '24,000 m²' },
      { label: 'Floors', value: '14 Storeys' },
      { label: 'Certification', value: 'DGNB Platinum Target' },
      { label: 'Pre-Leasing', value: '70% Committed' }
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80',
      beforeLabel: '3DS MAX VIEWPORT CAD',
      afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85',
      afterLabel: 'FINISHED TURNKEY VISUALIZATION',
      description: 'Side-by-side comparison showing raw wireframe structural columns transformed into a light-filled corporate headquarters.'
    },
    process: [
      {
        step: '01',
        title: 'BIM Ingestion & Daylight Physics',
        description: 'Simulating diffused European winter daylight filtering through triple-glazed acoustic curtainwalls.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Triple-height atrium lobby with integrated living plant walls and timber seating',
        aspectRatio: 'landscape'
      }
    ],
    featured: true,
    featuredOrder: 4,
    nextProjectSlug: 'marlow-on-mill'
  },
  {
    slug: 'marlow-on-mill',
    title: 'Marlow On Mill',
    subtitle: 'Suburban Terraced Luxury Residences',
    location: 'Cape Town, South Africa',
    year: '2025',
    client: 'Bespoke Landholdings',
    architect: 'SAOTA Collaborative',
    category: 'Residential',
    services: ['Architectural Visualization', 'Interior CGI', 'Real Estate Marketing'],
    tags: ['All', 'CGI', 'Architecture', 'Real Estate', 'Exterior', 'Interior', 'Residential'],
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=85',
    summary: 'A bespoke cluster of mountain-facing residences celebrating Table Mountain stone, timber pergolas, and native fynbos landscape architecture.',
    description: [
      'Nestled along the foothills of the Twelve Apostles, Marlow On Mill required imagery that communicated an organic relationship between structure and topography.',
      'We crafted exterior visuals set during the golden hour, balancing warm interior illumination with the dramatic shadows cast by the mountainside.',
      'The campaign imagery was featured across international luxury property publications and drove the sale of all residences in off-plan release.'
    ],
    stats: [
      { label: 'Number of Villas', value: '12 Exclusive Residences' },
      { label: 'Site Area', value: '28,000 m²' },
      { label: 'Average Price', value: '$4.2M' },
      { label: 'Time to 100% Sold', value: '4 Months' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
        caption: 'Infinity pool blending with the Atlantic ocean horizon',
        aspectRatio: 'landscape'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Geographic Sun Study',
        description: 'Accurately calibrating the mountain ridge shadow profile against time of day to determine the most flattering lighting scenarios.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    featured: false,
    featuredOrder: 5,
    nextProjectSlug: 'venetian-penthouse'
  },
  {
    slug: 'venetian-penthouse',
    title: 'Venetian Penthouse',
    subtitle: 'Ultra-Luxury Grand Canal Residence',
    location: 'Venice, Italy',
    year: '2024',
    client: 'Serenissima Private Wealth',
    architect: 'Atelier Matteo Thun',
    category: 'Residential',
    services: ['Interior CGI', 'Material & Lighting Studies', 'AI Architectural Film'],
    tags: ['All', 'Interior', 'CGI', 'Architecture', 'AI Film', 'Animation'],
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85',
    summary: 'A restored 16th-century Palazzo piano nobile interior combining fresco restoration with minimalist Italian modern furniture and terrazzo floors.',
    description: [
      'Visualizing Venetian daylight bouncing off canal water requires exceptional mastery of indirect illumination, caustic refraction, and micro-surface roughness.',
      'Our artists studied archival Venetian lime plaster (marmorino) and Murano blown glass to accurately portray the interplay of morning reflections on hand-plastered ceilings.',
      'The result is a set of evocative, museum-quality interior stills that read as fine-art photography rather than computer renderings.'
    ],
    stats: [
      { label: 'Interior Space', value: '720 m²' },
      { label: 'Ceiling Height', value: '5.8 m' },
      { label: 'Lighting Conditions', value: 'Morning Mist / Afternoon Sun / Dusk' },
      { label: 'Output Resolution', value: '12K Print Quality' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
        caption: 'Grand salon with restored timber beams and water reflection highlights',
        aspectRatio: 'landscape'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Caustic Water Reflections',
        description: 'Simulating complex wave diffraction from canal boats onto interior coffered ceilings.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    featured: false,
    featuredOrder: 6,
    nextProjectSlug: 'papes-residences'
  },
  {
    slug: 'papes-residences',
    title: 'Papes Residences',
    subtitle: '18th-Century Baroque Palace Restoration',
    location: 'Vienna, Austria',
    year: '2025',
    client: 'Habsburg Heritage Trust',
    architect: 'Atelier Baumschlager',
    category: 'Heritage',
    services: ['Renovation & Transformation', 'Interior CGI', 'AI Architectural Film'],
    tags: ['All', 'Renovation', 'Architecture', 'CGI', 'Interior', 'Exterior', 'AI Film', 'Animation'],
    heroImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=2400&q=85',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-person-in-an-art-gallery-41485-large.mp4',
    summary: 'Restoring an iconic 18th-century Austrian aristocratic palace into ultra-prime residences, balancing guilded heritage stuccowork with discreet contemporary living.',
    description: [
      'Papes Residences required visualizations that could convince strict Vienna landmark preservation authorities while inspiring international private buyers.',
      'We modeled restored parquet chevron flooring, intricate plaster cornices, and discreet geothermal radiant heating integration with microscopic optical fidelity.',
      'The campaign imagery was praised by the municipal heritage board and accelerated the full off-plan commitment of all 18 private palace wings.'
    ],
    stats: [
      { label: 'Palace GFA', value: '14,200 m²' },
      { label: 'Residences', value: '18 Private Wings' },
      { label: 'Valuation', value: '€120M' },
      { label: 'Planning Status', value: 'Landmark Approved' }
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1800&q=80',
      beforeLabel: 'PRE-RESTORATION SURVEY',
      afterImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1800&q=85',
      afterLabel: 'FINAL RESTORED FAÇADE',
      description: 'Side-by-side comparison revealing damaged neoclassical masonry contrasted with our restored lime-wash facade and evening lantern lighting.'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1600&q=85',
        caption: 'Restored grand courtyard facade at blue hour with gas lantern lighting',
        aspectRatio: 'landscape'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Archival Fresco Documentation',
        description: 'Digitally mapping 18th-century Austrian Baroque ceiling frescoes from high-resolution archival photogrammetry.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    featured: false,
    featuredOrder: 7,
    nextProjectSlug: 'park-seefeld'
  },
  {
    slug: 'park-seefeld',
    title: 'Park Seefeld',
    subtitle: 'Alpine Wellness Resort & Chalet Village',
    location: 'Tyrol, Austria',
    year: '2024',
    client: 'Alpen Hospitality Group',
    architect: 'Baumann & Partner',
    category: 'Hospitality',
    services: ['Architectural Visualization', 'Animation & Walkthroughs', 'Real Estate Marketing'],
    tags: ['All', 'Hospitality', 'CGI', 'Animation', 'Exterior'],
    heroImage: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=2400&q=85',
    summary: 'A year-round mountain retreat pairing traditional Tyrolean stone masonry with expansive panoramic glazing and thermal open-air pools.',
    description: [
      'Park Seefeld required winter visualization that captured the crisp warmth of heated timber interiors against snow-covered alpine peaks.',
      'We engineered custom procedural snow accumulation shaders that accurately nestled onto roof overhangs, pine needles, and stone ledges.',
      'The campaign imagery established an ultra-luxury hospitality brand identity 18 months prior to opening.'
    ],
    stats: [
      { label: 'Chalets & Suites', value: '45 Private Residences' },
      { label: 'Spa Area', value: '3,800 m² Thermal Spa' },
      { label: 'Altitude', value: '1,200 m Above Sea Level' },
      { label: 'Visuals', value: '16 Stills + Winter Cinematic' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1600&q=85',
        caption: 'Heated outdoor infinity pool steaming into sub-zero evening air',
        aspectRatio: 'landscape'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Snow & Frost Shader Engineering',
        description: 'Calibrating subsurface scattering to replicate fresh powder and ice formation.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    featured: false,
    featuredOrder: 8,
    nextProjectSlug: 'riviera-residence'
  }
];
