import React from "react";

export function Header() {
  return (
    <div className="w-full h-[74px]">
      <div className="container px-3 mx-auto flex justify-between items-center h-full">
        <h1 className="playball text-[28px]">AyEstate</h1>
        <button className="w-6 h-6 flex justify-center items-center">
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
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 12H21"
              stroke="#151B33"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 17H21"
              stroke="#151B33"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
