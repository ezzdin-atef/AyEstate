import { ArrowRight } from "@/assets/icons";
import heroImage from "@/assets/images/hero-section-image-discover-your-dream-home.png";
import DiscoverCard from "@/components/feature/discover-section/discover-card";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="bg-[#F6F3F3] py-[50px] text-center">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl font-bold mb-5 leading-tight">
            Discover Your Dream Home Today
          </h2>
          <p className="text-sm font-normal mb-2 leading-6">
            Find the perfect property that suits your lifestyle. Our real estate
            service offers unique selling propositions that set us apart from
            the competition. Find your perfect home today!
          </p>
          <div className="flex mt-4 gap-4 justify-center">
            <button className="h-12 flex justify-center items-center bg-primary-1 font-semibold text-black-111 rounded-xl py-3 px-6">
              Explore Now
            </button>
            <button className="h-12 flex justify-center items-center border-black text-black border font-semibold rounded-xl py-3 px-6">
              Learn More
            </button>
          </div>

          <div className="flex justify-center mt-12">
            <Image
              src={heroImage}
              width={600}
              height={500}
              alt="hero image"
              className="rounded-2xl"
              priority={true}
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-[50px]">
        <div className="container mx-auto px-3">
          <div className="mb-12">
            <h4 className="font-semibold mb-3">Discover</h4>
            <h2 className="font-bold text-[32px] leading-tight mb-5">
              Find Your Dream Property with Us
            </h2>
            <p className="font-normal text-sm">
              At our real estate agency, we offer a range of services to help
              you with your property needs. Whether you&apos;re looking to buy,
              sell, or get a valuation, our experienced team is here to assist
              you every step of the way.
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
    </div>
  );
}
