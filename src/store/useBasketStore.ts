import { create } from "zustand";

interface BasketProduct {
  id: number;
  title: string;
  priceAfterDiscount: number;
  priceBeforeDiscount: number;
  imageURL: string;
  category: string;
  description: string;
  quantity: number;
}

interface BasketState {
  basket: BasketProduct[];
  addToBasket: (product: Omit<BasketProduct, "quantity">) => void;
  removeFromBasket: (productId: number) => void;
  getQuantityById: (productId: number) => number;
}

export const useBasketStore = create<BasketState>((set, get) => ({
  basket: [],
  addToBasket: (product) => {
    const basket = get().basket;
    const existing = basket.find((item) => item.id === product.id);
    if (existing) {
      set({
        basket: basket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ basket: [...basket, { ...product, quantity: 1 }] });
    }
  },
  removeFromBasket: (productId) => {
    const basket = get().basket;
    const existing = basket.find((item) => item.id === productId);
    if (existing?.quantity === 1) {
      set({ basket: basket.filter((item) => item.id !== productId) });
    } else {
      set({
        basket: basket.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      });
    }
  },
  getQuantityById: (productId) =>
    get().basket.find((item) => item.id === productId)?.quantity || 0,
}));
