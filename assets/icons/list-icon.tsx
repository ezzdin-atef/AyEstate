import React, { SVGProps } from "react";

export function ListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.5 5.83337H17.5"
        stroke="#0B0F0E"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M2.5 10H17.5"
        stroke="#0B0F0E"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M2.5 14.1666H17.5"
        stroke="#0B0F0E"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}
