import React from "react";

export default function ListingProperties() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="mb-2 text-base font-semibold">
          listings properties for “Villa”
        </h2>
        <p className="text-xs text-[#818B9C]">Showing 1 - 60 Properties</p>
      </div>
      <div className="pb-6">
        <div className="flex items-center gap-3">
          <label className="mr-auto">
            <span className="hidden">Sort By:</span>
            <select className="flex h-8 min-w-[175px] flex-shrink-0 items-center rounded-lg border border-[#E4E9EE] px-1 text-xs">
              <option>Sort By Relavand Product</option>
            </select>
          </label>
          <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#E4E9EE]">
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
          <div className="block h-5 w-1 border-l border-[#E4E9EE]" />
          <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#1E4C2F] bg-[#1E4C2F]">
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
          <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#E4E9EE]">
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
  );
}
