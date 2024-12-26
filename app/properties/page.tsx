import Breadcrumb from "@/components/common/breadcrumb/breadcrumb";
import ListingProperties from "@/components/feature/listing-sections/listing-properties/listing-properties";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Listing Page - AyEstate",
  description:
    "Find the perfect property that suits your lifestyle. Our real estate service offers unique selling propositions that set us apart from the competition. Find your perfect home today!",
  openGraph: {
    images: "/images/listing/1.jpg",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/properties`,
  },
};

export default function ListingPage() {
  return (
    <div className="container mx-auto px-6 lg:px-0">
      <Breadcrumb
        className="pb-6 pt-[18px]"
        items={[
          {
            name: "Home",
            link: "/",
          },
          {
            name: "Real Estate",
            link: "/",
          },
        ]}
        currentPage="Villa"
      />
      <ListingProperties />
    </div>
  );
}
