"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  currancies: string[];
  value: { currancy: string; value: number };
  onChange: (value: { currancy: string; value: number }) => void;
  containerClassName?: string;
  selectClassName?: string;
  inputClassName?: string;
  name?: string;
  id?: string;
  placeholder?: string;
}

export default function PriceRangeInput(props: Props) {
  return (
    <div
      className={cn(
        "flex rounded-xl border border-[#E4E9EE] px-[18px] py-[9px]",
        props.containerClassName,
      )}
    >
      <select
        className={cn(
          "border-r border-[#E4E9EE] bg-transparent pr-[6px]",
          props.selectClassName,
        )}
        value={props.value.currancy}
        name={props.name}
        onChange={(e) => {
          props.onChange?.({
            currancy: e.currentTarget.value,
            value: props.value.value,
          });
        }}
        id={props.id + "-select"}
      >
        {props.currancies.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
      <input
        type="number"
        name={props.name}
        id={props.id + "-input"}
        className={cn(
          "w-full appearance-none border-none pl-3 placeholder:text-[#818B9C] focus:outline-none",
          props.inputClassName,
        )}
        onChange={(e) => {
          props.onChange?.({
            value: parseInt(e.currentTarget.value),
            currancy: props.value.currancy,
          });
        }}
        value={props.value.value}
        placeholder={props.placeholder}
      />
    </div>
  );
}
