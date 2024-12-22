"use client";
import { ArrowUpIcon, StarIcon } from "@/assets/icons";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import PriceRangeButton from "../price-range-button/price-range-button";
import PriceRangeInput from "../price-range-input/price-range-input";

interface Props {
  closeSidebar: () => void;
  isOpen: boolean;
}

export default function FilterSection({ closeSidebar, isOpen }: Props) {
  return (
    <>
      <div
        className={cn(
          "hidden lg:col-span-3 lg:block",
          isOpen &&
            "absolute left-0 top-0 z-30 block h-full max-w-60 overflow-auto bg-white",
        )}
      >
        <div className="border border-[#E4E9EE] p-4 lg:rounded-xl lg:p-6">
          <div className="border-b border-[#E4E9EE] pb-4">
            <h2 className="text-xl font-semibold">Filter Options</h2>
          </div>
          <BestFilters />
          <LocationsFilters />
          <CategoriesFilters />
          <PriceRangeFilter />
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute bottom-0 left-0 right-0 top-0 z-10 w-full bg-black opacity-25"
          onClick={() => closeSidebar()}
        ></div>
      )}
    </>
  );
}

function BestFilters() {
  const [isHidden, setIshidden] = useState(false);
  return (
    <div className="border-b border-[#E4E9EE] py-6">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-bold">Best Filter</h3>
        <Button variant="link" onClick={() => setIshidden((prev) => !prev)}>
          <ArrowUpIcon />
        </Button>
      </div>
      <div className={cn("flex flex-col gap-3", isHidden && "hidden")}>
        <Label className="gap-2">
          <Input type="checkbox" name="option" />
          <p className="flex items-center gap-1">
            <StarIcon /> 4 stars or upper
          </p>
        </Label>
        <Label className="gap-2">
          <Input type="checkbox" name="option" />
          <p className="flex items-center gap-1">Luxury Building</p>
        </Label>
        <Label className="gap-2">
          <Input type="checkbox" name="option" />
          <p className="flex items-center gap-1">Best Seller</p>
        </Label>
        <Label className="gap-2">
          <Input type="checkbox" name="option" />
          <p className="flex items-center gap-1">Discount</p>
        </Label>
      </div>
    </div>
  );
}

function LocationsFilters() {
  const [isHidden, setIshidden] = useState(false);
  return (
    <div className="border-b border-[#E4E9EE] py-6">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-bold">Location</h3>
        <Button variant="link" onClick={() => setIshidden((prev) => !prev)}>
          <ArrowUpIcon />
        </Button>
      </div>
      <div className={cn("flex flex-col gap-3", isHidden && "hidden")}>
        <Label className="gap-2">
          <Input type="checkbox" name="option" />
          <p className="flex items-center gap-1">Bandung</p>
        </Label>
        <Label className="gap-2">
          <Input type="checkbox" name="option" />
          <p className="flex items-center gap-1">Jakarta</p>
        </Label>
        <Label className="gap-2">
          <Input type="checkbox" name="option" />
          <p className="flex items-center gap-1">Bali</p>
        </Label>
        <Label className="gap-2">
          <Input type="checkbox" name="option" />
          <p className="flex items-center gap-1">Medan</p>
        </Label>
        <button className="flex text-base font-medium text-[#1D9E34]">
          Show All
        </button>
      </div>
    </div>
  );
}

function CategoriesFilters() {
  const [isHidden, setIshidden] = useState(false);
  return (
    <div className="border-b border-[#E4E9EE] py-6">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-bold">Category</h3>
        <Button variant="link" onClick={() => setIshidden((prev) => !prev)}>
          <ArrowUpIcon />
        </Button>
      </div>
      <div className={cn("flex flex-col gap-3", isHidden && "hidden")}>
        <Label className="gap-2">
          <Input type="checkbox" name="option" />
          <p className="flex items-center gap-1">House</p>
        </Label>
        <Label className="gap-2">
          <Input type="checkbox" name="option" />
          <p className="flex items-center gap-1">Villa</p>
        </Label>
        <Label className="gap-2">
          <Input type="checkbox" name="option" />
          <p className="flex items-center gap-1">Apartment</p>
        </Label>
        <Label className="gap-2">
          <Input type="checkbox" name="option" />
          <p className="flex items-center gap-1">Hotel</p>
        </Label>
        <button className="flex text-base font-medium text-[#1D9E34]">
          Show All Categories
        </button>
      </div>
    </div>
  );
}

function PriceRangeFilter() {
  const [isHidden, setIshidden] = useState(false);
  return (
    <div className="py-6">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-bold">Price Range</h3>
        <Button variant="link" onClick={() => setIshidden((prev) => !prev)}>
          <ArrowUpIcon />
        </Button>
      </div>
      <div className={cn("flex flex-col gap-3", isHidden && "hidden")}>
        <PriceRangeInput
          currancies={["USD", "EGP"]}
          onChange={(value) => console.log(value)}
          value={{ currancy: "USD", value: 0 }}
          id="min-price"
          name="min-price"
          placeholder="Minimum price"
        />
        <PriceRangeInput
          currancies={["USD", "EGP"]}
          onChange={(value) => console.log(value)}
          value={{ currancy: "USD", value: 0 }}
          id="min-price"
          name="min-price"
          placeholder="Maximum price"
        />
        <div className="flex flex-wrap gap-3">
          <PriceRangeButton onClick={() => console.log("button clicked")}>
            $0 - $5,000
          </PriceRangeButton>
          <PriceRangeButton onClick={() => console.log("button clicked")}>
            $5000 - $50,000
          </PriceRangeButton>
          <PriceRangeButton onClick={() => console.log("button clicked")}>
            &gt; $50,000
          </PriceRangeButton>
        </div>
      </div>
    </div>
  );
}
