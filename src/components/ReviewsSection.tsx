import React from 'react';
import { REVIEWS } from '../data/reviews';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-24 px-4 sm:px-8 border-t border-white/10 bg-[#0c0c0c] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-12 flex items-end justify-between"
        >
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#ff5c33] block mb-1.5 sm:mb-2">
              4.9 RATING (1,240 REVIEWS)
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
              What people say after a year
            </h2>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 sm:hidden">
            Swipe →
          </span>
        </motion.div>

        {/* Horizontal snap rail on mobile, 3-col grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-4 md:pb-0 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 bg-[#121212] border border-white/8 rounded-xs flex flex-col justify-between w-[80vw] sm:w-[65vw] md:w-auto shrink-0 snap-start"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#ff5c33] mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-neutral-200 text-xs sm:text-[15px] leading-relaxed font-light mb-6 sm:mb-8">
                  "{rev.text}"
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="pt-4 sm:pt-6 border-t border-white/5">
                <div className="text-xs font-semibold text-white tracking-wide">
                  {rev.author}
                </div>
                <div className="text-[10px] font-medium tracking-[0.18em] uppercase text-neutral-400 mt-0.5">
                  {rev.location} · {rev.verifiedYear}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
