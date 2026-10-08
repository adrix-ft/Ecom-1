import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { motion } from 'motion/react';

interface FullCatalogProps {
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  initialCategory?: ProductCategory | 'All';
}

export const FullCatalog: React.FC<FullCatalogProps> = ({
  onSelectProduct,
  onQuickAdd,
  wishlistIds,
  onToggleWishlist,
  initialCategory = 'All'
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'All'>(initialCategory);

  const categories: Array<ProductCategory | 'All'> = ['All', 'Outerwear', 'Knitwear', 'Leather', 'Objects'];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-10 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header with reveal */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 mb-8 sm:mb-16"
      >
        <div className="lg:col-span-6">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#ff5c33] block mb-1.5 sm:mb-2">
            THE FULL RANGE
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight leading-[1.05]">
            Everything we make
          </h1>
        </div>
        <div className="lg:col-span-6 flex items-end">
          <p className="text-neutral-300 text-xs sm:text-base font-light leading-relaxed max-w-xl">
            <span className="sm:hidden">Twelve pieces, four categories. Made to be kept.</span>
            <span className="hidden sm:inline">
              Twelve pieces, four categories. Each one stays in the range until the cloth changes — so what you see is what we will still be making next winter.
            </span>
          </p>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-4 mb-6 sm:mb-10 border-b border-white/10 no-scrollbar"
      >
        {categories.map((cat) => {
          const count = cat === 'All' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat).length;
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase rounded-xs transition-colors shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-white text-black'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </motion.div>

      {/* Products Grid: 2 columns on mobile, 4 columns on large screens */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {filteredProducts.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            index={idx}
            onSelect={onSelectProduct}
            onQuickAdd={onQuickAdd}
            isWishlisted={wishlistIds.includes(product.id)}
            onToggleWishlist={onToggleWishlist}
          />
        ))}
      </div>
    </section>
  );
};
