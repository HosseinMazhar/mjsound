"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Header from "../common/Header";
import ProductCard from "../common/ProductCard";
import products from "@/app/datas/products.json";

export default function MoharamProducts() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const startScrolling = (direction: "left" | "right") => {
    stopScrolling();
    scrollInterval.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += direction === "left" ? -10 : 10;
      }
    }, 10);
  };

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };
  return (
    <div className="w-full flex flex-col justify-start items-center gap-[30px]">
      <div className="w-full flex justify-center md:justify-between items-center">
        <Header>
          <h2 className="lg:text-4xl text-xl font-lalezar text-yellow-500">
            پیشنهادی برای ایام سوگواری
          </h2>
        </Header>
      </div>
      <div className="relative w-full">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          onMouseDown={() => startScrolling("left")}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
        >
          <ChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="w-full flex justify-start items-center gap-4 max-w-full overflow-x-auto scrollbar-hide"
        >
          {products
            .filter((product) => !!product.suggestForMoharam)
            .map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                priceAfterDiscount={product.priceAfterDiscount}
                priceBeforeDiscount={product.priceBeforeDiscount}
                imageURL={
                  product.imageURL.length ? product.imageURL[0] : undefined
                }
                category={product.category}
              />
            ))}
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          onMouseDown={() => startScrolling("right")}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
