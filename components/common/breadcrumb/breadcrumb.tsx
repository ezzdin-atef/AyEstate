import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
interface Props {
  items: {
    name: string;
    link: string;
  }[];
  currentPage: string;
  className?: string;
}

export default function Breadcrumb(props: Props) {
  return (
    <ul className={cn("flex items-center gap-2", props.className)}>
      {props.items.map((item) => (
        <li
          key={item.link + item.name}
          className="flex items-center gap-2 text-xs lg:text-base"
        >
          <Link href={item.link} className="text-[#1D9E34]">
            {item.name}
          </Link>{" "}
          <svg
            width={12}
            height={13}
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.45508 10.46L7.71508 7.20004C8.10008 6.81504 8.10008 6.18504 7.71508 5.80004L4.45508 2.54004"
              stroke="#818B9C"
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
      ))}
      <li className="flex items-center gap-2 text-xs text-[#0B0F0E] lg:text-base">
        {props.currentPage}
      </li>
    </ul>
  );
}
