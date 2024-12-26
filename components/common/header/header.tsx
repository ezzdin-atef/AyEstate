"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import CustomLink from "../custom-link/custom-link";

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
        <div className="playball text-[28px]">AyEstate</div>
        <div
          className={cn(
            "hidden items-center gap-20 lg:flex",
            isOpen &&
              "absolute left-0 top-full z-20 flex w-full flex-col gap-8 border-b bg-white py-4",
          )}
        >
          <ul className={cn("flex items-center gap-8", isOpen && "flex-col")}>
            <li>
              <CustomLink
                title="Home page"
                href="/"
                className="text-base font-semibold text-[#7F879E]"
              >
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink
                title="Properties page"
                href="/properties"
                className="text-base font-semibold text-[#7F879E]"
              >
                Listings
              </CustomLink>
            </li>
            <li>
              <CustomLink
                title="FAQs page"
                href="/faqs"
                className="text-base font-semibold text-[#7F879E]"
              >
                Company
              </CustomLink>
            </li>
            <li>
              <CustomLink
                title="Blog page"
                href="/blog"
                className="text-base font-semibold text-[#7F879E]"
              >
                Blog
              </CustomLink>
            </li>
            <li>
              <CustomLink
                title="About page"
                href="/about"
                className="text-base font-semibold text-[#7F879E]"
              >
                About Us
              </CustomLink>
            </li>
          </ul>
          <CustomLink
            title="Contact page"
            href="/contact"
            className="flex h-12 items-center justify-center rounded-xl bg-primary-1 px-6 py-3 font-semibold text-black-111"
          >
            Contact Us
          </CustomLink>
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
