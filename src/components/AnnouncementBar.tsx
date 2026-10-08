import React from 'react';

const MESSAGES = [
  'THIRTY-DAY RETURNS, NO QUESTIONS',
  'REPAIRS FREE FOR TWO YEARS',
  'MADE IN PORTUGAL, ITALY & JAPAN',
  'NEW: THE WINTER EDITIONS',
  'CARBON-NEUTRAL DELIVERY WORLDWIDE',
  'COMPLIMENTARY SHIPPING OVER ₹15,000',
];

export const AnnouncementBar: React.FC = () => {
  return (
    <aside aria-label="Store Announcements" className="w-full bg-[#f3f0ea] text-[#1c1a17] text-[10px] md:text-[11px] font-medium tracking-[0.16em] uppercase py-2 overflow-hidden border-b border-[#e4ded3] select-none">
      <div className="flex animate-marquee whitespace-nowrap items-center gap-6">
        {[...MESSAGES, ...MESSAGES].map((msg, idx) => (
          <span key={idx} className="flex items-center gap-6">
            <span>{msg}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3300] inline-block shrink-0" aria-hidden="true" />
          </span>
        ))}
      </div>
    </aside>
  );
};
