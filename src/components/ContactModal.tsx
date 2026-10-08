import React, { useState } from 'react';
import { X, Check, Mail, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState('Sizing Advice');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-xs" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-[#141414] border border-white/15 rounded-xs p-6 sm:p-8 z-10 text-white shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ff5c33] block">
              STUDIO CONCIERGE
            </span>
            <h3 className="text-xl font-bold font-display text-white mt-1">Talk to Us</h3>
          </div>
          <button type="button" onClick={onClose} className="text-neutral-400 hover:text-white p-1 cursor-pointer">
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-950 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-800">
              <Check size={24} />
            </div>
            <h4 className="text-base font-bold text-white font-display">Message Received</h4>
            <p className="text-xs text-neutral-300">
              A tailor or customer advisor in Porto will reply to your email within four business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-neutral-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marguerita"
                  className="w-full bg-[#1b1b1b] border border-white/10 px-3 py-2 text-white rounded-xs focus:border-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-neutral-400 mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-[#1b1b1b] border border-white/10 px-3 py-2 text-white rounded-xs focus:border-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-neutral-400 mb-1">Topic</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-[#1b1b1b] border border-white/10 px-3 py-2 text-white rounded-xs focus:border-white focus:outline-none"
              >
                <option value="Sizing Advice">Sizing & Silhouette Consultation</option>
                <option value="Two-Year Repair">Two-Year Free Repair Request</option>
                <option value="Material Traceability">Material Sourcing & Mills Question</option>
                <option value="Custom Order">Private Order / Studio Appointment</option>
              </select>
            </div>

            <div>
              <label className="block text-neutral-400 mb-1">Note</label>
              <textarea
                rows={4}
                required
                placeholder="Tell us what you need help with..."
                className="w-full bg-[#1b1b1b] border border-white/10 px-3 py-2 text-white rounded-xs focus:border-white focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 bg-white hover:bg-neutral-200 text-black font-bold tracking-[0.16em] uppercase text-xs rounded-xs transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] text-neutral-400 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#ff5c33]" />
                <span>Rua de Santa Catarina, Porto</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail size={13} className="text-neutral-500" />
                <span>concierge@adrix.studio</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
