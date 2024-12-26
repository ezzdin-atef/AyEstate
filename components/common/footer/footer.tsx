import React from "react";
import CustomLink from "../custom-link/custom-link";

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
                <CustomLink
                  title="Listing page"
                  href="/properties"
                  className=""
                >
                  Listings
                </CustomLink>
              </li>
              <li className="">
                <CustomLink title="About us page" href="/about" className="">
                  About us
                </CustomLink>
              </li>
              <li className="">
                <CustomLink title="Blog page" href="/blog" className="">
                  Blog
                </CustomLink>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h3 className="mb-4 font-bold text-white lg:mb-8 lg:text-lg">
              Support
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#7F879E] lg:text-lg">
              <li className="">
                <CustomLink
                  title="Properties page"
                  href="/properties"
                  className=""
                >
                  Properties
                </CustomLink>
              </li>
              <li className="">
                <CustomLink title="FAQ page" href="/faqs" className="">
                  FAQ
                </CustomLink>
              </li>
              <li className="">
                <CustomLink title="Contact page" href="/contact" className="">
                  Contact Us
                </CustomLink>
              </li>
            </ul>
          </div>

          <div className="w-full lg:hidden">
            <h3 className="mb-4 font-bold text-white lg:mb-8 lg:text-lg">
              Legal
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#7F879E] lg:text-lg">
              <li className="">
                <CustomLink
                  title="Terms of Services page"
                  href="#"
                  className=""
                >
                  Terms of Services
                </CustomLink>
              </li>
              <li className="">
                <CustomLink
                  title="Terms and Condition page"
                  href="#"
                  className=""
                >
                  Terms and Condition
                </CustomLink>
              </li>
              <li className="">
                <CustomLink
                  title="Complaints Process page"
                  href="#"
                  className=""
                >
                  Complaints Process
                </CustomLink>
              </li>
              <li className="">
                <CustomLink title="Privacy Policy page" href="#" className="">
                  Privacy Policy
                </CustomLink>
              </li>
            </ul>
          </div>

          <div className="hidden w-full lg:block">
            <h3 className="mb-4 font-bold text-white lg:mb-8 lg:text-lg">
              Webflow Stuff
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#7F879E] lg:text-lg">
              <li className="">
                <CustomLink title="Style guide page" href="#" className="">
                  Style Guide
                </CustomLink>
              </li>
              <li className="">
                <CustomLink title="Changelog page" href="#" className="">
                  Changelog
                </CustomLink>
              </li>
              <li className="">
                <CustomLink title="Licensing page" href="#" className="">
                  Licensing
                </CustomLink>
              </li>
              <li className="">
                <CustomLink title="Instructions page" href="#" className="">
                  Instructions
                </CustomLink>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h3 className="mb-4 font-bold text-white lg:mb-8 lg:text-lg">
              Platform
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#7F879E] lg:text-lg">
              <li className="">
                <CustomLink title="Get desktop app" href="#" className="">
                  Desktop App
                </CustomLink>
              </li>
              <li className="">
                <CustomLink title="Get mobile app" href="#" className="">
                  Mobile App
                </CustomLink>
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
