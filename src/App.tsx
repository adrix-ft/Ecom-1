/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, ProductColor, CartItem, JournalArticle, ProductCategory } from './types';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductCard } from './components/ProductCard';
import { EditorialStory } from './components/EditorialStory';
import { ReviewsSection } from './components/ReviewsSection';
import { JournalSection } from './components/JournalSection';
import { PreFooterBanner } from './components/PreFooterBanner';
import { Footer } from './components/Footer';
import { FullCatalog } from './components/FullCatalog';
import { ProductDetail } from './components/ProductDetail';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { MaterialsModal } from './components/MaterialsModal';
import { JournalArticleModal } from './components/JournalArticleModal';
import { ContactModal } from './components/ContactModal';
import { AccountModal } from './components/AccountModal';
import { ScrollReveal } from './components/ScrollReveal';

type AppView = 'home' | 'shop' | 'collections' | 'product-detail' | 'journal' | 'about';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [catalogFilter, setCatalogFilter] = useState<ProductCategory | 'All'>('All');

  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Seed with 1 bestseller item so the cart has initial state, or start empty
    const halden = PRODUCTS[0];
    return [
      {
        product: halden,
        selectedColor: halden.colors[0],
        selectedSize: '48',
        quantity: 1
      }
    ];
  });
  const [wishlistIds, setWishlistIds] = useState<string[]>(['sundby-cashmere-crew']);

  // Modals & Drawers
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [materialsOpen, setMaterialsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedProduct]);

  // Cart Handlers
  const handleAddToCart = (product: Product, color: ProductColor, size: string, quantity: number) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor.name === color.name && item.selectedSize === size
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, selectedColor: color, selectedSize: size, quantity }];
    });
    setCartOpen(true);
  };

  const handleQuickAdd = (product: Product) => {
    if (product.soldOut) return;
    const defaultColor = product.colors[0] || { name: 'Default', hex: '#000' };
    const defaultSize = product.sizes[0] || 'Standard';
    handleAddToCart(product, defaultColor, defaultSize, 1);
  };

  const handleUpdateCartQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = quantity;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  // Navigation Handlers
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
  };

  const handleNavigateHome = () => {
    setSelectedProduct(null);
    setCurrentView('home');
  };

  const handleNavigateShop = (category: ProductCategory | 'All' = 'All') => {
    setSelectedProduct(null);
    setCatalogFilter(category);
    setCurrentView('shop');
  };

  const handleNavigateCollections = () => {
    setSelectedProduct(null);
    setCurrentView('collections');
  };

  const handleNavigateJournal = () => {
    setSelectedProduct(null);
    setCurrentView('journal');
  };

  const handleNavigateAbout = () => {
    setSelectedProduct(null);
    setCurrentView('about');
  };

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  // Subset for "New this season" (4 products from Screenshot 1)
  const newThisSeason = PRODUCTS.slice(0, 4);

  // Subset for "The ones people come back for" (3 products from Screenshot 1)
  const mostWanted = [PRODUCTS[0], PRODUCTS[1], PRODUCTS[3]];

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-[#f7f7f7] selection:bg-[#ff5c33] selection:text-white">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Navigation Bar */}
      <Header
        cartCount={cartTotalCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAccount={() => setAccountOpen(true)}
        onNavigateHome={handleNavigateHome}
        onNavigateShop={() => handleNavigateShop('All')}
        onNavigateCollections={handleNavigateCollections}
        onNavigateJournal={handleNavigateJournal}
        onNavigateAbout={handleNavigateAbout}
        currentView={currentView}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {/* VIEW 1: HOME */}
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              onShopClick={() => handleNavigateShop('All')}
              onJournalClick={handleNavigateJournal}
            />

            {/* Value Propositions */}
            <ValueProps onLearnMore={() => setMaterialsOpen(true)} />

            {/* Category Showcase: Four Categories */}
            <CategoryGrid
              onSelectCategory={(cat) => handleNavigateShop(cat)}
              onViewAllCollections={handleNavigateCollections}
            />

            {/* Just Landed — New this season */}
            <section className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 overflow-hidden">
              <ScrollReveal>
                <div className="flex items-end justify-between mb-6 sm:mb-10 gap-4">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#ff5c33] block mb-1.5 sm:mb-2">
                      JUST LANDED
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
                      New this season
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 sm:hidden">
                      Swipe →
                    </span>
                    <button
                      type="button"
                      onClick={() => handleNavigateShop('All')}
                      className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-neutral-300 hover:text-white pb-0.5 border-b border-neutral-700 hover:border-white transition-all cursor-pointer shrink-0"
                    >
                      ALL
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Horizontal snap rail on mobile, grid on desktop */}
              <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-4 sm:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                {newThisSeason.map((product, idx) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={idx}
                    isCarouselItem={true}
                    onSelect={handleSelectProduct}
                    onQuickAdd={handleQuickAdd}
                    isWishlisted={wishlistIds.includes(product.id)}
                    onToggleWishlist={handleToggleWishlist}
                  />
                ))}
              </div>
            </section>

            {/* How We Make Things — Editorial Atelier & Stats */}
            <EditorialStory onReadPolicy={() => setMaterialsOpen(true)} />

            {/* Most Wanted — The ones people come back for */}
            <section className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 overflow-hidden">
              <ScrollReveal>
                <div className="flex items-end justify-between mb-6 sm:mb-10 gap-4">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#ff5c33] block mb-1.5 sm:mb-2">
                      MOST WANTED
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
                      People come back for
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 sm:hidden">
                      Swipe →
                    </span>
                    <button
                      type="button"
                      onClick={() => handleNavigateShop('All')}
                      className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-neutral-300 hover:text-white pb-0.5 border-b border-neutral-700 hover:border-white transition-all cursor-pointer shrink-0"
                    >
                      ALL
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Horizontal snap rail on mobile, 3-col grid on desktop */}
              <div className="flex sm:grid sm:grid-cols-3 overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-4 sm:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                {mostWanted.map((product, idx) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={idx}
                    isCarouselItem={true}
                    onSelect={handleSelectProduct}
                    onQuickAdd={handleQuickAdd}
                    isWishlisted={wishlistIds.includes(product.id)}
                    onToggleWishlist={handleToggleWishlist}
                  />
                ))}
              </div>
            </section>

            {/* Testimonials: 4.9 Average From 1,240 Reviews */}
            <ReviewsSection />

            {/* From The Journal — Notes on making and keeping */}
            <JournalSection
              onSelectArticle={(art) => setSelectedArticle(art)}
              onViewAllEntries={handleNavigateJournal}
            />

            {/* Pre-Footer Callout Banner */}
            <PreFooterBanner
              onShopEverything={() => handleNavigateShop('All')}
              onTalkToUs={() => setContactOpen(true)}
            />
          </>
        )}

        {/* VIEW 2: SHOP / FULL CATALOG (SCREENSHOT 2) */}
        {currentView === 'shop' && (
          <>
            <FullCatalog
              onSelectProduct={handleSelectProduct}
              onQuickAdd={handleQuickAdd}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              initialCategory={catalogFilter}
            />
            <PreFooterBanner
              onShopEverything={() => handleNavigateShop('All')}
              onTalkToUs={() => setContactOpen(true)}
            />
          </>
        )}

        {/* VIEW 3: COLLECTIONS */}
        {currentView === 'collections' && (
          <div className="py-12">
            <CategoryGrid
              onSelectCategory={(cat) => handleNavigateShop(cat)}
              onViewAllCollections={() => handleNavigateShop('All')}
            />
            <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
              <ScrollReveal>
                <div className="p-8 bg-[#141414] border border-white/10 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">Made in Named Mills</h3>
                    <p className="text-xs text-neutral-400 mt-1 max-w-lg font-light leading-relaxed">
                      Every piece in our collections comes with permanent free repair support and a traceable origin from Biella to Kyoto.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMaterialsOpen(true)}
                    className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xs cursor-pointer shrink-0"
                  >
                    View Mill Directory
                  </button>
                </div>
              </ScrollReveal>
            </div>
            <PreFooterBanner
              onShopEverything={() => handleNavigateShop('All')}
              onTalkToUs={() => setContactOpen(true)}
            />
          </div>
        )}

        {/* VIEW 4: PRODUCT DETAIL (SCREENSHOT 3) */}
        {currentView === 'product-detail' && selectedProduct && (
          <>
            <ProductDetail
              product={selectedProduct}
              onBack={() => setCurrentView('shop')}
              onAddToCart={handleAddToCart}
              isWishlisted={wishlistIds.includes(selectedProduct.id)}
              onToggleWishlist={handleToggleWishlist}
              onOpenSizeGuide={() => setSizeGuideOpen(true)}
            />

            {/* Related pieces */}
            <section className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10 overflow-hidden">
              <div className="flex items-end justify-between mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                  More from {selectedProduct.category}
                </h2>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 sm:hidden">
                  Swipe →
                </span>
              </div>
              <div className="flex sm:grid sm:grid-cols-3 overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-4 sm:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                {PRODUCTS.filter((p) => p.category === selectedProduct.category && p.id !== selectedProduct.id)
                  .slice(0, 3)
                  .map((product, idx) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={idx}
                      isCarouselItem={true}
                      onSelect={handleSelectProduct}
                      onQuickAdd={handleQuickAdd}
                      isWishlisted={wishlistIds.includes(product.id)}
                      onToggleWishlist={handleToggleWishlist}
                    />
                  ))}
              </div>
            </section>
          </>
        )}

        {/* VIEW 5: JOURNAL */}
        {currentView === 'journal' && (
          <div className="py-12">
            <JournalSection
              onSelectArticle={(art) => setSelectedArticle(art)}
              onViewAllEntries={() => {}}
            />
            <ReviewsSection />
            <PreFooterBanner
              onShopEverything={() => handleNavigateShop('All')}
              onTalkToUs={() => setContactOpen(true)}
            />
          </div>
        )}

        {/* VIEW 6: ABOUT */}
        {currentView === 'about' && (
          <div className="py-12">
            <EditorialStory onReadPolicy={() => setMaterialsOpen(true)} />
            <ScrollReveal>
              <section className="py-20 px-6 sm:px-8 max-w-5xl mx-auto border-t border-white/10 text-neutral-300 font-light leading-relaxed space-y-6 text-sm sm:text-base">
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                  The Philosophy of Keeping
                </h2>
                <p>
                  In 2016, Adrix began with a simple counter-cultural idea: what if a fashion studio made only twelve pieces, never introduced seasonal sales, and committed to mending every stitch for free?
                </p>
                <p>
                  We do not use synthetic polyester linings to hide raw seams. We do not use plastic buttons that crack under steam. And we never sign exclusivity deals that prevent mills from telling you what their fabric costs.
                </p>
                <p>
                  When you buy from Adrix, your name is entered into our Porto archive ledger. If your coat loses a button in 2030, write to us. We still have the thread.
                </p>
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => setMaterialsOpen(true)}
                    className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xs cursor-pointer"
                  >
                    Read Detailed Materials Policy
                  </button>
                </div>
              </section>
            </ScrollReveal>
            <PreFooterBanner
              onShopEverything={() => handleNavigateShop('All')}
              onTalkToUs={() => setContactOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Light Cream Footer */}
      <Footer
        onSelectCategory={(cat) => handleNavigateShop(cat)}
        onNavigateShop={() => handleNavigateShop('All')}
        onNavigateJournal={handleNavigateJournal}
        onNavigateAbout={handleNavigateAbout}
        onOpenCart={() => setCartOpen(true)}
        onOpenContact={() => setContactOpen(true)}
        onOpenFaq={() => setMaterialsOpen(true)}
      />

      {/* Drawers & Modals */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        products={wishlistedProducts}
        onRemoveWishlist={handleToggleWishlist}
        onSelectProduct={handleSelectProduct}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={handleSelectProduct}
      />

      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />

      <MaterialsModal
        isOpen={materialsOpen}
        onClose={() => setMaterialsOpen(false)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <AccountModal
        isOpen={accountOpen}
        onClose={() => setAccountOpen(false)}
        onOpenRepairs={() => {
          setAccountOpen(false);
          setContactOpen(true);
        }}
      />

      <JournalArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
