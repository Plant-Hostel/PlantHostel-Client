import CommonHeader from "@/components/common/CommonHeader";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CommonHeader center="로그인" />
      {children}
    </div>
  );
}
