import { DocumentTextIcon } from "@/assets/icons";
import React from "react";

interface Props {
  title: string;
  description: string;
}

export default function DiscoverCard(props: Props) {
  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F9F9F9]">
        <DocumentTextIcon />
      </div>
      <h5 className="text-2xl font-bold lg:text-[32px] lg:leading-[41.6px]">
        {props.title}
      </h5>
      <p>{props.description}</p>
    </div>
  );
}
