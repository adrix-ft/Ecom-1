import React from 'react';
import { JournalArticle } from '../types';
import { X, Calendar, Clock } from 'lucide-react';

interface JournalArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const JournalArticleModal: React.FC<JournalArticleModalProps> = ({
  article,
  onClose
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-[#131313] border border-white/15 rounded-xs p-5 sm:p-12 z-10 text-white shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-400">
            <span className="text-[#ff5c33]">{article.tag}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {article.readTime}
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:flex items-center gap-1">
              <Calendar size={12} />
              {article.date}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 cursor-pointer"
            aria-label="Close article"
          >
            <X size={20} />
          </button>
        </div>

        {/* Hero image in modal */}
        <div className="aspect-[16/9] w-full rounded-xs overflow-hidden mb-8 bg-[#1f1f1f]">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-[1.08] mb-4 text-white">
          {article.title}
        </h1>

        <p className="text-lg text-neutral-300 font-light italic mb-8 pb-6 border-b border-white/10">
          "{article.summary}"
        </p>

        {/* Body Paragraphs */}
        <div className="space-y-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
          {article.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Byline */}
        <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
          <div>
            Written by <strong className="text-white">{article.author}</strong> for Adrix Studio Journal
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-white uppercase font-bold tracking-wider hover:underline cursor-pointer"
          >
            Back to Journal
          </button>
        </div>
      </div>
    </div>
  );
};
