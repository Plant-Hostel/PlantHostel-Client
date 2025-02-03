"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import StoreItems from "./StoreItems";

export default function StoreSlide() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        loop={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <StoreItems />
        </SwiperSlide>
        <SwiperSlide>
          <StoreItems />
        </SwiperSlide>
        <SwiperSlide>
          <StoreItems />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
