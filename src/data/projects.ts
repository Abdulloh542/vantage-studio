import type { Project } from '../types';
import { optimizeCloudinaryImage } from '../utils/media';

const RAW_PROJECTS: Project[] = [
  {
    slug: 'volga-park',
    title: 'Volga Park',
    subtitle: 'Urban Residential Quarter / 4K Architectural Visualization',
    location: 'Moscow, Russia',
    year: '2026',
    client: 'PIK Development Group',
    architect: 'Vantage Atelier & Masterplan Partners',
    category: 'Architectural Visualization',
    services: ['Architectural Visualization', 'Exterior Visualization', 'Photorealistic Enhancement', '3D Modeling'],
    tags: ['All', 'Architectural Visualization', 'Exterior Visualization', 'Photorealistic Enhancement', '3D Modeling', 'CGI', 'Exterior'],
    heroImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990146/projects/volga-park/Architectural_close_view_sunny_day_20260.jpg',
    heroVideo: 'https://res.cloudinary.com/mvmsbgon/video/upload/v1789990140/projects/volga-park/volga_park_film_v1.mp4',
    videoDuration: '58s 4K Film',
    clientMaterial: 'Architectural BIM blueprints, courtyard landscape schematics, and facade finish palettes',
    transformationPipeline: [
      'High-Fidelity Facade Geometry & Brickwork Detailing',
      'Sunlight & Atmospheric Twilight Calibration',
      'Pedestrian & Courtyard Human Activity Population',
      'Cinematic 4K Drone & Eye-Level Steadicam Production'
    ],
    summary: 'A dynamic multi-building residential quarter crafted around lush green courtyards, vibrant community recreational areas, and contemporary urban facades.',
    description: [
      'The developer commissioned our atelier to create a comprehensive, emotive visual marketing campaign for Volga Park—a flagship master-planned residential quarter.',
      'Starting with architectural schematics and masterplan footprints, our team constructed precise facade materiality, textured clinker brick accents, and modeled active pedestrian pathways.',
      'We populated the environment with realistic families, children at play, and elderly residents enjoying sun-drenched garden courtyards, concluding in a broadcast-ready 4K cinematic film that anchors pre-sales campaigns.'
    ],
    stats: [
      { label: 'Total Area', value: '185,000 m²' },
      { label: 'Buildings', value: '6 Residential Blocks' },
      { label: 'Courtyard Space', value: '35,000 m² Park' },
      { label: 'Outputs', value: '9 CGI Stills + 4K Walkthrough' }
    ],
    beforeAfter: {
      beforeImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990144/projects/volga-park/2.jpg',
      beforeLabel: 'MASTER FACADE COMPOSITION & MASSING',
      afterImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990146/projects/volga-park/Architectural_close_view_sunny_day_20260.jpg',
      afterLabel: 'ATMOSPHERIC SUNLIT ARCHITECTURAL CLOSE-UP',
      description: 'From massing layout to emotionally compelling sunlight, tactile materiality, and living human environments.'
    },
    process: [
      {
        step: '01',
        title: 'Masterplan & Architectural Elevation',
        description: 'Ingesting architectural blueprints, defining facade rhythm, fenestration proportions, and solar daylight angles.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990144/projects/volga-park/2.jpg'
      },
      {
        step: '02',
        title: 'Materiality & Facade Detailing',
        description: 'Texturing clinker brickwork, champagne mullions, and high-transmission glazing in bright summer lighting.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990146/projects/volga-park/Architectural_close_view_sunny_day_20260.jpg'
      },
      {
        step: '03',
        title: 'Courtyard Landscaping & Botanical Design',
        description: 'Populating dense birch and linden trees, flowering shrubbery, and multi-textured pedestrian pathways.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990149/projects/volga-park/Courtyard_facade_composition_tre__4K_202.jpg'
      },
      {
        step: '04',
        title: 'Human Scale & Community Life',
        description: 'Simulating active neighborhood life with children playing and families enjoying park avenues.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990147/projects/volga-park/Children_playing_in_courtyard_4K_2026080.jpg'
      },
      {
        step: '05',
        title: 'Cinematic 4K Walkthrough & Delivery',
        description: 'Directing steadycam sweeps, dynamic fly-throughs, and 8K exhibition stills for the international sales launch.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990222/projects/volga-park/aerial_overview_4k_202c48.jpg'
      }
    ],
    gallery: [
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990146/projects/volga-park/Architectural_close_view_sunny_day_20260.jpg',
        caption: 'Architectural close view: Sunlit brick facade and window rhythm on a bright summer afternoon',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990149/projects/volga-park/Courtyard_facade_composition_tre__4K_202.jpg',
        caption: 'Courtyard facade composition: Harmonious tree line framing the modern residential elevation',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990206/projects/volga-park/Courtyard_view_between_bu_b8ae74.jpg',
        caption: 'Courtyard perspective between residential towers: Deep urban canyon with lush foliage',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990208/projects/volga-park/Courtyard_view_between_bu_0cbc27.jpg',
        caption: 'Central promenade view: Pedestrian axis connecting inner gardens and playgrounds',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990147/projects/volga-park/Children_playing_in_courtyard_4K_2026080.jpg',
        caption: 'Vibrant courtyard community: Children playing in the protected inner park',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990155/projects/volga-park/Elderly_couple_talking_courtyard_4K_2026.jpg',
        caption: 'Serene neighborhood atmosphere: Elderly residents enjoying warm sunlight on courtyard benches',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990157/projects/volga-park/Family_entering_apartment_building_4K_20.jpg',
        caption: 'Residential entrance lobby: Family arriving at the high-ceiling glass entrance pavilion',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990144/projects/volga-park/2.jpg',
        caption: 'Master architectural elevation: Panoramic perspective of Volga Park blocks in natural daylight',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990222/projects/volga-park/aerial_overview_4k_202c48.jpg',
        caption: 'Cinematic aerial perspective: Comprehensive masterplan layout showcasing rooftop terraces and greenery',
        aspectRatio: 'landscape'
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
    category: 'Renovation & Construction',
    services: ['Renovation Visualization', 'Before / After Films', 'Construction Timelapse', 'Existing → Proposed Transformation'],
    tags: ['All', 'Renovation & Construction', 'Before / After Films', 'Construction Timelapse', 'Renovation Visualization', 'Existing → Proposed Transformation'],
    heroImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982051/projects/bunker-37/add_rooftop_on_first_image_202606191833.jpg',
    heroVideo: 'https://res.cloudinary.com/mvmsbgon/video/upload/v1789983235/projects/bunker-37/bunker_37_film_v2.mp4',
    videoDuration: '4K Architectural Film',
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
      'Through comparative before-and-after studies and a cinematic visual essay, we helped the developers secure municipal landmark approval and multi-million euro private endowment funding.'
    ],
    stats: [
      { label: 'Floor Area', value: '18,500 m²' },
      { label: 'Original Year', value: '1943 (Renovated 2025)' },
      { label: 'Approval Status', value: '100% Landmark Approved' },
      { label: 'Outputs', value: '9 Stills + 4K Cinema Film' }
    ],
    beforeAfter: {
      beforeImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982068/projects/bunker-37/create_a_detailed_exploded_axonometric_2.jpg',
      beforeLabel: 'HISTORIC SCHEMATIC & REINFORCED MASSING',
      afterImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982051/projects/bunker-37/add_rooftop_on_first_image_202606191833.jpg',
      afterLabel: 'PROPOSED CULTURAL ROOFTOP PAVILION',
      description: 'Adaptive reuse visualization: weathering concrete softened by floating glass lanterns and landscaped public courtyards.'
    },
    process: [
      {
        step: '01',
        title: 'Structural Axonometric Drawing',
        description: 'Deconstructing structural volumes, circulation cores, and glass interventions through precise 3D axonometrics.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982068/projects/bunker-37/create_a_detailed_exploded_axonometric_2.jpg'
      },
      {
        step: '02',
        title: 'Architectural Concept & Materiality',
        description: 'Modeling low-iron museum glazing in contrast with raw brutalist textures, calibrating light penetration into former defense bunkers.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982065/projects/bunker-37/Create_an_architectural_concept_board_20.jpg'
      },
      {
        step: '03',
        title: 'Atmospheric Daylight & Chiaroscuro',
        description: 'Balancing dramatic natural skylight shafts with moody concrete exhibition gallery halls.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982063/projects/bunker-37/ChatGPT_Image_Jun_20__2026__05_23_40_PM.png'
      }
    ],
    gallery: [
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982051/projects/bunker-37/add_rooftop_on_first_image_202606191833.jpg',
        caption: 'Master elevation: brutalist concrete bunker crowned with modern panoramic glass rooftop pavilion',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982050/projects/bunker-37/1-rasmga_2-rasmdagidek_cafeni_qo_yib_ber.jpg',
        caption: 'Public rooftop cafe and terrace integration overlooking the urban panorama',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982063/projects/bunker-37/ChatGPT_Image_Jun_20__2026__05_23_40_PM.png',
        caption: 'Exhibition hall featuring brutalist concrete preservation alongside warm architectural lighting',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982064/projects/bunker-37/ChatGPT_Image_Jun_20__2026__05_23_46_PM.png',
        caption: 'Atmospheric gallery corridors with monolithic concrete finishes and curated daylight',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982067/projects/bunker-37/Create_an_architectural_concept_board_20.jpg',
        caption: 'Materiality & moodboard: atmospheric evening lighting and structural concrete studies',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982068/projects/bunker-37/create_a_detailed_exploded_axonometric_2.jpg',
        caption: 'Exploded axonometric structural drawing detailing spatial layers and structural volumes',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982065/projects/bunker-37/Create_an_architectural_concept_board_20.jpg',
        caption: 'Architectural concept board: texture and spatial daylight study',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982783/projects/bunker-37/ChatGPT_Image_Jun_20__2026__03_30_05_PM.png',
        caption: 'Top-down architectural axonometric: apartment floorplan spatial configuration and illuminated private suite',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982781/projects/bunker-37/bunker_37_drone_aerial_context.jpg',
        caption: 'Aerial drone perspective: Bunker 37 situated in historic Hamburg neighborhood context',
        aspectRatio: 'landscape'
      }
    ],
    featured: true,
    featuredOrder: 2,
    nextProjectSlug: 'architecture-insight'
  },
  {
    slug: 'architecture-insight',
    title: 'Architecture Insight',
    subtitle: '9:16 Vertical Architectural Film / Villa Interior & Exterior',
    location: 'Zurich, Switzerland',
    year: '2026',
    client: 'Architecture Insight Atelier',
    architect: 'Studio Archi Inside & Vantage Partners',
    category: 'AI Architectural Films',
    services: ['Cinematic Architectural Films', 'AI Walkthroughs', 'Social Media Reels', 'Render-to-Video'],
    tags: ['All', 'AI Architectural Films', 'Cinematic Architectural Films', 'AI Walkthroughs', 'Render-to-Video', 'Social Media Reels', '9:16 Vertical'],
    heroImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990854/projects/effect-archi/A_photorealistic__highly__e6837b.jpg',
    heroVideo: 'https://res.cloudinary.com/mvmsbgon/video/upload/v1789992406/projects/architecture-insight/architecture_insight_film_9x16.mp4',
    videoDuration: '49s 9:16 Film',
    videoAspectRatio: '9:16',
    clientMaterial: 'Structural axonometric schematics, 3D floor plan geometry, and progressive construction render studies',
    transformationPipeline: [
      'Parametric Villa Massing & Floorplan BIM Modeling',
      'Daylight, Dusk & Midnight Chiaroscuro Calibration',
      '9:16 Vertical Frame Composition & Kinetic Steadicam',
      'High-End Material Texturing & Foliage Integration'
    ],
    summary: 'An avant-garde contemporary private villa harmonizing brutalist concrete, expansive glazed pavilions, and curated interior spatial sequencing.',
    description: [
      'Commissioned by Architecture Insight Atelier, this project challenged our studio to deliver a complete multi-environment visualization campaign tailored specifically for high-impact 9:16 vertical cinema and social-first spatial storytelling.',
      'Starting from architectural 3D floorplans and progressive construction stages, our team modeled the entire hillside estate—from sweeping aerial sunlit terraces to moody midnight chiaroscuro atmospheres.',
      'The resulting campaign features 12 photorealistic architectural plates and an immersive 9:16 vertical film engineered for next-generation mobile and digital gallery showcases.'
    ],
    stats: [
      { label: 'Living Area', value: '1,250 m²' },
      { label: 'Aspect Ratio', value: '9:16 Vertical Reel' },
      { label: 'Lighting Studies', value: 'Day, Dusk & Midnight' },
      { label: 'Outputs', value: '12 Stills + 4K Vertical Film' }
    ],
    beforeAfter: {
      beforeImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990863/projects/effect-archi/make_villa_on_time_constr_120220.jpg',
      beforeLabel: 'CONSTRUCTION PHASE & WIREFRAME',
      afterImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990851/projects/effect-archi/A_high-end_architectural__aadba3.jpg',
      afterLabel: 'FINAL ARCHITECTURAL NIGHT STILL',
      description: 'From on-site construction framework to luminous midnight architectural photorealism.'
    },
    process: [
      {
        step: '01',
        title: '3D Spatial Plan & Massing Study',
        description: 'Modeling cutaway floorplans, circulation flow, and building orientation relative to hillside terrain.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990861/projects/effect-archi/make_plan_3d_realistic_2K_fb6c40.jpg'
      },
      {
        step: '02',
        title: 'Construction & Structural Framework',
        description: 'Visualizing progressive construction phases, reinforced formwork, and earth retaining structures.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990863/projects/effect-archi/make_villa_on_time_constr_120220.jpg'
      },
      {
        step: '03',
        title: 'Eye-Level Perspective & Daylight',
        description: 'Calibrating low-angled morning illumination, swimming pool water caustics, and glass transparency.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990864/projects/effect-archi/Photorealistic_architectu_6136ec.jpg'
      },
      {
        step: '04',
        title: 'Dramatic Autumn Midnight Atmosphere',
        description: 'Simulating moonlit overcast skies, ambient architectural spotlights, and chiaroscuro foliage shadows.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990858/projects/effect-archi/make_dramatic_autumn_midn_be880a.jpg'
      },
      {
        step: '05',
        title: 'Vertical 9:16 Cinema Walkthrough',
        description: 'Directing cinematic vertical fly-throughs, smooth gimbal movements, and immersive soundscapes for social channels.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990854/projects/effect-archi/A_photorealistic__highly__e6837b.jpg'
      }
    ],
    gallery: [
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990854/projects/effect-archi/A_photorealistic__highly__e6837b.jpg',
        caption: 'High-altitude architectural aerial: Cantilevered modern villa situated within forested hillside topography',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990851/projects/effect-archi/A_high-end_architectural__aadba3.jpg',
        caption: 'Midnight illuminated elevation: Warm interior light spilling through double-height panoramic curtain walls',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990858/projects/effect-archi/make_dramatic_autumn_midn_be880a.jpg',
        caption: 'Dramatic autumn midnight study: Overcast moonlit skies accentuating monolithic concrete massing',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990864/projects/effect-archi/Photorealistic_architectu_6136ec.jpg',
        caption: 'Eye-level garden perspective: Stone pathways leading to the glass-encased entrance foyer',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990860/projects/effect-archi/make_image_from_eye-level_981555.jpg',
        caption: 'Terrace approach view: Integrated infinity pool and timber sundeck in crisp morning daylight',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990869/projects/effect-archi/rotate_camera_to_right_st_190dd2.jpg',
        caption: 'Side facade study: Linear cantilevered eaves and precision-engineered architectural louvers',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990861/projects/effect-archi/make_plan_3d_realistic_2K_fb6c40.jpg',
        caption: '3D Axonometric floorplan: Cutaway spatial layout displaying open-plan living and private suites',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990863/projects/effect-archi/make_villa_on_time_constr_120220.jpg',
        caption: 'Progressive construction render: Reinforced formwork and structural foundation progress',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990856/projects/effect-archi/Extract_and_upscale_from__c11a74.jpg',
        caption: 'Material detail close-up: Textured fair-faced concrete paired with black anodized aluminum frames',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990866/projects/effect-archi/remove_tree_above__and_ma_32e2ab.jpg',
        caption: 'Canopy clearance perspective: Unobstructed roofline framing surrounding Alpine mountain ridges',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990867/projects/effect-archi/remove_tree_on_middle_2K__25a109.jpg',
        caption: 'Courtyard transition: Indoor-outdoor continuity connecting living pavilion to wild pine landscaping',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990870/projects/effect-archi/Transform_the_uploaded_vi_200002.jpg',
        caption: 'Twilight atmosphere render: Ambient warm uplighting highlighting architectural geometry and reflection',
        aspectRatio: 'landscape'
      }
    ],
    featured: true,
    featuredOrder: 3,
    nextProjectSlug: 'lotus-mall'
  },
  {
    slug: 'lotus-mall',
    title: 'Lotus Mall & 5 Star Hotel',
    subtitle: 'Commercial Mixed-Use & Luxury Hospitality Landmark',
    location: 'Metropolitan Commercial Center',
    year: '2026',
    client: 'Lotus Development Holding',
    architect: 'Lotus Design Atelier & Vantage Partners',
    category: 'Real Estate Marketing',
    services: ['Property Presentation Films', 'Development Marketing', 'Location & Infrastructure Videos', 'Cinematic Architectural Films'],
    tags: ['All', 'Real Estate Marketing', 'Property Presentation Films', 'Development Marketing', 'Location & Infrastructure Videos', 'Commercial'],
    heroImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992495/projects/lotus-mall/lotus-mall_still_1.jpg',
    heroVideo: 'https://res.cloudinary.com/mvmsbgon/video/upload/v1789992494/projects/lotus-mall/lotus-mall_film.mp4',
    videoDuration: '87s Cinema Film',
    videoAspectRatio: '16:9',
    clientMaterial: 'Architectural blueprints, site masterplan schematics, and mall circulation geometry',
    transformationPipeline: [
      'BIM & Curved Glass Curtainwall Massing',
      'Atmospheric Pedestrian & Commercial Daylight Simulation',
      'Nocturnal Storefront Neon & Facade Uplighting Calibration',
      '4K Cinematic Drone & Steadicam Cinema Direction'
    ],
    summary: 'An iconic multi-level shopping destination and high-end 5-star hotel complex designed with luminous curved glass facades and landscaped pedestrian esplanades.',
    description: [
      'Commissioned to anchor a regional commercial transformation, Lotus Mall & 5 Star Hotel demanded a comprehensive spatial visualization campaign capturing both the kinetic energy of the retail gallerias and the serene elegance of the luxury hospitality tower.',
      'Our team engineered photorealistic lighting studies spanning bright daytime pedestrian flows through vibrant nocturnal illuminated storefronts, culminating in an 87-second cinematic marketing film.',
      'The campaign visuals played a decisive role in attracting international flagship retailers and institutional hospitality operators prior to groundbreaking.'
    ],
    stats: [
      { label: 'Gross Floor Area', value: '145,000 m²' },
      { label: 'Hotel Keys', value: '280 Luxury Suites' },
      { label: 'Retail Levels', value: '5-Tier Galleria' },
      { label: 'Deliverables', value: '4K Cinema Film + 5 Hi-Res Plates' }
    ],
    beforeAfter: {
      beforeImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992497/projects/lotus-mall/lotus-mall_still_3.jpg',
      beforeLabel: 'SCHEMATIC MASSING VIEW',
      afterImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992495/projects/lotus-mall/lotus-mall_still_1.jpg',
      afterLabel: 'FINAL CINEMATIC PRODUCTION',
      description: 'Side-by-side progression from geometric volumetric massing to photorealistic atmospheric lighting and retail promenade finishes.'
    },
    process: [
      {
        step: '01',
        title: 'Masterplan & Canopy Alignment',
        description: 'Modeling structural circulation flow between public retail plazas and private hotel drop-off zones.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992496/projects/lotus-mall/lotus-mall_still_2.jpg'
      },
      {
        step: '02',
        title: 'Curtainwall Reflection Physics',
        description: 'Simulating multi-bounce glass reflections, interior illumination warmth, and polished floor highlights.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992497/projects/lotus-mall/lotus-mall_still_3.jpg'
      },
      {
        step: '03',
        title: 'Cinematic Camera Sequencing',
        description: 'Directing continuous cinematic drone glides and eye-level pedestrian track shots across the complex.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992498/projects/lotus-mall/lotus-mall_still_4.jpg'
      }
    ],
    gallery: [
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992495/projects/lotus-mall/lotus-mall_still_1.jpg',
        caption: 'Panoramic perspective: Lotus Mall iconic organic curved glass facade and arrival boulevard',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992496/projects/lotus-mall/lotus-mall_still_2.jpg',
        caption: 'Aerial viewpoint overlooking the central atrium glass dome and landscaped perimeter',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992497/projects/lotus-mall/lotus-mall_still_3.jpg',
        caption: 'Mid-level galleria perspective featuring illuminated storefronts and public gathering spaces',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992498/projects/lotus-mall/lotus-mall_still_4.jpg',
        caption: 'Sunset atmospheric still highlighting warm interior illumination and perimeter water reflections',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992499/projects/lotus-mall/lotus-mall_still_5.jpg',
        caption: '5-Star Hotel luxury podium entrance with grand porte-cochère and bespoke architectural lighting',
        aspectRatio: 'landscape'
      }
    ],
    featured: true,
    featuredOrder: 4,
    nextProjectSlug: 'collective-dubai-hills'
  },
  {
    slug: 'collective-dubai-hills',
    title: 'Collective – Dubai Hills Estate',
    subtitle: 'Resort-Style Oasis Residences & Pool Pavilion',
    location: 'Dubai Hills Estate, UAE',
    year: '2026',
    client: 'Emaar Properties / Collective Living',
    architect: 'Dubai Hills Master Planning & Vantage Partners',
    category: 'Real Estate Marketing',
    services: ['Property Presentation Films', 'Development Marketing', 'Social Media Reels', 'Cinematic Architectural Films'],
    tags: ['All', 'Real Estate Marketing', 'Property Presentation Films', 'Development Marketing', 'Social Media Reels'],
    heroImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992587/projects/collective-dubai-hills/collective-dubai-hills_still_1.jpg',
    heroVideo: 'https://res.cloudinary.com/mvmsbgon/video/upload/v1789992584/projects/collective-dubai-hills/collective-dubai-hills_film.mp4',
    videoDuration: '140s Cinema Film',
    videoAspectRatio: '16:9',
    clientMaterial: 'Architectural landscape blueprints, pool engineering plans, and residential facade elevation drawings',
    transformationPipeline: [
      'Landscape & Water Caustics Physics Simulation',
      'Subtropical Foliage & Palm Vegetation Scattering',
      'Golden Hour & Twilight Chiaroscuro Calibration',
      '140-Second Master Walkthrough Direction'
    ],
    summary: 'An exclusive resort-style residential sanctuary centered around infinity swimming pools, lush palm terraces, and contemporary private cabanas.',
    description: [
      'Situated in the heart of Dubai Hills Estate, Collective was envisioned as a modern oasis marrying social communal living with world-class wellness amenities.',
      'Our visualization studio crafted an expansive 140-second architectural cinema walkthrough, charting the transitions from sun-drenched daytime poolside tranquility to atmospheric twilight cabana illumination.',
      'The campaign visuals anchored high-converting international off-plan investment showcases and global marketing rollouts.'
    ],
    stats: [
      { label: 'Amenity Deck', value: '8,500 m²' },
      { label: 'Lagoon Pool', value: '50m Olympic Length' },
      { label: 'Residences', value: '460 Modern Units' },
      { label: 'Film Length', value: '140s 4K Cinema' }
    ],
    beforeAfter: {
      beforeImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992589/projects/collective-dubai-hills/collective-dubai-hills_still_3.jpg',
      beforeLabel: 'PRELIMINARY DAYLIGHT POOL PLAN',
      afterImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992587/projects/collective-dubai-hills/collective-dubai-hills_still_1.jpg',
      afterLabel: 'FINAL RESORT PHOTOREALISM',
      description: 'Progression from basic poolside hardscape layout to dense subtropical botanical foliage and shimmering water caustics.'
    },
    process: [
      {
        step: '01',
        title: 'Oasis Landscape & Vegetation Layering',
        description: 'Populating indigenous desert and subtropical botanical species with organic wind physics.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992588/projects/collective-dubai-hills/collective-dubai-hills_still_2.jpg'
      },
      {
        step: '02',
        title: 'Pool Surface Wave & Water Refraction',
        description: 'Simulating true physical water light refraction, turquoise caustics, and subsurface illumination.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992589/projects/collective-dubai-hills/collective-dubai-hills_still_3.jpg'
      },
      {
        step: '03',
        title: 'Cinematic Twilight Color Grading',
        description: 'Balancing warm interior cabana fixtures with deep cobalt Arabian nightfall skies.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992590/projects/collective-dubai-hills/collective-dubai-hills_still_4.jpg'
      }
    ],
    gallery: [
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992587/projects/collective-dubai-hills/collective-dubai-hills_still_1.jpg',
        caption: 'Resort pool deck: Sun loungers, sunken seating lounges, and turquoise lagoon reflections',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992588/projects/collective-dubai-hills/collective-dubai-hills_still_2.jpg',
        caption: 'Architectural elevation overlooking landscaped courtyards and private residential balconies',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992589/projects/collective-dubai-hills/collective-dubai-hills_still_3.jpg',
        caption: 'Central clubhouse and social pavilion featuring shaded timber pergolas and water fountains',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992590/projects/collective-dubai-hills/collective-dubai-hills_still_4.jpg',
        caption: 'Twilight ambiance: Warm architectural spotlights illuminating the pool promenade and palms',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992590/projects/collective-dubai-hills/collective-dubai-hills_still_5.jpg',
        caption: 'Panoramic view: Collective Dubai Hills Estate nestled within the master-planned parkland',
        aspectRatio: 'landscape'
      }
    ],
    featured: true,
    featuredOrder: 5,
    nextProjectSlug: 'navoi-plaza'
  },
  {
    slug: 'navoi-plaza',
    title: 'Navoi Plaza',
    subtitle: '9:16 Vertical Architectural Film / Premium Urban Promenade',
    location: 'Navoi Avenue, Uzbekistan',
    year: '2026',
    client: 'Navoi Urban Development',
    architect: 'Navoi City Planning & Vantage Studio',
    category: 'AI Architectural Films',
    services: ['Cinematic Architectural Films', 'AI Walkthroughs', 'Social Media Reels', 'Render-to-Video'],
    tags: ['All', 'AI Architectural Films', 'Cinematic Architectural Films', 'AI Walkthroughs', 'Render-to-Video', 'Social Media Reels', '9:16 Vertical'],
    heroImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992645/projects/navoi-plaza/navoi-plaza_still_1.jpg',
    heroVideo: 'https://res.cloudinary.com/mvmsbgon/video/upload/v1789992643/projects/navoi-plaza/navoi-plaza_film.mp4',
    videoDuration: '83s 9:16 Reel',
    videoAspectRatio: '9:16',
    clientMaterial: 'Urban boulevard site cadastre, commercial retail facade blueprints, and pedestrian plaza drawings',
    transformationPipeline: [
      'Urban Boulevard & Promenade BIM Modeling',
      '9:16 Mobile Portrait Frame Composition',
      'Evening Architectural Uplighting & Pedestrian Dressing',
      '4K Vertical Cinema Master Video Production'
    ],
    summary: 'A contemporary mixed retail and commercial urban boulevard featuring dynamic architectural facades, illuminated water features, and expansive pedestrian esplanades.',
    description: [
      'Navoi Plaza introduces a landmark urban promenade blending modern architectural retail pavilions with landscaped public plazas along one of the region’s primary metropolitan avenues.',
      'Engineered specifically for high-impact 9:16 vertical cinema, this visualization campaign delivers an engaging first-person walking journey through vibrant storefronts, cascading fountains, and evening pedestrian avenues.',
      'The vertical film format maximized social media engagement, off-plan leasing signups, and municipal investor presentations.'
    ],
    stats: [
      { label: 'Boulevard Length', value: '450 Meters' },
      { label: 'Retail Pavilions', value: '64 Premium Stores' },
      { label: 'Format', value: '9:16 Cinema Reel' },
      { label: 'Outputs', value: '83s Vertical Film + Stills' }
    ],
    beforeAfter: {
      beforeImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992648/projects/navoi-plaza/navoi-plaza_still_3.jpg',
      beforeLabel: 'SCHEMATIC URBAN MASSING',
      afterImage: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992645/projects/navoi-plaza/navoi-plaza_still_1.jpg',
      afterLabel: 'FINAL 9:16 NIGHT CINEMA',
      description: 'Progression from raw boulevard massing geometry to vibrant evening promenade lighting and photoreal textures.'
    },
    process: [
      {
        step: '01',
        title: 'Plaza Massing & Retail Flow',
        description: 'Aligning pedestrian pathways, facade heights, and boulevard canopy structures.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992646/projects/navoi-plaza/navoi-plaza_still_2.jpg'
      },
      {
        step: '02',
        title: 'Illuminated Facade & Fountain Physics',
        description: 'Simulating dynamic linear LED facade patterns, reflections on polished stone, and ambient city glow.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992648/projects/navoi-plaza/navoi-plaza_still_3.jpg'
      },
      {
        step: '03',
        title: 'Vertical Gimbal Steadicam Flow',
        description: 'Directing smooth 9:16 mobile-optimized eye-level camera tracks creating an immersive pedestrian presence.',
        image: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992649/projects/navoi-plaza/navoi-plaza_still_4.jpg'
      }
    ],
    gallery: [
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992645/projects/navoi-plaza/navoi-plaza_still_1.jpg',
        caption: 'Nocturnal promenade view: Dynamic LED facade illumination and reflective pedestrian boulevard',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992646/projects/navoi-plaza/navoi-plaza_still_2.jpg',
        caption: 'Commercial storefront colonnade featuring high-end boutique display windows and warm interior glow',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992648/projects/navoi-plaza/navoi-plaza_still_3.jpg',
        caption: 'Central fountain plaza with cascading illuminated water features and urban seating terraces',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992649/projects/navoi-plaza/navoi-plaza_still_4.jpg',
        caption: 'Eye-level pedestrian perspective highlighting architectural canopies and tree-lined walkways',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://res.cloudinary.com/mvmsbgon/image/upload/v1789992651/projects/navoi-plaza/navoi-plaza_still_5.jpg',
        caption: 'Upper-level terrace dining pavilion overlooking the active Navoi Avenue boulevard',
        aspectRatio: 'portrait'
      }
    ],
    featured: true,
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
    category: 'Renovation & Construction',
    services: ['Renovation Visualization', 'Existing → Proposed Transformation', 'Before / After Films', 'Construction Timelapse'],
    tags: ['All', 'Renovation & Construction', 'Renovation Visualization', 'Existing → Proposed Transformation', 'Before / After Films', 'Construction Timelapse'],
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
    category: 'Architectural Visualization',
    services: ['Exterior Visualization', 'Interior Visualization', '3D Modeling', 'Photorealistic Enhancement'],
    tags: ['All', 'Architectural Visualization', 'Exterior Visualization', 'Interior Visualization', '3D Modeling', 'Photorealistic Enhancement'],
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
    nextProjectSlug: 'volga-park'
  }
];

export const PROJECTS: Project[] = RAW_PROJECTS.map((project) => ({
  ...project,
  heroImage: optimizeCloudinaryImage(project.heroImage, 1600),
  beforeAfter: project.beforeAfter ? {
    ...project.beforeAfter,
    beforeImage: optimizeCloudinaryImage(project.beforeAfter.beforeImage, 1400),
    afterImage: optimizeCloudinaryImage(project.beforeAfter.afterImage, 1400),
  } : undefined,
  process: project.process.map((step) => ({
    ...step,
    image: step.image ? optimizeCloudinaryImage(step.image, 1200) : undefined,
  })),
  gallery: project.gallery.map((item) => ({
    ...item,
    url: optimizeCloudinaryImage(item.url, 1600),
  })),
}));
