import type { FAQItem } from '../types';

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What files do you need to start a project?',
    answer: 'We can initiate production from whatever materials you have available. Typical inputs include 2D architectural drawings (CAD .dwg, PDF plans/elevations), 3D digital models (Revit, Rhino, SketchUp, ArchiCAD, 3ds Max, IFC), landscape specifications, and material finish boards. If you only possess 2 rough preliminary concept renders or napkin sketches, our atelier can reconstruct the geometry and lighting directly.',
    category: 'Onboarding & Inputs',
  },
  {
    id: 'faq-2',
    question: 'How long does a typical visualization or film take?',
    answer: 'A standard suite of 4–6 high-resolution architectural stills typically requires 2 to 3 weeks from kickoff to final color grading. For cinematic films and AI walkthroughs, our hybrid neural rendering pipeline delivers complete broadcast-ready edits in 3 to 4 weeks—cutting traditional CG studio lead times by up to 60% without compromising millimeter BIM precision.',
    category: 'Timelines & Turnaround',
  },
  {
    id: 'faq-3',
    question: 'Can you work from client renders or rough sketches?',
    answer: 'Yes. A cornerstone of our practice is our concept enhancement workflow: developers and architects frequently supply untextured clay renders, raw SketchUp viewports, or basic preliminary CGI. We rebuild physical daylight physics, layer procedural vegetation and human presence, and elevate the imagery into high-converting marketing collateral.',
    category: 'Workflows & Adaptation',
  },
  {
    id: 'faq-4',
    question: 'Can you create cinematic video from still images?',
    answer: 'Yes. Utilizing our proprietary image-to-video and render-to-video neural camera synthesis, we transform static 8K architectural renderings into fluid 4K cinematic camera sweeps, dusk-to-dawn lighting time-lapses, and atmospheric walkthroughs. This allows developers to obtain cinematic video assets without commissioning a costly full-motion CGI rebuild.',
    category: 'Cinematic Films & AI',
  },
  {
    id: 'faq-5',
    question: 'What 3D formats do you support?',
    answer: 'We natively ingest all major architectural software files: Autodesk Revit (.rvt), Rhino (.3dm), SketchUp (.skp), ArchiCAD (.pla/.pln), AutoCAD (.dwg), 3ds Max (.max), Blender (.blend), FBX, OBJ, and open IFC BIM schemas. Our technical directors sanitize and optimize the geometry in-house.',
    category: 'Technical Specifications',
  },
  {
    id: 'faq-6',
    question: 'Can you visualize renovations and adaptive reuse?',
    answer: 'Renovation and adaptive reuse are dedicated studio specializations. By combining on-site terrestrial laser scans or drone photogrammetry of existing structures with proposed architectural interventions, we produce side-by-side interactive before-and-after imagery showing municipal boards and buyers exactly how historical or distressed fabric will be revitalized.',
    category: 'Adaptive Reuse',
  },
  {
    id: 'faq-7',
    question: 'How many revisions are included in a standard commission?',
    answer: 'Every project includes two structured milestone revision rounds: Round 1 occurs at the Clay Geometry & Camera Proofing stage (confirming angles, focal lengths, and spatial composition); Round 2 takes place at the Color, Material & Atmosphere Proofing stage. Final delivery includes minor color grading and atmospheric micro-adjustments.',
    category: 'Revisions & Quality Assurance',
  },
  {
    id: 'faq-8',
    question: 'What is your typical delivery process and format?',
    answer: 'Final deliverables are distributed via secure high-speed studio vaults. Stills are delivered in uncompressed 16-bit TIFF, 8K WebP, and high-DPI print formats. Cinematic films are provided in ProRes 422 HQ 4K masters, optimized H.264 web encodes, and vertical 9:16 social formats with custom sound design and licensed music rights.',
    category: 'Deliverables & Handoff',
  },
];
