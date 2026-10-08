import React from 'react';
import { JOURNAL_ARTICLES } from '../data/journal';
import { JournalArticle } from '../types';
import { motion } from 'motion/react';

interface JournalSectionProps {
  onSelectArticle: (article: JournalArticle) => void;
  onViewAllEntries: () => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({
  onSelectArticle,
  onViewAllEntries
}) => {
  return (
    <section className="py-14 sm:py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end justify-between mb-6 sm:mb-12 gap-4"
        >
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#ff5c33] block mb-1.5 sm:mb-2">
              FROM THE JOURNAL
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
              Notes on making
            </h2>
          </div>
          <button
            type="button"
            onClick={onViewAllEntries}
            className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-neutral-300 hover:text-white pb-0.5 border-b border-neutral-700 hover:border-white transition-all self-end cursor-pointer shrink-0"
          >
            ALL
          </button>
        </motion.div>

        {/* Horizontal snap rail on mobile, 3-col grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-8 pb-4 md:pb-0 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {JOURNAL_ARTICLES.map((art, idx) => (
            <motion.article
              key={art.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectArticle(art)}
              className="group cursor-pointer flex flex-col w-[75vw] sm:w-[55vw] md:w-auto shrink-0 snap-start"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xs bg-[#1a1a1a] mb-3 sm:mb-5">
                <img
                  src={art.image}
                  alt={art.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Tag & Read time */}
              <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 mb-1.5 sm:mb-2">
                <span className="text-[#ff5c33]">{art.tag}</span>
                <span>·</span>
                <span>{art.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors font-display tracking-tight leading-snug mb-1.5 sm:mb-2">
                {art.title}
              </h3>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
                {art.summary}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
