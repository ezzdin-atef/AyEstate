"use client";

import Link, { LinkProps } from "next/link";
import React, { useState } from "react";

interface Props extends LinkProps {
  children: React.ReactNode;
  title: string;
  target?: string;
  className?: string;
}

export default function CustomLink({ children, ...props }: Props) {
  const [title, setTitle] = useState("");

  return (
    <Link
      {...props}
      onMouseEnter={(e) => {
        setTitle(e.currentTarget.title);
        e.currentTarget.title = "";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.title = title;
        setTitle("");
      }}
    >
      {children}
    </Link>
  );
}
