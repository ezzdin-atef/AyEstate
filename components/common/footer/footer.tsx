import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] py-[50px] text-white">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 gap-8 pt-5 lg:grid-cols-6">
          <div className="col-span-2 w-full border-b border-[#2E334B] pb-5 lg:border-b-0">
            <h2 className="playball text-[28px]">AyEstate</h2>
            <div className="mt-5">
              <p className="text-[#7F879E]">hello.ayestate@example.com</p>
              <p className="text-[#7F879E]">(+1) 2345 6789</p>
            </div>
            <p className="mt-5 flex flex-col text-[#7F879E]">
              <span>4140 Parker Rd. Allentown,</span>
              <span>New Mexico 31134</span>
            </p>
          </div>
          <div className="w-full">
            <h3 className="mb-2 font-bold text-white">Pages</h3>
            <ul className="flex flex-col gap-2 text-[#7F879E]">
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
            <h3 className="mb-2 font-bold text-white">Support</h3>
            <ul className="flex flex-col gap-2 text-[#7F879E]">
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

          <div className="w-full">
            <h3 className="mb-2 font-bold text-white">Legal</h3>
            <ul className="flex flex-col gap-2 text-[#7F879E]">
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

          <div className="w-full">
            <h3 className="mb-2 font-bold text-white">Platform</h3>
            <ul className="flex flex-col gap-2 text-[#7F879E]">
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
        <p className="hidden pt-6 text-center text-[#F3F3F3] lg:block lg:text-lg">
          Copyright © AyEstate | Designed by AY Studio
        </p>
      </div>
    </footer>
  );
}
