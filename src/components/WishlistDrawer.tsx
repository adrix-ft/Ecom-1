import React from 'react';
import { Product } from '../types';
import { X, Trash2, ArrowUpRight } from 'lucide-react';
import { formatINR } from '../utils/format';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onRemoveWishlist: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  products,
  onRemoveWishlist,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111111] text-white shadow-2xl flex flex-col border-l border-white/10">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-base font-bold tracking-[0.16em] uppercase font-display text-white">
                Saved Items
              </h2>
              <span className="text-xs text-neutral-400 font-mono">({products.length})</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition-colors p-1 cursor-pointer"
              aria-label="Close wishlist"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {products.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <p className="text-neutral-400 text-sm font-light">
                  You haven't saved any items yet.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-semibold tracking-widest uppercase text-white underline hover:text-neutral-300 cursor-pointer"
                >
                  Explore the Winter Collection
                </button>
              </div>
            ) : (
              products.map((prod) => (
                <div key={prod.id} className="flex gap-4 pb-6 border-b border-white/10">
                  <div
                    className="w-20 aspect-[3/4] bg-[#1a1a1a] rounded-xs overflow-hidden shrink-0 cursor-pointer"
                    onClick={() => {
                      onSelectProduct(prod);
                      onClose();
                    }}
                  >
                    <img
                      src={prod.images[0]}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4
                          onClick={() => {
                            onSelectProduct(prod);
                            onClose();
                          }}
                          className="text-sm font-bold text-white font-display cursor-pointer hover:underline"
                        >
                          {prod.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveWishlist(prod)}
                          className="text-neutral-500 hover:text-red-400 transition-colors p-1 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="text-xs text-neutral-400 mt-1">
                        {prod.category} · {formatINR(prod.price)}
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={() => {
                          onSelectProduct(prod);
                          onClose();
                        }}
                        className="w-full py-2 bg-white/10 hover:bg-white hover:text-black text-white text-[11px] font-bold tracking-wider uppercase rounded-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>View Piece</span>
                        <ArrowUpRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
