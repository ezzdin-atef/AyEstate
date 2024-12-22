import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React from "react";

interface BaseProps {
  children: React.ReactNode;
  size?: "icon";
  variant?: "primary" | "outline" | "tertiary" | "link";
  className?: string;
  as?: React.ElementType;
}

type LinkAsProps = BaseProps &
  LinkProps & {
    as?: typeof Link;
  };

type Props = BaseProps | LinkAsProps;

export default function Button({
  as,
  variant,
  size,
  children,
  className,
  ...props
}: Props) {
  const ElementAs = as || "button";
  return (
    <ElementAs
      className={cn(
        "",
        variant === "primary" &&
          "flex h-12 items-center justify-center rounded-xl bg-primary-1 px-6 py-3 font-semibold text-black-111",
        variant === "outline" &&
          "flex h-12 items-center justify-center rounded-xl border border-black px-6 py-3 font-semibold text-black",
        variant === "link" &&
          "flex h-12 items-center justify-center gap-2 font-normal text-black",
        size === "icon" &&
          "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#E4E9EE] lg:h-11 lg:w-11",
        className, 
      )}
      {...props}
    >
      {children}
    </ElementAs>
  );
}
