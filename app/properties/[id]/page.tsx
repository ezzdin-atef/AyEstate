import { ArrowRight } from "@/assets/icons";
import Button from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const id = (await params).id;

  return {
    title: "Luxury Beach Villa - AyEstate",
    description:
      "Experience the ultimate in beachfront luxury with breathtaking ocean views.",
    openGraph: {
      images: "/images/listing-details/cover.jpg",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/properties/${id}`,
    },
  };
}

export default function PropertiesDetails() {
  return (
    <div className="container mx-auto px-5">
      <div className="py-[50px] lg:py-[112px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="lg:flex-shrink-0 lg:basis-[768px]">
            <h1 className="mb-5 text-[40px] font-bold leading-[48px] lg:text-[56px] lg:leading-[68px]">
              Luxury Beach Villa
            </h1>
            <p className="mb-6 lg:text-lg">
              Experience the ultimate in beachfront luxury with breathtaking
              ocean views.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#EEEEEE] px-2 py-1 text-sm font-semibold">
                Beachfront
              </span>
              <span className="bg-[#EEEEEE] px-2 py-1 text-sm font-semibold">
                Modern
              </span>
              <span className="bg-[#EEEEEE] px-2 py-1 text-sm font-semibold">
                Spacious
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:flex-1">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold lg:text-xl">Client</p>
              <p className="text-base">John Doe</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold lg:text-xl">Date</p>
              <p className="text-base">March 2023</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold lg:text-xl">Location</p>
              <p className="text-base">Bali, Indonesia</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold lg:text-xl">Price</p>
              <p className="text-base underline">$3,000,000</p>
            </div>
          </div>
        </div>
        <div className="pt-12 lg:pt-20">
          <Image
            src={"/images/listing-details/cover.jpg"}
            width={1000}
            height={700}
            alt="listing details cover"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-12 py-[50px] lg:flex-row lg:gap-20 lg:py-[112px]">
        <div className="lg:flex-shrink-0 lg:basis-[464px]">
          <h2 className="mb-5 text-4xl font-bold lg:mb-6 lg:text-5xl">
            Stunning Property with Luxurious Amenities
          </h2>
          <p className="mb-4">
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
            blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
            scelerisque amet nulla purus habitasse.
          </p>
          <p className="mb-4">
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
            condimentum mi massa. In tincidunt pharetra consectetur sed duis
            facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
            dictum eget nibh tortor commodo cursus.
          </p>
          <p className="">
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
            aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id
            morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
            dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
            tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere
            gravida enim posuere cursus diam.
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:gap-8">
          <Image
            src="/images/listing-details/1.png"
            width={1000}
            height={1000}
            alt="Image listing details"
            className="h-[335px] w-full rounded-xl object-cover lg:h-[768px]"
          />
          <Image
            src="/images/listing-details/2.png"
            width={1000}
            height={1000}
            alt="Image listing details"
            className="h-[335px] w-full rounded-xl object-cover lg:h-[768px]"
          />
          <Image
            src="/images/listing-details/3.png"
            width={1000}
            height={1000}
            alt="Image listing details"
            className="h-[335px] w-full rounded-xl object-cover lg:h-[768px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-12 py-[50px] lg:flex-row lg:items-center lg:gap-20 lg:py-[112px]">
        <div className="">
          <p className="mb-3 font-semibold lg:mb-4">Luxury</p>
          <h2 className="mb-5 text-4xl font-bold lg:mb-6 lg:text-5xl">
            Experience the Perfect Blend of Comfort and Style
          </h2>
          <p className="mb-6 lg:mb-10 lg:text-lg">
            Welcome to our stunning property! With a beautiful image gallery,
            immersive virtual tour, and outstanding features, this is the
            perfect place to call home. Explore the spacious rooms, modern
            amenities, and convenient location that make this property truly
            exceptional.
          </p>
          <div className="flex gap-6">
            <Button variant="primary" aria-label="Learn more about us">
              Learn More
            </Button>
            <Button variant="link" aria-label="Contact US">
              Contact <ArrowRight />
            </Button>
          </div>
        </div>
        <Image
          src="/images/listing-details/4.png"
          width={1000}
          height={1000}
          alt="Image listing details"
          className="h-[348px] w-full rounded-xl object-cover lg:h-[605px] lg:w-[605px]"
        />
      </div>
    </div>
  );
}
