import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface ValuePropsProps {
  onLearnMore?: (type: string) => void;
}

export const ValueProps: React.FC<ValuePropsProps> = ({ onLearnMore }) => {
  const items = [
    {
      icon: Truck,
      title: 'Free delivery over ₹15,000',
      shortTitle: 'Free delivery > ₹15k',
      description: 'Carbon-neutral, tracked, and usually with you inside three days.',
      shortDesc: 'Carbon-neutral & tracked.',
      id: 'shipping'
    },
    {
      icon: RotateCcw,
      title: 'Thirty-day returns',
      shortTitle: '30-day returns',
      description: 'Unworn, tags on, free within the EU and UK. No forms to fill in.',
      shortDesc: 'Free & no forms.',
      id: 'returns'
    },
    {
      icon: ShieldCheck,
      title: 'Two-year free repairs',
      shortTitle: '2-year free repairs',
      description: 'Seams, buttons, zips and linings, mended by the people who made them.',
      shortDesc: 'Mended by original makers.',
      id: 'repairs'
    },
    {
      icon: Compass,
      title: 'Traceable materials',
      shortTitle: 'Traceable materials',
      description: 'Every mill, tannery and workshop named on the product page.',
      shortDesc: 'Named heritage mills.',
      id: 'materials'
    }
  ];

  return (
    <section className="border-y border-white/10 bg-[#0d0d0d] py-3.5 sm:py-12 overflow-hidden relative">
      {/* Mobile view: Steady speed continuous marquee */}
      <div className="sm:hidden relative w-full overflow-hidden">
        {/* Subtle luxury edge scrims */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />

        <div className="flex animate-marquee-steady items-center gap-3">
          {[...items, ...items].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`mobile-marquee-${idx}`}
                onClick={() => onLearnMore?.(item.id)}
                className="flex items-center gap-2.5 shrink-0 bg-[#141414] active:bg-[#1f1f1f] px-3.5 py-2 rounded-xs border border-white/10 cursor-pointer select-none transition-colors"
              >
                <div className="text-[#ff5c33] shrink-0">
                  <Icon size={16} strokeWidth={1.75} />
                </div>
                <div className="flex items-center gap-1.5 whitespace-nowrap text-xs">
                  <span className="font-semibold tracking-wide text-white">
                    {item.shortTitle}
                  </span>
                  <span className="text-neutral-500 text-[10px]">·</span>
                  <span className="text-neutral-400 font-light text-[11px]">
                    {item.shortDesc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop / Tablet view: 4-col responsive grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-8 lg:gap-10 px-4 sm:px-8">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onLearnMore?.(item.id)}
              className="flex sm:flex-col sm:space-y-3 cursor-pointer group"
            >
              <div className="text-neutral-400 group-hover:text-[#ff5c33] transition-colors shrink-0">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-white group-hover:text-neutral-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light mt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
