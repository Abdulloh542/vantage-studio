import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function SolumHowWeWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="how-we-work"
      className="w-full bg-[#0F0F0F] text-[#F6F6F2] py-20 sm:py-28 lg:py-32 px-5 sm:px-8 md:px-12 lg:px-16 border-b border-white/10"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div>
            {/* Tag / Category */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-white/60">
                Process
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-white leading-[1.02] mb-4">
              How We Work
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-sm sm:text-base text-white/55 leading-relaxed max-w-xl font-light">
              We follow a clear process to keep every step simple, structured, and easy to manage.
            </p>
          </div>

          {/* Action Link */}
          <div className="pb-1">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base text-white font-medium hover:text-white/80 transition-colors group pb-0.5 border-b border-white/40 hover:border-white"
            >
              <span>Start a Project</span>
              <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </Link>
          </div>
        </motion.div>

        {/* 4-Phase Architectural Progression Matrix */}
        {/*
          Desktop (4 cols x 2 rows):
            Row 1: [Text 01 Discover] [Visual 1 Wireframe] [Text 02 Concept] [Visual 2 Furnished]
            Row 2: [Visual 3 Isometric Grid] [Text 03 Development] [Visual 4 Shaded Room] [Text 04 Execution]
          Tablet (2 cols):
            Row 1: [Text 01] [Visual 1]
            Row 2: [Text 02] [Visual 2]
            Row 3: [Text 03] [Visual 3]
            Row 4: [Text 04] [Visual 4]
          Mobile (1 col):
            Stacked naturally Text -> Visual for each phase.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10 divide-y md:divide-y-0 divide-white/10 bg-[#0F0F0F]">
          
          {/* ================= PHASE 01: DISCOVER ================= */}
          {/* Text 01 */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-1 p-8 sm:p-10 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] md:border-r border-white/10 md:border-b"
          >
            <span className="font-mono text-sm text-white/50 tracking-wider">/01</span>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2.5">
                Discover
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed font-light max-w-[280px]">
                We understand your vision, lifestyle, and spatial requirements.
              </p>
            </div>
          </motion.div>

          {/* Visual 01 (2D Wireframe Floor Plan) */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-2 p-6 sm:p-8 flex items-center justify-center min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] lg:border-r border-white/10 md:border-b group relative overflow-hidden bg-[#0F0F0F]"
          >
            <img
              src="/images/process/01-discover-wireframe.png"
              alt="2D Floorplan boundary line schematic for Discover phase"
              className="w-auto h-auto max-w-[85%] max-h-[80%] object-contain select-none transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-110"
              loading="lazy"
            />
          </motion.div>

          {/* ================= PHASE 02: CONCEPT ================= */}
          {/* Text 02 */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-3 lg:order-3 p-8 sm:p-10 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] md:border-r border-white/10 md:border-b"
          >
            <span className="font-mono text-sm text-white/50 tracking-wider">/02</span>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2.5">
                Concept
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed font-light max-w-[280px]">
                We define the layout, atmosphere, and overall design direction.
              </p>
            </div>
          </motion.div>

          {/* Visual 02 (2D Furnished Schematic Plan) */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-4 lg:order-4 p-6 sm:p-8 flex items-center justify-center min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] md:border-b border-white/10 group relative overflow-hidden bg-[#0F0F0F]"
          >
            <img
              src="/images/process/02-concept-furnished.png"
              alt="2D Furnished architectural layout schematic for Concept phase"
              className="w-auto h-auto max-w-[85%] max-h-[80%] object-contain select-none transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-110"
              loading="lazy"
            />
          </motion.div>

          {/* ================= PHASE 03: DEVELOPMENT ================= */}
          {/* Visual 03 (3D Isometric Wireframe Grid) */}
          {/* On desktop: Row 2, Col 1 (order 5). On mobile/tablet: after Text 03 (order 6) */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-6 md:order-6 lg:order-5 p-6 sm:p-8 flex items-center justify-center min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] md:border-r lg:border-r border-white/10 md:border-b lg:border-b-0 group relative overflow-hidden bg-[#0F0F0F]"
          >
            <img
              src="/images/process/03-development-wireframe.png"
              alt="3D Isometric wireframe perspective mesh for Development phase"
              className="w-auto h-auto max-w-[90%] max-h-[85%] object-contain select-none transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-115"
              loading="lazy"
            />
          </motion.div>

          {/* Text 03 */}
          {/* On desktop: Row 2, Col 2 (order 6). On mobile/tablet: before Visual 03 (order 5) */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="order-5 md:order-5 lg:order-6 p-8 sm:p-10 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] lg:border-r border-white/10 md:border-b lg:border-b-0"
          >
            <span className="font-mono text-sm text-white/50 tracking-wider">/03</span>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2.5">
                Development
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed font-light max-w-[280px]">
                We refine materials, lighting, furniture, and spatial details.
              </p>
            </div>
          </motion.div>

          {/* ================= PHASE 04: EXECUTION ================= */}
          {/* Visual 04 (3D Isometric Shaded Realistic Room) */}
          {/* On desktop: Row 2, Col 3 (order 7). On mobile/tablet: after Text 04 (order 8) */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-8 md:order-8 lg:order-7 p-6 sm:p-8 flex items-center justify-center min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] md:border-r lg:border-r border-white/10 group relative overflow-hidden bg-[#0F0F0F]"
          >
            <img
              src="/images/process/04-execution-render.png"
              alt="3D Photorealistic rendered interior for Execution phase"
              className="w-auto h-auto max-w-[90%] max-h-[85%] object-contain select-none transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-110"
              loading="lazy"
            />
          </motion.div>

          {/* Text 04 */}
          {/* On desktop: Row 2, Col 4 (order 8). On mobile/tablet: before Visual 04 (order 7) */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="order-7 md:order-7 lg:order-8 p-8 sm:p-10 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]"
          >
            <span className="font-mono text-sm text-white/50 tracking-wider">/04</span>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2.5">
                Execution
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed font-light max-w-[280px]">
                We execute the design with consistency and attention to detail.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
