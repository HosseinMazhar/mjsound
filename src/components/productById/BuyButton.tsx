"use client";
import { useBasketStore } from "@/store/useBasketStore";
import { ShoppingBag, Plus, Minus } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  priceAfterDiscount: number;
  priceBeforeDiscount: number;
  imageURL: string[];
  category: string;
  description: string;
  isNew?: boolean;
  suggestForMoharam?: boolean;
  details?: { key: string; value: string }[];
  rate?: string;
  soldNumber?: number;
}

interface BuyButtonProps {
  product: Product;
}

const BuyButton = ({ product }: BuyButtonProps) => {
  const addToBasket = useBasketStore((state) => state.addToBasket);
  const removeFromBasket = useBasketStore((state) => state.removeFromBasket);
  const quantity = useBasketStore((state) => state.getQuantityById(product.id));

  const baseProduct = {
    ...product,
    imageURL: product.imageURL.length ? product.imageURL[0] : "notFound.png",
  };

  if (quantity > 0) {
    return (
      <div className="flex flex-row-reverse items-center gap-3">
        <button
          className="w-[40px] h-[40px] bg-purple-500 hover:bg-purple-600 text-white rounded-xl flex justify-center items-center"
          onClick={() => removeFromBasket(product.id)}
        >
          <Minus size={20} />
        </button>
        <span className="text-white font-lalezar text-lg w-6 text-center">
          {quantity}
        </span>
        <button
          className="w-[40px] h-[40px] bg-purple-500 hover:bg-purple-600 text-white rounded-xl flex justify-center items-center"
          onClick={() => addToBasket(baseProduct)}
        >
          <Plus size={20} />
        </button>
        {!!quantity && (
          <Link
            href={"/basket"}
            className="px-4 rounded-2xl hover:bg-yellow-600 h-[40px] bg-yellow-500 flex justify-center items-center font-lalezar text-white text-xs"
          >
            رفتن به صفحه خرید
          </Link>
        )}
      </div>
    );
  }

  return (
    <button
      className="w-[100px] h-[60px] flex justify-center items-center bg-purple-500 rounded-2xl cursor-pointer hover:bg-purple-600"
      onClick={() => addToBasket(baseProduct)}
    >
      <ShoppingBag className="text-white" size={24} />
    </button>
  );
};

export default BuyButton;
