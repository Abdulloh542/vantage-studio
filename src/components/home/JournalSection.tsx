import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../../data/journal';

export function JournalSection() {
  const featured = JOURNAL_ARTICLES.find((a) => a.featured) || JOURNAL_ARTICLES[0];
  const supporting = JOURNAL_ARTICLES.filter((a) => a.slug !== featured.slug);

  return (
    <section className="py-24 md:py-36 bg-[#F4F2EE] border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-black/10 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A880] block mb-3">
              09 / ARCHITECTURAL DISCOURSE
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#0B0B0A]">
              RESEARCH &amp; INSIGHTS
            </h2>
          </div>
          <Link
            to="/journal"
            className="group inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-black hover:text-[#C5A880] transition-colors"
          >
            <span>VIEW ALL DISCOURSE</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Layout: 1 Large Feature + 2 Supporting Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Featured Article (Col 7) */}
          <div className="lg:col-span-7 group">
            <Link to={`/journal/${featured.slug}`} className="block overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-black/10 mb-6">
                <img
                  src={featured.heroImage}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#0B0B0A]/85 backdrop-blur-md px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-[#FAF9F6]">
                  FEATURED DISCOURSE
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-black/50 mb-3 uppercase tracking-wider">
                <span className="text-[#C5A880] font-semibold">{featured.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-medium text-[#0B0B0A] group-hover:text-[#C5A880] transition-colors tracking-tight mb-3">
                {featured.title}
              </h3>
              <p className="text-black/70 text-sm md:text-base leading-relaxed mb-4">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#0B0B0A] group-hover:underline">
                READ ARTICLE <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Supporting Articles (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10 lg:pl-6 lg:border-l lg:border-black/10">
            {supporting.map((article) => (
              <article key={article.slug} className="group flex flex-col justify-between h-full border-b lg:border-b-0 pb-8 lg:pb-0 border-black/10">
                <Link to={`/journal/${article.slug}`} className="block">
                  <div className="relative aspect-[16/9] overflow-hidden bg-black/10 mb-4">
                    <img
                      src={article.heroImage}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-black/50 mb-2 uppercase tracking-wider">
                    <span className="text-[#C5A880] font-medium">{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4 className="font-display text-lg md:text-xl font-medium text-[#0B0B0A] group-hover:text-[#C5A880] transition-colors tracking-tight mb-2">
                    {article.title}
                  </h4>
                  <p className="text-black/60 text-xs md:text-sm line-clamp-2 leading-relaxed mb-3">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-black/80 group-hover:text-black">
                    EXPLORE <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
