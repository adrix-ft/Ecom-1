import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ArrowUpRight, ShieldCheck, Check } from 'lucide-react';
import { formatINR } from '../utils/format';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 15000;
  const shippingFee = 800;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const discountAmount = Math.round(subtotal * discount);
  const total = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError(null);
    if (promoCode.trim().toUpperCase() === 'WINTER' || promoCode.trim().toUpperCase() === 'ADRIX10') {
      setDiscount(0.1);
      setPromoApplied(true);
    } else {
      setPromoError('Try promo code "ADRIX10" for 10% off');
    }
  };

  const handleSimulateCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = `ADX-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(orderId);
    setOrderComplete(true);
    setTimeout(() => {
      onClearCart();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111111] text-white shadow-2xl flex flex-col border-l border-white/10">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-base font-bold tracking-[0.16em] uppercase font-display text-white">
                Your Bag
              </h2>
              <span className="text-xs text-neutral-400 font-mono">
                ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition-colors p-1 cursor-pointer"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-6 py-4 bg-[#161616] border-b border-white/10 text-xs">
            {remainingForFreeShipping > 0 ? (
              <p className="text-neutral-300 mb-2">
                Add <span className="font-bold text-white">{formatINR(remainingForFreeShipping)}</span> more for complimentary carbon-neutral shipping.
              </p>
            ) : (
              <p className="text-emerald-400 font-medium mb-2 flex items-center gap-1.5">
                <Check size={14} /> You have unlocked free carbon-neutral delivery!
              </p>
            )}
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#f3f0ea] h-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderComplete ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-950 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-800">
                  <Check size={28} />
                </div>
                <h3 className="text-xl font-bold font-display text-white">Order Confirmed</h3>
                <p className="text-xs text-neutral-300 leading-relaxed max-w-xs mx-auto">
                  Thank you. Your order <span className="font-mono text-white font-bold">{orderNumber}</span> has been routed to our workshop in Porto.
                </p>
                <div className="p-4 bg-[#181818] rounded-xs border border-white/10 text-left text-xs space-y-2 mt-4">
                  <div className="flex justify-between text-neutral-400">
                    <span>Order reference:</span>
                    <span className="font-mono text-white">{orderNumber}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Delivery window:</span>
                    <span className="text-white">2–4 business days</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Warranty:</span>
                    <span className="text-emerald-400">2-Year Free Repairs active</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setOrderComplete(false);
                    setIsCheckingOut(false);
                    onClose();
                  }}
                  className="mt-6 w-full py-3.5 bg-white text-black font-bold text-xs tracking-[0.16em] uppercase rounded-xs cursor-pointer"
                >
                  Continue Browsing
                </button>
              </div>
            ) : isCheckingOut ? (
              <form onSubmit={handleSimulateCheckout} className="space-y-4 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="font-bold uppercase tracking-wider text-white">Shipping Details</span>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-neutral-400 hover:text-white underline cursor-pointer"
                  >
                    Back to Bag
                  </button>
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    defaultValue="Marguerita Vaillent"
                    className="w-full bg-[#1c1c1c] border border-white/10 px-3 py-2 text-white rounded-xs focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    defaultValue="marguerita@example.com"
                    className="w-full bg-[#1c1c1c] border border-white/10 px-3 py-2 text-white rounded-xs focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1">Delivery Address</label>
                  <input
                    type="text"
                    required
                    defaultValue="42 Lodhi Estate, Near Khan Market"
                    className="w-full bg-[#1c1c1c] border border-white/10 px-3 py-2 text-white rounded-xs focus:border-white focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-neutral-400 mb-1">City</label>
                    <input
                      type="text"
                      required
                      defaultValue="New Delhi"
                      className="w-full bg-[#1c1c1c] border border-white/10 px-3 py-2 text-white rounded-xs focus:border-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1">PIN Code</label>
                    <input
                      type="text"
                      required
                      defaultValue="110003"
                      className="w-full bg-[#1c1c1c] border border-white/10 px-3 py-2 text-white rounded-xs focus:border-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between text-neutral-300 font-bold mb-4">
                    <span>Total due</span>
                    <span className="font-mono text-white">
                      {formatINR(total + (remainingForFreeShipping === 0 ? 0 : shippingFee))}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-white hover:bg-neutral-200 text-black font-bold text-xs tracking-[0.18em] uppercase rounded-xs transition-colors cursor-pointer"
                  >
                    Confirm & Place Order ({formatINR(total + (remainingForFreeShipping === 0 ? 0 : shippingFee))})
                  </button>
                </div>
              </form>
            ) : items.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <p className="text-neutral-400 text-sm font-light">Your shopping bag is empty.</p>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-semibold tracking-widest uppercase text-white underline hover:text-neutral-300 cursor-pointer"
                >
                  Explore the Winter Collection
                </button>
              </div>
            ) : (
              items.map((item, index) => (
                <div key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`} className="flex gap-4 pb-6 border-b border-white/10">
                  <div className="w-20 aspect-[3/4] bg-[#1a1a1a] rounded-xs overflow-hidden shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-sm font-bold text-white font-display">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(index)}
                          className="text-neutral-500 hover:text-red-400 transition-colors p-1 cursor-pointer"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="text-xs text-neutral-400 mt-1 flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block"
                          style={{ backgroundColor: item.selectedColor.hex }}
                        />
                        <span>{item.selectedColor.name}</span>
                        <span>·</span>
                        <span>Size {item.selectedSize}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3">
                      <div className="flex items-center bg-[#181818] border border-white/10 rounded-xs">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="px-2.5 py-1 text-xs text-neutral-400 hover:text-white cursor-pointer"
                        >
                          −
                        </button>
                        <span className="px-2 text-xs font-mono text-white">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="px-2.5 py-1 text-xs text-neutral-400 hover:text-white cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-sm font-bold text-white tabular-nums">
                        {formatINR(item.product.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout CTA */}
          {items.length > 0 && !isCheckingOut && !orderComplete && (
            <div className="p-6 border-t border-white/10 bg-[#141414] space-y-4">
              {/* Promo code toggle */}
              {!promoApplied ? (
                <div>
                  <form onSubmit={handleApplyPromo} className="flex">
                    <input
                      type="text"
                      placeholder="Promo code (try ADRIX10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-[#1c1c1c] border border-white/10 px-3 py-2 text-xs text-white rounded-l-xs uppercase focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase rounded-r-xs cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                  {promoError && (
                    <p className="text-[11px] text-[#ff5c33] mt-1.5">{promoError}</p>
                  )}
                </div>
              ) : (
                <div className="text-xs text-emerald-400 flex justify-between">
                  <span>10% Adrix code applied</span>
                  <span>-{formatINR(discountAmount)}</span>
                </div>
              )}

              {/* Subtotal */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal</span>
                  <span className="font-mono text-white">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Carbon-neutral shipping</span>
                  <span className="text-neutral-200">
                    {remainingForFreeShipping === 0 ? 'FREE' : formatINR(shippingFee)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span className="font-mono">
                    {formatINR(total + (remainingForFreeShipping === 0 ? 0 : shippingFee))}
                  </span>
                </div>
              </div>

              {/* Repair Promise Badge */}
              <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                <ShieldCheck size={14} className="text-[#ff5c33]" />
                <span>Includes 2 years of free repairs on all garments</span>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-4 bg-[#f3f0ea] hover:bg-white text-black font-bold text-xs tracking-[0.18em] uppercase rounded-xs flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] cursor-pointer"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
