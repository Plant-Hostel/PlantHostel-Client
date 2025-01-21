import React from "react";
import Logo from "@/images/MainLogo.svg";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen pt-[100px]">
      <Logo />
      {children}
    </div>
  );
}
