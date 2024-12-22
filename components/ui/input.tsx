import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {
  children?: React.ReactNode;
}

export default function Input({ children, className, type, ...props }: Props) {
  return (
    <input
      type={type}
      className={cn(
        type === "checkbox" &&
          "size-6 appearance-none rounded-lg border-[1.5px] border-[#C4C8CC]",
        className,
      )}
      {...props}
    >
      {children}
    </input>
  );
}
