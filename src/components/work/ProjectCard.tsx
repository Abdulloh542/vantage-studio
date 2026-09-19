import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: string;
  className?: string;
}

export function ProjectCard({
  project,
  aspectRatio = 'aspect-[16/10]',
  className = '',
}: ProjectCardProps) {
  return (
    <Link
      to={`/work/${project.slug}`}
      data-cursor="VIEW"
      className={`group block overflow-hidden ${className}`}
    >
      <div className={`relative ${aspectRatio} overflow-hidden bg-black/10 border border-black/10`}>
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Floating Category Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-[#0B0B0A]/85 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#FAF9F6] font-mono">
            {project.category}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4 pb-2 border-b border-black/10">
        <div>
          <h3 className="font-display text-xl md:text-2xl font-normal tracking-tight text-[#0B0B0A] group-hover:text-[#C5A880] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-black/50 font-mono uppercase tracking-wider mt-1">
            {project.location} • {project.year}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.services.slice(0, 2).map((s) => (
              <span
                key={s}
                className="text-[10px] text-black/40 font-mono uppercase tracking-widest"
              >
                / {s}
              </span>
            ))}
          </div>
        </div>

        <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-black/70 group-hover:bg-[#0B0B0A] group-hover:text-white group-hover:border-black transition-all duration-300">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
