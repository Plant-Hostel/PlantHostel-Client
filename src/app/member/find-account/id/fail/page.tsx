"use client";

import CommonButton from "@/components/common/CommonButton";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col flex-1 justify-between items-center w-full">
      <div className="flex flex-col gap-6 items-center mt-6">
        <div className="flex flex-col items-center">
          <span>일치하는 정보가 없습니다</span>
          <span className="text-sm">회원가입 후 이용이 가능합니다</span>
        </div>
      </div>
      <CommonButton
        onClick={() => {
          router.push("/join");
        }}
      >
        회원가입
      </CommonButton>
    </div>
  );
}
