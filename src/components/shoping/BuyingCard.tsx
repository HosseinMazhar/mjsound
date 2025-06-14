"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useBasketStore } from "@/store/useBasketStore";

interface BuyingCardProps {
  id: number;
  title: string;
  priceAfterDiscount: number;
  priceBeforeDiscount: number;
  imageURL: string | undefined;
  category: string;
  quantity: number;
  description: string;
}

export default function BuyingCard({
  id,
  title,
  priceAfterDiscount,
  priceBeforeDiscount,
  imageURL,
  category,
  quantity,
  description,
}: BuyingCardProps) {

  const addToBasket = useBasketStore((state) => state.addToBasket);
  const removeFromBasket = useBasketStore((state) => state.removeFromBasket);
  const baseProduct = {
    id,
    title,
    priceAfterDiscount,
    priceBeforeDiscount,
    category,
    quantity,
    description,
    imageURL: imageURL ? imageURL : "notFound.png",
  };

  return (
    <div className="w-[250px] gap-2 cursor-pointer p-4 rounded-xl h-[350px] bg-neutral-800 hover:bg-neutral-700 shrink-0 flex flex-col justify-start group">
      <div className="w-full aspect-square overflow-hidden rounded-2xl relative shrink-0">
        {priceAfterDiscount !== priceBeforeDiscount && (
          <div className="absolute z-10 w-[50px] top-0 left-0 rounded-tl-2xl rounded-br-2xl h-[30px] bg-yellow-500 flex justify-center items-center text-black text-sm">
            {(
              ((priceBeforeDiscount - priceAfterDiscount) * 100) /
              priceBeforeDiscount
            ).toFixed()}
            %
          </div>
        )}
        <Image
          src={imageURL ? `/${imageURL}` : "/notFound.png"}
          width={250}
          height={250}
          className="cursor-pointer w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 z-0"
          alt={`${category}/${title}`}
          priority={!imageURL}
          loading={imageURL ? "lazy" : undefined}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between items-center gap-2">
        <div className="w-full flex flex-col justify-start items-start gap-1">
          <p className="text-white w-full text-right text-sm font-bold">
            {title}
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-1">
          <p className="text-neutral-400 text-xs line-through">
            {(quantity * priceBeforeDiscount).toLocaleString()} تومان
          </p>
          <p className="text-yellow-500 font-bold">
            {(quantity * priceAfterDiscount).toLocaleString()} تومان
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center gap-3">
        <button
          className="w-[20px] h-[20px] cursor-pointer bg-purple-500 hover:bg-purple-600 text-white rounded-xl flex justify-center items-center"
          onClick={() => removeFromBasket(id)}
        >
          <Minus size={15} />
        </button>
        <span className="text-white font-lalezar text-xs w-6 text-center">
          {quantity}
        </span>
        <button
          className="w-[20px] h-[20px] cursor-pointer bg-purple-500 hover:bg-purple-600 text-white rounded-xl flex justify-center items-center"
          onClick={() => addToBasket({ ...baseProduct })}
        >
          <Plus size={15} />
        </button>
      </div>
    </div>
  );
}
