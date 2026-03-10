"use client";

import clsx from "clsx";
import { useState } from "react";
import { EyeIcon } from "../svgs";

export default function Input({
  id,
  error,
  placeholder,
  type = "text",
  multiline,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <fieldset>
      <div className="relative">
        {multiline ? (
          <textarea
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            placeholder={placeholder}
            className={clsx(
              "w-full bg-background-soft p-4 rounded-[12px] text-brand-eden placeholder:text-brand-viridianGreen font-aloe text-base leading-[22.4px] focus:outline-none focus:ring-0",
              error && "border-1 border-red-500"
            )}
          />
        ) : (
          <input
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            type={inputType}
            placeholder={placeholder}
            autoComplete="off"
            className={clsx(
              "w-full bg-background-soft h-full p-4 rounded-[12px] text-brand-eden placeholder:text-brand-viridianGreen font-aloe text-base leading-[22.4px] focus:outline-none focus:ring-0",
              error && "border-1 border-red-500",
              type === "password" && "pr-12"
            )}
          />
        )}
        {type === "password" && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-viridianGreen hover:text-brand-eden transition-colors"
          >
            <EyeIcon
              fill={showPassword ? "var(--eden)" : "var(--viridian_green)"}
            />
          </span>
        )}
      </div>
      {error && (
        <p className="text-red-500 font-aloe text-xs leading-[22.4px] mt-1">
          {error}
        </p>
      )}
    </fieldset>
  );
}
