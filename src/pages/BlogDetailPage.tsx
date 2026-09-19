import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/journal';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const article = useMemo(() => {
    return JOURNAL_ARTICLES.find((a) => a.slug === slug);
  }, [slug]);

  const currentIndex = useMemo(() => {
    return JOURNAL_ARTICLES.findIndex((a) => a.slug === slug);
  }, [slug]);

  const prevArticle = useMemo(() => {
    if (currentIndex <= 0) return JOURNAL_ARTICLES[JOURNAL_ARTICLES.length - 1];
    return JOURNAL_ARTICLES[currentIndex - 1];
  }, [currentIndex]);

  const nextArticle = useMemo(() => {
    if (currentIndex < 0 || currentIndex >= JOURNAL_ARTICLES.length - 1) return JOURNAL_ARTICLES[0];
    return JOURNAL_ARTICLES[currentIndex + 1];
  }, [currentIndex]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36 pb-24 md:pb-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Back Link & Category */}
        <div className="flex items-center justify-between pb-8 border-b border-[#101010]/12 font-mono text-xs text-[#757575] uppercase tracking-wider">
          <Link
            to="/blog"
            className="flex items-center gap-2 hover:text-[#101010] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>INSIGHTS ARCHIVE</span>
          </Link>
          <div className="flex items-center gap-2 text-[#101010]">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span>{article.category}</span>
          </div>
        </div>

        {/* Large Title & Metadata */}
        <div className="py-12 md:py-16 max-w-4xl">
          <div className="flex items-center gap-4 font-mono text-xs text-[#757575] uppercase mb-4">
            <span>{article.date}</span>
            <span>&bull;</span>
            <span>{article.readTime}</span>
            <span>&bull;</span>
            <span>BY ATELIER RESEARCH DESK</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.05em] text-[#101010] uppercase leading-[1.02] mb-6">
            {article.title}
          </h1>

          <p className="font-sans text-lg sm:text-xl text-[#757575] font-light leading-relaxed">
            {article.subtitle}
          </p>
        </div>
      </div>

      {/* Full-Width Lead Image Break */}
      <div className="w-full h-[50vh] sm:h-[65vh] lg:h-[75vh] overflow-hidden bg-zinc-900 border-t border-b border-[#101010]/12 my-8">
        <img
          src={article.heroImage}
          alt={article.title}
          loading="eager"
          className="w-full h-full object-cover filter brightness-95"
        />
      </div>

      {/* 680–760px Readable Content Column */}
      <div className="max-w-[740px] mx-auto px-6 py-12 md:py-16">
        <div className="space-y-8 font-sans text-base sm:text-lg text-[#101010]/85 font-light leading-relaxed">
          <p className="text-xl sm:text-2xl font-normal leading-snug text-[#101010] border-l-2 border-[#101010] pl-6 py-1">
            {article.excerpt}
          </p>

          {article.content.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Two-Column Image Spread Break */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12 pt-8 border-t border-[#101010]/12">
          <div className="aspect-[4/3] bg-zinc-100 border border-[#101010]/12 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
              alt="Schematic Drawing Ingestion"
              loading="lazy"
              className="w-full h-full object-cover filter grayscale"
            />
          </div>
          <div className="aspect-[4/3] bg-zinc-100 border border-[#101010]/12 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
              alt="Structural Lighting Simulation"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Adjacent Article Navigation */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 border-t border-[#101010]/12 bg-[#F6F6F2]">
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#101010]/12">
          {prevArticle && (
            <Link
              to={`/blog/${prevArticle.slug}`}
              className="py-12 pr-6 flex flex-col justify-between group select-none hover:bg-white transition-colors duration-200"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#757575] mb-4">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>PREVIOUS ARTICLE</span>
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.04em] text-[#101010] uppercase">
                {prevArticle.title}
              </h4>
              <span className="font-mono text-xs text-[#757575] mt-2">
                {prevArticle.date} &bull; {prevArticle.category}
              </span>
            </Link>
          )}

          {nextArticle && (
            <Link
              to={`/blog/${nextArticle.slug}`}
              className="py-12 sm:pl-8 flex flex-col justify-between group select-none hover:bg-white transition-colors duration-200 sm:text-right"
            >
              <div className="flex items-center sm:justify-end gap-2 font-mono text-xs uppercase text-[#757575] mb-4">
                <span>NEXT ARTICLE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.04em] text-[#101010] uppercase">
                {nextArticle.title}
              </h4>
              <span className="font-mono text-xs text-[#757575] mt-2">
                {nextArticle.date} &bull; {nextArticle.category}
              </span>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
