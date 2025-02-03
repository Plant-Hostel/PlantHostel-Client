import Image from "next/image";
import React from "react";
import PlantImg from "@/images/main/PlantImg.png";
import PlantBadge from "./PlantBadge";
import Watering from "@/images/main/Watering.svg";
import Watch from "@/images/main/Watch.svg";
import WaterDrop from "@/images/main/Waterdrop.svg";
import Electric from "@/images/main/Electric.svg";
import Temperature from "@/images/main/Temperature.svg";

export default function ExistPlantSlide() {
  return (
    <div className="bg-pal03 p-5">
      <div className="flex gap-6 justify-between mb-6">
        <div className="flex gap-[2px] flex-col">
          <div className="flex gap-1 items-center">
            <span className="text-[24px] text-white">튼튼이</span>
            <span className="bg-pal02 text-[11px] rounded-[20px] px-2 py-[2px] text-white">
              매우양호
            </span>
          </div>
          <span className="text-white">몬트리안 여인초 올리브나무</span>
        </div>
        <div className="rounded-full h-[60px] w-[60px]">
          <Image src={PlantImg} alt="프로필" width={60} height={60} />
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <div className="flex gap-2">
          <PlantBadge className="flex-1">
            <Watering />
            평균 주1~2회
            <Watch />
          </PlantBadge>
          <PlantBadge className="w-[129px]">
            <WaterDrop />
            40~70%
          </PlantBadge>
        </div>
        <div className="flex justify-between">
          <PlantBadge className="w-[149px]">
            <Electric />
            반양지
          </PlantBadge>
          <PlantBadge className="w-[149px]">
            <Temperature />
            15~24°C
          </PlantBadge>
        </div>
      </div>
    </div>
  );
}
