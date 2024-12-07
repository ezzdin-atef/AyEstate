import React from "react";
import PropertyCard from "../property-card/property-card";

export default function ListingProperties() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="font-semib old mb-1 text-base lg:text-2xl">
            Showing listings properties for “Villa”
          </h2>
          <p className="text-xs text-[#818B9C] lg:text-base">
            Showing 1 - 60 Properties
          </p>
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <label className="mr-auto flex items-center gap-1">
              <span className="hidden text-base text-[#818B9C] lg:block">
                Sort By:
              </span>
              <select className="fle x-shrink-0 flex h-8 items-center rounded-lg border border-[#E4E9EE] bg-transparent px-[10px] py-[6.5px] text-xs lg:h-11 lg:px-4 lg:py-[11px] lg:text-sm">
                <option>Sort By Relavand Product</option>
              </select>
            </label>
            <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#E4E9EE] lg:hidden">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.50016 1.75H15.5002C16.4168 1.75 17.1668 2.5 17.1668 3.41667V5.25C17.1668 5.91667 16.7502 6.75 16.3335 7.16667L12.7502 10.3333C12.2502 10.75 11.9168 11.5833 11.9168 12.25V15.8333C11.9168 16.3333 11.5835 17 11.1668 17.25L10.0002 18C8.91683 18.6667 7.41683 17.9167 7.41683 16.5833V12.1667C7.41683 11.5833 7.0835 10.8333 6.75016 10.4167L3.5835 7.08333C3.16683 6.66667 2.8335 5.91667 2.8335 5.41667V3.5C2.8335 2.5 3.5835 1.75 4.50016 1.75Z"
                  stroke="#0B0F0E"
                  strokeWidth={1.5}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="mx-1 block h-5 w-1 border-l border-[#E4E9EE] lg:ml-[10px] lg:mr-4 lg:h-6" />
            <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#1E4C2F] bg-[#1E4C2F] lg:h-11 lg:w-11">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3333 7.09996V3.31663C18.3333 2.14163 17.8 1.66663 16.475 1.66663H13.1083C11.7833 1.66663 11.25 2.14163 11.25 3.31663V7.09163C11.25 8.27496 11.7833 8.74163 13.1083 8.74163H16.475C17.8 8.74996 18.3333 8.27496 18.3333 7.09996Z"
                  fill="white"
                />
                <path
                  d="M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z"
                  fill="white"
                />
                <path
                  d="M8.74984 7.09996V3.31663C8.74984 2.14163 8.2165 1.66663 6.8915 1.66663H3.52484C2.19984 1.66663 1.6665 2.14163 1.6665 3.31663V7.09163C1.6665 8.27496 2.19984 8.74163 3.52484 8.74163H6.8915C8.2165 8.74996 8.74984 8.27496 8.74984 7.09996Z"
                  fill="white"
                />
                <path
                  d="M8.74984 16.475V13.1083C8.74984 11.7833 8.2165 11.25 6.8915 11.25H3.52484C2.19984 11.25 1.6665 11.7833 1.6665 13.1083V16.475C1.6665 17.8 2.19984 18.3333 3.52484 18.3333H6.8915C8.2165 18.3333 8.74984 17.8 8.74984 16.475Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#E4E9EE] lg:h-11 lg:w-11">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5.83337H17.5"
                  stroke="#0B0F0E"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                />
                <path
                  d="M2.5 10H17.5"
                  stroke="#0B0F0E"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                />
                <path
                  d="M2.5 14.1666H17.5"
                  stroke="#0B0F0E"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid-cols-12 gap-10 pt-6 lg:grid lg:pt-14">
        <div className="hidden lg:col-span-3 lg:block">
          <div className="rounded-xl border border-[#E4E9EE] p-6">
            <div className="border-b border-[#E4E9EE] pb-4">
              <h2 className="text-xl font-semibold">Filter Options</h2>
            </div>
            <div className="border-b border-[#E4E9EE] py-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base font-bold">Best Filter</h3>
                <button>
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.96004 7.52502L6.70004 4.26502C6.31504 3.88002 5.68504 3.88002 5.30004 4.26502L2.04004 7.52502"
                      stroke="#0B0F0E"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="option"
                    className="size-6 appearance-none rounded-lg border-[1.5px] border-[#C4C8CC]"
                  />
                  <p className="flex items-center gap-1">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2974 2.6326L11.6174 5.2726C11.7974 5.6401 12.2774 5.9926 12.6824 6.0601L15.0749 6.4576C16.6049 6.7126 16.9649 7.8226 15.8624 8.9176L14.0024 10.7776C13.6874 11.0926 13.5149 11.7001 13.6124 12.1351L14.1449 14.4376C14.5649 16.2601 13.5974 16.9651 11.9849 16.0126L9.74243 14.6851C9.33743 14.4451 8.66993 14.4451 8.25743 14.6851L6.01493 16.0126C4.40993 16.9651 3.43493 16.2526 3.85493 14.4376L4.38743 12.1351C4.48493 11.7001 4.31243 11.0926 3.99743 10.7776L2.13743 8.9176C1.04243 7.8226 1.39493 6.7126 2.92493 6.4576L5.31743 6.0601C5.71493 5.9926 6.19493 5.6401 6.37493 5.2726L7.69493 2.6326C8.41493 1.2001 9.58493 1.2001 10.2974 2.6326Z"
                        fill="#FFA439"
                      />
                    </svg>
                    4 stars or upper
                  </p>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="option"
                    className="size-6 appearance-none rounded-lg border-[1.5px] border-[#C4C8CC]"
                  />
                  <p className="flex items-center gap-1">Luxury Building</p>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="option"
                    className="size-6 appearance-none rounded-lg border-[1.5px] border-[#C4C8CC]"
                  />
                  <p className="flex items-center gap-1">Best Seller</p>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="option"
                    className="size-6 appearance-none rounded-lg border-[1.5px] border-[#C4C8CC]"
                  />
                  <p className="flex items-center gap-1">Discount</p>
                </label>
              </div>
            </div>
            <div className="border-b border-[#E4E9EE] py-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base font-bold">Location</h3>
                <button>
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.96004 7.52502L6.70004 4.26502C6.31504 3.88002 5.68504 3.88002 5.30004 4.26502L2.04004 7.52502"
                      stroke="#0B0F0E"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="option"
                    className="size-6 appearance-none rounded-lg border-[1.5px] border-[#C4C8CC]"
                  />
                  <p className="flex items-center gap-1">Bandung</p>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="option"
                    className="size-6 appearance-none rounded-lg border-[1.5px] border-[#C4C8CC]"
                  />
                  <p className="flex items-center gap-1">Jakarta</p>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="option"
                    className="size-6 appearance-none rounded-lg border-[1.5px] border-[#C4C8CC]"
                  />
                  <p className="flex items-center gap-1">Bali</p>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="option"
                    className="size-6 appearance-none rounded-lg border-[1.5px] border-[#C4C8CC]"
                  />
                  <p className="flex items-center gap-1">Medan</p>
                </label>
                <button className="flex text-base font-medium text-[#1D9E34]">
                  Show All
                </button>
              </div>
            </div>
            <div className="py-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base font-bold">Price Range</h3>
                <button>
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.96004 7.52502L6.70004 4.26502C6.31504 3.88002 5.68504 3.88002 5.30004 4.26502L2.04004 7.52502"
                      stroke="#0B0F0E"
                      strokeWidth={1.5}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex rounded-xl border border-[#E4E9EE] px-[18px] py-[9px]">
                  <select className="border-r border-[#E4E9EE] bg-transparent pr-[6px]">
                    <option value="USD">USD</option>
                    <option value="EGP">EGP</option>
                  </select>
                  <input
                    type="number"
                    name="min"
                    className="w-full appearance-none border-none pl-3 placeholder:text-[#818B9C] focus:outline-none"
                    placeholder="Minimum price"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-xl border border-[#E4E9EE] px-4 py-[11px]">
                    $0 - $5,000
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 grid grid-cols-2 gap-x-4 gap-y-6 lg:col-span-9 lg:gap-x-6">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>

      <div className="mx-auto flex items-center gap-4 py-14">
        <button className="flex h-11 w-11 items-center justify-center rounded-lg">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0002 13.28L5.65355 8.9333C5.14022 8.41997 5.14022 7.57997 5.65355 7.06664L10.0002 2.71997"
              stroke="#7F879E"
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <button className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-1 text-[#111111]">
            1
          </button>
          <button className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F9F9F9] text-[#7F879E]">
            2
          </button>
          <button className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F9F9F9] text-[#7F879E]">
            3
          </button>
          <button className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F9F9F9] text-[#7F879E]">
            ...
          </button>
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-lg">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.99978 13.28L10.3464 8.9333C10.8598 8.41997 10.8598 7.57997 10.3464 7.06664L5.99978 2.71997"
              stroke="#7F879E"
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
