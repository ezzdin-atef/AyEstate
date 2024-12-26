import Pagination from "@/components/common/pagination/pagination";
import ArticleCard from "@/components/feature/blog/article-card/article-card";
import recentArticles from "@/data/recent-articles.json";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Recent Blog - AyEstate",
  description:
    "Newest update article from AyEstate. Stay updated with the latest real estate tips, market trends, and property insights on our blog.",
  openGraph: {
    images: "/images/blog/7.png",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  },
};

export default function RecentBlog() {
  return (
    <div className="container mx-auto px-5">
      <div className="pb-[21 px] flex items-center justify-between pt-[30px] lg:pb-[65px] lg:pt-[40px]">
        <div className="">
          <h1 className="text-base font-bold text-[#1B2124] lg:text-[32px] lg:leading-[42px]">
            Recent Articles
          </h1>
          <p className="mt-3 hidden text-lg text-[#7F879E] lg:block">
            Newest update article from AyEstate
          </p>
        </div>
        <div className="flex-shrink-0 lg:hidden">
          <button
            aria-label="View All Recent Articles"
            className="flex h-[30px] items-center justify-center rounded-xl border border-primary-1 px-3 py-[6px] text-sm font-semibold text-[#111111] lg:h-[47px] lg:border-[#111111] lg:px-4 lg:py-3 lg:text-base"
          >
            View All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-[30px]">
        {recentArticles.map((article) => (
          <ArticleCard {...article} key={article.id} />
        ))}
      </div>

      <Pagination className="justify-center py-[50px] lg:pb-[100px]" />
    </div>
  );
}
