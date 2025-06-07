"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Header from "../common/Header";
import ProductCard from "../common/ProductCard";

export default function DiscountsContainer() {
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
    <div
      id="discount-section"
      className="w-full flex flex-col justify-start items-center pt-[80px] xl:pt-[120px] gap-[30px]"
    >
      <div className="w-full flex justify-between items-center">
        <Header>
          <h2 className="lg:text-5xl text-4xl font-lalezar text-yellow-500">
            تخفیف ها
          </h2>
        </Header>
        <div className="flex gap-2 cursor-pointer">
          <p className="font-lalezar text-yellow-500 text-sm lg:text-lg cursor-pointer">
            مشاهده بیشتر
          </p>
          <ChevronLeft className="text-yellow-500 cursor-pointer" size={25} />
        </div>
      </div>
      <div className="relative w-full">
        <button
          className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
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
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
        <button
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
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
