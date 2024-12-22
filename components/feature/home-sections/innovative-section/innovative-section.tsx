import Button from "@/components/ui/button";
import Link from "next/link";

export const InnovativeSection = () => {
  return (
    <section className="bg-black py-[50px] text-white">
      <div className="container mx-auto px-5">
        <div className="mb-12 grid-cols-2 gap-10 lg:grid">
          <div>
            <p className="mb-3 text-base font-semibold lg:mb-4">Innovative</p>
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
              <Button
                as={Link}
                variant="primary"
                href="/learn-more"
                className="inline-flex"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0">
          <div className="flex flex-col gap-2 border-l-2 pl-8">
            <p className="font-roboto text-[56px] font-bold lg:text-[80px]">
              30% 
            </p>
            <p className="text-lg font-bold lg:text-xl">Success Rate</p>
          </div>
          <div className="flex flex-col gap-2 border-l-2 pl-8">
            <p className="font-roboto text-[56px] font-bold lg:text-[80px]">
              30%
            </p>
            <p className="text-lg font-bold lg:text-xl">Properties Listed</p>
          </div>
          <div className="flex flex-col gap-2 border-l-2 pl-8">
            <p className="font-roboto text-[56px] font-bold lg:text-[80px]">
              30%
            </p>
            <p className="text-lg font-bold lg:text-xl">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};
