"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";
import { sound } from "@/lib/audioEngine";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedFinish: string;
  customEngraving?: string;
}

export type Currency = "IDR" | "USD" | "ETH";

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, finishId?: string, engraving?: string) => void;
  removeItem: (productSlug: string, finishId: string) => void;
  updateQuantity: (productSlug: string, finishId: string, delta: number) => void;
  clearCart: () => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  formatPrice: (usd: number, idr: number, eth: number) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [currency, setCurrency] = useState<Currency>("IDR");
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("kinetix_cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("kinetix_cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (product: Product, finishId?: string, engraving?: string) => {
    sound.playClick(1500);
    const chosenFinish = finishId || product.finishes[0]?.id || "default";

    setItems((prev) => {
      const existing = prev.find(
        (i) => i.product.slug === product.slug && i.selectedFinish === chosenFinish
      );
      if (existing) {
        return prev.map((i) =>
          i.product.slug === product.slug && i.selectedFinish === chosenFinish
            ? { ...i, quantity: i.quantity + 1, customEngraving: engraving || i.customEngraving }
            : i
        );
      }
      return [...prev, { product, quantity: 1, selectedFinish: chosenFinish, customEngraving: engraving }];
    });
    setIsCartOpen(true);
  };

  const removeItem = (productSlug: string, finishId: string) => {
    sound.playClick(800);
    setItems((prev) =>
      prev.filter(
        (i) => !(i.product.slug === productSlug && i.selectedFinish === finishId)
      )
    );
  };

  const updateQuantity = (productSlug: string, finishId: string, delta: number) => {
    sound.playClick(1200);
    setItems((prev) =>
      prev
        .map((i) => {
          if (i.product.slug === productSlug && i.selectedFinish === finishId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (usd: number, idr: number, eth: number) => {
    if (currency === "IDR") {
      return `Rp ${idr.toLocaleString("id-ID")}`;
    }
    if (currency === "ETH") {
      return `${eth.toFixed(2)} ETH`;
    }
    return `$${usd.toLocaleString("en-US")}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        currency,
        setCurrency,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        formatPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
