import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function IntroStatement() {
  const stats = [
    { number: '8+', label: 'Years of Practice', detail: 'Refining architectural CGI and film for global ateliers.' },
    { number: '100+', label: 'Projects Delivered', detail: 'Completed for premier developers, architects, and luxury funds.' },
    { number: '$1B+', label: 'Real Estate Visualized', detail: 'Off-plan sales value launched with our digital imagery.' },
  ];

  return (
    <section id="intro-statement" className="bg-[#f7f6f2] text-[#121214] py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
            01 — Studio Proposition
          </span>
        </div>

        {/* Editorial Split Layout: Massive Headline Left + Refined Paragraph Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-black/10">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.06] text-black"
            >
              Visualize it <br />
              <span className="font-normal italic text-zinc-700">before it exists.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 text-zinc-700 text-base md:text-lg font-light leading-relaxed"
            >
              <p>
                From early concepts to launch-ready marketing, we create imagery and films that help architecture communicate before the first brick is laid.
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                Serving as a creative production bridge between architectural intent and market perception, our team translates complex BIM, Revit schedules, and spatial concepts into persuasive emotional experiences.
              </p>
            </motion.div>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black hover:text-zinc-600 transition-colors pb-1 border-b border-black"
              >
                <span>About the Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Key Metrics Strip (Understated, clean typography) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-l border-black/15 pl-6"
            >
              <div className="text-4xl md:text-5xl font-light tracking-tight text-black mb-2">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-wider text-black font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-600 font-light leading-relaxed">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
