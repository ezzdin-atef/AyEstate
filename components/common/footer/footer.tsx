import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] py-[50px] text-white lg:pb-0 lg:pt-[100px]">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 gap-[30px] pt-5 lg:grid-cols-6">
          <div className="col-span-2 w-full border-b border-[#2E334B] pb-[30px] lg:border-b-0">
            <h2 className="playball text-[32px]">AyEstate</h2>
            <div className="mt-4 lg:mt-[34px]">
              <p className="text-[#7F879E]">hello.ayestate@example.com</p>
              <p className="text-[#7F879E]">(+1) 2345 6789</p>
            </div>
            <p className="mt-5 flex flex-col text-[#7F879E] lg:mt-6">
              <span>4140 Parker Rd. Allentown,</span>
              <span>New Mexico 31134</span>
            </p>
          </div>
          <div className="w-full">
            <h3 className="mb-4 font-bold text-white lg:mb-8 lg:text-lg">
              Pages
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#7F879E] lg:text-lg">
              <li className="">
                <Link href="#" className="">
                  Listings
                </Link>
              </li>
              <li className="">
                <Link href="#" className="">
                  About us
                </Link>
              </li>
              <li className="">
                <Link href="#" className="">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h3 className="mb-4 font-bold text-white lg:mb-8 lg:text-lg">
              Support
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#7F879E] lg:text-lg">
              <li className="">
                <Link href="#" className="">
                  Properties
                </Link>
              </li>
              <li className="">
                <Link href="#" className="">
                  FAQ
                </Link>
              </li>
              <li className="">
                <Link href="#" className="">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full lg:hidden">
            <h3 className="mb-4 font-bold text-white lg:mb-8 lg:text-lg">
              Legal
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#7F879E] lg:text-lg">
              <li className="">
                <Link href="#" className="">
                  Terms of Services
                </Link>
              </li>
              <li className="">
                <Link href="#" className="">
                  Terms and Condition
                </Link>
              </li>
              <li className="">
                <Link href="#" className="">
                  Complaints Process
                </Link>
              </li>
              <li className="">
                <Link href="#" className="">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden w-full lg:block">
            <h3 className="mb-4 font-bold text-white lg:mb-8 lg:text-lg">
              Webflow Stuff
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#7F879E] lg:text-lg">
              <li className="">
                <Link href="#" className="">
                  Style Guide
                </Link>
              </li>
              <li className="">
                <Link href="#" className="">
                  Changelog
                </Link>
              </li>
              <li className="">
                <Link href="#" className="">
                  Licensing
                </Link>
              </li>
              <li className="">
                <Link href="#" className="">
                  Instructions
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h3 className="mb-4 font-bold text-white lg:mb-8 lg:text-lg">
              Platform
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#7F879E] lg:text-lg">
              <li className="">
                <Link href="#" className="">
                  Desktop App
                </Link>
              </li>
              <li className="">
                <Link href="#" className="">
                  Mobile App
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="hidden pt-6 text-center text-[#F3F3F3] lg:block lg:py-8 lg:text-lg">
          Copyright © AyEstate | Designed by AY Studio
        </p>
      </div>
    </footer>
  );
}
