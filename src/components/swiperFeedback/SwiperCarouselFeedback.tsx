"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import FeedbackCard from "./FeedbackCard";

interface Slide {
  comment: string
  userName: string
  avatar: string
}

interface SwiperCarouselProps {
  slides: Slide[];
}

export default function SwiperCarouselFeedback({
  slides,
}: SwiperCarouselProps) {
  return (
    <div className="w-full relative rounded-2xl bg-yellow-500 py-7 px-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true, el: `.custom-pagination.black` }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        speed={2000}
        className="rounded-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full lg:h-[120px] flex justify-center items-center">
              <FeedbackCard userName={slide.userName} comment={slide.comment} avatar={slide.avatar} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`custom-pagination black text-center`}></div>
    </div>
  );
}
