import { DocumentTextIcon } from "@/assets/icons";
import React from "react";

interface Props {
  title: string;
  description: string;
}

export default function DiscoverCard(props: Props) {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-16 h-16 bg-[#F9F9F9] flex items-center justify-center rounded-full">
        <DocumentTextIcon />
      </div>
      <h5 className="font-bold text-2xl">{props.title}</h5>
      <p>{props.description}</p>
    </div>
  );
}
