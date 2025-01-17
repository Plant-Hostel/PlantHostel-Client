import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const ButtonVariants = cva(
  "rounded-[6px] h-[52px] flex items-center justify-center text-[14px]",
  {
    variants: {
      size: {
        large: "w-[350px]",
        small: "w-[74px]",
      },
      color: {
        primary: "bg-primary",
        disabled: "bg-[#D8DFDD]",
        social: "bg-[#FAFAFA]",
      },
      textcolor: {
        primary: "text-primary",
        white: "text-white",
        sub02: "text-sub02",
      },
    },
    defaultVariants: {
      size: "large",
      color: "primary",
      textcolor: "white",
    },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "large" | "small";
  color?: "primary" | "disabled" | "social";
  textcolor?: "primary" | "white" | "sub02";
  className?: string;
}

export default function CommonButton({
  size,
  color,
  textcolor,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(ButtonVariants({ size, color, textcolor }), className)}
      {...props}
    />
  );
}
