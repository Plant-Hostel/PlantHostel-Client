import React from "react";

type HeaderProps = {
  left?: React.ReactNode | string;
  center?: React.ReactNode | string;
  right?: React.ReactNode | string;
  className?: string;
};

export default function CommonHeader({
  left,
  center,
  right,
  className,
}: HeaderProps) {
  return (
    <div
      className={`relative flex justify-between py-[14px] font-PretendardSemibold text-[20px] h-[56px] ${className}`}
    >
      <div className="flex-1">{left}</div>
      {/* 항상 중앙 위치 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        {center}
      </div>
      <div className="flex-1 text-right">{right}</div>
    </div>
  );
}
