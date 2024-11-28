import Breadcrumb from "@/components/common/breadcrumb/breadcrumb";
import ListingProperties from "@/components/feature/listing-sections/listing-properties/listing-properties";
import React from "react";

export default function ListingPage() {
  return (
    <div className="container mx-auto px-3">
      <Breadcrumb
        className="py-8"
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
