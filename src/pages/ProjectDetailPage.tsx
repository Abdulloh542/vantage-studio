import { useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, Play, Sparkles, MapPin } from 'lucide-react';
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
    <main className="w-full bg-[#090a0d] text-white pt-28 md:pt-36">
      {/* Back to Work Link */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs uppercase tracking-wider text-zinc-300 font-mono transition-all border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Selected Work</span>
        </Link>
      </div>

      {/* Hero Header & Metadata */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-zinc-300 font-mono mb-4 border border-white/10">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Case Study — {project.category}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.04] mb-6">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 font-light max-w-2xl leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-8 mt-10 border-t border-white/10 text-xs">
          <div className="glass-card rounded-2xl p-4 border border-white/10">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1 font-mono">
              Location
            </span>
            <span className="text-white font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3 text-zinc-400" />
              <span>{project.location}</span>
            </span>
          </div>
          <div className="glass-card rounded-2xl p-4 border border-white/10">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1 font-mono">
              Client
            </span>
            <span className="text-white font-medium">{project.client}</span>
          </div>
          <div className="glass-card rounded-2xl p-4 border border-white/10">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1 font-mono">
              Architect
            </span>
            <span className="text-white font-medium">{project.architect}</span>
          </div>
          <div className="glass-card rounded-2xl p-4 border border-white/10">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1 font-mono">
              Year
            </span>
            <span className="text-white font-medium">{project.year}</span>
          </div>
          <div className="glass-card rounded-2xl p-4 border border-white/10">
            <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1 font-mono">
              Deliverables
            </span>
            <span className="text-amber-200/90 font-medium">
              {project.services.join(' / ')}
            </span>
          </div>
        </div>

        {/* Client Material & Studio Transformation Split (Key Value Argument) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 rounded-3xl glass-card border border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-2 font-semibold">
              Client Input / Source Material
            </span>
            <p className="text-sm font-light text-zinc-300 leading-relaxed">
              {project.clientMaterial || 'Architectural drawings, CAD floor plans & preliminary client concept renders.'}
            </p>
          </div>

          <div className="p-6 rounded-3xl glass-card border border-emerald-500/30 bg-emerald-950/20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block mb-2 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Studio Transformation / Deliverables</span>
            </span>
            <p className="text-sm font-light text-zinc-200 leading-relaxed">
              {project.transformationPipeline
                ? project.transformationPipeline.join('  →  ')
                : '3D visualization → photorealistic enhancement → cinematic AI video → final edit'}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Visual Frame (Curved Axioma Container) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <div className="w-full relative aspect-[16/9] md:aspect-[21/9] rounded-[32px] sm:rounded-[40px] overflow-hidden border border-white/15 bg-zinc-900 shadow-2xl">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover filter brightness-95"
          />
          {project.heroVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                onClick={() => setVideoOpen(true)}
                data-cursor="PLAY"
                className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/90 text-black hover:bg-white hover:scale-105 transition-all duration-200 shadow-2xl"
              >
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold">
                  Watch Project Film
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Narrative & Metrics */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-3">
              The Architectural Story
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Context, materiality and spatial emotion.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            {project.description.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {/* Project Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-white/10">
              {project.stats.map((st) => (
                <div key={st.label} className="glass-card rounded-2xl p-5 border border-white/10">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
                    {st.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Before / After Section */}
      {project.beforeAfter && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-36">
          <div className="border-t border-white/10 pt-16 mb-10">
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-2">
              Visual Transformation
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Source Material → Final Photographic Reality
            </h3>
            <p className="text-zinc-300 text-sm max-w-2xl font-light leading-relaxed">
              {project.beforeAfter.description}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-cursor="DRAG"
            className="rounded-[32px] sm:rounded-[40px] overflow-hidden border border-white/15 shadow-2xl"
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

      {/* Concept-to-Final Production Steps */}
      {project.process && project.process.length > 0 && (
        <div className="bg-[#0c0d11] text-white py-24 md:py-32 mb-24 md:mb-36 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-3">
                Production Anatomy
              </span>
              <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
                From concept to final visual.
              </h3>
              <p className="text-zinc-300 text-sm font-light leading-relaxed">
                Step-by-step insight into how our atelier executed the visual direction, structural modeling, lighting physics, and post-production for {project.title}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {project.process.map((step) => (
                <div
                  key={step.step}
                  className="glass-card rounded-3xl border border-white/10 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-zinc-400 font-mono text-xs mb-4">
                      <span>STEP {step.step}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    {step.image && (
                      <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-zinc-800 border border-white/10">
                        <img
                          src={step.image}
                          alt={step.title}
                          loading="lazy"
                          className="w-full h-full object-cover filter brightness-90"
                        />
                      </div>
                    )}
                    <h4 className="font-display text-base font-bold text-white mb-2 tracking-tight">
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
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-2">
              Visual Suite
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Curated Render Stills
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {project.gallery.map((item, idx) => (
              <div key={idx} className="group">
                <div
                  className={`relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 shadow-xl ${
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
                <p className="text-xs text-zinc-400 mt-3 font-light">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next Project Teaser Navigation */}
      {nextProject && (
        <div className="bg-[#090a0d] text-white py-20 md:py-28 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Link
              to={`/work/${nextProject.slug}`}
              className="group block"
              data-cursor="VIEW"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
                  Next Case Study →
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest text-zinc-300 font-mono">
                  {nextProject.category}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card rounded-[32px] sm:rounded-[40px] p-8 border border-white/10">
                <div className="lg:col-span-7">
                  <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                    {nextProject.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-zinc-400 mt-2 font-mono">
                    {nextProject.location} • {nextProject.services.join(' / ')}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-800 border border-white/10 shadow-xl">
                    <img
                      src={nextProject.heroImage}
                      alt={nextProject.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
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
