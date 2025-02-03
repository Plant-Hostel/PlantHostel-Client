import React from "react";

export default function PlantBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`px-4 py-2 bg-whiteTransparent rounded-[100px] flex gap-2 items-center text-white text-sm ${className}`}
    >
      {children}
    </div>
  );
}
