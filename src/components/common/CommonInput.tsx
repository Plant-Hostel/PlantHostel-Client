import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";

const InputVariants = cva(
  "relative w-[350px] py-[17px] px-[16px] rounded-[6px] pr-12 border focus:outline-none flex items-center",
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
  id: string;
  label: string;
  type?: "text" | "password" | "email";
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  color?: "primary" | "default" | "warning" | "blank";
  icon?: ReactNode;
}

const CommonInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      type = "text",
      placeholder = "",
      errorMessage,
      color,
      icon,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1 mb-5">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="relative">
          <input
            id={id}
            className={cn(InputVariants({ color }))}
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...props}
          />
          {icon && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              {icon}
            </div>
          )}
        </div>

        {errorMessage && (
          <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
    );
  }
);

CommonInput.displayName = "CommonInput";
export default CommonInput;
