import React from 'react';
import { X, ShieldCheck, Compass, CheckCircle } from 'lucide-react';

interface MaterialsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MaterialsModal: React.FC<MaterialsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-xs" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-[#141414] border border-white/15 rounded-xs p-6 sm:p-10 z-10 text-white shadow-2xl max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff5c33] block">
              TRANSPARENCY & LIFETIME CARE
            </span>
            <h3 className="text-2xl font-bold font-display text-white mt-1">Our Materials Policy</h3>
          </div>
          <button type="button" onClick={onClose} className="text-neutral-400 hover:text-white p-1 cursor-pointer">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
          <p>
            We do not manufacture for landfills. We work exclusively with four heritage mills in northern Italy, Portugal, Scotland, and Japan whose practices we inspect in person twice every year.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-4 bg-[#1a1a1a] border border-white/10 rounded-xs space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
                <Compass size={15} className="text-[#ff5c33]" />
                <span>Named Suppliers</span>
              </div>
              <p className="text-xs text-neutral-400">
                Lanificio Fratelli Cerruti (Biella), Cariaggi (Marche), Conceria Walpier (Tuscany), and Olmetex (Como). Every garment specifies the exact mill on its label.
              </p>
            </div>

            <div className="p-4 bg-[#1a1a1a] border border-white/10 rounded-xs space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
                <ShieldCheck size={15} className="text-[#ff5c33]" />
                <span>Two-Year Repair Promise</span>
              </div>
              <p className="text-xs text-neutral-400">
                Seams, buttons, zips, and linings are mended by the original craftsmen free of charge for 24 months. Over 739 coats and knits restored since 2019.
              </p>
            </div>
          </div>

          <h4 className="text-base font-bold font-display text-white pt-2">Our 4 Core Tenets</h4>
          <ul className="space-y-3 text-xs text-neutral-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Mono-Material Construction:</strong> 100% natural virgin fibers without synthetic blenders whenever feasible, ensuring authentic warmth and circular biodegradability.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Vegetable Tannins Only:</strong> All leather is tanned using chestnut bark and mimosa extracts in Tuscany without heavy metals or chromium salts.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Natural Corozo Buttons:</strong> We carve fasteners from Ecuadorian Tagua palm nuts rather than petrochemical plastic resin.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Small Limited Runs:</strong> Runs capped at 200–400 pieces. No seasonal clearance burns or forced obsolescence.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
