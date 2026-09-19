import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ArrowRight, Share2 } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/journal';

export function JournalDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/journal" replace />;
  }

  const related = JOURNAL_ARTICLES.filter((a) => a.slug !== article.slug);

  return (
    <main className="w-full bg-[#FAF9F6] text-[#0B0B0A] pt-32 pb-24 md:pb-36 min-h-screen">
      <article className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO DISCOURSE</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mb-12">
          <div className="flex items-center gap-3 text-xs font-mono text-black/50 mb-4 uppercase tracking-wider">
            <span className="text-[#C5A880] font-semibold">{article.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#0B0B0A] leading-[1.05] mb-6">
            {article.title}
          </h1>

          <p className="font-serif italic text-xl md:text-2xl text-black/75 leading-relaxed">
            {article.subtitle}
          </p>
        </header>

        {/* Full Bleed Hero Image */}
        <div className="relative aspect-[21/9] md:aspect-[21/9] overflow-hidden bg-black/10 mb-16 border border-black/10">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Metadata Sidebar (Col 4) */}
          <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1">
            <div className="p-6 bg-[#F4F2EE] border border-black/10">
              <h4 className="font-mono text-xs uppercase tracking-widest text-black/50 mb-4">
                RESEARCH DISCIPLINE
              </h4>
              <p className="text-sm font-display text-[#0B0B0A] font-medium mb-1">
                {article.category}
              </p>
              <p className="text-xs text-black/60 font-sans leading-relaxed">
                Published under Vantage Studio’s Research &amp; Technology Fellowship.
              </p>
            </div>

            <div className="p-6 bg-[#F4F2EE] border border-black/10">
              <h4 className="font-mono text-xs uppercase tracking-widest text-black/50 mb-3">
                SHARE ESSAY
              </h4>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: article.title,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Article link copied to clipboard.');
                  }
                }}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#0B0B0A] hover:text-[#C5A880] transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>COPY ESSAY LINK</span>
              </button>
            </div>

            <div className="p-6 bg-[#0B0B0A] text-white border border-white/10">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#C5A880] mb-2">
                APPLY TO YOUR PROJECT
              </h4>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Want to incorporate these computational techniques into your upcoming real estate launch?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white hover:text-[#C5A880] transition-colors"
              >
                <span>BOOK BRIEFING CALL</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>

          {/* Main Content (Col 8) */}
          <div className="lg:col-span-8 order-1 lg:order-2 space-y-6 text-base md:text-lg text-black/80 font-sans leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="first-letter:text-5xl first-letter:font-display first-letter:font-semibold first-letter:mr-3 first-letter:float-left first-letter:text-[#0B0B0A]">
                {paragraph}
              </p>
            ))}

            <div className="my-10 p-8 bg-[#F4F2EE] border-l-2 border-[#C5A880]">
              <p className="font-serif italic text-xl md:text-2xl text-[#0B0B0A]">
                "The unbuilt environment demands an empathetic lens: light is not simply calculated lumens, but the emotional threshold between an architectural diagram and human desire."
              </p>
              <span className="block mt-4 font-mono text-xs uppercase tracking-wider text-black/50">
                — Vantage Computational Architecture Lab
              </span>
            </div>

            <p>
              Whether deploying high-throughput neural rendering nodes or framing high-resolution physical ray tracing passes, our studio ensures that every millimeter of spatial geometry honours the architect's intent while commanding the emotional investment of prospective buyers.
            </p>
          </div>
        </div>

        {/* Related Discourse */}
        {related.length > 0 && (
          <div className="mt-24 pt-16 border-t border-black/10">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A880] block mb-4">
              FURTHER PERSPECTIVES
            </span>
            <h3 className="font-display text-3xl font-normal text-[#0B0B0A] mb-8">
              Related Research &amp; Insights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.slice(0, 2).map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/journal/${rel.slug}`}
                  className="group bg-[#F4F2EE] border border-black/10 p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono text-[#C5A880] uppercase tracking-wider block mb-2">
                      {rel.category} • {rel.readTime}
                    </span>
                    <h4 className="font-display text-xl font-medium text-[#0B0B0A] group-hover:text-[#C5A880] transition-colors mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-black/60 font-sans line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-black/5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#0B0B0A]">
                    <span>READ ARTICLE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
