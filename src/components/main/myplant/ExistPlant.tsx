"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ExistPlantSlide from "./ExistPlantSlide";

export default function ExistPlant() {
  //반려식물 등록 후
  return (
    <div className="mb-5">
      <Swiper
        slidesPerView={1}
        loop={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mainswiper"
      >
        <SwiperSlide>
          <ExistPlantSlide />
        </SwiperSlide>
        <SwiperSlide>
          <ExistPlantSlide />
        </SwiperSlide>
        <SwiperSlide>
          <ExistPlantSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
