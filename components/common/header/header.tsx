import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export function Header(props: Props) {
  return (
    <div className={cn("header h-[100px] w-full", props.className)}>
      <div className="container mx-auto flex h-full items-center justify-between px-3">
        <h1 className="playball text-[28px]">AyEstate</h1>
        <div className="hidden items-center gap-20 lg:flex">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/" className="text-base font-semibold text-[#7F879E]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="text-base font-semibold text-[#7F879E]">
                Listings
              </Link>
            </li>
            <li>
              <Link href="/" className="text-base font-semibold text-[#7F879E]">
                Company
              </Link>
            </li>
            <li>
              <Link href="/" className="text-base font-semibold text-[#7F879E]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" className="text-base font-semibold text-[#7F879E]">
                About Us
              </Link>
            </li>
          </ul>
          <button className="flex h-12 items-center justify-center rounded-xl bg-primary-1 px-6 py-3 font-semibold text-black-111">
            Contact Us
          </button>
        </div>
        <button className="flex h-6 w-6 items-center justify-center lg:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7H21"
              stroke="#151B33"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 12H21"
              stroke="#151B33"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 17H21"
              stroke="#151B33"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
