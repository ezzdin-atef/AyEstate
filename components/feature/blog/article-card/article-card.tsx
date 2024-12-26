import CustomLink from "@/components/common/custom-link/custom-link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  className?: string;
}

export default function ArticleCard(props: Props) {
  return (
    <div className={cn(props.className)}>
      <Image
        src={props.image}
        width={1000}
        height={1000}
        alt="blog"
        className="mb-4 h-[260px] w-full rounded-2xl object-cover lg:mb-6 lg:h-[300px]"
      />
      <div className="mb-[6px] flex items-center gap-3 text-sm text-[#7F879E] lg:mb-3 lg:text-base">
        <p className="">{props.date}</p>
        <span className="h-[3px] w-[3px] rounded-full bg-[#7F879E]"></span>
        <p className="">{props.category}</p>
      </div>
      <h3 className="text-sm font-bold capitalize text-[#1B2124] hover:underline lg:text-2xl">
        <CustomLink
          title={`Read more about ${props.title}`}
          href={`/blog/${props.slug}`}
        >
          {props.title}
        </CustomLink>
      </h3>
    </div>
  );
}
