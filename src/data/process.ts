import type { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Brief & Discovery',
    subtitle: 'Aligning on project vision, commercial goals, and architectural intent.',
    description: 'We unpack your architectural drawings, BIM files, target demographic, and launch timetable. We define whether the visuals serve an architectural competition, municipal planning review, or international property pre-sales campaign.',
    deliverables: [
      'Comprehensive Project Scope Document',
      'Asset & BIM Audit Checklist',
      'Production Milestone Timeline'
    ],
    duration: '2–3 Days'
  },
  {
    number: '02',
    title: 'Visual Direction',
    subtitle: 'Establishing atmospheric mood boards, narrative pacing, and camera intent.',
    description: 'Before touching 3D coordinates, our creative directors curate an editorial visual language: lighting conditions (golden hour, misty dawn, twilight), seasonal foliage, and styling references inspired by architectural photography.',
    deliverables: [
      'Mood Board & Lighting Strategy',
      'Art Direction Proposal',
      'Initial Framing Schematics'
    ],
    duration: '3–5 Days'
  },
  {
    number: '03',
    title: '3D Geometry & Site Preparation',
    subtitle: 'Precision modeling, context building, and virtual camera placement.',
    description: 'We import Revit/Rhino/CAD files into our 3D pipeline, clean topology, and model the surrounding masterplan context, terrain contours, and exact camera elevations down to the millimeter.',
    deliverables: [
      'Monochrome Clay Proofs (8–12 Angles)',
      'Camera Selection Horizon Sheets',
      'Preliminary Composition Approvals'
    ],
    duration: '5–7 Days'
  },
  {
    number: '04',
    title: 'Materiality & Visualization',
    subtitle: 'Photometric sun calibration, physically based materials, and flora synthesis.',
    description: 'We apply high-fidelity PBR textures—matching your spec sheets for travertine, fluted glass, oiled walnut, or patinated bronze. We populate bespoke botanicals native to the site geography and calibrate natural light bounces.',
    deliverables: [
      'Color Draft Stills (First Preview)',
      'Material Audit Callouts',
      'Feedback Markup Round 01'
    ],
    duration: '4–6 Days'
  },
  {
    number: '05',
    title: 'AI Enhancement & Micro-Atmosphere',
    subtitle: 'Layering tactile surface nuances, natural motion, and human resonance.',
    description: 'Our proprietary AI-assisted enhancement tools infuse realistic weather moisture, air depth, surface weathering, and natural human micro-details that dissolve the artificial sterility typical of legacy computer graphics.',
    deliverables: [
      'Refined High-Res Drafts',
      'Atmospheric Variation Proofs',
      'Feedback Markup Round 02'
    ],
    duration: '3–4 Days'
  },
  {
    number: '06',
    title: 'Animation & Cinematic Film',
    subtitle: 'Virtual camera direction, dynamic weather synthesis, and soundtrack score.',
    description: 'For film commissions, we choreograph camera moves, generate fluid atmospheric dynamics (clouds drifting, foliage rustling, evening light dimming), and edit to a bespoke musical composition with foley sound design.',
    deliverables: [
      'Animatic & Video Workprints',
      'Soundtrack Sync & Voiceover Drafts',
      'Final Color Grade Lookbook'
    ],
    duration: '7–10 Days'
  },
  {
    number: '07',
    title: 'Final Delivery & Launch Support',
    subtitle: 'Master 8K/12K exports, print-ready files, and multi-platform packaging.',
    description: 'We deliver calibrated high-resolution imagery and video master files formatted for print hoardings, luxury brochures, digital ad units, 9:16 social reels, and interactive touchscreen displays.',
    deliverables: [
      '8K–12K TIFF/JPEG Final Exports',
      '4K ProRes / H.265 Master Film Files',
      'Web-Optimized AVIF/WebP Formats',
      'Social Cutdowns & Aspect Ratios'
    ],
    duration: '1–2 Days'
  }
];
