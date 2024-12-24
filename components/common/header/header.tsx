"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  className?: string;
}

export function Header(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={cn(
        "header relative h-[74px] w-full lg:h-[100px]",
        props.className,
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-5">
        <h1 className="playball text-[28px]">AyEstate</h1>
        <div
          className={cn(
            "hidden items-center gap-20 lg:flex",
            isOpen &&
              "absolute left-0 top-full z-20 flex w-full flex-col gap-8 border-b bg-white py-4",
          )}
        >
          <ul className={cn("flex items-center gap-8", isOpen && "flex-col")}>
            <li>
              <Link href="/" className="text-base font-semibold text-[#7F879E]">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/properties"
                className="text-base font-semibold text-[#7F879E]"
              >
                Listings
              </Link>
            </li>
            <li>
              <Link
                href="/faqs"
                className="text-base font-semibold text-[#7F879E]"
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-base font-semibold text-[#7F879E]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-base font-semibold text-[#7F879E]"
              >
                About Us
              </Link>
            </li>
          </ul>
          <Link
            href="/contact"
            className="flex h-12 items-center justify-center rounded-xl bg-primary-1 px-6 py-3 font-semibold text-black-111"
          >
            Contact Us
          </Link>
        </div>
        <button
          className="flex h-6 w-6 items-center justify-center lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
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
