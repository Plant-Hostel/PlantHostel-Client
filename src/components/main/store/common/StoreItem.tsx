import React from "react";
import PlantImage from "@/images/main/StorePlant.png";
import Image from "next/image";

export default function StoreItem() {
  return (
    <div className="w-[106px] text-[12px] text-sm">
      <div>
        <Image src={PlantImage} alt="이미지" />
      </div>
      <span className="overflow-hidden text-ellipsis break-words line-clamp-2 leading-[18px] tracking-tight">
        <span className="font-PretendardSemibold">[원예가드닝]</span>{" "}
        <span className="text-sub01">
          모종삽 3종 세트 + 사은품 2종 택 1 증정
        </span>
      </span>
      <div>
        <span className="text-pal08">5%</span>
        <span className="text-sub01">12,900원</span>
      </div>

      <span className="text-disabled">25,800원</span>
    </div>
  );
}
