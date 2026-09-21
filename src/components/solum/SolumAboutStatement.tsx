import { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion, useInView, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

function CounterNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setCount(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value, shouldReduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

interface CapabilityItem {
  id: string;
  title: string;
  category: string;
  deliverables: string[];
  image: string;
  description: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'archviz',
    title: 'Architectural Visualization',
    category: 'Architectural Visualization',
    deliverables: [
      'Exterior & Interior CGI',
      'Photorealistic Enhancement',
      '3D Spatial Modeling',
      'Atmospheric Daylight Studies',
    ],
    image:
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990146/projects/volga-park/Architectural_close_view_sunny_day_20260.jpg',
    description: 'Translating architectural blueprints and 3D models into photorealistic spatial renders.',
  },
  {
    id: 'ai-films',
    title: 'AI Architectural Films',
    category: 'AI Architectural Films',
    deliverables: [
      'Cinematic Architectural Films',
      'AI Walkthroughs & Animation',
      'Image-to-Video & Render-to-Video',
      'Social Media 9:16 Reels',
    ],
    image:
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789990854/projects/effect-archi/A_photorealistic__highly__e6837b.jpg',
    description: 'Dynamic spatial films and AI-directed camera sweeps designed for viral reach.',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Marketing',
    category: 'Real Estate Marketing',
    deliverables: [
      'Property Presentation Films',
      'Development Marketing Campaigns',
      'Location & Infrastructure Videos',
      'Map & Urban Masterplan Animations',
    ],
    image:
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789991206/projects/lotus-mall/Lotus_Mall_Facade_Golden_Hour.jpg',
    description: 'Strategic commercial CGI and marketing visuals that accelerate investor and buyer pre-sales.',
  },
  {
    id: 'renovation',
    title: 'Renovation & Construction',
    category: 'Renovation & Construction',
    deliverables: [
      'Before / After Transformation Films',
      'Construction Timelapse Simulation',
      'Historical Adaptive Reuse',
      'Existing → Proposed Comparison',
    ],
    image:
      'https://res.cloudinary.com/mvmsbgon/image/upload/v1789982051/projects/bunker-37/add_rooftop_on_first_image_202606191833.jpg',
    description: 'Visualizing architectural transformations, adaptive reuse, and step-by-step construction.',
  },
];

export function SolumAboutStatement() {
  const shouldReduceMotion = useReducedMotion();

  const metrics = [
    {
      value: 7,
      suffix: '+',
      label: 'Years of Practice',
      detail: 'Crafting high-fidelity architectural CGI and spatial films.',
    },
    {
      value: 80,
      suffix: '+',
      label: 'Projects Completed',
      detail: 'Across residential, commercial, and masterplan developments.',
    },
    {
      value: 15,
      suffix: '',
      label: 'Design Awards',
      detail: 'Recognized for photorealism, daylight simulation, and cinematic direction.',
    },
  ];

  return (
    <section className="w-full bg-[#000000] text-white border-b border-white/10 select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-20 md:py-28">
        
        {/* ========================================================= */}
        {/* 1) EDITORIAL STATEMENT (Exact Brick Visual reference)     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-16 md:pb-24 border-b border-white/10">
          
          {/* Left Column: Blue Indicator + What We Do */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[#2563EB] inline-block" />
              <h2 className="font-sans text-xl sm:text-2xl font-medium text-white tracking-tight">
                What We Do
              </h2>
            </div>
          </div>

          {/* Right Column: Classic, Eye-Pleasing Editorial Text */}
          <div className="md:col-span-8 lg:col-span-9 space-y-5">
            <motion.p
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-lg sm:text-xl md:text-[22px] text-white/95 font-normal leading-relaxed max-w-3xl"
            >
              Vantage is an international architectural visualization and creative production studio that translates unbuilt architecture into high-end visual solutions and cinematic marketing films.
            </motion.p>

            <motion.p
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-3xl"
            >
              Driven by a team of highly skilled 3D artists, art directors, and powered by cutting-edge visual technology, we deliver innovative and refined visual narratives, with the capacity and competence required for large-scale, prestige developments.
            </motion.p>

            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="pt-2"
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-white pb-1 border-b border-white hover:text-neutral-400 hover:border-neutral-400 transition-colors group"
              >
                <span>More about our studio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2) 4 CORE DISCIPLINES & DELIVERABLES (Brick Visual style) */}
        {/* ========================================================= */}
        <div className="pt-16 md:pt-20 pb-16 md:pb-24 border-b border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {CAPABILITIES.map((cap, idx) => (
              <motion.div
                key={cap.id}
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <Link
                  to={`/projects?category=${encodeURIComponent(cap.category)}`}
                  className="block focus:outline-none"
                >
                  {/* Visual Card Image */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 border border-white/10 group-hover:border-white/30 transition-colors">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-[#2563EB] group-hover:border-transparent transition-all">
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Clean Classic Typography Under Card */}
                  <div className="pt-4">
                    <h3 className="font-sans text-base sm:text-lg font-medium text-white group-hover:text-neutral-200 transition-colors">
                      {cap.title}
                    </h3>
                    
                    <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light mt-1.5 leading-relaxed line-clamp-2">
                      {cap.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-white/10">
                      <ul className="space-y-1">
                        {cap.deliverables.slice(0, 3).map((item, dIdx) => (
                          <li key={dIdx} className="font-sans text-[11px] sm:text-xs text-neutral-400 flex items-center gap-1.5">
                            <span className="w-1 h-1 bg-[#2563EB] rounded-full inline-block flex-shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3) METRICS STRIP: Clean, Classic, Credible                */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 pt-12 md:pt-16">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`p-6 sm:p-8 flex flex-col justify-between ${
                idx === 0 ? 'sm:pl-0' : ''
              }`}
            >
              <div>
                <div className="font-sans text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-none mb-3 flex items-baseline">
                  <CounterNumber value={m.value} suffix={m.suffix} />
                </div>
                <div className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-wider font-medium mb-1.5">
                  {m.label}
                </div>
                <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-[240px]">
                  {m.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
