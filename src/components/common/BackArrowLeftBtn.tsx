"use client";

import React from "react";
import ArrowLeft from "@/images/ArrowLeft.svg";
import { useRouter } from "next/navigation";

//Header에서 뒤로가기 아이콘
export default function BackArrowLeftBtn() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      <ArrowLeft />
    </button>
  );
}
