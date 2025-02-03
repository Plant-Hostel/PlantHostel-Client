import React from "react";
import Map from "@/images/main/Map.svg";

export default function BannerSection() {
  return (
    <div className="flex justify-between bg-gradient-to-r from-[#4B70BF] to-[#80539E] p-6 rounded-md h-[156px]">
      <div className="flex flex-col justify-between">
        <div className="font-PretendardSemibold text-white text-[18px]">
          나의 반려식물,
          <br />
          안전하게 케어하려면?
        </div>
        <button className="w-[88px] justify-center px-4 py-2 bg-whiteTransparent rounded-[100px] flex gap-2 items-center text-white text-sm">
          병원예약
        </button>
      </div>
      <div className="flex justify-center items-center">
        <Map />
      </div>
    </div>
  );
}
