import React from "react";
import ArrowRight from "@/images/ArrowRight.svg";
import Link from "next/link";

export default function NonExistPlant() {
  //반려식물 등록 전
  return (
    <div className="flex justify-between items-center bg-pal02 p-4 text-white rounded-md">
      <div>
        <span className="text-[13px] font-PretendardRegular">
          아직 등록된 반려식물이 없어요
        </span>
        <br />
        <span className="text-[14px] ">반려식물 등록하러 가기</span>
      </div>
      <Link href={"/"}>
        <ArrowRight />
      </Link>
    </div>
  );
}
