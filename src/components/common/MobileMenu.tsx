import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, navLinks, currentPath }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#0c0c0d] flex flex-col justify-between p-8 md:hidden text-white"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <Link to="/" onClick={onClose} className="flex items-center gap-2">
              <div className="w-5 h-5 bg-white text-black flex items-center justify-center font-bold text-xs">
                V
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase">
                Vantage Studio
              </span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 my-auto">
            {navLinks.map((link, idx) => {
              const active = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    onClick={onClose}
                    className={`text-4xl font-light tracking-tight transition-colors block ${
                      active ? 'text-white font-normal' : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Bottom Area */}
          <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
            <Link
              to="/contact"
              onClick={onClose}
              className="flex items-center justify-between w-full py-3.5 px-5 bg-white text-black text-xs font-semibold uppercase tracking-widest"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-zinc-500 pt-2">
              <span>London • Zurich • Tashkent</span>
              <span>hello@vantage.studio</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
