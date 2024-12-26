import Image from "next/image";
import React from "react";

export default function ContactHero() {
  return (
    <>
      <h1 className="mb-4 text-center text-2xl font-bold text-[#1B2124] lg:mb-[30px] lg:text-[44px] lg:leading-[58px]">
        Exelent customer service
      </h1>
      <p className="mb-[50px] text-center text-sm text-[#7F879E] lg:text-base">
        If you have any questions you can report them below with the following
        information, so that it is easy for us to reply to your message.
      </p>
      <Image
        src="/images/contact/small-map.png"
        width={335}
        height={400}
        className="h-[400px] w-full rounded-2xl object-cover lg:hidden"
        alt="map location"
      />
      <Image
        src="/images/contact/large-map.png"
        width={1240}
        height={520}
        className="hidden h-[520px] w-full rounded-2xl object-cover lg:block"
        alt="map location"
      />
    </>
  );
}
