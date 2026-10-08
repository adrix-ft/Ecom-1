import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onNavigateHome: () => void;
  onNavigateShop: () => void;
  onNavigateCollections: () => void;
  onNavigateJournal: () => void;
  onNavigateAbout: () => void;
  currentView: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAccount,
  onNavigateHome,
  onNavigateShop,
  onNavigateCollections,
  onNavigateJournal,
  onNavigateAbout,
  currentView
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Left: Navigation Links (Desktop) & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/80 hover:text-white p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className="hidden md:flex items-center gap-8 text-[12px] font-medium tracking-[0.18em] uppercase text-neutral-300">
            <button
              type="button"
              onClick={onNavigateShop}
              className={`hover:text-white transition-colors cursor-pointer pb-0.5 border-b ${
                currentView === 'shop' ? 'border-white text-white' : 'border-transparent'
              }`}
            >
              SHOP
            </button>
            <button
              type="button"
              onClick={onNavigateCollections}
              className={`hover:text-white transition-colors cursor-pointer pb-0.5 border-b ${
                currentView === 'collections' ? 'border-white text-white' : 'border-transparent'
              }`}
            >
              COLLECTIONS
            </button>
            <button
              type="button"
              onClick={onNavigateJournal}
              className={`hover:text-white transition-colors cursor-pointer pb-0.5 border-b ${
                currentView === 'journal' ? 'border-white text-white' : 'border-transparent'
              }`}
            >
              JOURNAL
            </button>
            <button
              type="button"
              onClick={onNavigateAbout}
              className={`hover:text-white transition-colors cursor-pointer pb-0.5 border-b ${
                currentView === 'about' ? 'border-white text-white' : 'border-transparent'
              }`}
            >
              ABOUT
            </button>
          </nav>
        </div>

        {/* Center: Brand Logo */}
        <div className="flex justify-center flex-1 md:flex-none">
          <button
            type="button"
            onClick={onNavigateHome}
            className="text-2xl sm:text-3xl font-extrabold tracking-[0.26em] text-white font-display uppercase hover:opacity-90 transition-opacity"
            aria-label="Adrix Homepage"
          >
            ADRIX
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 sm:gap-6 text-neutral-200">
          <button
            type="button"
            onClick={onOpenSearch}
            className="hover:text-white transition-colors p-1"
            aria-label="Search catalog"
          >
            <Search size={19} strokeWidth={1.75} />
          </button>

          <button
            type="button"
            onClick={onOpenAccount}
            className="hover:text-white transition-colors p-1"
            aria-label="Customer account"
          >
            <User size={19} strokeWidth={1.75} />
          </button>

          <button
            type="button"
            onClick={onOpenWishlist}
            className="relative hover:text-white transition-colors p-1"
            aria-label="Saved items wishlist"
          >
            <Heart size={19} strokeWidth={1.75} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-[#ff3300] text-white text-[9px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            className="relative hover:text-white transition-colors p-1 flex items-center gap-1.5"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={19} strokeWidth={1.75} />
            {cartCount > 0 && (
              <span className="w-4.5 h-4.5 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-white/10 px-6 py-4 flex flex-col gap-2 text-xs font-semibold tracking-[0.18em] uppercase">
          <button
            type="button"
            onClick={() => {
              onNavigateShop();
              setMobileMenuOpen(false);
            }}
            className="text-left text-neutral-200 hover:text-white py-2.5 border-b border-white/5 cursor-pointer"
          >
            Shop
          </button>
          <button
            type="button"
            onClick={() => {
              onNavigateCollections();
              setMobileMenuOpen(false);
            }}
            className="text-left text-neutral-200 hover:text-white py-2.5 border-b border-white/5 cursor-pointer"
          >
            Collections
          </button>
          <button
            type="button"
            onClick={() => {
              onNavigateJournal();
              setMobileMenuOpen(false);
            }}
            className="text-left text-neutral-200 hover:text-white py-2.5 border-b border-white/5 cursor-pointer"
          >
            Journal
          </button>
          <button
            type="button"
            onClick={() => {
              onNavigateAbout();
              setMobileMenuOpen(false);
            }}
            className="text-left text-neutral-200 hover:text-white py-2.5 cursor-pointer"
          >
            About
          </button>
        </div>
      )}
    </header>
  );
};
