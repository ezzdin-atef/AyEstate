import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  className?: string;
}

export default function PriceRangeButton(props: Props) {
  return (
    <button
      className={cn(
        "rounded-xl border border-[#E4E9EE] px-4 py-[11px]",
        props.className,
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
