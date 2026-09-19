import { useRef, useEffect, useState } from 'react';
import { motion, useReducedMotion, useInView, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCount(Math.floor(latest)),
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
    <section className="w-full bg-white text-[#101010] border-b border-[#101010]/12 select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-20 md:py-28">
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 md:pb-20 border-b border-[#101010]/12">
          {/* Col 1: Category Tag */}
          <div className="col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#101010] inline-block rounded-full" />
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#101010] font-medium">
                About
              </span>
            </div>
          </div>

          {/* Cols 2-4: Massive Editorial Statement */}
          <div className="col-span-1 md:col-span-3 space-y-6">
            <motion.h2
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-[#101010] leading-[1.1]"
            >
              Vantage Studio is an architecture and visual design studio working across residential, commercial, and hospitality projects.
            </motion.h2>

            <motion.p
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-sm sm:text-base md:text-lg text-[#757575] leading-relaxed max-w-2xl font-light"
            >
              We design homes, workplaces, and interiors shaped by their site, their light, and the people who'll actually live in them.
            </motion.p>

            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="pt-2"
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#101010] pb-1 border-b border-[#101010] hover:text-[#757575] hover:border-[#757575] transition-colors group"
              >
                <span>More about us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Metrics 3-Column Strip with Counter Number Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#101010]/12 pt-12 md:pt-16">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`p-6 sm:p-8 flex flex-col justify-between ${
                idx === 0 ? 'sm:pl-0' : ''
              }`}
            >
              <div>
                <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#101010] leading-none mb-3 flex items-baseline">
                  <CounterNumber value={m.value} suffix={m.suffix} />
                </div>
                <div className="font-mono text-xs sm:text-sm text-[#757575] uppercase tracking-wider font-medium mb-2">
                  {m.label}
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#757575] font-light leading-relaxed max-w-[240px]">
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
