import React from "react";
import Logo from "@/images/MainLogo.svg";
import CommonButton from "@/components/common/CommonButton";

export default function Page() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen pt-[100px]">
      <Logo />
      <div className="flex flex-col flex-1 justify-between items-center w-full">
        <div className="flex flex-col gap-6 items-center mt-6">
          <div className="flex flex-col items-center">
            <span>회원님의 비밀번호가 변경되었습니다</span>
            <span className="text-sm"> 다시 로그인 해주세요</span>
          </div>
          <span className="text-sm">가입일:2024. 10. 11</span>
        </div>
        <CommonButton>로그인</CommonButton>
      </div>
    </div>
  );
}
