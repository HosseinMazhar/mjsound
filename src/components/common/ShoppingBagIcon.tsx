"use client";

import { useBasketStore } from "@/store/useBasketStore";
import { CircleX, Minus, Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ShoppingBagIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const basket = useBasketStore((state) => state.basket);
  const addToBasket = useBasketStore((state) => state.addToBasket);
  const removeFromBasket = useBasketStore((state) => state.removeFromBasket);

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => setAnimateIn(true), 10);
    } else {
      setAnimateIn(false);
    }
  }, [isModalOpen]);

  return (
    <div className="relative">
      <div
        className="cursor-pointer"
        onClick={() => setIsModalOpen((prev) => !prev)}
      >
        <ShoppingBag className="text-white" size={25} />
        {!!basket.length && (
          <div className="absolute size-[22px] -top-3 -right-3 flex justify-center items-center bg-yellow-500 rounded-full text-[8px]">
            {basket.length > 99 ? "99+" : basket.length}
          </div>
        )}
      </div>

      {isModalOpen && !!basket.length && (
        <div
          dir="ltr"
          onClick={(e) => e.stopPropagation()}
          className={`absolute w-[250px] px-2 py-2 h-[300px] bg-neutral-900/50 backdrop-blur-md rounded-r-2xl rounded-bl-2xl -right-[225px] top-[30px] border border-white/20 shadow-lg z-10 
          transition-all duration-300 ease-in-out 
          ${
            animateIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="w-full h-full relative">
            <CircleX
              className="z-10 absolute top-4 left-4 text-white size-6 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            />
            <Link
              href={"/basket"}
              className="absolute px-3 py-2 bg-yellow-500 right-5 bottom-3 text-xs text-white rounded-xl font-lalezar hover:bg-yellow-600"
            >
              رفتن به صفحه خرید
            </Link>
            <div className="w-full h-full max-h-full overflow-y-auto flex flex-col justify-start items-center gap-6 py-12">
              {[...basket].map((b, index) => (
                <div key={index} className={`w-full px-2 shrink-0`}>
                  <p className="text-right w-full font-lalezar text-white">
                    {b.title}
                  </p>
                  <div className="w-full flex flex-row-reverse justify-start items-center gap-2">
                    <p className="text-right font-lalezar text-yellow-500 text-sm">
                      {(b.priceAfterDiscount * b.quantity).toLocaleString()}
                    </p>
                    <p className="text-right font-lalezar text-yellow-500 text-sm">
                      تومان
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      className="w-[20px] h-[20px] cursor-pointer bg-purple-500 hover:bg-purple-600 text-white rounded-xl flex justify-center items-center"
                      onClick={() => removeFromBasket(b.id)}
                    >
                      <Minus size={15} />
                    </button>
                    <span className="text-white font-lalezar text-xs w-6 text-center">
                      {b.quantity}
                    </span>
                    <button
                      className="w-[20px] h-[20px] cursor-pointer bg-purple-500 hover:bg-purple-600 text-white rounded-xl flex justify-center items-center"
                      onClick={() =>
                        addToBasket({
                          ...b,
                          imageURL: b.imageURL.length
                            ? b.imageURL[0]
                            : "notFound.png",
                        })
                      }
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingBagIcon;
