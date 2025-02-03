"use client";

import { useRouter } from "next/navigation";
import React from "react";

type UnitProps = {
  icon: React.ReactNode;
  title: string;
  rink: string;
};

export default function CategoryUnit({ icon, title, rink }: UnitProps) {
  const router = useRouter();
  return (
    <button
      className="w-[106px] h-[72px] flex flex-col items-center justify-center rounded-md bg-whiteTransparent shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] backdrop-blur-[16px]"
      onClick={() => {
        router.push(`${rink}`);
      }}
    >
      {icon}
      <span className="text-sm">{title}</span>
    </button>
  );
}
