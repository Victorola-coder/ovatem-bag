import React from "react";

export default function Textarea({
  name,
  value,
  onChange,
  className,
  placeholder,
}: TextareaProps) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full min-h-[153px] md:min-h-[180px] bg-background-soft rounded-[24px] p-4
        text-brand-eden placeholder:text-brand-viridianGreen font-aloe text-[16px] 
        resize-none focus:outline-none focus:ring-0 ${className}`}
    />
  );
}
