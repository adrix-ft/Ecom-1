import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface EditorialStoryProps {
  onReadPolicy: () => void;
}

export const EditorialStory: React.FC<EditorialStoryProps> = ({ onReadPolicy }) => {
  return (
    <section className="py-14 sm:py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left: Atmospheric Atelier Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xs overflow-hidden bg-[#1a1a1a]"
        >
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80"
            alt="Adrix workshop atelier with garments and fabric rolls"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>

        {/* Right: Editorial Narrative & Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center"
        >
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#ff5c33] mb-2 sm:mb-3 block">
            HOW WE MAKE THINGS
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-[1.08] mb-3 sm:mb-6">
            Four mills. Eleven people. One run at a time.
          </h2>

          {/* Concise on mobile */}
          <p className="text-neutral-300 text-xs sm:text-base leading-relaxed mb-6 sm:mb-10 font-light">
            <span className="sm:hidden">
              We don't chase seasons. Each piece stays in the range until the cloth changes, backed by lifetime repairs.
            </span>
            <span className="hidden sm:inline">
              We do not chase seasons. A piece enters the range when the cloth is right and the maker has capacity, and it stays until the cloth changes. That is why the Halden has looked the same for nine years, and why we can still repair one bought in 2018.
            </span>
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-6 border-t border-white/10 mb-6 sm:mb-10">
            <div>
              <div className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                5 yrs
              </div>
              <div className="text-[9px] sm:text-[11px] text-neutral-400 mt-0.5 sm:mt-1 leading-snug">
                Longest-running piece
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                100%
              </div>
              <div className="text-[9px] sm:text-[11px] text-neutral-400 mt-0.5 sm:mt-1 leading-snug">
                Named mill suppliers
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                739
              </div>
              <div className="text-[9px] sm:text-[11px] text-neutral-400 mt-0.5 sm:mt-1 leading-snug">
                Free repairs completed
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={onReadPolicy}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-neutral-900 hover:bg-neutral-800 border border-white/20 hover:border-white/40 text-white text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase rounded-xs transition-colors cursor-pointer"
            >
              <span>MATERIALS POLICY</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
