import React from 'react';
import { ProductCategory } from '../types';
import { motion } from 'motion/react';

interface CategoryGridProps {
  onSelectCategory: (category: ProductCategory) => void;
  onViewAllCollections: () => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  onSelectCategory,
  onViewAllCollections
}) => {
  const categories: {
    name: ProductCategory;
    subtitle: string;
    image: string;
    alt: string;
  }[] = [
    {
      name: 'Outerwear',
      subtitle: 'COATS, SHELLS & LINERS',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
      alt: 'Outerwear coats on rail'
    },
    {
      name: 'Knitwear',
      subtitle: 'WOOL, MERINO & CASHMERE',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
      alt: 'Folded knitwear sweaters'
    },
    {
      name: 'Leather',
      subtitle: 'BAGS & SMALL GOODS',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
      alt: 'Vegetable-tanned leather bags'
    },
    {
      name: 'Objects',
      subtitle: 'FOR THE TABLE & HOME',
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80',
      alt: 'Ceramic vases and wooden bowls'
    }
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-end justify-between mb-6 sm:mb-10 gap-4"
      >
        <div>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#ff5c33] block mb-1.5 sm:mb-2">
            FOUR CATEGORIES
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display">
            A wardrobe in one cupboard
          </h2>
        </div>
        <button
          type="button"
          onClick={onViewAllCollections}
          className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-neutral-300 hover:text-white pb-0.5 border-b border-neutral-700 hover:border-white transition-all self-end cursor-pointer shrink-0"
        >
          ALL
        </button>
      </motion.div>

      {/* Horizontal snap rail on mobile, 4-col grid on desktop */}
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-4 sm:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onSelectCategory(cat.name)}
            className="group relative aspect-[3/4] w-[70vw] sm:w-auto shrink-0 snap-start overflow-hidden rounded-xs bg-[#161616] cursor-pointer shadow-md"
          >
            <img
              src={cat.image}
              alt={cat.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Label Overlay */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight group-hover:translate-x-1 transition-transform">
                {cat.name}
              </h3>
              <p className="text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] text-neutral-300 uppercase mt-0.5 sm:mt-1">
                {cat.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
