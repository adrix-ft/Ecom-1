import React, { useState } from 'react';
import { Product } from '../types';
import { Heart } from 'lucide-react';
import { formatINR } from '../utils/format';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  index?: number;
  isCarouselItem?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickAdd,
  isWishlisted,
  onToggleWishlist,
  index = 0,
  isCarouselItem = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col cursor-pointer select-none ${
        isCarouselItem ? 'w-[68vw] sm:w-[48vw] md:w-auto shrink-0 snap-start' : 'w-full'
      }`}
    >
      {/* Image Container */}
      <div
        className="relative aspect-[3/4] w-full overflow-hidden bg-[#e9e6df] rounded-xs"
        onClick={() => onSelect(product)}
      >
        {imageLoaded ? (
          <img
            src={product.images[0]}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={() => setImageLoaded(false)}
            className={`w-full h-full object-cover object-center transition-all duration-700 ease-out sm:group-hover:scale-105 ${
              product.soldOut ? 'grayscale-30' : ''
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#dfdbd2] to-[#cec9be] text-[#333]">
            <span className="text-[10px] font-semibold tracking-widest uppercase opacity-75">{product.category}</span>
            <span className="text-sm font-bold font-display mt-1">{product.name}</span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <div>
            {product.badge && (
              <span className="inline-block bg-black/85 text-white text-[9px] sm:text-[10px] font-bold tracking-[0.16em] px-2 py-0.5 sm:px-2.5 sm:py-1 uppercase rounded-xs shadow-xs">
                {product.badge}
              </span>
            )}
          </div>
          <div>
            {product.soldOut && (
              <span className="inline-block bg-[#1f1f1f] text-neutral-300 text-[9px] sm:text-[10px] font-bold tracking-[0.16em] px-2 py-0.5 sm:px-2.5 sm:py-1 uppercase rounded-xs">
                SOLD OUT
              </span>
            )}
          </div>
        </div>

        {/* Action Bar (always visible on mobile touch, hover on desktop) */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 pointer-events-auto">
          {!product.soldOut ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onQuickAdd(product);
              }}
              className="flex-1 py-2 sm:py-2.5 px-2 bg-white/95 active:bg-white sm:hover:bg-neutral-100 text-neutral-900 text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase rounded-xs transition-colors shadow-md flex items-center justify-center gap-1 cursor-pointer"
            >
              + ADD
            </button>
          ) : (
            <div className="flex-1 py-2 sm:py-2.5 px-2 bg-black/80 backdrop-blur-xs text-neutral-300 text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase rounded-xs text-center">
              SOLD OUT
            </div>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`p-2 sm:p-2.5 bg-white/95 active:bg-white sm:hover:bg-white text-neutral-900 rounded-xs transition-colors shadow-md cursor-pointer flex items-center justify-center ${
              isWishlisted ? 'text-[#ff3300]' : ''
            }`}
            aria-label={`Wishlist ${product.name}`}
          >
            <Heart size={13} fill={isWishlisted ? '#ff3300' : 'none'} color={isWishlisted ? '#ff3300' : 'currentColor'} />
          </button>
        </div>
      </div>

      {/* Meta info below */}
      <div className="pt-2.5 sm:pt-4 flex flex-col" onClick={() => onSelect(product)}>
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-neutral-200 transition-colors tracking-tight font-display truncate">
            {product.name}
          </h3>
          <div className="text-xs sm:text-[15px] font-semibold text-neutral-200 tabular-nums shrink-0">
            {product.originalPrice ? (
              <div className="flex items-center gap-1">
                <span className="line-through text-neutral-500 text-[10px] sm:text-xs">{formatINR(product.originalPrice)}</span>
                <span className="text-[#ff5c33]">{formatINR(product.price)}</span>
              </div>
            ) : (
              <span>{formatINR(product.price)}</span>
            )}
          </div>
        </div>
        <p className="text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] uppercase text-neutral-400 mt-0.5">
          {product.category}
        </p>
      </div>
    </motion.article>
  );
};
