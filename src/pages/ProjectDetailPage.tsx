import { useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, Play } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';
import { VideoLightbox } from '../components/common/VideoLightbox';
import { FinalCTASection } from '../components/home/FinalCTASection';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [videoOpen, setVideoOpen] = useState(false);

  const project = useMemo(() => {
    return PROJECTS.find((p) => p.slug === slug);
  }, [slug]);

  const nextProject = useMemo(() => {
    if (!project) return null;
    return PROJECTS.find((p) => p.slug === project.nextProjectSlug) || PROJECTS[0];
  }, [project]);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <main className="w-full bg-[#f7f6f2] text-[#121214] pt-24 md:pt-32">
      {/* Back to Work Link */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Selected Work</span>
        </Link>
      </div>

      {/* Hero Header & Metadata Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
            Case Study — {project.category}
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-black leading-[1.04] mb-6">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 font-light max-w-2xl leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Metadata Table */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-10 mt-10 border-t border-black/10 text-xs">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
              Location
            </span>
            <span className="text-black font-medium">{project.location}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
              Client
            </span>
            <span className="text-black font-medium">{project.client}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
              Architect
            </span>
            <span className="text-black font-medium">{project.architect}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
              Year
            </span>
            <span className="text-black font-medium">{project.year}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
              Services
            </span>
            <span className="text-black font-medium">
              {project.services.join(' / ')}
            </span>
          </div>
        </div>
      </div>

      {/* Full-Bleed Hero Visual (with optional video trigger) */}
      <div className="w-full relative aspect-[16/9] md:aspect-[21/9] bg-zinc-900 overflow-hidden mb-20 md:mb-32">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {project.heroVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button
              onClick={() => setVideoOpen(true)}
              data-cursor="PLAY"
              className="flex items-center gap-3 px-6 py-3.5 bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold">
                Watch Project Film
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Editorial Narrative & Project Outcomes */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold block mb-3">
              The Architectural Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-black">
              Context, materiality and spatial emotion.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-zinc-700 text-base md:text-lg font-light leading-relaxed">
            {project.description.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {/* Project Metrics / Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-8 border-t border-black/10">
              {project.stats.map((st) => (
                <div key={st.label}>
                  <div className="text-2xl sm:text-3xl font-light text-black tracking-tight mb-1">
                    {st.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Before / After Section (if available) */}
      {project.beforeAfter && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-36">
          <div className="border-t border-black/10 pt-16 mb-10">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-2">
              Visual Transformation
            </span>
            <h3 className="text-2xl sm:text-4xl font-light tracking-tight text-black mb-3">
              Source Material → Final Photographic Reality
            </h3>
            <p className="text-zinc-600 text-sm max-w-2xl font-light leading-relaxed">
              {project.beforeAfter.description}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-cursor="DRAG"
            className="shadow-2xl border border-black/10 overflow-hidden"
          >
            <BeforeAfterSlider
              beforeImage={project.beforeAfter.beforeImage}
              beforeLabel={project.beforeAfter.beforeLabel}
              afterImage={project.beforeAfter.afterImage}
              afterLabel={project.beforeAfter.afterLabel}
              aspectRatio="aspect-[16/9] md:aspect-[21/9]"
            />
          </motion.div>
        </div>
      )}

      {/* Process Breakdown: "From concept to final visual" */}
      {project.process && project.process.length > 0 && (
        <div className="bg-[#0c0c0d] text-white py-24 md:py-32 mb-24 md:mb-36">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
                Production Anatomy
              </span>
              <h3 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-[1.08] mb-4">
                From concept to final visual.
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Step-by-step insight into how our atelier executed the visual direction, structural modeling, lighting physics, and post-production for {project.title}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.process.map((step) => (
                <div
                  key={step.step}
                  className="bg-zinc-900/60 border border-white/10 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-zinc-500 font-mono text-xs mb-4">
                      <span>STEP {step.step}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    {step.image && (
                      <div className="aspect-[16/9] overflow-hidden mb-4 bg-zinc-800">
                        <img
                          src={step.image}
                          alt={step.title}
                          loading="lazy"
                          className="w-full h-full object-cover filter brightness-90"
                        />
                      </div>
                    )}
                    <h4 className="text-base font-medium text-white mb-2 tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gallery Stills: Mixed Grid */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-36">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-2">
              Visual Suite
            </span>
            <h3 className="text-2xl sm:text-4xl font-light tracking-tight text-black">
              Curated Render Stills
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {project.gallery.map((item, idx) => (
              <div key={idx} className="group">
                <div
                  className={`relative overflow-hidden bg-zinc-200 border border-black/5 ${
                    item.aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-[16/10]'
                  }`}
                >
                  <img
                    src={item.url}
                    alt={item.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <p className="text-xs text-zinc-500 mt-3 font-light">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next Project Teaser Navigation */}
      {nextProject && (
        <div className="bg-[#121214] text-white py-20 md:py-28 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Link
              to={`/work/${nextProject.slug}`}
              className="group block"
              data-cursor="VIEW"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                  Next Case Study →
                </span>
                <span className="text-xs uppercase tracking-widest text-zinc-500">
                  {nextProject.category}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <h3 className="text-4xl sm:text-6xl font-light tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                    {nextProject.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 mt-2">
                    {nextProject.location} • {nextProject.services.join(' / ')}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/9] overflow-hidden bg-zinc-800 border border-white/10">
                    <img
                      src={nextProject.heroImage}
                      alt={nextProject.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Global Final CTA */}
      <FinalCTASection />

      {/* Video Lightbox Modal */}
      {project.heroVideo && (
        <VideoLightbox
          isOpen={videoOpen}
          onClose={() => setVideoOpen(false)}
          videoUrl={project.heroVideo}
          title={project.title}
          subtitle="Project Film"
        />
      )}
    </main>
  );
}
