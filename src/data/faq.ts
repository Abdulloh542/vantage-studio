import type { FAQItem } from '../types';

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What files do you need to start a project?',
    answer: 'We accept Revit (.rvt), Rhino (.3dm), SketchUp (.skp), ArchiCAD, CAD .dwg, and PDF drawings. Even rough preliminary concept renders or napkin sketches are sufficient to begin.',
    category: 'Onboarding & Inputs',
  },
  {
    id: 'faq-2',
    question: 'How long does a typical visualization or film take?',
    answer: 'Standard 4–6 stills require 2 to 3 weeks. Cinematic films require 3 to 4 weeks—delivered up to 60% faster than traditional CGI studios via our neural rendering pipeline.',
    category: 'Timelines & Turnaround',
  },
  {
    id: 'faq-3',
    question: 'Can you work from client renders or rough sketches?',
    answer: 'Yes. We routinely rebuild lighting physics, surface materials, and landscape physics directly from untextured client clay models and preliminary sketches.',
    category: 'Workflows & Adaptation',
  },
  {
    id: 'faq-4',
    question: 'Can you create cinematic video from still images?',
    answer: 'Yes. Using neural camera synthesis, we transform static 8K renderings into fluid 4K cinematic camera sweeps, dusk-to-dawn lighting shifts, and walkthroughs.',
    category: 'Cinematic Films & AI',
  },
  {
    id: 'faq-5',
    question: 'How many revisions are included in a standard commission?',
    answer: 'Every project includes two structured milestone revision rounds: Round 1 at Geometry & Camera Proofing, and Round 2 at Material & Lighting Proofing.',
    category: 'Revisions & Quality Assurance',
  },
  {
    id: 'faq-6',
    question: 'What are your final delivery formats?',
    answer: 'Stills are delivered in uncompressed 16-bit TIFF and 8K WebP. Films are supplied in 4K ProRes 422 HQ masters and 9:16 vertical social suites with full music licenses.',
    category: 'Deliverables & Handoff',
  },
];
