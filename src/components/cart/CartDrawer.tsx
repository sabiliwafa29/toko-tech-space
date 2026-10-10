"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart, Currency } from "./CartContext";
import { sound } from "@/lib/audioEngine";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    updateQuantity,
    currency,
    setCurrency,
    formatPrice,
    clearCart,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<"cart" | "processing" | "success">("cart");

  const totalUSD = items.reduce((acc, i) => acc + i.product.priceUSD * i.quantity, 0);
  const totalIDR = items.reduce((acc, i) => acc + i.product.priceIDR * i.quantity, 0);
  const totalETH = items.reduce((acc, i) => acc + i.product.priceETH * i.quantity, 0);

  const handleCheckout = () => {
    sound.playClick(1800);
    setCheckoutStep("processing");
    setTimeout(() => {
      sound.playClick(2400);
      setCheckoutStep("success");
      clearCart();
    }, 1800);
  };

  const closeDrawer = () => {
    sound.playClick(900);
    setIsCartOpen(false);
    setTimeout(() => setCheckoutStep("cart"), 300);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
          />

          {/* Slide-out Drawer */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#0F1117] border-l border-white/10 text-white shadow-2xl flex flex-col justify-between"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block">
                  Quantum Fleet Cart
                </span>
                <h2 className="font-display text-xl font-bold">Selected Hardware</h2>
              </div>
              <button
                type="button"
                onClick={closeDrawer}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors font-mono text-sm"
              >
                ✕
              </button>
            </div>

            {/* Currency Selector Bar */}
            <div className="px-6 py-3 bg-black/30 border-b border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-white/50">VALUATION CURRENCY:</span>
              <div className="flex gap-2">
                {(["IDR", "USD", "ETH"] as Currency[]).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      sound.playClick(1300);
                      setCurrency(c);
                    }}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      currency === c
                        ? "bg-cyan-500 text-black font-bold"
                        : "text-white/70 hover:text-white bg-white/5"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {checkoutStep === "processing" ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                  <div className="w-12 h-12 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                  <p className="font-mono text-sm text-cyan-300">
                    CRYPTOGRAPHIC NODE TELEMETRY VERIFYING...
                  </p>
                  <p className="text-xs text-white/50">Broadcasting fleet allocation order to Jakarta & Tokyo hubs.</p>
                </div>
              ) : checkoutStep === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                  <div className="w-14 h-14 rounded-full bg-cyan-400/20 border border-cyan-400 text-cyan-300 flex items-center justify-center text-2xl font-mono">
                    ✓
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">ORDER TRANSMITTED</h3>
                  <p className="font-mono text-xs text-cyan-400">BATCH HASH: #KTX-7749-DISPATCH</p>
                  <p className="text-sm text-white/70">
                    Your hardware units have been reserved in our cleanroom inventory. Telemetry dispatched to your communicator.
                  </p>
                  <button
                    type="button"
                    onClick={closeDrawer}
                    className="mt-4 px-6 py-2.5 rounded-full bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 transition-colors"
                  >
                    Return to Fleet
                  </button>
                </div>
              ) : items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 text-white/40">
                  <span className="font-mono text-2xl mb-2">∅</span>
                  <p className="font-mono text-sm uppercase tracking-wider">No Hardware in Fleet Cart</p>
                  <p className="text-xs text-white/40 mt-1">Select an instrument from our catalog.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.product.slug}-${item.selectedFinish}`}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 flex gap-4 items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-14 h-14 rounded-lg bg-cover bg-center shrink-0 border border-white/10"
                        style={{ backgroundImage: `url('${item.product.heroImage}')` }}
                      />
                      <div>
                        <h4 className="font-display font-medium text-sm leading-tight">
                          {item.product.name}
                        </h4>
                        <span className="font-mono text-[11px] text-cyan-400 block mt-0.5">
                          {item.product.code} • {item.selectedFinish}
                        </span>
                        {item.customEngraving && (
                          <span className="text-[10px] text-amber-400 font-mono block">
                            ENGRAVE: &ldquo;{item.customEngraving}&rdquo;
                          </span>
                        )}
                        <span className="font-mono text-xs font-semibold text-white mt-1 block">
                          {formatPrice(
                            item.product.priceUSD * item.quantity,
                            item.product.priceIDR * item.quantity,
                            item.product.priceETH * item.quantity
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 bg-black/40 rounded border border-white/10 font-mono text-xs">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.slug, item.selectedFinish, -1)}
                          className="px-2 py-1 text-white/60 hover:text-white"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.slug, item.selectedFinish, 1)}
                          className="px-2 py-1 text-white/60 hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.product.slug, item.selectedFinish)}
                        className="text-[11px] font-mono text-red-400 hover:underline"
                      >
                        [REMOVE]
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && checkoutStep === "cart" && (
              <div className="p-6 border-t border-white/10 bg-black/40 space-y-4">
                <div className="flex items-baseline justify-between font-mono">
                  <span className="text-white/60 text-xs">TOTAL VALUATION:</span>
                  <span className="text-lg font-bold text-cyan-300">
                    {formatPrice(totalUSD, totalIDR, totalETH)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  className="w-full py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold text-sm tracking-wide uppercase transition-all shadow-[0_0_20px_rgba(0,245,255,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>EXECUTE QUANTUM CHECKOUT</span>
                  <span>→</span>
                </button>
                <div className="text-[10px] text-center font-mono text-white/40">
                  SECURE MULTI-AGENT SETTLEMENT PROTOCOL (IDR / USD / ETH)
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
