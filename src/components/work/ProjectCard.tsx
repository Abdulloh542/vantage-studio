import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
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
      className={`group block overflow-hidden rounded-[28px] sm:rounded-[32px] glass-card border border-white/10 hover:border-white/30 transition-all shadow-xl ${className}`}
    >
      <div className={`relative ${aspectRatio} overflow-hidden bg-zinc-900`}>
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Floating Category Pill Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-wider text-white font-mono border border-white/15">
            {project.category}
          </span>
        </div>

        {/* Arrow Button in Corner */}
        <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/15 group-hover:bg-white group-hover:text-black transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-zinc-400 font-light flex items-center gap-1.5 mt-1">
          <MapPin className="w-3.5 h-3.5 text-zinc-500" />
          <span>{project.location}</span>
          <span>•</span>
          <span className="font-mono">{project.year}</span>
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/10">
          {project.services.slice(0, 2).map((s) => (
            <span
              key={s}
              className="px-2.5 py-0.5 rounded-full bg-white/[0.05] text-[10px] text-zinc-400 uppercase tracking-wider font-mono"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
