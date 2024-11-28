import { DocumentTextIcon } from "@/assets/icons";
import React from "react";

interface Props {
  title: string;
  description: string;
}

export default function DiscoverCard(props: Props) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F9F9F9]">
        <DocumentTextIcon />
      </div>
      <h5 className="text-2xl font-bold">{props.title}</h5>
      <p>{props.description}</p>
    </div>
  );
}
