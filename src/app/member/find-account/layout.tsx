import CommonHeader from "@/components/common/CommonHeader";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CommonHeader center="아이디 비밀번호 찾기" className="mb-[72px]" />
      {children}
    </div>
  );
}
