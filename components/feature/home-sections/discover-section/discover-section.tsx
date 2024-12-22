import { ArrowRight } from "@/assets/icons";
import DiscoverCard from "@/components/feature/home-sections/discover-section/discover-card";
import Button from "@/components/ui/button";

export const DiscoverSection = () => {
  return (
    <section className="bg-white py-[80px] pb-[44px]">
      <div className="container mx-auto px-5">
        <div className="mb-12 grid-cols-2 lg:grid">
          <div>
            <h4 className="mb-3 font-semibold lg:mb-4">Discover</h4>
            <h2 className="mb-5 flex text-[32px] font-bold leading-tight lg:flex-col lg:text-[48px] lg:leading-[58px]">
              Find Your Dream Property with Us
            </h2>
          </div>
          <p className="text-sm font-normal lg:text-lg">
            At our real estate agency, we offer a range of services to help you
            with your property needs. Whether you&apos;re looking to buy, sell,
            or get a valuation, our experienced team is here to assist you every
            step of the way.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 lg:mb-12 lg:grid-cols-3">
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
        <div className="mt-4 flex gap-6">
          <Button variant="primary">Learn More</Button>
          <Button variant="link">
            Contact <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};
