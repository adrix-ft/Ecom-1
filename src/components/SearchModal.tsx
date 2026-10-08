import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { formatINR } from '../utils/format';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.millName.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.materialComposition.toLowerCase().includes(q)
        );
      })
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-[#141414] border border-white/15 rounded-xs shadow-2xl overflow-hidden z-10 flex flex-col max-h-[75vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-white/10 gap-3">
          <Search size={18} className="text-neutral-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search pieces, mills, fibers (e.g. Halden, Cashmere)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder:text-neutral-500 focus:outline-none font-medium"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-neutral-400 hover:text-white p-1 text-xs"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {query.trim() === '' ? (
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500 block">
                SUGGESTED SEARCHES
              </span>
              <div className="flex flex-wrap gap-2">
                {['Halden Wool Overcoat', 'Cashmere', 'Outerwear', 'Tote', 'Ceramics', 'Card Holder'].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 bg-[#1f1f1f] hover:bg-neutral-800 text-neutral-300 text-xs rounded-xs border border-white/5 transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-neutral-400 text-xs font-light">
              No pieces match "{query}". Try searching for cashmere, wool, or leather.
            </div>
          ) : (
            results.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  onSelectProduct(prod);
                  onClose();
                }}
                className="flex items-center gap-4 p-3 hover:bg-[#1c1c1c] rounded-xs cursor-pointer transition-colors group"
              >
                <div className="w-14 aspect-[3/4] bg-[#222] rounded-xs overflow-hidden shrink-0">
                  <img
                    src={prod.images[0]}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#ff5c33] font-bold">
                      {prod.category}
                    </span>
                    <span className="text-neutral-600 text-[10px]">·</span>
                    <span className="text-neutral-400 text-[11px] truncate">
                      {prod.millName}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-neutral-200 truncate font-display">
                    {prod.name}
                  </h4>
                  <p className="text-xs text-neutral-400 truncate font-light">
                    {prod.description}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-sm font-bold text-white tabular-nums">{formatINR(prod.price)}</div>
                  <ArrowUpRight size={14} className="text-neutral-500 group-hover:text-white ml-auto mt-1" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
