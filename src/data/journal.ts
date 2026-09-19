import type { JournalArticle } from '../types';

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: 'the-art-of-unbuilt-light-daylight-physics-in-archviz',
    title: 'The Art of Unbuilt Light: Calibrating Atmospheric Physics in Architectural CGI',
    subtitle: 'Why optical accuracy, humidity scatter, and imperfect material reflections make the difference between synthetic renders and persuasive spatial reality.',
    date: 'September 2026',
    readTime: '6 min read',
    category: 'CGI Craft',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    excerpt: 'Natural light in architectural photography is rarely sterile. Exploring how micro-surface scattering and real-world geographical solar alignment evoke visceral buyer emotion.',
    content: [
      'In high-end architectural visualization, the most pervasive flaw is often mathematical perfection. Real materials possess microscopic irregularities, dust coatings, moisture gradients, and subtle imperfections where joints meet.',
      'When directing computer-generated imagery for luxury developers, our studio models the physical atmosphere: the coastal haze of Sydney, the crisp low-angle winter sunlight of Frankfurt, or the warm evening luminescence of Mediterranean limestone.',
      'By treating 3D camera viewpoints as bespoke physical photography sessions rather than CAD software screenshots, we capture architectural presence that commands institutional respect.'
    ],
    featured: true,
  },
  {
    slug: 'generative-ai-in-real-estate-films-preserving-bim-precision',
    title: 'Generative AI in Real Estate Films: Speed Without Sacrificing Millimeter BIM Precision',
    subtitle: 'How a hybrid computational pipeline achieves 60% faster film turnarounds while anchoring structural reality to registered architectural drawings.',
    date: 'August 2026',
    readTime: '5 min read',
    category: 'AI Technology',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85',
    excerpt: 'The common industry fear regarding AI in visualization is hallucination and spatial distortion. Here is how our hybrid workflow locks down structural accuracy while unleashing cinematic motion.',
    content: [
      'The emergence of neural video diffusion models has disrupted traditional CGI rendering farms, yet raw generative models struggle with structural consistency and geometrical permanence.',
      'Our studio developed a dual-track production architecture: the primary spatial massing, column grids, window mullions, and ceiling heights remain strictly anchored to verified BIM models.',
      'Neural motion synthesis is then applied to the dynamic atmospheric layers: wind rustling through native foliage, natural cloud movement, transient vehicular light trails, and subtle human interaction. The result is fluid cinematic realism delivered in weeks rather than months.'
    ],
    featured: false,
  },
  {
    slug: 'maximizing-off-plan-pre-sales-visual-campaign-framework',
    title: 'Maximizing Off-Plan Pre-Sales: A Developer’s Visual Campaign Blueprint',
    subtitle: 'The strategic timing of hero CGI, cinematic reveal trailers, and interactive sales gallerias to achieve rapid off-plan absorption.',
    date: 'July 2026',
    readTime: '7 min read',
    category: 'Real Estate Strategy',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85',
    excerpt: 'Institutional property developers cannot wait for construction completion to prove value. Analyzing how curated visual sequences drive early capital commitments.',
    content: [
      'A successful real estate launch campaign is structured like a feature film rollout. It begins with enigmatic teaser imagery emphasizing materiality and vision, progresses to panoramic hero vistas for planning approvals, and culminates in emotional walkthrough films for high-net-worth buyers.',
      'Developers using cinematic visualization packages achieve up to 3.4x higher engagement rates on digital acquisition channels and significantly compress their pre-sales cycle.',
      'By providing prospective purchasers with sensory understanding before the first foundation is poured, developers minimize perceived risk and maximize price-per-square-meter premiums.'
    ],
    featured: false,
  },
];
