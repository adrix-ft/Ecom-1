import React, { useState } from 'react';
import { Product, ProductColor } from '../types';
import { ChevronLeft, ChevronRight, Star, Heart, Check, Shield, Compass, RotateCcw, Truck } from 'lucide-react';
import { formatINR } from '../utils/format';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, color: ProductColor, size: string, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onOpenSizeGuide: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onBack,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  onOpenSizeGuide
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(
    product.colors.length > 0 ? product.colors[0] : null
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes.length > 0 ? product.sizes[0] : 'Standard'
  );
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('traceability');

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const handleBuy = () => {
    if (!selectedColor || product.soldOut) return;
    onAddToCart(product, selectedColor, selectedSize, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white pt-6 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-neutral-400 mb-8">
          <button type="button" onClick={onBack} className="hover:text-white transition-colors cursor-pointer">
            SHOP
          </button>
          <span>/</span>
          <span className="text-neutral-300">{product.category}</span>
          <span>/</span>
          <span className="text-white truncate">{product.name}</span>
        </nav>

        {/* Product Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Stage Image */}
            <div className="relative aspect-[3/4] w-full bg-[#161616] rounded-xs overflow-hidden group select-none">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={`${product.name} view ${selectedImageIndex + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />

              {/* Prev / Next controls */}
              {product.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-md cursor-pointer"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center transition-all opacity-80 hover:opacity-100 shadow-md cursor-pointer"
                    aria-label="Next photo"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Badges on main image */}
              <div className="absolute top-4 left-4 flex gap-2">
                {product.badge && (
                  <span className="bg-black/90 text-white text-[10px] font-bold tracking-[0.18em] px-2.5 py-1 uppercase rounded-xs">
                    {product.badge}
                  </span>
                )}
                {product.soldOut && (
                  <span className="bg-[#1f1f1f] text-neutral-300 text-[10px] font-bold tracking-[0.18em] px-2.5 py-1 uppercase rounded-xs">
                    SOLD OUT
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 aspect-[3/4] rounded-xs overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      selectedImageIndex === idx ? 'border-white opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumb ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Category */}
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#ff5c33] mb-2 block">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight leading-[1.05] mb-4">
              {product.name}
            </h1>

            {/* Price & Rating */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">
                {formatINR(product.price)}
                {product.originalPrice && (
                  <span className="text-sm font-normal text-neutral-500 line-through ml-2">
                    {formatINR(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Reviews */}
              <div className="flex items-center gap-2">
                <div className="flex items-center text-[#ff5c33]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-xs text-neutral-300 font-medium">
                  {product.rating.toFixed(1)} · {product.reviewCount} reviews
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-8">
              {product.detailedDescription || product.description}
            </p>

            {/* Colour Selector */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-semibold tracking-[0.16em] uppercase text-neutral-300 mb-3">
                  <span>COLOUR</span>
                  <span className="text-white font-medium">{selectedColor?.name || 'Select'}</span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => {
                    const isSelected = selectedColor?.name === c.name;
                    return (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setSelectedColor(c)}
                        className={`w-8 h-8 rounded-full transition-transform cursor-pointer relative ${
                          isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0c0c0c] scale-110' : 'hover:scale-105'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        aria-label={`Color ${c.name}`}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-semibold tracking-[0.16em] uppercase text-neutral-300 mb-3">
                  <span>SELECT A SIZE</span>
                  <button
                    type="button"
                    onClick={onOpenSizeGuide}
                    className="text-neutral-400 hover:text-white underline cursor-pointer"
                  >
                    SIZE GUIDE
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((s) => {
                    const isSelected = selectedSize === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`py-3 px-2 text-xs font-bold tracking-wider uppercase rounded-xs border transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-white text-black border-white'
                            : 'bg-[#141414] text-neutral-300 border-white/10 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity and Primary Action */}
            <div className="flex items-center gap-3 mb-8">
              {/* Stepper */}
              <div className="flex items-center bg-[#161616] border border-white/15 rounded-xs h-13 px-3">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="text-neutral-400 hover:text-white px-2 py-1 text-sm font-bold cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-3 text-sm font-semibold tabular-nums text-white">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="text-neutral-400 hover:text-white px-2 py-1 text-sm font-bold cursor-pointer"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Main Button */}
              <button
                type="button"
                onClick={handleBuy}
                disabled={product.soldOut}
                className={`flex-1 h-13 px-6 rounded-xs text-xs font-bold tracking-[0.18em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  product.soldOut
                    ? 'bg-neutral-800 text-neutral-400 cursor-not-allowed'
                    : !selectedColor
                    ? 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                    : addedAnimation
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#f3f0ea] hover:bg-white text-black hover:scale-[1.01]'
                }`}
              >
                {product.soldOut ? (
                  <span>SOLD OUT</span>
                ) : !selectedColor ? (
                  <span>SELECT A COLOUR FIRST</span>
                ) : addedAnimation ? (
                  <>
                    <Check size={16} />
                    <span>ADDED TO BAG</span>
                  </>
                ) : (
                  <span>ADD TO BAG — {formatINR(product.price * quantity)}</span>
                )}
              </button>

              {/* Wishlist Heart */}
              <button
                type="button"
                onClick={() => onToggleWishlist(product)}
                className="w-13 h-13 bg-[#161616] hover:bg-[#202020] border border-white/15 rounded-xs flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Wishlist toggle"
              >
                <Heart
                  size={18}
                  fill={isWishlisted ? '#ff3300' : 'none'}
                  color={isWishlisted ? '#ff3300' : 'currentColor'}
                />
              </button>
            </div>

            {/* Traceability Callout Card */}
            <div className="bg-[#141414] border border-white/10 p-5 rounded-xs mb-6 space-y-3">
              <div className="flex items-start gap-3">
                <Compass size={17} className="text-[#ff5c33] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-neutral-400">Mill: </span>
                  <strong className="text-white font-medium">{product.millName}</strong> ({product.millLocation})
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield size={17} className="text-[#ff5c33] shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-300">
                  Two-year free repair promise covers seams, buttons, linings and hardware.
                </div>
              </div>
            </div>

            {/* Collapsible Accordions */}
            <div className="border-t border-white/10 divide-y divide-white/10 text-xs">
              {/* Accordion 1: Material & Care */}
              <div>
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'care' ? null : 'care')}
                  className="w-full py-4 flex items-center justify-between text-neutral-300 hover:text-white font-semibold tracking-wider uppercase cursor-pointer"
                >
                  <span>Composition & Care</span>
                  <span>{openAccordion === 'care' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'care' && (
                  <div className="pb-4 text-neutral-400 space-y-2 font-light leading-relaxed">
                    <p><strong className="text-neutral-200">Material:</strong> {product.materialComposition}</p>
                    <p><strong className="text-neutral-200">Care:</strong> {product.careInstructions}</p>
                  </div>
                )}
              </div>

              {/* Accordion 2: Repairs & Guarantee */}
              <div>
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'repairs' ? null : 'repairs')}
                  className="w-full py-4 flex items-center justify-between text-neutral-300 hover:text-white font-semibold tracking-wider uppercase cursor-pointer"
                >
                  <span>Two-Year Repair Promise</span>
                  <span>{openAccordion === 'repairs' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'repairs' && (
                  <div className="pb-4 text-neutral-400 space-y-2 font-light leading-relaxed">
                    <p>
                      Every Adrix piece includes two years of complimentary repairs. If a seam loosens, a button cracks, or a lining tears, send it back to our Porto or Biella workshops. We mend it with original archive materials and return it tracked.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 3: Delivery & Returns */}
              <div>
                <button
                  type="button"
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                  className="w-full py-4 flex items-center justify-between text-neutral-300 hover:text-white font-semibold tracking-wider uppercase cursor-pointer"
                >
                  <span>Delivery & Thirty-Day Returns</span>
                  <span>{openAccordion === 'shipping' ? '−' : '+'}</span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="pb-4 text-neutral-400 space-y-2 font-light leading-relaxed">
                    <p>
                      Carbon-neutral express delivery worldwide. Free on orders above ₹15,000. Orders ship in plastic-free recycled unbleached cardboard boxes.
                    </p>
                    <p>
                      Thirty-day returns: Try at home with tags on. Return label included in the box. No forms or questions.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Purchase Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#111111]/95 backdrop-blur-md p-3 border-t border-white/10 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[10px] text-neutral-400 truncate">{product.name}</span>
          <span className="text-sm font-bold text-white font-mono">{formatINR(product.price)}</span>
        </div>
        <button
          type="button"
          onClick={handleBuy}
          disabled={product.soldOut}
          className={`h-11 px-6 rounded-xs text-[11px] font-bold tracking-[0.16em] uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0 ${
            product.soldOut
              ? 'bg-neutral-800 text-neutral-400 cursor-not-allowed'
              : !selectedColor
              ? 'bg-neutral-800 text-neutral-400'
              : addedAnimation
              ? 'bg-emerald-600 text-white'
              : 'bg-[#f3f0ea] active:bg-white text-black'
          }`}
        >
          {product.soldOut ? (
            <span>SOLD OUT</span>
          ) : !selectedColor ? (
            <span>CHOOSE COLOUR</span>
          ) : addedAnimation ? (
            <>
              <Check size={14} />
              <span>ADDED</span>
            </>
          ) : (
            <span>ADD TO BAG</span>
          )}
        </button>
      </div>
    </div>
  );
};
