import { ArrowRight } from "@/assets/icons";
import DiscoverCard from "@/components/feature/home-sections/discover-section/discover-card";

export const DiscoverSection = () => {
  return (
    <section className="bg-white py-[50px]">
      <div className="container mx-auto px-5">
        <div className="mb-12">
          <h4 className="font-semibold mb-3">Discover</h4>
          <h2 className="font-bold text-[32px] leading-tight mb-5">
            Find Your Dream Property with Us
          </h2>
          <p className="font-normal text-sm">
            At our real estate agency, we offer a range of services to help you
            with your property needs. Whether you&apos;re looking to buy, sell,
            or get a valuation, our experienced team is here to assist you every
            step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6">
          <DiscoverCard
            title="Property Buying and Selling"
            description="We provide expert guidance for buying and selling properties, ensuring a smooth and successful transaction."
          />
          <DiscoverCard
            title="Property Valuation Services"
            description="Our team of certified appraisers offers accurate property valuations to help you make informed decisions."
          />
          <DiscoverCard
            title="Real Estate Investment Advice"
            description="Get expert advice on real estate investment strategies to maximize your returns."
          />
        </div>
        <div className="flex mt-4 gap-6">
          <button className="h-12 flex justify-center items-center bg-primary-1 font-semibold text-black-111 rounded-xl py-3 px-6">
            Learn More
          </button>
          <button className="h-12 flex justify-center items-center gap-2 text-black font-normal">
            Contact <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
