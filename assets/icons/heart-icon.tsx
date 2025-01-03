import React, { SVGProps } from "react";

export const HeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.31 10.405C6.14 10.465 5.86 10.465 5.69 10.405C4.24 9.91005 1 7.84505 1 4.34505C1 2.80005 2.245 1.55005 3.78 1.55005C4.69 1.55005 5.495 1.99005 6 2.67005C6.505 1.99005 7.315 1.55005 8.22 1.55005C9.755 1.55005 11 2.80005 11 4.34505C11 7.84505 7.76 9.91005 6.31 10.405Z"
        stroke="#0B0F0E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
