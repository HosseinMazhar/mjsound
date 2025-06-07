"use client";

import { ChevronDown, MapPinned, Phone } from "lucide-react";

export default function ButtonsContainer() {
  const handleScroll = () => {
    const target = document.getElementById("discount-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full max-w-[1600px] flex flex-row-reverse justify-between items-center absolute bottom-10 z-40 px-[16px] xl:px-[40px]">
      <button
        className="size-[56px] rounded-full flex justify-center items-center cursor-pointer"
        onClick={handleScroll}
      >
        <ChevronDown className="text-yellow-500 animate-bounce" />
      </button>
      <div className="gap-2 flex flex-row-reverse">
        <button className="rounded-full flex flex-row-reverse justify-center items-center border cursor-pointer border-yellow-500 px-2 gap-1 font-lalezar hover:text-black hover:bg-yellow-500 text-yellow-500">
          <span>نشانی</span>
          <MapPinned />
        </button>
        <button className="size-[40px] rounded-full flex justify-center items-center bg-yellow-500 cursor-pointer">
          <Phone fill="#000000" />
        </button>
      </div>
    </div>
  );
}
