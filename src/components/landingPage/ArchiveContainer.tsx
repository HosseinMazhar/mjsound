"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

export default function ArchiveContainer() {
  return (
    <div className="w-full flex justify-center gap-8 items-center flex-col lg:flex-row mt-[50px]">
      <div className="w-full lg:w-1/3 aspect-video relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true, el: `.custom-pagination-Archive.black` }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          speed={2000}
        >
          <SwiperSlide>
            <Image
              src={"/archive/1.jpg"}
              alt="resume-confrence-room"
              width={400}
              height={200}
              className="w-full aspect-video object-cover rounded-2xl border-4 border-yellow-500"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/archive/2.jpg"}
              alt="resume-confrence-room"
              width={400}
              height={200}
              className="w-full aspect-video object-cover rounded-2xl border-4 border-yellow-500"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/archive/3.jpg"}
              alt="resume-confrence-room"
              width={400}
              height={200}
              className="w-full aspect-video object-cover rounded-2xl border-4 border-yellow-500"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/archive/4.jpg"}
              alt="resume-confrence-room"
              width={400}
              height={200}
              className="w-full aspect-video object-cover rounded-2xl border-4 border-yellow-500"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full lg:w-2/3 font-lalezar flex flex-col justify-strat items-center gap-2">
        <p className="w-full text-center lg:text-right text-2xl text-yellow-500 lg:text-4xl">صدایی که شنیده می‌شود، کیفیتی که می‌ماند</p>
        <p className="w-full text-center lg:text-right text-neutral-300 lg:text-xl">
          فروشگاه ام‌جی ساند با سال‌ها تجربه در زمینه فروش و نصب تجهیزات صوتی،
          آماده ارائه خدمات تخصصی به سالن‌های همایش، کنفرانس‌ها و مراسم‌های رسمی
          است. ما با بهره‌گیری از برندهای معتبر و تیم فنی مجرب، بهترین کیفیت صدا
          را تضمین می‌کنیم. نصب حرفه‌ای، تنظیم دقیق سیستم صوتی متناسب با ابعاد و
          آکوستیک فضا، از نقاط قوت ماست. تصاویر زیر نمونه‌ای از پروژه‌های موفق
          ما هستند که رضایت کامل مشتریان را به همراه داشته‌اند. با ام‌جی ساند،
          خیالتان از برگزاری بی‌نقص همایش راحت باشد.
        </p>
      </div>
    </div>
  );
}
