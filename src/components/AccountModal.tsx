import React from 'react';
import { X, Package, ShieldCheck, User, MapPin } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRepairs: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  onOpenRepairs
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-xs" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-[#141414] border border-white/15 rounded-xs p-6 sm:p-8 z-10 text-white shadow-2xl max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white">
              <User size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white">Marguerita Vaillent</h3>
              <p className="text-xs text-neutral-400 font-light">Client since November 2023 · Copenhagen</p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="text-neutral-400 hover:text-white p-1 cursor-pointer">
            <X size={18} />
          </button>
        </div>

        {/* Recent Registered Wardrobe & Repairs */}
        <div className="space-y-6 text-xs">
          <div>
            <h4 className="font-bold tracking-[0.16em] uppercase text-neutral-300 mb-3 flex items-center gap-2">
              <Package size={14} className="text-[#ff5c33]" />
              <span>Registered Pieces in Wardrobe</span>
            </h4>
            <div className="p-4 bg-[#1b1b1b] border border-white/10 rounded-xs space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-white text-sm">Halden Wool Overcoat</div>
                  <div className="text-neutral-400 text-xs mt-0.5">Camel · Size 48 · Lanificio Cerruti</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded-xs">
                    ACTIVE CARE
                  </span>
                  <div className="text-[10px] text-neutral-500 mt-1">Free repairs until Nov 2027</div>
                </div>
              </div>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-neutral-400">
                <span>Free replacement corozo buttons on request</span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenRepairs();
                  }}
                  className="text-white underline hover:text-neutral-300 cursor-pointer"
                >
                  Request Service
                </button>
              </div>
            </div>
          </div>

          {/* Delivery Preferences */}
          <div>
            <h4 className="font-bold tracking-[0.16em] uppercase text-neutral-300 mb-3 flex items-center gap-2">
              <MapPin size={14} className="text-[#ff5c33]" />
              <span>Default Address</span>
            </h4>
            <div className="p-4 bg-[#1b1b1b] border border-white/10 rounded-xs text-neutral-300 space-y-1">
              <div className="font-bold text-white">Marguerita Vaillent</div>
              <div>Gothersgade 44, 2. sal</div>
              <div>1123 Copenhagen K, Denmark</div>
              <div className="text-neutral-500 text-[11px] pt-1">Delivery note: Ring bell #2, leave with concierge if absent</div>
            </div>
          </div>

          {/* Two-Year Promise */}
          <div className="p-4 bg-[#1e1c18] border border-[#a28b5d]/30 rounded-xs flex items-start gap-3">
            <ShieldCheck size={18} className="text-[#a28b5d] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white text-xs">Adrix Care Archive Guarantee</div>
              <p className="text-[11px] text-neutral-400 leading-relaxed mt-0.5">
                All garments ordered with your email are automatically registered in our Porto archive ledger for 2 years of free repairs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
