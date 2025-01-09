import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const ButtonVariants = cva("p-5 rounded-[6px] ", {
  variants: {
    size: {
      large: "w-[350px]",
      small: "w-[74px]",
    },
    color: {
      primary: "bg-primary",
      disabled: "bg-disabled",
    },
    textColor: {
      primary: "text-primary",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "large",
    color: "primary",
    textColor: "white",
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "large" | "small";
  color?: "primary" | "disabled";
  textColor?: "primary" | "white";
}

export default function CommonButton({ size, color, ...props }: ButtonProps) {
  return (
    <div>
      <button className={cn(ButtonVariants({ size, color }))} {...props} />
    </div>
  );
}
