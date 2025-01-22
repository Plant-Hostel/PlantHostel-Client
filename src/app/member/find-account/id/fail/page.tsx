import CommonButton from "@/components/common/CommonButton";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 justify-between items-center w-full">
      <div className="flex flex-col gap-6 items-center mt-6">
        <div className="flex flex-col items-center">
          <span>일치하는 정보가 없습니다</span>
          <span className="text-[14px]">회원가입 후 이용이 가능합니다</span>
        </div>
      </div>
      <CommonButton>회원가입</CommonButton>
    </div>
  );
}
