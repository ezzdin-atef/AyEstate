import Link from "next/link";
import React from "react";

export default function FaqAccordionSection() {
  return (
    <section className="bg-white py-[50px]">
      <div className="container mx-auto px-5">
        <div className="mb-6 text-center">
          <h4 className="mb-4 hidden text-[#F59A74] lg:block">F A Q</h4>
          <h2 className="mb-4 text-2xl font-bold lg:text-[44px] lg:leading-[58px]">
            Frequently Asked Question
          </h2>
          <p className="text-sm text-[#7F879E] lg:text-lg">
            Did you find the question as you expected?
          </p>
        </div>
        <div className="grid-cols-2 gap-6 lg:grid">
          <div className="space-y-[20px]">
            <details
              className="details rounded-2xl border-2 border-[#F9F9F9] p-5"
              open
            >
              <summary className="cursor-pointer appearance-none text-sm font-bold">
                What Types of properties are available on your website?
              </summary>
              <div className="mt-4">
                <p className="text-sm leading-6 text-[#7F879E]">
                  Et lectus viverra aenean malesuada praesent. Egestas praesent
                  quam auctor amet ac, ac vel. Euismod proin massa feugiat
                  gravida tellus auctor ac, vitae justo.
                </p>
                <Link href="#" className="mt-5 block font-bold text-primary-1">
                  Read More
                </Link>
              </div>
            </details>
            <details className="details rounded-2xl border-2 border-[#F9F9F9] p-5">
              <summary className="cursor-pointer appearance-none text-sm font-bold">
                What Types of properties are available on your website?
              </summary>
              <div className="mt-4">
                <p className="text-sm leading-6 text-[#7F879E]">
                  Et lectus viverra aenean malesuada praesent. Egestas praesent
                  quam auctor amet ac, ac vel. Euismod proin massa feugiat
                  gravida tellus auctor ac, vitae justo.
                </p>
                <Link href="#" className="mt-5 block font-bold text-primary-1">
                  Read More
                </Link>
              </div>
            </details>
          </div>
          <div className="space-y-[20px]">
            <details className="details rounded-2xl border-2 border-[#F9F9F9] p-5">
              <summary className="cursor-pointer appearance-none text-sm font-bold">
                What Types of properties are available on your website?
              </summary>
              <div className="mt-4">
                <p className="text-sm leading-6 text-[#7F879E]">
                  Et lectus viverra aenean malesuada praesent. Egestas praesent
                  quam auctor amet ac, ac vel. Euismod proin massa feugiat
                  gravida tellus auctor ac, vitae justo.
                </p>
                <Link href="#" className="mt-5 block font-bold text-primary-1">
                  Read More
                </Link>
              </div>
            </details>
            <details className="details rounded-2xl border-2 border-[#F9F9F9] p-5">
              <summary className="cursor-pointer appearance-none text-sm font-bold">
                What Types of properties are available on your website?
              </summary>
              <div className="mt-4">
                <p className="text-sm leading-6 text-[#7F879E]">
                  Et lectus viverra aenean malesuada praesent. Egestas praesent
                  quam auctor amet ac, ac vel. Euismod proin massa feugiat
                  gravida tellus auctor ac, vitae justo.
                </p>
                <Link href="#" className="mt-5 block font-bold text-primary-1">
                  Read More
                </Link>
              </div>
            </details>
          </div>
        </div>
        <button className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-primary-1 px-6 py-3 font-semibold text-black-111 lg:mx-auto lg:w-auto">
          Give a Quote
        </button>
      </div>
    </section>
  );
}
