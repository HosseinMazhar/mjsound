"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import BlogCard from "../common/BlogCard";

export default function BlogCards() {
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
          {Array.from({ length: 10 }).map((_, index) => (
            <BlogCard key={index} />
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