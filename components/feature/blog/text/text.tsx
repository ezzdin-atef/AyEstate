import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Text(props: Props) {
  return (
    <p
      className={cn(
        "mb-2 text-sm text-[#7F879E] lg:mx-auto lg:mb-[21px] lg:max-w-[945px] lg:text-lg",
        props.className,
      )}
    >
      {props.children}
    </p>
  );
}
