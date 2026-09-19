import { SolumHero } from '../components/solum/SolumHero';
import { SolumRecentProjects } from '../components/solum/SolumRecentProjects';
import { SolumMediaBreak } from '../components/solum/SolumMediaBreak';
import { SolumServices } from '../components/solum/SolumServices';
import { SolumProcess } from '../components/solum/SolumProcess';
import { SolumTransformationProof } from '../components/solum/SolumTransformationProof';
import { SolumClientStories } from '../components/solum/SolumClientStories';
import { SolumFAQ } from '../components/solum/SolumFAQ';
import { SolumLatestArticles } from '../components/solum/SolumLatestArticles';

export function HomePage() {
  return (
    <main className="w-full bg-white text-[#101010]">
      {/* 01: Signature Opening Motion & Exhibition Hero */}
      <SolumHero />

      {/* 02: Selected Projects Asymmetric Exhibition */}
      <SolumRecentProjects />

      {/* 03: Media Break with Restrained Parallax */}
      <SolumMediaBreak />

      {/* 04: Pinned 400vh What We Do Scroll Sequence */}
      <SolumServices />

      {/* 05: Structured 4-Phase Delivery Methodology */}
      <SolumProcess />

      {/* 06: Transformation Proof (Relocated Technical Chamber with Before/After Slider) */}
      <SolumTransformationProof />

      {/* 07: Client Voices & Testimonial Rail */}
      <SolumClientStories />

      {/* 08: Operational FAQ Accordion */}
      <SolumFAQ />

      {/* 09: Latest Architectural Insights & Journal */}
      <SolumLatestArticles />
    </main>
  );
}
