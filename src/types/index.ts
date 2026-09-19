export interface ProjectStats {
  label: string;
  value: string;
}

export interface ProcessStageItem {
  step: string;
  title: string;
  description: string;
  image?: string;
}

export interface BeforeAfterData {
  beforeImage: string;
  beforeLabel: string;
  afterImage: string;
  afterLabel: string;
  description: string;
}

export interface GalleryItem {
  url: string;
  caption: string;
  aspectRatio?: 'landscape' | 'portrait' | 'wide';
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  client: string;
  architect: string;
  category: 'Residential' | 'Commercial' | 'Cultural' | 'Hospitality' | 'Mixed-Use' | 'Heritage';
  services: string[];
  tags: string[]; // For filtering: CGI, Architecture, Real Estate, AI Film, Animation, Interior, Exterior, Renovation
  heroImage: string;
  heroVideo?: string;
  summary: string;
  description: string[];
  stats: ProjectStats[];
  process: ProcessStageItem[];
  beforeAfter?: BeforeAfterData;
  clientMaterial?: string; // e.g. "Architectural drawings / CAD plans / 2 preliminary renders"
  transformationPipeline?: string[]; // e.g. ["3D Visualization", "Photorealistic Enhancement", "Cinematic AI Video", "Final Marketing Edit"]
  videoDuration?: string;
  gallery: GalleryItem[];
  featured: boolean;
  featuredOrder: number;
  nextProjectSlug: string;
}

export interface ServiceDeliverable {
  name: string;
  description: string;
}

export interface ServiceWorkflowStep {
  step: string;
  title: string;
  detail: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  problem: string;
  solution: string;
  deliverables: ServiceDeliverable[];
  workflow: ServiceWorkflowStep[];
  faqs: ServiceFAQ[];
  image: string;
  video?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface ProjectBrief {
  name: string;
  company: string;
  email: string;
  phone?: string;
  projectType: string;
  location?: string;
  deadline?: string;
  estimatedScope: string;
  timeline: string;
  videoDuration?: string;
  budgetRange: string;
  message: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
  location: string;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface JournalArticle {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  excerpt: string;
  content: string[];
  featured?: boolean;
}
