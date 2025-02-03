import Link from "next/link";
import React from "react";
import StoreSlide from "./common/StoreSlide";

export default function PopularButlerItem() {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xl">식집사 인기 필수템</span>
        <Link href={"/"} className="text-[13px] text-sub02">
          전체보기
        </Link>
      </div>
      <StoreSlide />
    </div>
  );
}
