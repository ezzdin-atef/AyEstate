"use client";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import Select from "@/components/ui/select";
import React from "react";

export default function ContactForm() {
  return (
    <div className="py-[50px] lg:pb-[232px] lg:pt-0">
      <h2 className="mb-4 text-center text-2xl font-bold text-[#1B2124] lg:mb-[30px] lg:text-[44px] lg:leading-[58px]">
        Contact our sales team
      </h2>
      <p className="mb-[28px] text-center text-sm text-[#7F879E] lg:mx-auto lg:mb-[50px] lg:max-w-[768px] lg:text-lg">
        Built for every team across your company, Jobify Enterprise boosts
        productivity with upgraded security and account support. Contact us
        today to unlock:
      </p>

      <form
        className="flex flex-col gap-5 rounded-2xl bg-white p-4 lg:gap-10"
        style={{
          boxShadow: "0px 4px 120px rgba(151, 159, 183, 0.15)",
        }}
      >
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Label className="flex flex-col gap-[12px]">
            <p className="w-full text-sm font-bold lg:text-base">
              Your Name<span className="text-[#E60019]">*</span>
            </p>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="flex h-[46px] w-full items-center rounded-2xl bg-[#F6F8F9] px-4 py-[12px] text-sm placeholder:text-[#7F879E] lg:h-[58px] lg:py-[18px]"
            />
          </Label>
          <Label className="flex flex-col gap-[12px]">
            <p className="w-full text-sm font-bold lg:text-base">
              Email<span className="text-[#E60019]">*</span>
            </p>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex h-[46px] w-full items-center rounded-2xl bg-[#F6F8F9] px-4 py-[12px] text-sm placeholder:text-[#7F879E] lg:h-[58px] lg:py-[18px]"
            />
          </Label>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Label className="flex flex-col gap-[12px]">
            <p className="w-full text-sm font-bold lg:text-base">
              Phone Number
            </p>
            <Input
              type="text"
              name="phone number"
              placeholder="Enter your phone number"
              className="flex h-[46px] w-full items-center rounded-2xl bg-[#F6F8F9] px-4 py-[12px] text-sm placeholder:text-[#7F879E] lg:h-[58px] lg:py-[18px]"
            />
          </Label>
          <Label className="flex flex-col gap-[12px]">
            <p className="w-full text-sm font-bold lg:text-base">
              How Can Our Sales Team Help?
              <span className="text-[#E60019]">*</span>
            </p>
            <Select
              options={[
                {
                  label: "What you want",
                  value: "",
                },
              ]}
              className="flex h-[46px] w-full items-center rounded-2xl border-none bg-[#F6F8F9] px-4 py-[12px] text-sm text-[#7F879E] placeholder:text-[#7F879E] lg:h-[58px] lg:py-[18px]"
              onChange={(val) => console.log(val)}
            />
          </Label>
        </div>

        <Label className="flex flex-col gap-[12px]">
          <p className="w-full text-sm font-bold lg:text-base">
            Anything Else You’d Like Us To Know?
          </p>
          <textarea
            name="name"
            placeholder="Type anything"
            className="flex h-[300px] w-full items-center rounded-2xl bg-[#F6F8F9] px-4 py-[12px] text-sm placeholder:text-[#7F879E] lg:h-[180px] lg:py-[18px]"
          />
        </Label>
        <div className="grid grid-cols-1 gap-10 py-[12px] lg:grid-cols-2 lg:pt-[20px]">
          <Label className="flex items-center gap-2 text-xs lg:gap-4 lg:text-base">
            <Input
              type="checkbox"
              name="agree-terms"
              className="flex-shrink-0"
            />
            <p>I agree to Loom&apos;s Terms of Service and Privacy Policy.</p>
          </Label>

          <div>
            <Button
              aria-label="Contact Sales"
              variant="primary"
              className="lg:ml-auto"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}