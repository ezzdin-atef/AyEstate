import ArticleCard from "@/components/feature/blog/article-card/article-card";
import Heading from "@/components/feature/blog/heading/heading";
import Text from "@/components/feature/blog/text/text";
import recentArticles from "@/data/recent-articles.json";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogPostDetails() {
  return (
    <div className="container mx-auto px-5 py-[50px] lg:mb-[100px] lg:pt-[120px]">
      <div className="mb-6 flex items-center justify-center gap-3 text-xs text-[#7F879E] lg:mb-[30px] lg:text-lg">
        <p>8 February 2024</p>
        <span className="size-[3px] rounded-full bg-[#D4D7DF]"></span>
        <p>Success Stories</p>
      </div>
      <h1 className="mb-3 text-center text-xl font-bold capitalize text-[#1B2124] lg:mx-auto lg:mb-[6px] lg:max-w-[1030px] lg:text-5xl">
        From $0 to $40 million: how a 10-year old orphan became a successful
        investor
      </h1>
      <Text className="mb-[18px] text-center lg:mx-auto lg:mb-[50px] lg:max-w-[761px] lg:text-lg">
        It can be a challenge to maintain balanced, healthy eating when you work
        from home. Try these 10 quick tips for healthy eating habits.
      </Text>

      <Image
        src="/images/blog/1.png"
        width={1200}
        height={800}
        alt="Blog Image"
        className="mb-[30px] h-[260px] w-full rounded-2xl object-cover lg:mb-[50px] lg:h-[660px]"
      />

      <Text className="mb-7 lg:mb-14">
        Imagine one day living in a luxurious, spacious house with everything
        you could possibly want in life. Now contrast that with red and blue
        lights filling your home, with officers yelling and sirens blaring.
        Then, envision a SWAT team ripping you away from your parents. Although
        it seems far-fetched, this actually happened.
      </Text>
      <Text className="">
        By all accounts, John was living a charmed “trust fund” life, but that
        was quickly all taken away from him. At age 10, that left John Mansor a
        ward of the state—orphaned and alone, with only his brother, David,
        alongside him. He’s spent the last 15-plus years climbing back to the
        top.
      </Text>

      <Heading as="h2" className="">
        A Way Out: Focusing on What Can Be Controlled
      </Heading>

      <Text className="">
        Living as a ward of the state, life was a real battle of survival for
        John as a child. As he entered middle school, an opportunity for a
        change of scenery changed his perspective on life. He was granted a
        scholarship to a sleepaway camp nestled in the Adirondack Mountains
        called the Raquette Lake Boys Camp.
      </Text>

      <Heading as="h3" className="">
        Preparation Meets Opportunity
      </Heading>
      <Text className="mb-[30px] lg:mb-[21px]">
        Upon graduating, the harsh reality of the job market hit him when many
        potential employers believed he lacked relevant experience for an
        entry-level finance job. Undeterred, John entered tech sales.
        <br />
        After some success, John realized something was missing and couldn’t
        figure out how to get back to the life he used to have as a kid.
      </Text>

      <Heading as="h3" className="">
        Luck or Fate? Becoming a Wholesaler
      </Heading>
      <Text className="mb-[30px] lg:mb-[21px]">
        There’s a saying that “luck is when preparation meets opportunity.” This
        is the type of luck that those in search of financial freedom seek. They
        don’t wait for something good to happen—they find ways to stack the deck
        in their favor. That’s exactly what John did.
        <br />
        Once John set his sights on earning more, he began researching ways to
        create passive income, searching the internet for phrases like “how to
        build generational wealth.”
      </Text>

      <Heading as="h3" className="">
        The Value of Active Listening
      </Heading>
      <Text className="mb-[96px] lg:mb-[21px]">
        Early on, John realized that sales is fundamentally about active
        listening—a skill that involves understanding the other party’s needs,
        concerns, and motivations. With determination, grit, and an inherent
        knack for connecting with people on a genuine level, John recognized the
        power of emotional intelligence in real estate transactions.
      </Text>

      <Image
        src="/images/blog/detailed-1.png"
        width={1200}
        height={800}
        alt="Blog Image"
        className="mb-[30px] h-[200px] w-full rounded-2xl object-cover lg:mx-auto lg:mb-[50px] lg:h-[520px] lg:max-w-[946px]"
      />

      <Heading as="h2" className="">
        From $0 to $40 Million in Assets
      </Heading>
      <Text className="mb-[30px] lg:mb-12">
        Taking down this eight-unit property marked a shift from quick, active
        income to a more strategic approach focused on creating sustainable
        wealth. With a keen eye for acquisitions and a knack for sourcing
        opportunities, John entered real estate with a commitment to invest back
        into the business.
      </Text>
      <Text className="mb-[28px] lg:mb-[42px]">
        The journey was one of bootstrapping, where each step forward was a
        lesson in sourcing, acquiring, and operating the acquired assets. This
        quickly led to rapid growth over a two-year period, where they would
        purchase RV parks and more{" "}
        <Link className="underline" href="#">
          multifamily
        </Link>{" "}
        properties, such as a 40-unit townhouse community on Cape Cod
      </Text>

      <div className="mb-[30px] flex items-center justify-between lg:mb-[50px]">
        <div>
          <h2 className="text-base font-bold text-[#1B2124] lg:mb-[12px] lg:text-[32px] lg:leading-[42px]">
            Related Articles
          </h2>
          <p className="hidden text-lg text-[#7F879E] lg:block">
            Newest update article from AyEstate
          </p>
        </div>
        <Link
          href="/blog/recent"
          className="text-pretty text-sm font-semibold lg:flex lg:h-[47px] lg:w-[107px] lg:items-center lg:justify-center lg:rounded-xl lg:border lg:border-[#111111] lg:text-lg"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-[30px]">
        {recentArticles.slice(0, 3).map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}
