import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  as?: "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}

export default function Heading(props: Props) {
  if (props.as === "h2") {
    return (
      <h2
        className={cn(
          "mb-3 text-base font-bold capitalize text-[#1B2124] lg:mx-auto lg:mb-6 lg:max-w-[945px] lg:text-[32px] lg:leading-[42px]",
          props.className,
        )}
      >
        {props.children}
      </h2>
    );
  }

  if (props.as === "h3") {
    return (
      <h3
        className={cn(
          "relative mb-3 pl-5 text-base font-bold capitalize text-[#1B2124] before:absolute before:left-0 before:top-1/2 before:mr-[6px] before:block before:h-[2px] before:w-[14px] before:-translate-y-1/2 before:transform before:bg-[#F59A74] before:content-[''] lg:mx-auto lg:mb-6 lg:max-w-[945px] lg:text-xl",
          props.className,
        )}
      >
        {props.children}
      </h3>
    );
  }
  return null;
}
