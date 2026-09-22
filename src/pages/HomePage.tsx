import { SolumHero } from '../components/solum/SolumHero';
import { SolumAboutStatement } from '../components/solum/SolumAboutStatement';
import { SolumRecentProjects } from '../components/solum/SolumRecentProjects';
import { SolumHowWeWork } from '../components/solum/SolumHowWeWork';
import { SolumTransformationProof } from '../components/solum/SolumTransformationProof';
import { SolumCallToAction } from '../components/solum/SolumCallToAction';

export function HomePage() {
  return (
    <main className="w-full bg-white text-[#101010]">
      {/* 01: Signature Commercial Hero */}
      <SolumHero />

      {/* 02: Studio Statement & What We Do (4 Core Disciplines) */}
      <SolumAboutStatement />

      {/* 03: Selected Projects Exhibition */}
      <SolumRecentProjects />

      {/* 04: Structured Architectural Evolution (How We Work - 4 Phases) */}
      <SolumHowWeWork />

      {/* 05: Architectural Transformation & Spatial Decomposition (Unified Before/After + Branching Vignettes) */}
      <SolumTransformationProof />

      {/* 06: Initiate Collaboration (Minimalist Call To Action) */}
      <SolumCallToAction />
    </main>
  );
}
