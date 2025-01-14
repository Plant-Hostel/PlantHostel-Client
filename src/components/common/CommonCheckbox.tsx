"use client";

import React, { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";
import Check from "@/images/Check.svg";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const CommonCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="relative w-5 h-5">
            <input
              type="checkbox"
              id={id}
              ref={ref}
              className={cn(
                "peer appearance-none w-full h-full bg-white border border-stroke rounded-full checked:bg-primary"
              )}
              {...props}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Check className="stroke-stroke peer-checked:stroke-white " />
            </div>
          </div>

          <label htmlFor={id}>{label}</label>
        </div>
      </div>
    );
  }
);

CommonCheckbox.displayName = "CommonCheckbox";

export default CommonCheckbox;
