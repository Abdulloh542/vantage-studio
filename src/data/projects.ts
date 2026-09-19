import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    slug: 'riviera-residence',
    title: 'Riviera Residence',
    subtitle: 'Residential Development',
    location: 'Tashkent, Uzbekistan',
    year: '2025',
    client: 'Golden House Group',
    architect: 'Milan Design Atelier',
    category: 'Residential',
    services: ['Architectural Visualization', 'AI Architectural Film', 'Real Estate Marketing'],
    tags: ['All', 'CGI', 'Architecture', 'Real Estate', 'AI Film', 'Exterior'],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-at-dusk-40916-large.mp4',
    summary: 'A luxury multi-tiered residential development in Tashkent designed to introduce Mediterranean terraced living into a contemporary urban context.',
    description: [
      'Tasked with communicating the human scale and architectural sophistication of Riviera Residence before groundbreaking, our studio developed a comprehensive visual identity encompassing exterior twilight CGI, interior penthouses, and a cinematic marketing film.',
      'We translated raw Revit schematics and landscape planting schedules into an emotive narrative focusing on the interplay between natural limestone, bronze facade fins, and evening lighting.',
      'The marketing film, produced using our proprietary AI-enhanced cinematic pipeline, achieved a 240% pre-launch reservation target within 60 days of release.'
    ],
    stats: [
      { label: 'Total Area', value: '42,000 m²' },
      { label: 'Units', value: '148 Penthouses & Suites' },
      { label: 'GDV', value: '$165M' },
      { label: 'Deliverables', value: '18 CGI Stills + 90s Film' }
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1800&q=80',
      beforeLabel: 'SITE & CAD CONTOUR',
      afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
      afterLabel: 'FINAL DUSK CGI',
      description: 'Side-by-side comparison illustrating our transformation from initial survey topography and untextured geometry to an atmosphere-rich dusk visualization.'
    },
    process: [
      {
        step: '01',
        title: 'Source CAD & Material Curation',
        description: 'Ingesting 3D geometry from the architectural team, auditing site coordinates, and sampling physical Italian travertine and aged bronze cladding.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '02',
        title: '3D Environmental & Lighting Study',
        description: 'Building volumetric botanical foliage tailored to Tashkent microclimate and simulating precise solar angles for the summer solstice twilight.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '03',
        title: 'AI Enhancement & Micro-Details',
        description: 'Synthesizing realistic surface imperfections, dusk atmospheric moisture, and human movement dynamics to eliminate the sterile CG feel.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '04',
        title: 'Cinematic Camera Direction',
        description: 'Directing steadycam sweeps and drone ascents in virtual 3D space, timed to an orchestral score recorded specifically for the sales launch.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '05',
        title: 'Final Launch Delivery',
        description: 'Delivering 8K exhibition stills, social media cutdowns, interactive pre-sales touchscreens, and the full 90-second launch film.',
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
    subtitle: 'Brutalist Heritage Renovation & Art Pavilions',
    location: 'Berlin, Germany',
    year: '2025',
    client: 'KulturRaum Berlin GmbH',
    architect: 'Studio Chipperfield Partner',
    category: 'Heritage',
    services: ['Renovation & Transformation', 'AI Architectural Film', 'Exterior CGI'],
    tags: ['All', 'Renovation', 'Architecture', 'CGI', 'AI Film', 'Exterior'],
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-person-in-an-art-gallery-41485-large.mp4',
    summary: 'A monumental post-war monolithic concrete bunker reimagined into an international contemporary art foundation and rooftop pavilion.',
    description: [
      'Bunker 37 represented an extraordinary architectural challenge: honoring the somber weight of 2-meter thick reinforced concrete while visualizing light-filled glass insertions and public cultural galleries.',
      'Our team deployed historical archival scans and LiDAR point-clouds to construct an accurate 1:1 digital twin of the deteriorating structure.',
      'Through a series of comparative before-and-after studies and a 2-minute cinematic visual essay, we helped the foundation secure federal landmark approval and multi-million euro private endowment funding.'
    ],
    stats: [
      { label: 'Floor Area', value: '18,500 m²' },
      { label: 'Year Built', value: '1943 (Renovated 2025)' },
      { label: 'Status', value: 'Approved / In Construction' },
      { label: 'Outputs', value: '14 Stills + Heritage Film' }
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1800&q=80',
      beforeLabel: 'EXISTING MONOLITH',
      afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85',
      afterLabel: 'PROPOSED CULTURAL PAVILION',
      description: 'Transition revealing the adaptive reuse scheme: existing weathered concrete softened by floating glass lanterns and landscaped public courtyards.'
    },
    process: [
      {
        step: '01',
        title: 'Photogrammetry & Structural Audit',
        description: 'Extracting 45 million point cloud vertices from drone photogrammetry to map every fissure, patina mark, and spall in the historic concrete.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '02',
        title: 'Glass Insertion & Chiaroscuro Lighting',
        description: 'Modeling the optical properties of low-iron museum glazing in contrast with raw brutalist textures, calibrating light penetration into former defense bunkers.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '03',
        title: 'AI Historical Transition Sequences',
        description: 'Creating frame-by-frame generative transitions that show the concrete monolith disintegrating into the new cultural complex.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '04',
        title: 'Exhibition & Grant Delivery',
        description: 'Producing large-format fine-art photographic prints for the Berlin Senate architecture commission and museum board.',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
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
        caption: 'Rooftop pavilion glowing as a civic lantern over the Berlin skyline',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85',
        caption: 'Subterranean contemplation chamber with water reflection installation',
        aspectRatio: 'landscape'
      }
    ],
    featured: true,
    featuredOrder: 2,
    nextProjectSlug: 'marlow-on-mill'
  },
  {
    slug: 'marlow-on-mill',
    title: 'Marlow On Mill',
    subtitle: 'Suburban Luxury Residential & Landscape',
    location: 'Cape Town, South Africa',
    year: '2025',
    client: 'Bespoke Landholdings',
    architect: 'SAOTA Collaborative',
    category: 'Residential',
    services: ['Architectural Visualization', 'Interior CGI', 'Real Estate Marketing'],
    tags: ['All', 'CGI', 'Architecture', 'Real Estate', 'Exterior', 'Interior'],
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=85',
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
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85',
        caption: 'Open-plan living room with natural stone fireplace and cedar rafters',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
        caption: 'Evening approach showcasing subtle landscape lighting scheme',
        aspectRatio: 'landscape'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Geographic Sun Study',
        description: 'Accurately calibrating the mountain ridge shadow profile against time of day to determine the most flattering lighting scenarios.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '02',
        title: 'Botanical Biome Simulation',
        description: 'Digitally populating 14 distinct species of indigenous Cape fynbos flora with procedural wind turbulence for video frames.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    featured: true,
    featuredOrder: 3,
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
    tags: ['All', 'Interior', 'CGI', 'Architecture', 'AI Film'],
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
      },
      {
        url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85',
        caption: 'Monolithic Calacatta marble kitchen island with antique brass tapware',
        aspectRatio: 'portrait'
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
    featured: true,
    featuredOrder: 4,
    nextProjectSlug: 'freirodaer-weg'
  },
  {
    slug: 'freirodaer-weg',
    title: 'Freirodaer Weg',
    subtitle: 'Timber Pavilion & Forest Sanctuary',
    location: 'Leipzig, Germany',
    year: '2025',
    client: 'Freirodaer Stiftung',
    architect: 'Eckert & Klinke Architekten',
    category: 'Cultural',
    services: ['Architectural Visualization', 'Exterior CGI', 'AI Architectural Film'],
    tags: ['All', 'Architecture', 'CGI', 'Exterior', 'AI Film'],
    heroImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2400&q=85',
    summary: 'A minimalist mass-timber pavilion set within an ancient birch forest, celebrating tactile wood craftsmanship and peaceful forest acoustics.',
    description: [
      'Freirodaer Weg serves as a contemplative retreat and exhibition pavilion constructed entirely from sustainably harvested local spruce and charcoal-treated larch.',
      'Our imagery explored seasonal atmospheric variations: autumn mist, winter snowfall, and crisp spring dawn.',
      'The quiet restraint of the visuals mirrors the philosophy of MIR and Beauty & The Bit, letting the architecture breathe inside its natural biome.'
    ],
    stats: [
      { label: 'Enclosed Area', value: '1,400 m²' },
      { label: 'Timber Source', value: '100% Certified Black Forest Spruce' },
      { label: 'Award', value: 'German Architecture Visualization Shortlist' },
      { label: 'Deliverables', value: '10 Editorial Stills + 60s Ambient Film' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=85',
        caption: 'The pavilion emerging through morning birch forest fog',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85',
        caption: 'Detail of charred timber rainscreen and frameless glass corner',
        aspectRatio: 'portrait'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Micro-Botanical Scanning',
        description: 'Collecting high-density 3D bark and moss textures from the actual site in Saxony.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    featured: true,
    featuredOrder: 5,
    nextProjectSlug: 'cascades-at-vista'
  },
  {
    slug: 'cascades-at-vista',
    title: 'Cascades at Vista',
    subtitle: 'Biophilic Headquarters & Sky Atrium',
    location: 'Singapore',
    year: '2025',
    client: 'CapitaLand Urban Development',
    architect: 'WOHA Collaborative',
    category: 'Commercial',
    services: ['Architectural Visualization', 'AI Architectural Film', 'Real Estate Marketing'],
    tags: ['All', 'Commercial', 'Architecture', 'Interior', 'Real Estate', 'AI Film'],
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85',
    summary: 'A 38-storey commercial skyscraper featuring stacked sky gardens, cascading waterfalls, and naturally ventilated public breezeways.',
    description: [
      'In a competitive commercial leasing landscape, CapitaLand required visuals that demonstrated the tangible wellness and energy benefits of their biophilic design.',
      'Our team produced panoramic aerial shots showing the tower within the Singapore CBD skyline, coupled with immersive street-level arrival visuals.',
      'Over 75% of the anchor office tenancies were committed before structural topping-out.'
    ],
    stats: [
      { label: 'Tower Height', value: '190 m / 38 Floors' },
      { label: 'Commercial GFA', value: '64,000 m²' },
      { label: 'Green Plot Ratio', value: '450%' },
      { label: 'Pre-Lease Rate', value: '78% at Launch' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
        caption: 'Tower exterior showing stepped terraces with tropical landscaping',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Triple-height lobby with living green wall and filtered daylight canopy',
        aspectRatio: 'portrait'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Atmospheric Humidity Simulation',
        description: 'Simulating equatorial haze and sunlight diffusion through glass curtainwalls.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    featured: true,
    featuredOrder: 6,
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
      },
      {
        url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1600&q=85',
        caption: 'Chalet living room with central open fire and heavy timber trusses',
        aspectRatio: 'portrait'
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
    featuredOrder: 7,
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
      },
      {
        url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
        caption: 'Interior ballroom salon showing restored ceiling frescoes and chevron parquet',
        aspectRatio: 'portrait'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Archival Fresco Documentation',
        description: 'Digitally mapping 18th-century Austrian Baroque ceiling frescoes from high-resolution archival photogrammetry.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        step: '02',
        title: 'Micro-Gold Leaf Shading',
        description: 'Calibrating anisotropic metallic shaders to accurately replicate aged gold leaf leafing under chandelier illumination.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    featured: false,
    featuredOrder: 8,
    nextProjectSlug: 'riviera-residence'
  }
];
