import type { Metadata } from "next";
import "./globals.css";
import SvgLogo from "@/components/common/SVGLogo";
import Link from "next/link";
import LandingPageDrawer from "@/components/landingPage/LandingPageDrawer";
import Instagram from "@/components/icons/InstagramIcon";
import Facebook from "@/components/icons/Facebook";
import Telegram from "@/components/icons/Telegram";
import ShoppingBagIcon from "@/components/common/ShoppingBagIcon";

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
      <body className="w-full flex flex-col justify-center items-center bg-neutral-900 gap-5">
        <nav className="w-full max-w-[1600px] h-[80px] fixed top-0 flex flex-row-reverse justify-between items-center px-[16px] xl:px-[40px] z-50 bg-neutral-900">
          <div className="flex gap-2 items-center">
            <ShoppingBagIcon />
            <LandingPageDrawer />
          </div>
          <ul className="hidden xl:flex flex-row-reverse justify-center items-center gap-7">
            <Link
              href={"/products?page=1&category=آمپلی فایر"}
              className="font-lalezar text-white text-xl hover:border-b-4 hover:border-yellow-500"
            >
              آمپلی فایر
            </Link>
            <Link
              href={"/products?page=1&category=باند"}
              className="font-lalezar text-white text-xl hover:border-b-4 hover:border-yellow-500"
            >
              باند، اسپیکر و بلندگو
            </Link>
            <Link
              href={"/products?page=1&category=میکروفن"}
              className="font-lalezar text-white text-xl hover:border-b-4 hover:border-yellow-500"
            >
              میکروفن
            </Link>
            <Link
              href={"/products?page=1&category=میکسر"}
              className="font-lalezar text-white text-xl hover:border-b-4 hover:border-yellow-500"
            >
              میکسر
            </Link>
            <Link
              href={"/products?page=1&category=پاورمیکسر"}
              className="font-lalezar text-white text-xl hover:border-b-4 hover:border-yellow-500"
            >
              پاور میکسر
            </Link>
            <Link
              href={"/products?page=1&category=فیش آلات"}
              className="font-lalezar text-white text-xl hover:border-b-4 hover:border-yellow-500"
            >
              فیش آلات و اتصالات
            </Link>
            <Link
              href={"/products?page=1&category=کابل"}
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
        <footer className="w-full flex justify-center items-center max-w-[1600px] xl:px-[40px] px-[16px]">
          <div className="w-full flex py-3 px-5 lg:py-5 lg:px-7 bg-yellow-500 rounded-2xl flex-col justify-center items-center gap-5">
            <div className="w-full grid grid-cols-6 gap-7 lg:gap-2">
              <div className="col-span-6 lg:col-span-2 flex flex-col justify-start items-start">
                <SvgLogo width="70px" height="70px" color="#451a03" />
                <h1 className="font-lalezar text-4xl text-amber-950">
                  ام جی ساند
                </h1>
                <p className="font-lalezar text-amber-700 text-sm pt-3">
                  فروشگاه اینترنتی ما تخصصی‌ترین مرجع خرید تجهیزات صوتی باکیفیت
                  و اصل است. با ارائه‌ی محصولات متنوع از برندهای معتبر، تجربه‌ای
                  مطمئن و حرفه‌ای از خرید آنلاین را فراهم کرده‌ایم. پشتیبانی
                  متعهد و مشاوره تخصصی، همراه همیشگی شما در انتخاب بهترین
                  تجهیزات است. ما به رضایت مشتریان و ارتقای کیفیت صدا در هر
                  سطحی، پایبندیم.
                </p>
              </div>
              <div className="col-span-6 md:col-span-3 lg:col-span-2 w-full flex flex-col lg:items-center items-right gap-1">
                <div className="w-fit flex flex-col items-right gap-1">
                  <p className="font-lalezar text-amber-950 text-right text-2xl pb-3">
                    دسته بندی
                  </p>
                  <Link
                    href={"/products?page=1&category=آمپلی فایر"}
                    className="font-lalezar text-amber-700 text-right"
                  >
                    آمپلی فایر
                  </Link>
                  <Link
                    href={"/products?page=1&category=باند"}
                    className="font-lalezar text-amber-700 text-right"
                  >
                    باند، اسپیکر و بلندگو
                  </Link>
                  <Link
                    href={"/products?page=1&category=میکروفن"}
                    className="font-lalezar text-amber-700 text-right"
                  >
                    میکروفن
                  </Link>
                  <Link
                    href={"/products?page=1&category=میکسر"}
                    className="font-lalezar text-amber-700 text-right"
                  >
                    میکسر
                  </Link>
                  <Link
                    href={"/products?page=1&category=پاورمیکسر"}
                    className="font-lalezar text-amber-700 text-right"
                  >
                    پاور میکسر
                  </Link>
                  <Link
                    href={"/products?page=1&category=فیش آلات"}
                    className="font-lalezar text-amber-700 text-right"
                  >
                    فیش آلات و اتصالات
                  </Link>
                  <Link
                    href={"/products?page=1&category=کابل"}
                    className="font-lalezar text-amber-700 text-right"
                  >
                    کابل
                  </Link>
                  <Link
                    href={"/"}
                    className="font-lalezar text-amber-700 text-right"
                  >
                    بلاگ
                  </Link>
                </div>
              </div>
              <div className="col-span-6 md:col-span-3 lg:col-span-2 w-full flex flex-col items-start justify-start">
                <p className="font-lalezar text-amber-950 text-right text-2xl pb-3">
                  ما را دنبال کنید
                </p>
                <div className="w-full flex justify-start items-center gap-2">
                  <Link
                    href={"/"}
                    className="p-2 w-fit aspect-square flex justify-center items-center bg-[#451a03] rounded-full"
                  >
                    <Instagram />
                  </Link>
                  <Link
                    href={"/"}
                    className="p-2 w-fit aspect-square flex justify-center items-center bg-[#451a03] rounded-full"
                  >
                    <Facebook />
                  </Link>
                  <Link
                    href={"/"}
                    className="p-2 w-fit aspect-square flex justify-center items-center bg-[#451a03] rounded-full"
                  >
                    <Telegram />
                  </Link>
                </div>
                <p className="pt-8 font-lalezar text-amber-950 text-2xl">
                  شماره تماس
                </p>
                <p className="font-lalezar text-amber-700">09363114135</p>
              </div>
            </div>
            <p className="font-lalezar text-sm text-yellow-800">
              Copyright © 2025 MJ Sound
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
