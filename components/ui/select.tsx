import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  name?: string;
  id?: string;
  options: { label: string; value: string }[];
  className?: string;
  onChange: (value: string) => void;
}
export default function Select(props: Props) {
  return (
    <select
      id={props.id}
      name={props.name}
      className={cn(
        "fle x-shrink-0 flex h-8 items-center rounded-lg border border-[#E4E9EE] bg-transparent px-[10px] py-[6.5px] text-xs lg:h-11 lg:px-4 lg:py-[11px] lg:text-sm",

        props.className,
      )}
      onChange={(e) => props.onChange(e.currentTarget.value)}
    >
      {props.options.map((el, index) => (
        <option value={el.value} key={index}>
          {el.label}
        </option>
      ))}
    </select>
  );
}
