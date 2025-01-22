import CommonButton from "@/components/common/CommonButton";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 justify-between items-center">
      <div className="flex flex-col gap-6 items-center mt-6">
        <div className="flex flex-col items-center">
          <span>
            회원님의 아이디는 <span className="text-primary">happy123</span>
            입니다.
          </span>
          <span className="text-[14px]"> 다시 로그인 해주세요</span>
        </div>
        <span className="text-[14px]">가입일:2024. 10. 11</span>
      </div>
      <CommonButton>로그인</CommonButton>
    </div>
  );
}
