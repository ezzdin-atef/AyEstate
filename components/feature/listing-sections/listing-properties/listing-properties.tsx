"use client";
import { FilterIcon, GridIcon, ListIcon } from "@/assets/icons";
import PaginationStyle2 from "@/components/common/pagination-2/pagination";
import Pagination from "@/components/common/pagination/pagination";
import Button from "@/components/ui/button";
import Label from "@/components/ui/label";
import Select from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import FilterSection from "../filter-section/filter-section";
import PropertyCard from "../property-card/property-card";

import properties from "@/data/listing-properties.json";

export default function ListingProperties() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpened(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-6 lg:gap-[52px]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-64 lg:max-w-none">
          <h2 className="mb-1 text-base font-semibold lg:text-2xl">
            Showing listings properties for “Villa”
          </h2>
          <p className="text-xs text-[#818B9C] lg:text-base">
            Showing 1 - 60 Properties
          </p>
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <Label className="mr-auto">
              <span className="mr-1 hidden text-base text-[#818B9C] lg:block">
                Sort By:
              </span>
              <Select
                name="sort-by"
                onChange={(value) => {
                  console.log(value);
                }}
                options={[
                  {
                    label: "Relavand Product",
                    value: "relavand-product",
                  },
                ]}
              />
            </Label>
            <Button
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSidebarOpened(true)}
            >
              <FilterIcon />
            </Button>
            <div className="mx-1 block h-5 w-1 border-l border-[#E4E9EE] lg:ml-[10px] lg:mr-4 lg:h-6" />
            <Button size="icon" className="border-[#1E4C2F] bg-[#1E4C2F]">
              <GridIcon />
            </Button>
            <Button size="icon">
              <ListIcon />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid-cols-12 gap-10 lg:grid">
        <FilterSection
          isOpen={isSidebarOpened}
          closeSidebar={() => setIsSidebarOpened(false)}
        />
        <div className="col-span-12 grid grid-cols-2 gap-x-4 gap-y-6 lg:col-span-9 lg:gap-x-6">
          {properties.map((el) => (
            <PropertyCard
              key={el.id}
              title={el.title}
              image={el.image}
              location={el.location}
              type={el.type}
            />
          ))}
        </div>
      </div>

      <Pagination className="lg:hidden" />
      <PaginationStyle2 className="hidden lg:flex" />
    </div>
  );
}
