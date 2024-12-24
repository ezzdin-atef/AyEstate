import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  title: string;
  date: string;
  category: string;
  slug: string;
  exerpt?: string;
  className?: string;
}

export default function ArticleOverlayCard(props: Props) {
  return (
    <Link href={`/blog/${props.slug}`}>
      <div
        className={cn(
          "relative h-[317px] w-full overflow-hidden rounded-2xl lg:h-[502px]",
          props.className,
        )}
      >
        <Image
          src={props.image}
          width={1005}
          height={951}
          className="h-full w-full object-cover"
          alt={props.title}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-gradient-to-b from-[#00000000] to-[#000000BF]"></div>
        <div className="absolute bottom-4 px-4 lg:bottom-6 lg:px-6">
          <div className="flex items-center gap-3 text-sm text-[#FFFFFFB2] lg:text-lg lg:font-semibold">
            <p className="">{props.date}</p>
            <span className="h-[3px] w-[3px] rounded-full bg-[#FFFFFFB2]"></span>
            <p className="">{props.category}</p>
          </div>
          <h3 className="mt-[6px] line-clamp-2 text-sm font-bold capitalize text-white lg:mt-3 lg:text-[28px] lg:leading-[36px]">
            {props.title}
          </h3>
          {props.exerpt && (
            <p className="mt-2 text-xs text-[#FFFFFFB2] lg:mt-3 lg:text-lg lg:font-semibold">
              {props.exerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
