import type { Metadata } from "next";
import "./globals.css";
import { ShoppingBag } from "lucide-react";
import SvgLogo from "@/components/common/SVGLogo";
import Link from "next/link";
import LandingPageDrawer from "@/components/landingPage/LandingPageDrawer";

export const metadata: Metadata = {
  title: "فروشگاه ام جی ساند",
  description: "فروشگاه اینترنتی تخصصی تجهیزات صوتی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="w-full flex flex-col justify-center items-center bg-neutral-900">
        <nav className="w-full max-w-[1600px] h-[80px] fixed top-0 flex flex-row-reverse justify-between items-center px-[16px] xl:px-[40px] z-50 bg-neutral-900">
          <div className="flex gap-2 items-center">
            <ShoppingBag className="cursor-pointer text-white" size={25} />
            <LandingPageDrawer />
          </div>
          <ul className="hidden xl:flex flex-row-reverse justify-center items-center gap-7">
            <Link
              href={"/"}
              className="font-lalezar text-white text-xl hover:border-b-4 hover:border-yellow-500"
            >
              آمپلی فایر
            </Link>
            <Link
              href={"/"}
              className="font-lalezar text-white text-xl hover:border-b-4 hover:border-yellow-500"
            >
              باند، اسپیکر و بلندگو
            </Link>
            <Link
              href={"/"}
              className="font-lalezar text-white text-xl hover:border-b-4 hover:border-yellow-500"
            >
              میکروفن
            </Link>
            <Link
              href={"/"}
              className="font-lalezar text-white text-xl hover:border-b-4 hover:border-yellow-500"
            >
              میکسر
            </Link>
            <Link
              href={"/"}
              className="font-lalezar text-white text-xl hover:border-b-4 hover:border-yellow-500"
            >
              پاور میکسر
            </Link>
            <Link
              href={"/"}
              className="font-lalezar text-white text-xl hover:border-b-4 hover:border-yellow-500"
            >
              فیش آلات و اتصالات
            </Link>
            <Link
              href={"/"}
              className="font-lalezar text-white text-xl hover:border-b-4 hover:border-yellow-500"
            >
              کابل
            </Link>
            <Link
              href={"/"}
              className="font-lalezar text-white text-xl hover:border-b-4 hover:border-yellow-500"
            >
              بلاگ
            </Link>
          </ul>
          <SvgLogo width="45px" height="45px" color="#ffffff" />
        </nav>
        <main className="w-full bg-neutral-900 xl:px-[40px] px-[16px] max-w-[1600px]">
          {children}
        </main>
        <footer className="w-full flex justify-center items-center max-w-[1600px]"></footer>
      </body>
    </html>
  );
}
