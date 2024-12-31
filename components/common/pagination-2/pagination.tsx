import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export default function PaginationStyle2(props: Props) {
  return (
    <div
      className={cn(
        "mx-auto flex items-center gap-4 py-14 lg:pb-[77px] lg:pt-[66px]",
        props.className,
      )}
    >
      <button
        aria-label="Previous Page"
        className="hidden h-11 w-11 items-center justify-center"
      >
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0002 13.28L5.65355 8.9333C5.14022 8.41997 5.14022 7.57997 5.65355 7.06664L10.0002 2.71997"
            stroke="#1D9E34"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="flex items-center gap-3">
        <button
          aria-label="page"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E4E9EE] text-[#1D9E34]"
        >
          1
        </button>
        <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E4E9EE] text-[#818B9C]">
          2
        </button>
        <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E4E9EE] text-[#818B9C]">
          3
        </button>
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E4E9EE] text-[#818B9C]">
          ...
        </div>
        <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E4E9EE] text-[#818B9C]">
          274
        </button>
      </div>

      <button
        aria-label="Next Page"
        className="flex h-11 w-11 items-center justify-center"
      >
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.99978 13.28L10.3464 8.9333C10.8598 8.41997 10.8598 7.57997 10.3464 7.06664L5.99978 2.71997"
            stroke="#1D9E34"
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
