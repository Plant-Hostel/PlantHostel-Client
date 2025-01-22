import CommonHeader from "@/components/common/CommonHeader";
import React from "react";
import BackArrowLeftBtn from "@/components/common/BackArrowLeftBtn";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CommonHeader
        left={<BackArrowLeftBtn />}
        center="회원가입"
        className="mb-5"
      />
      {children}
    </div>
  );
}
