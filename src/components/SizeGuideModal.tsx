import React from 'react';
import { X } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-xs" onClick={onClose} />
      <div className="relative w-full max-w-xl bg-[#141414] border border-white/15 rounded-xs p-6 sm:p-8 z-10 text-white shadow-2xl max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff5c33] block">
              MEASUREMENTS & FIT
            </span>
            <h3 className="text-xl font-bold font-display text-white mt-1">Size & Fit Guide</h3>
          </div>
          <button type="button" onClick={onClose} className="text-neutral-400 hover:text-white p-1 cursor-pointer">
            <X size={18} />
          </button>
        </div>

        <p className="text-xs text-neutral-300 font-light leading-relaxed mb-6">
          Our garments are cut with a relaxed, architectural silhouette designed to layer naturally. We recommend taking your usual size for an intended relaxed drape, or sizing down if you prefer a slim profile.
        </p>

        {/* Outerwear & Knitwear Sizing Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-neutral-400 font-mono text-[11px]">
                <th className="py-2.5 pr-4">EU Size</th>
                <th className="py-2.5 px-4">US / UK</th>
                <th className="py-2.5 px-4">Chest (cm)</th>
                <th className="py-2.5 px-4">Sleeve (cm)</th>
                <th className="py-2.5 pl-4">Length (cm)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono text-neutral-300">
              <tr>
                <td className="py-2.5 pr-4 font-bold text-white">46 (S)</td>
                <td className="py-2.5 px-4">36</td>
                <td className="py-2.5 px-4">92–96</td>
                <td className="py-2.5 px-4">84</td>
                <td className="py-2.5 pl-4">112</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-white">48 (M)</td>
                <td className="py-2.5 px-4">38</td>
                <td className="py-2.5 px-4">97–101</td>
                <td className="py-2.5 px-4">86</td>
                <td className="py-2.5 pl-4">114</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-white">50 (L)</td>
                <td className="py-2.5 px-4">40</td>
                <td className="py-2.5 px-4">102–106</td>
                <td className="py-2.5 px-4">88</td>
                <td className="py-2.5 pl-4">116</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-bold text-white">52 (XL)</td>
                <td className="py-2.5 px-4">42</td>
                <td className="py-2.5 px-4">107–112</td>
                <td className="py-2.5 px-4">90</td>
                <td className="py-2.5 pl-4">118</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-[#1a1a1a] p-4 rounded-xs border border-white/5 text-xs text-neutral-400 space-y-1">
          <p className="font-semibold text-neutral-200">Unsure about your fit?</p>
          <p>
            Order your preferred size. Returns and exchanges are 100% free within 30 days throughout the EU and UK with prepaid return labels in every box.
          </p>
        </div>
      </div>
    </div>
  );
};
