import connectAggentImage from "@/assets/images/connect-aggent.png";
import findPropertyImage from "@/assets/images/find-property-image.png";
import negotiateDealsImage from "@/assets/images/negotiate-deals.png";
import Image from "next/image";

export const SimplifySection = () => {
  return (
    <section className="bg-white py-[50px]">
      <div className="container mx-auto px-5">
        <div className="mx-auto mb-12 lg:max-w-2xl">
          <p className="mb-3 text-center text-base font-semibold text-black">
            Simplify
          </p>
          <h1 className="mb-5 text-center text-[32px] font-bold leading-10 text-black lg:text-[48px] lg:leading-[58px]">
            Streamline Your Property Buying or Selling Process
          </h1>
          <p className="text-center text-base leading-6 text-black">
            Our website provides a step-by-step guide to help you seamlessly
            navigate the process of buying or selling property. From finding the
            perfect property to closing the deal, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid-cols-3 space-y-12 lg:grid lg:gap-8 lg:space-y-0">
          <div className="flex flex-col items-center">
            <div className="mb-6 h-52 w-80 overflow-hidden rounded-lg lg:h-auto lg:w-full">
              <Image
                src={findPropertyImage}
                alt="Find Your Dream Property"
                width={320}
                height={200}
                className="w-full object-cover"
              />
            </div>
            <h2 className="mb-5 text-center text-2xl font-bold leading-7 text-black">
              Find Your Dream Property
            </h2>
            <p className="text-center text-base leading-6 text-black">
              Browse through a wide selection of properties that match your
              preferences and requirements.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-6 h-52 w-80 overflow-hidden rounded-lg lg:h-auto lg:w-full">
              <Image
                src={connectAggentImage}
                alt="Connect with Trusted Agents"
                width={320}
                height={200}
                className="w-full object-cover"
              />
            </div>
            <h2 className="mb-5 text-center text-2xl font-bold leading-7 text-black">
              Connect with Trusted Agents
            </h2>
            <p className="text-center text-base leading-6 text-black">
              Our platform connects you with experienced and reliable real
              estate agents who will guide you through the process.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-6 h-52 w-80 overflow-hidden rounded-lg lg:h-auto lg:w-full">
              <Image
                src={negotiateDealsImage}
                alt="Negotiate and Close the Deal"
                width={320}
                height={200}
                className="w-full object-cover"
              />
            </div>
            <h2 className="mb-5 text-center text-2xl font-bold leading-7 text-black">
              Negotiate and Close the Deal
            </h2>
            <p className="text-center text-base leading-6 text-black">
              Our experts will assist you in negotiating the best terms and
              ensuring a smooth closing process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
