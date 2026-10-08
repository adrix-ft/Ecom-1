import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PreFooterBannerProps {
  onShopEverything: () => void;
  onTalkToUs: () => void;
}

export const PreFooterBanner: React.FC<PreFooterBannerProps> = ({
  onShopEverything,
  onTalkToUs
}) => {
  return (
    <section className="bg-[#f3f0ea] text-neutral-900 py-14 sm:py-32 px-4 sm:px-8 text-center border-t border-[#e5dfd4] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        <h2 className="text-2xl sm:text-5xl md:text-6xl font-black font-display tracking-tight leading-[1.05] text-neutral-950 mb-4 sm:mb-6">
          Buy less. Choose carefully. Keep it a long time.
        </h2>
        <p className="text-neutral-700 text-xs sm:text-base md:text-lg max-w-xl font-light mb-8 sm:mb-10 leading-relaxed">
          <span className="sm:hidden">Two-year free repair guarantee. Traceable named mills.</span>
          <span className="hidden sm:inline">
            Every piece carries a two-year repair promise and a full record of where it was made.
          </span>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onShopEverything}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-black hover:bg-neutral-800 text-white text-xs font-bold tracking-[0.18em] uppercase rounded-xs flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] cursor-pointer"
          >
            <span>SHOP EVERYTHING</span>
            <ArrowUpRight size={15} />
          </button>
          <button
            type="button"
            onClick={onTalkToUs}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent hover:bg-black/5 text-neutral-900 border border-neutral-300 hover:border-neutral-900 text-xs font-bold tracking-[0.18em] uppercase rounded-xs transition-colors cursor-pointer"
          >
            TALK TO US
          </button>
        </div>
      </motion.div>
    </section>
  );
};
