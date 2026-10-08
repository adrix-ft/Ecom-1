import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onShopClick: () => void;
  onJournalClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onJournalClick }) => {
  return (
    <section className="relative w-full min-h-[75vh] sm:min-h-[82vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#121212]">
      {/* Background Editorial Image with subtle luxury grading scrim */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=2400&q=85"
          alt="Adrix winter collection model in double-faced wool overcoat"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_28%]"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/85" />
      </motion.div>

      {/* Content with smooth staggered scroll reveal */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center flex flex-col items-center">
        {/* Category / Volume Kicker */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-neutral-300 mb-3 sm:mb-4 flex items-center gap-2"
        >
          <span>WINTER EDITIONS — VOL. 03</span>
        </motion.div>

        {/* Massive Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] uppercase text-white font-display leading-[0.95] max-w-4xl balance mb-4 sm:mb-6"
        >
          MADE TO BE KEPT
        </motion.h1>

        {/* Subtitle: concise on mobile */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-lg md:text-xl text-neutral-200/90 max-w-2xl font-light leading-relaxed mb-8 sm:mb-10 px-2"
        >
          <span className="sm:hidden">
            Small runs from named mills with two years of free repairs.
          </span>
          <span className="hidden sm:inline">
            Coats, knitwear and leather made in runs of a few hundred, from mills we have worked with for a decade.
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none"
        >
          <button
            type="button"
            onClick={onShopClick}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#f3f0ea] hover:bg-white text-neutral-950 text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase rounded-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-lg active:scale-100 cursor-pointer"
          >
            <span>SHOP COLLECTION</span>
            <ArrowUpRight size={15} />
          </button>
          <button
            type="button"
            onClick={onJournalClick}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/25 hover:border-white/50 text-xs sm:text-[13px] font-semibold tracking-[0.16em] uppercase rounded-xs transition-all cursor-pointer"
          >
            THE JOURNAL
          </button>
        </motion.div>
      </div>
    </section>
  );
};
