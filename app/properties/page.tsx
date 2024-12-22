import Breadcrumb from "@/components/common/breadcrumb/breadcrumb";
import ListingProperties from "@/components/feature/listing-sections/listing-properties/listing-properties";
import React from "react";

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
