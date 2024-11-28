import Link from "next/link";

export const InnovativeSection = () => {
  return (
    <section className="bg-black py-[50px] text-white">
      <div className="container mx-auto px-5">
        <div className="mb-12 grid-cols-2 gap-10 lg:grid">
          <div>
            <p className="mb-3 text-base font-semibold">Innovative</p>
            <h1 className="mb-5 text-[32px] font-bold leading-10 lg:max-w-2xl lg:text-[48px] lg:leading-[58px]">
              Transforming the Real Estate Industry with Excellence
            </h1>
          </div>
          <div className="lg:ml-auto">
            <p className="mb-8 text-base leading-6 lg:max-w-xl lg:text-lg lg:leading-7">
              At our company, we take pride in our exceptional success rate,
              having listed thousands of properties, and ensuring client
              satisfaction is our top priority.
            </p>
            <div className="text-center lg:text-left">
              <Link
                href="/learn-more"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-primary-1 px-6 py-3 font-semibold text-black-111"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0">
          <div className="flex flex-col gap-2 border-l-2 pl-8">
            <p className="font-roboto text-[56px] font-bold">30%</p>
            <p className="text-lg font-bold">Success Rate</p>
          </div>
          <div className="flex flex-col gap-2 border-l-2 pl-8">
            <p className="font-roboto text-[56px] font-bold">30%</p>
            <p className="text-lg font-bold">Properties Listed</p>
          </div>
          <div className="flex flex-col gap-2 border-l-2 pl-8">
            <p className="font-roboto text-[56px] font-bold">30%</p>
            <p className="text-lg font-bold">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};
