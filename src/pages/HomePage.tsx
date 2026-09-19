import { SolumHero } from '../components/solum/SolumHero';
import { SolumMediaBreak } from '../components/solum/SolumMediaBreak';
import { SolumRecentProjects } from '../components/solum/SolumRecentProjects';
import { SolumServices } from '../components/solum/SolumServices';
import { SolumProcess } from '../components/solum/SolumProcess';
import { SolumClientStories } from '../components/solum/SolumClientStories';
import { SolumFAQ } from '../components/solum/SolumFAQ';
import { SolumLatestArticles } from '../components/solum/SolumLatestArticles';

export function HomePage() {
  return (
    <main className="w-full bg-white text-[#101010]">
      {/* 01 & 02: OPENING & HERO MOTION */}
      <SolumHero />

      {/* 03: MEDIA BREAK with Restrained Parallax */}
      <SolumMediaBreak />

      {/* 04: RECENT PROJECTS Asymmetric Exhibition */}
      <SolumRecentProjects />

      {/* 05: SERVICES Deep Black Section */}
      <SolumServices />

      {/* 06: PROCESS Dark Continuation Methodology */}
      <SolumProcess />

      {/* 07: CLIENT STORIES White Horizontal Rail */}
      <SolumClientStories />

      {/* 08: FAQ Left Title & Right Numbered Accordion */}
      <SolumFAQ />

      {/* 09: LATEST ARTICLES Uneven 4-Column CMS Grid */}
      <SolumLatestArticles />
    </main>
  );
}
