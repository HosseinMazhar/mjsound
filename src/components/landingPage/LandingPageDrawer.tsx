"use client";

import { useState } from "react";
import Drawer from "../common/Drawer";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function LandingPageDrawer() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <Menu
        className="cursor-pointer text-white xl:hidden"
        size={30}
        onClick={() => setDrawerOpen(true)}
      />

      <Drawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <h2 className="w-full text-right font-lalezar text-yellow-500 text-2xl pb-8">
          دسته بندی ها
        </h2>
        <div className="w-full flex flex-col items-right gap-5">
          <Link
            href={"/products?page=1&category=آمپلی فایر"}
            className="font-lalezar text-white text-xl text-right"
          >
            آمپلی فایر
          </Link>
          <Link
            href={"/products?page=1&category=باند"}
            className="font-lalezar text-white text-xl text-right"
          >
            باند، اسپیکر و بلندگو
          </Link>
          <Link
            href={"/products?page=1&category=میکروفن"}
            className="font-lalezar text-white text-xl text-right"
          >
            میکروفن
          </Link>
          <Link
            href={"/products?page=1&category=میکسر"}
            className="font-lalezar text-white text-xl text-right"
          >
            میکسر
          </Link>
          <Link
            href={"/products?page=1&category=پاورمیکسر"}
            className="font-lalezar text-white text-xl text-right"
          >
            پاور میکسر
          </Link>
          <Link
            href={"/products?page=1&category=فیش آلات"}
            className="font-lalezar text-white text-xl text-right"
          >
            فیش آلات و اتصالات
          </Link>
          <Link
            href={"/products?page=1&category=کابل"}
            className="font-lalezar text-white text-xl text-right"
          >
            کابل
          </Link>
          <Link
            href={"/"}
            className="font-lalezar text-white text-xl text-right"
          >
            بلاگ
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
