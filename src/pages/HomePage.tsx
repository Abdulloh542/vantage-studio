import { SolumHero } from '../components/solum/SolumHero';
import { SolumAboutStatement } from '../components/solum/SolumAboutStatement';
import { SolumRecentProjects } from '../components/solum/SolumRecentProjects';
import { SolumServices } from '../components/solum/SolumServices';
import { SolumHowWeWork } from '../components/solum/SolumHowWeWork';
import { SolumTransformationProof } from '../components/solum/SolumTransformationProof';
import { SolumCallToAction } from '../components/solum/SolumCallToAction';

export function HomePage() {
  return (
    <main className="w-full bg-white text-[#101010]">
      {/* 01: Signature Commercial Hero */}
      <SolumHero />

      {/* 02: Studio Statement & What We Do */}
      <SolumAboutStatement />

      {/* 03: Selected Projects Exhibition */}
      <SolumRecentProjects />

      {/* 04: What We Deliver (Sticky Scroll Stacking Cards) */}
      <SolumServices />

      {/* 05: Production Workflow (Genplan -> 3D -> Visualization -> 4K Film) */}
      <SolumHowWeWork />

      {/* 06: Architectural Transformation & Spatial Decomposition */}
      <SolumTransformationProof />

      {/* 07: Initiate Collaboration (Minimalist Call To Action) */}
      <SolumCallToAction />
    </main>
  );
}
