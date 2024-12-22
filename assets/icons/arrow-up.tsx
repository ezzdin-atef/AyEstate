import React, { SVGProps } from "react";

export function ArrowUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.96004 7.52502L6.70004 4.26502C6.31504 3.88002 5.68504 3.88002 5.30004 4.26502L2.04004 7.52502"
        stroke="#0B0F0E"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
