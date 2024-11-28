import React from "react";

export default function CtaSection() {
  return (
    <div className="bg-[#121833] py-[40px]">
      <div className="container mx-auto px-5 text-center">
        <h3 className="mb-4 flex text-xl font-bold text-white lg:flex-col lg:text-[36px] lg:leading-[55px]">
          <span>LET&apos;S START A</span> <span>SUCCESSFUL PROJECT</span>
        </h3>
        <p className="mb-4 text-xs font-normal leading-5 text-[#C7C1EA] lg:mx-auto lg:mb-6 lg:max-w-2xl lg:text-lg lg:text-[#F4F2FF]">
          We deliver immediate business impact and long-term ROI for your brand.
          Find out why Astheris are Australia&apos;s trusted Digital Agency.
        </p>
        <button className="flex h-12 w-full items-center justify-center rounded-xl bg-primary-1 px-6 py-3 text-sm font-semibold text-black-111 lg:mx-auto lg:w-auto lg:gap-1 lg:rounded-full lg:text-lg">
          Start A Project{" "}
          <svg
            width={17}
            height={16}
            viewBox="0 0 17 16"
            fill="none"
            className="lg:h-7 lg:w-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.16699 11.3337L11.8337 4.66699"
              stroke="#16112F"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.16699 4.66699H11.8337V11.3337"
              stroke="#16112F"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
