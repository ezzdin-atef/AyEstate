"use client";
import CustomLink from "@/components/common/custom-link/custom-link";
import Button from "@/components/ui/button";
import faqData from "@/data/faq.json";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export default function FaqAccordionSection() {
  const [faqOpen] = useState(1);

  return (
    <section className="bg-white py-[44.11px] lg:py-[100px]">
      <div className="container mx-auto px-5">
        <div className="mb-6 text-center lg:mb-[53px]">
          <h4 className="mb-5 hidden text-[#F59A74] lg:block">F A Q</h4>
          <h2 className="mb-6 text-2xl font-bold lg:mb-[30px] lg:text-[44px] lg:leading-[58px]">
            Frequently Asked Question
          </h2>
          <p className="hidden text-sm text-[#7F879E] lg:text-lg">
            Did you find the question as you expected?
          </p>
        </div>
        <div className="mb-6 columns-1 gap-5 space-y-5 lg:mb-[50px] lg:columns-2">
          {faqData.map((el, index) => (
            <details
              key={el.id}
              className={cn(
                "details break-inside-avoid rounded-[18px] border-2 border-[#F9F9F9] p-5",
                index === faqData.length - 1 && "col-start-2",
              )}
              open={faqOpen === el.id}
              // onClick={() => setFaqOpen(el.id)}
            >
              <summary className="cursor-pointer appearance-none pr-8 text-sm font-bold lg:text-xl">
                {el.title}
              </summary>
              <div className="mt-4">
                <p className="text-sm leading-6 text-[#7F879E] lg:text-lg">
                  {el.content}
                </p>
                <CustomLink
                  title="Read More"
                  href="#"
                  className="mt-5 block font-bold text-primary-1 lg:text-lg lg:text-[#3860E2]"
                >
                  Read More
                </CustomLink>
              </div>
            </details>
          ))}
        </div>
        <Button
          aria-label="Give a Quote"
          variant="primary"
          className="mt-6 w-full lg:mx-auto lg:h-14 lg:w-auto lg:text-lg"
        >
          Give a Quote
        </Button>
      </div>
    </section>
  );
}
