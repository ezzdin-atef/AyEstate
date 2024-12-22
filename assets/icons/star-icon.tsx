import React, { SVGProps } from "react";

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.2974 2.6326L11.6174 5.2726C11.7974 5.6401 12.2774 5.9926 12.6824 6.0601L15.0749 6.4576C16.6049 6.7126 16.9649 7.8226 15.8624 8.9176L14.0024 10.7776C13.6874 11.0926 13.5149 11.7001 13.6124 12.1351L14.1449 14.4376C14.5649 16.2601 13.5974 16.9651 11.9849 16.0126L9.74243 14.6851C9.33743 14.4451 8.66993 14.4451 8.25743 14.6851L6.01493 16.0126C4.40993 16.9651 3.43493 16.2526 3.85493 14.4376L4.38743 12.1351C4.48493 11.7001 4.31243 11.0926 3.99743 10.7776L2.13743 8.9176C1.04243 7.8226 1.39493 6.7126 2.92493 6.4576L5.31743 6.0601C5.71493 5.9926 6.19493 5.6401 6.37493 5.2726L7.69493 2.6326C8.41493 1.2001 9.58493 1.2001 10.2974 2.6326Z"
        fill="#FFA439"
      />
    </svg>
  );
}
