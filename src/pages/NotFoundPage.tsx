import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function NotFoundPage() {
  return (
    <main className="w-full min-h-screen bg-white text-[#101010] flex items-center justify-center px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl text-center space-y-6 select-none"
      >
        <span className="font-mono text-xs uppercase tracking-wider text-[#757575] block">
          404 // EXHIBITION ERROR
        </span>

        <h1 className="font-display text-7xl sm:text-9xl font-bold tracking-[-0.07em] leading-none text-[#101010]">
          404
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#757575] leading-relaxed max-w-md mx-auto">
          The requested monograph plate, project archive, or discourse page cannot be located within this atelier index.
        </p>

        <div className="pt-4">
          <Link
            to="/"
            className="solum-btn px-6 py-3.5 bg-[#101010] text-white border border-[#101010] text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-[#101010] transition-colors duration-180 inline-flex"
          >
            <span>BACK TO HOME</span>
            <span className="btn-arrow ml-3">
              <ArrowRight className="w-3.5 h-3.5 inline-block" />
            </span>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
