import { motion } from 'framer-motion';
import { BeforeAfterSlider } from '../common/BeforeAfterSlider';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BeforeAfterFeature() {
  return (
    <section className="bg-[#f7f6f2] text-[#121214] py-24 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium block mb-3">
              05 — Precision & Realism
            </span>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-black leading-[1.06]">
              From raw topography <br />
              <span className="font-normal italic text-zinc-700">to photographic reality.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-zinc-600 text-sm font-light leading-relaxed mb-6">
              Drag the hairline slider to inspect how we transform untextured CAD schematics and site point clouds into sensory dusk CGI with physically accurate illumination.
            </p>
            <Link
              to="/services/renovation"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black hover:text-zinc-600 transition-colors pb-1 border-b border-black"
            >
              <span>Explore Transformation Studies</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Interactive Comparison Slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          data-cursor="DRAG"
          className="shadow-2xl border border-black/10"
        >
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=2200&q=80"
            beforeLabel="RAW CAD TOPOGRAPHY"
            afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
            afterLabel="FINAL ATMOSPHERIC CGI"
            aspectRatio="aspect-[16/9] md:aspect-[21/9]"
          />
        </motion.div>

        {/* Technical Callout Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-black/10 text-xs text-zinc-600">
          <div>
            <span className="font-semibold text-black uppercase tracking-wider block mb-1">
              Photometric Accuracy
            </span>
            <span>Solar calibration matching latitude and time-of-day shadow profiles down to tenths of a degree.</span>
          </div>
          <div>
            <span className="font-semibold text-black uppercase tracking-wider block mb-1">
              Physically Based Shaders
            </span>
            <span>Accurate IOR and roughness maps sampled directly from client material boards and quarried stone.</span>
          </div>
          <div>
            <span className="font-semibold text-black uppercase tracking-wider block mb-1">
              AI Micro-Atmosphere
            </span>
            <span>Procedural evening haze and botanical wind dynamics layered into both stills and motion frames.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
