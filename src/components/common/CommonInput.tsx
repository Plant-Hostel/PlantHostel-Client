import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import React, { InputHTMLAttributes, ReactNode } from "react";

const InputVariants = cva(
  "w-[350px] py-[17px] px-[16px] rounded-[6px] border focus:outline-none flex items-center",
  {
    variants: {
      color: {
        default: "border-#DEE3E1",
        blank: "border-#DEE3E1 text-sub02",
        primary: "border-primary",
        warning: "border-warning text-warning",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: "primary" | "default" | "warning" | "blank";
  icon?: ReactNode;
}

export default function CommonInput({ color, icon, ...props }: InputProps) {
  return (
    <div className="relative">
      <input className={cn(InputVariants({ color }))} {...props} />
      {icon && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
      )}
    </div>
  );
}
