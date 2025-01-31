import React from "react";

export default function MainTitle({
  title,
  className,
}: {
  title: string;
  className: string;
}) {
  return <div className={`text-xl ${className}`}>{title}</div>;
}
