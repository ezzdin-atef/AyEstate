import Link from "next/link";

export const InnovativeSection = () => {
  return (
    <section className="bg-black text-white py-[50px]">
      <div className="container mx-auto px-5">
        <div className="mb-12">
          <p className="text-base font-semibold mb-3">Innovative</p>
          <h1 className="text-[32px] font-bold leading-10 mb-5">
            Transforming the Real Estate Industry with Excellence
          </h1>
          <p className="text-base leading-6 mb-8">
            At our company, we take pride in our exceptional success rate,
            having listed thousands of properties, and ensuring client
            satisfaction is our top priority.
          </p>
          <div className="text-center">
            <Link
              href="/learn-more"
              className="h-12 inline-flex justify-center items-center bg-primary-1 font-semibold text-black-111 rounded-xl py-3 px-6"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col gap-2 border-l-2 pl-8">
            <p className="text-[56px] font-bold font-roboto">30%</p>
            <p className="text-lg font-bold">Success Rate</p>
          </div>
          <div className="flex flex-col gap-2 border-l-2 pl-8">
            <p className="text-[56px] font-bold font-roboto">30%</p>
            <p className="text-lg font-bold">Properties Listed</p>
          </div>
          <div className="flex flex-col gap-2 border-l-2 pl-8">
            <p className="text-[56px] font-bold font-roboto">30%</p>
            <p className="text-lg font-bold">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};
