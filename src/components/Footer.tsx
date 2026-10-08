import React, { useState } from 'react';
import { ProductCategory } from '../types';
import { ArrowUpRight, Instagram, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onNavigateShop: () => void;
  onNavigateJournal: () => void;
  onNavigateAbout: () => void;
  onOpenCart: () => void;
  onOpenContact: () => void;
  onOpenFaq: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onNavigateShop,
  onNavigateJournal,
  onNavigateAbout,
  onOpenCart,
  onOpenContact,
  onOpenFaq
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <footer className="bg-[#f3f0ea] text-neutral-900 border-t border-[#e2dcd0] pt-14 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto"
      >
        {/* Top Split: Brand + Letters Signup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-[#ded7c8]">
          {/* Brand Left */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-black tracking-[0.24em] uppercase font-display text-neutral-950 mb-3 sm:mb-4">
              ADRIX
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm font-light leading-relaxed">
              <span className="sm:hidden">Considered essentials, made in small runs with named mills.</span>
              <span className="hidden sm:inline">
                Considered essentials, made in small runs with mills and tanneries we have worked with for a decade.
              </span>
            </p>
          </div>

          {/* Newsletter Right */}
          <div className="lg:col-span-6 flex flex-col justify-end">
            <h3 className="text-sm font-bold tracking-tight text-neutral-900 mb-1">
              Letters, not newsletters.
            </h3>
            <p className="text-xs text-neutral-600 font-light mb-4">
              Six a year. New editions, restocks and the occasional essay.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-100 text-emerald-800 text-xs rounded-xs flex items-center gap-2">
                <Check size={14} />
                <span>You are on the list. We will write when the next edition is ready.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-md">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/80 border border-neutral-300 px-4 py-2.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 rounded-l-xs"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white text-[11px] font-bold tracking-[0.16em] uppercase rounded-r-xs flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>JOIN</span>
                  <ArrowUpRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Navigation Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 py-16 border-b border-[#ded7c8] text-xs">
          {/* Col 1: Shop */}
          <div className="space-y-3">
            <h4 className="font-bold tracking-[0.18em] uppercase text-neutral-900 text-[10px]">
              SHOP
            </h4>
            <ul className="space-y-2 text-neutral-600 font-normal">
              <li>
                <button type="button" onClick={onNavigateShop} className="hover:text-black transition-colors cursor-pointer">
                  All products
                </button>
              </li>
              <li>
                <button type="button" onClick={onNavigateShop} className="hover:text-black transition-colors cursor-pointer">
                  Collections
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectCategory('Outerwear')} className="hover:text-black transition-colors cursor-pointer">
                  Outerwear
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectCategory('Knitwear')} className="hover:text-black transition-colors cursor-pointer">
                  Knitwear
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectCategory('Leather')} className="hover:text-black transition-colors cursor-pointer">
                  Leather
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectCategory('Objects')} className="hover:text-black transition-colors cursor-pointer">
                  Objects
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Studio */}
          <div className="space-y-3">
            <h4 className="font-bold tracking-[0.18em] uppercase text-neutral-900 text-[10px]">
              STUDIO
            </h4>
            <ul className="space-y-2 text-neutral-600 font-normal">
              <li>
                <button type="button" onClick={onNavigateAbout} className="hover:text-black transition-colors cursor-pointer">
                  About Adrix
                </button>
              </li>
              <li>
                <button type="button" onClick={onNavigateJournal} className="hover:text-black transition-colors cursor-pointer">
                  The Journal
                </button>
              </li>
              <li>
                <button type="button" onClick={onNavigateAbout} className="hover:text-black transition-colors cursor-pointer">
                  Materials
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenContact} className="hover:text-black transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Help */}
          <div className="space-y-3">
            <h4 className="font-bold tracking-[0.18em] uppercase text-neutral-900 text-[10px]">
              HELP
            </h4>
            <ul className="space-y-2 text-neutral-600 font-normal">
              <li>
                <button type="button" onClick={onOpenFaq} className="hover:text-black transition-colors cursor-pointer">
                  Shipping & returns
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenFaq} className="hover:text-black transition-colors cursor-pointer">
                  Frequent questions
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenFaq} className="hover:text-black transition-colors cursor-pointer">
                  Your orders
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenCart} className="hover:text-black transition-colors cursor-pointer">
                  Cart
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="space-y-3">
            <h4 className="font-bold tracking-[0.18em] uppercase text-neutral-900 text-[10px]">
              LEGAL
            </h4>
            <ul className="space-y-2 text-neutral-600 font-normal">
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Privacy policy</span>
              </li>
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Terms of service</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Elsewhere */}
          <div className="space-y-3">
            <h4 className="font-bold tracking-[0.18em] uppercase text-neutral-900 text-[10px]">
              ELSEWHERE
            </h4>
            <div className="flex items-center gap-3 text-neutral-700">
              <a href="#instagram" className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <span className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors text-xs font-bold font-serif cursor-pointer">
                P
              </span>
              <span className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors text-xs font-bold cursor-pointer">
                ♬
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <div>
            © 2026 Adrix Studio, Lda. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-neutral-700">
            <span>UPI</span>
            <span>NetBanking</span>
            <span>Cards</span>
            <span>PayPal</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
