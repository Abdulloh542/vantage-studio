import { useMemo, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play, Pause, Volume2, VolumeX, Maximize2, Eye } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { LightboxModal } from '../components/common/LightboxModal';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const openFullscreen = () => {
    const v = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void; webkitRequestFullscreen?: () => void }) | null;
    if (!v) return;
    if (v.requestFullscreen) {
      v.requestFullscreen().catch(() => {});
    } else if (v.webkitEnterFullscreen) {
      v.webkitEnterFullscreen();
    } else if (v.webkitRequestFullscreen) {
      v.webkitRequestFullscreen();
    }
  };

  const project = useMemo(() => {
    return PROJECTS.find((p) => p.slug === slug);
  }, [slug]);

  const currentIndex = useMemo(() => {
    return PROJECTS.findIndex((p) => p.slug === slug);
  }, [slug]);

  const prevProject = useMemo(() => {
    if (currentIndex <= 0) return PROJECTS[PROJECTS.length - 1];
    return PROJECTS[currentIndex - 1];
  }, [currentIndex]);

  const nextProject = useMemo(() => {
    if (currentIndex < 0 || currentIndex >= PROJECTS.length - 1) return PROJECTS[0];
    return PROJECTS[currentIndex + 1];
  }, [currentIndex]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const isVertical = project.videoAspectRatio === '9:16';

  return (
    <main className="w-full bg-white text-[#101010] pt-28 md:pt-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Breadcrumb / Rail Label */}
        <div className="flex items-center justify-between pb-8 border-b border-[#101010]/12 font-mono text-xs text-[#757575] uppercase tracking-wider">
          <Link
            to="/projects"
            className="flex items-center gap-2 hover:text-[#101010] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>PROJECTS ARCHIVE</span>
          </Link>
          <div className="flex items-center gap-2 text-[#101010]">
            <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
            <span>{project.category} // {project.year}</span>
          </div>
        </div>

        {/* Title & Year */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
          <div className="col-span-1 md:col-span-3">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] text-[#101010] uppercase leading-[0.94]">
              {project.title}
            </h1>
          </div>
          <div className="col-span-1 text-left md:text-right font-mono text-xs text-[#757575] uppercase">
            <span>YEAR: {project.year}</span>
            <span className="block mt-1">LOCATION: {project.location}</span>
          </div>
        </div>

        {/* Ruled Details / Credits Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-[#101010]/12 text-xs font-mono">
          <div>
            <span className="text-[#757575] block uppercase mb-1">CLIENT</span>
            <span className="text-[#101010] font-sans font-medium">{project.client}</span>
          </div>
          <div>
            <span className="text-[#757575] block uppercase mb-1">ARCHITECT</span>
            <span className="text-[#101010] font-sans font-medium">{project.architect}</span>
          </div>
          <div>
            <span className="text-[#757575] block uppercase mb-1">TYPOLOGY</span>
            <span className="text-[#101010] font-sans font-medium">{project.category}</span>
          </div>
          <div>
            <span className="text-[#757575] block uppercase mb-1">DISCIPLINES</span>
            <span className="text-[#101010] font-sans font-medium">{project.services.join(', ')}</span>
          </div>
        </div>
      </div>

      {/* True-Aspect-Ratio Lead Cinema Stage (Zero Cropping for both 9:16 and 16:9) */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 my-12 md:my-16">
        {isVertical ? (
          /* 9:16 VERTICAL STAGE: Uncropped 9:16 Video on Left + 3 Featured Uncropped 9:16 Plates on Right */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative aspect-[9/16] w-full max-w-[400px] lg:max-w-none overflow-hidden bg-black border border-[#101010]/15 shadow-xl">
                {project.heroVideo ? (
                  <video
                    ref={videoRef}
                    src={project.heroVideo}
                    poster={project.heroImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={false}
                    disablePictureInPicture
                    onClick={togglePlay}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                ) : (
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/65 backdrop-blur-sm text-[11px] font-mono uppercase tracking-wider text-white/90 border border-white/15 pointer-events-none">
                  9:16 VERTICAL CINEMA
                </div>
                {project.heroVideo && (
                  <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                      className="w-9 h-9 rounded-full bg-black/65 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />}
                    </button>
                    <button
                      onClick={toggleSound}
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                      className="w-9 h-9 rounded-full bg-black/65 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={openFullscreen}
                      aria-label="Fullscreen"
                      className="w-9 h-9 rounded-full bg-black/65 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right: 2 Featured Full-Height 9:16 Plates side by side (100% uncropped) */}
            <div className="lg:col-span-8 grid grid-cols-2 gap-4 sm:gap-6">
              {(project.gallery || []).slice(0, 2).map((g, idx) => (
                <div
                  key={g.url + idx}
                  onClick={() => {
                    setLightboxIndex(idx);
                    setLightboxOpen(true);
                  }}
                  className="group relative aspect-[9/16] w-full overflow-hidden bg-zinc-100 border border-[#101010]/12 cursor-pointer shadow-sm"
                >
                  <img
                    src={g.url}
                    alt={g.caption || project.title}
                    loading="eager"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#101010]/90 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-lg">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* 16:9 WIDESCREEN STAGE: Full 16:9 Uncropped Cinema Frame */
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900 border border-[#101010]/15 shadow-lg">
            {project.heroVideo ? (
              <video
                ref={videoRef}
                src={project.heroVideo}
                poster={project.heroImage}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                controls={false}
                disablePictureInPicture
                onClick={togglePlay}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover filter brightness-95 cursor-pointer"
              />
            ) : (
              <img
                src={project.heroImage}
                alt={project.title}
                loading="eager"
                className="w-full h-full object-cover filter brightness-95"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 md:left-8 text-white font-mono text-xs uppercase tracking-wider z-20 pointer-events-none">
              LEAD ELEVATION &bull; {project.title}
            </div>
            {project.heroVideo && (
              <div className="absolute bottom-4 right-6 md:right-8 z-20 flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="w-9 h-9 rounded-full bg-black/65 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />}
                </button>
                <button
                  onClick={toggleSound}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="w-9 h-9 rounded-full bg-black/65 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={openFullscreen}
                  aria-label="Fullscreen"
                  className="w-9 h-9 rounded-full bg-black/65 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Narrow Narrative Column (4-Column System, Content Starts Column 2) */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
                NARRATIVE
              </span>
            </div>
            <span className="font-mono text-xs text-[#757575]">
              STATEMENT OF INTENT
            </span>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-6 text-sm sm:text-base text-[#101010]/85 font-light leading-relaxed">
            <p className="font-display text-xl sm:text-2xl font-normal tracking-[-0.03em] leading-snug text-[#101010]">
              {project.summary}
            </p>
            {project.description.map((paragraph, i) => (
              <p key={i} className="text-xs sm:text-sm text-[#757575] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Project Metrics Summary in Column 4 */}
          <div className="col-span-1 divide-y divide-[#101010]/12 border-t border-b border-[#101010]/12">
            {project.stats.map((st) => (
              <div key={st.label} className="py-3 font-mono text-xs">
                <span className="text-[#757575] uppercase block text-[11px] mb-0.5">
                  {st.label}
                </span>
                <span className="text-[#101010] font-semibold tabular-nums">
                  {st.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Before / After Transformation Section (True 9:16 or 16:9 Aspect Ratio) */}
      {project.beforeAfter && (
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 pb-20">
          <div className="border-t border-[#101010]/12 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className={isVertical ? 'lg:col-span-5 space-y-4' : 'lg:col-span-4 space-y-4'}>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#101010] inline-block" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
                  ARCHITECTURAL TRANSFORMATION
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#101010] uppercase">
                From Massing to Photorealism
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#757575] leading-relaxed">
                {project.beforeAfter.description}
              </p>
            </div>
            <div className={isVertical ? 'lg:col-span-7 flex justify-center' : 'lg:col-span-8'}>
              <div
                className={
                  isVertical
                    ? 'w-full max-w-[380px] border border-[#101010]/15 overflow-hidden shadow-lg'
                    : 'w-full border border-[#101010]/15 overflow-hidden shadow-lg'
                }
              >
                <BeforeAfterSlider
                  beforeImage={project.beforeAfter.beforeImage}
                  beforeLabel=""
                  afterImage={project.beforeAfter.afterImage}
                  afterLabel=""
                  aspectRatio={isVertical ? 'aspect-[9/16]' : 'aspect-[16/9]'}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Monograph Gallery (True 9:16 Portrait Grid for Vertical Plates, True 16:9 Grid for Widescreen Plates) */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 pb-24 space-y-10">
          <div className="border-b border-[#101010]/12 pb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-[#101010]">
              MONOGRAPH GALLERY ({project.gallery.length} PLATES)
            </span>
            <span className="font-mono text-xs text-[#757575] uppercase">
              CLICK ANY PLATE FOR 4K FULLSCREEN
            </span>
          </div>

          <div
            className={
              isVertical
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'
                : 'grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'
            }
          >
            {project.gallery.map((item, idx) => {
              const isPortraitItem = item.aspectRatio === 'portrait' || isVertical;
              const spanClass = !isVertical && idx === 0 ? 'md:col-span-2' : 'col-span-1';

              return (
                <motion.div
                  key={item.url + idx}
                  initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={spanClass}
                >
                  <div
                    onClick={() => {
                      setLightboxIndex(idx);
                      setLightboxOpen(true);
                    }}
                    className={`relative ${
                      isPortraitItem ? 'aspect-[9/16]' : 'aspect-[16/9]'
                    } w-full overflow-hidden bg-zinc-100 border border-[#101010]/12 cursor-pointer group`}
                  >
                    <img
                      src={item.url}
                      alt={item.caption || project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#101010]/90 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-lg">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-2.5 flex justify-between gap-4 font-mono text-xs text-[#757575] border-b border-[#101010]/12 pb-2.5">
                    <span className="shrink-0 text-[#101010] font-medium">
                      PLATE {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="truncate text-right">{item.caption || project.title}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Previous & Next Project Navigation Links */}
      <div className="w-full border-t border-[#101010]/12 bg-[#F6F6F2]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#101010]/12">
          {prevProject && (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="py-12 pr-6 flex flex-col justify-between group select-none hover:bg-white transition-colors duration-200"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#757575] mb-4">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>PREVIOUS PROJECT</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.04em] text-[#101010] uppercase">
                {prevProject.title}
              </h4>
              <span className="font-mono text-xs text-[#757575] mt-2">
                {prevProject.category} &bull; {prevProject.year}
              </span>
            </Link>
          )}

          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="py-12 sm:pl-8 flex flex-col justify-between group select-none hover:bg-white transition-colors duration-200 sm:text-right"
            >
              <div className="flex items-center sm:justify-end gap-2 font-mono text-xs uppercase text-[#757575] mb-4">
                <span>NEXT PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.04em] text-[#101010] uppercase">
                {nextProject.title}
              </h4>
              <span className="font-mono text-xs text-[#757575] mt-2">
                {nextProject.category} &bull; {nextProject.year}
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* 4K Lightbox Modal for Gallery Plates */}
      {project.gallery && project.gallery.length > 0 && (
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={project.gallery.map((g) => ({
            url: g.url,
            caption: g.caption,
            title: project.title,
          }))}
          currentIndex={lightboxIndex}
          onNavigate={(idx) => setLightboxIndex(idx)}
        />
      )}
    </main>
  );
}
