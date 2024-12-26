import { SearchIcon } from "@/assets/icons";
import CustomLink from "@/components/common/custom-link/custom-link";
import ArticleCard from "@/components/feature/blog/article-card/article-card";
import ArticleOverlayCard from "@/components/feature/blog/article-overlay-card/article-overlay-card";
import Button from "@/components/ui/button";
import blogArticles from "@/data/blog.json";
import popularArticles from "@/data/popular-articles.json";
import recentArticles from "@/data/recent-articles.json";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Blog - AyEstate",
  description:
    "Stay updated with the latest real estate tips, market trends, and property insights on our blog.",
  openGraph: {
    images: "/images/blog/1.png",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  },
};

export default function Blog() {
  return (
    <div className="container mx-auto px-5 pt-[30px] lg:pt-[120px]">
      <h1 className="mb-4 text-center text-2xl font-bold text-[#1B2124] lg:mb-[50px] lg:text-[44px] lg:leading-[58px] lg:text-[#252A3F]">
        Our Blog
      </h1>
      <div className="relative mx-auto mb-[12px] lg:mb-6 lg:max-w-[820px]">
        <SearchIcon className="absolute left-[14px] top-1/2 size-[18px] -translate-y-1/2 lg:left-[22px] lg:size-6" />
        <input
          type="text"
          name="search"
          id="search"
          className="flex h-[52px] w-full items-center justify-center rounded-2xl bg-white pl-[46px] placeholder:text-xs placeholder:text-[#7F879E] lg:h-[68px] lg:pl-[58px] lg:placeholder:text-base"
          placeholder="Search question"
          style={{
            boxShadow: "0px 4px 120px rgba(151, 159, 183, 0.2)",
          }}
        />
        <Button
          variant="primary"
          className="absolute right-[6px] top-1/2 hidden h-[56px] -translate-y-1/2 px-[53px] text-base lg:flex"
        >
          Search
        </Button>
      </div>
      <div className="flex flex-row items-center gap-4 px-[10px] lg:justify-center lg:gap-6 lg:px-0">
        <p className="text-xs text-[#7F879E] lg:pr-1 lg:text-base lg:font-semibold">
          Suggested:
        </p>
        <CustomLink
          title="Success Stories"
          href="#"
          className="text-xs text-[#3860E2] lg:text-base lg:font-semibold"
        >
          Success Stories
        </CustomLink>
        <CustomLink
          title="Tips"
          href="#"
          className="text-xs text-[#3860E2] lg:text-base lg:font-semibold"
        >
          Tips
        </CustomLink>
        <CustomLink
          title="Invest"
          href="#"
          className="text-xs text-[#3860E2] lg:text-base lg:font-semibold"
        >
          Invest
        </CustomLink>
      </div>

      <div className="flex flex-col pt-[50px] lg:flex-row lg:gap-[30px] lg:pt-[100px]">
        <ArticleOverlayCard
          className="h-[317px] lg:h-[588px] lg:flex-shrink-0 lg:basis-[690px]"
          {...blogArticles[0]}
        />
        <div className="grid grid-cols-1 gap-5 pt-[30px] lg:pt-0">
          {blogArticles.slice(1).map((article) => (
            <div
              className="flex flex-row items-center gap-3 lg:gap-6"
              key={article.id}
            >
              <div className="size-[100px] flex-shrink-0 overflow-hidden rounded-2xl lg:h-[176px] lg:w-[190px]">
                <Image
                  src={article.image}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                  alt={article.title}
                />
              </div>
              <div className="flex-1">
                <div className="mb-[6px] flex items-center gap-3 text-nowrap text-xs text-[#7F879E] lg:mb-3 lg:text-base lg:font-semibold">
                  <p className="">{article.date}</p>
                  <span className="h-[3px] w-[3px] rounded-full bg-[#7F879E]"></span>
                  <p className="">{article.category}</p>
                </div>
                <h3 className="text-sm font-bold capitalize text-[#1B2124] hover:underline lg:text-xl">
                  <CustomLink title="Read more" href={`/blog/${article.slug}`}>
                    {article.title}
                  </CustomLink>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-[50px] lg:pt-[100px]">
        <div className="flex items-center justify-between gap-16">
          <div className="">
            <h2 className="mb-2 text-base font-bold text-[#1B2124] lg:mb-3 lg:text-[32px] lg:leading-[42px]">
              Popular Articles
            </h2>
            <p className="text-xs text-[#7F879E] lg:text-lg">
              We provide blog that help start your career on jobify
            </p>
          </div>
          <div className="flex-shrink-0">
            <CustomLink
              title="View All Blog"
              href={"/blog"}
              className="flex h-[30px] items-center justify-center rounded-xl border border-primary-1 px-3 py-[6px] text-sm font-semibold text-[#111111] lg:h-[47px] lg:border-[#111111] lg:px-4 lg:py-3 lg:text-base"
            >
              View All
            </CustomLink>
          </div>
        </div>

        <div className="grid grid-cols-1 pt-[30px] lg:grid-cols-2 lg:gap-[30px] lg:pt-[50px]">
          <ArticleOverlayCard className="" {...popularArticles[0]} />
          <ArticleOverlayCard
            className="hidden lg:block"
            {...popularArticles[1]}
          />
        </div>

        <div className="mt-4 flex items-center justify-center gap-[10px] lg:hidden">
          <span className="size-2 rounded-full bg-primary-1"></span>
          <span className="size-2 rounded-full bg-[#F3F3F3]"></span>
          <span className="size-2 rounded-full bg-[#F3F3F3]"></span>
        </div>
      </div>

      <div className="py-[50px] lg:pb-[224px] lg:pt-[100px]">
        <div className="flex items-center justify-between">
          <div className="">
            <h2 className="mb-2 text-base font-bold text-[#1B2124] lg:mb-3 lg:text-[32px] lg:leading-[42px]">
              Recent Articles
            </h2>
            <p className="text-xs text-[#7F879E] lg:text-lg">
              Newest update article from AyEstate
            </p>
          </div>
          <div className="flex-shrink-0">
            <CustomLink
              title="View All Blog"
              href="/blog/recent"
              className="flex h-[30px] items-center justify-center rounded-xl border border-primary-1 px-3 py-[6px] text-sm font-semibold text-[#111111] lg:h-[47px] lg:border-[#111111] lg:px-4 lg:py-3 lg:text-base"
            >
              View All
            </CustomLink>
          </div>
        </div>

        <div className="mt-[30px] grid grid-cols-1 gap-5 lg:mt-[50px] lg:grid-cols-3 lg:gap-[30px]">
          {recentArticles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}
