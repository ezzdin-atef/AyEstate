import Image from "next/image";
import React from "react";

export default function TestimonialsSection() {
  return (
    <div className="bg-[#FFEEEE] py-[50px] text-center">
      <div className="container mx-auto flex flex-col items-center gap-6 px-5 lg:gap-8">
        <h2 className="text-2xl font-bold lg:pb-[18px] lg:text-[48px] lg:leading-[58px]">
          Customer Testimonials
        </h2>
        <div className="">
          <span className="flex gap-1">
            {[...Array(5)].map((el, index) => (
              <svg
                key={index}
                width={21}
                height={19}
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.57088 0.612343C9.91462 -0.204115 11.0854 -0.204114 11.4291 0.612346L13.4579 5.43123C13.6029 5.77543 13.9306 6.01061 14.3067 6.0404L19.5727 6.45748C20.4649 6.52814 20.8267 7.62813 20.1469 8.2034L16.1348 11.5987C15.8482 11.8412 15.723 12.2218 15.8106 12.5843L17.0363 17.661C17.244 18.5211 16.2969 19.201 15.533 18.7401L11.0245 16.0196C10.7025 15.8252 10.2975 15.8252 9.97548 16.0196L5.46699 18.7401C4.70311 19.201 3.75596 18.5211 3.96363 17.661L5.18942 12.5843C5.27698 12.2218 5.15182 11.8412 4.86526 11.5987L0.853062 8.2034C0.173282 7.62813 0.535068 6.52814 1.42729 6.45748L6.69336 6.0404C7.0695 6.01061 7.39716 5.77543 7.54207 5.43123L9.57088 0.612343Z"
                  fill="black"
                />
              </svg>
            ))}
          </span>
        </div>
        <p className="text-xl font-bold lg:max-w-3xl lg:text-2xl">
          Our experience with this real estate website design has been nothing
          short of amazing. The team was professional, responsive, and delivered
          beyond our expectations.
        </p>
        <div className="lg:flex lg:items-center lg:gap-5 lg:text-left">
          <Image
            src={"/images/ceo-avatar.png"}
            alt="John Doe"
            className="mx-auto mb-4"
            width={56}
            height={56}
          />
          <div>
            <p className="font-semibold">John Doe</p>
            <p className="">CEO, ABC Realty</p>
          </div>
        </div>
      </div>
    </div>
  );
}
