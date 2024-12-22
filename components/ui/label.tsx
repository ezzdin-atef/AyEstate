import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  htmlFor?: string;
  children: React.ReactNode[];
  className?: string;
}

export default function Label(props: Props) {
  return (
    <label
      htmlFor={props.htmlFor}
      className={cn("flex items-center gap-1", props.className)}
    >
      {props.children}
    </label>
  );
}
