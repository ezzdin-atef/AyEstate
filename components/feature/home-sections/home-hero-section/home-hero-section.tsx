import heroImage from "@/assets/images/hero-section-image-discover-your-dream-home.png";
import Image from "next/image";

export const HomeHeroSection = () => {
  return (
    <section className="home-hero bg-[#F6F3F3] py-[50px] text-center lg:pt-[0] lg:text-left">
      <div className="container mx-auto grid-cols-2 items-center px-5 lg:grid lg:px-0">
        <div>
          <h2 className="mb-5 text-4xl font-bold leading-tight lg:mb-8 lg:text-6xl lg:leading-[70px]">
            Discover Your Dream Home Today
          </h2>
          <p className="mb-2 text-sm font-normal leading-6 lg:text-lg">
            Find the perfect property that suits your lifestyle. Our real estate
            service offers unique selling propositions that set us apart from
            the competition. Find your perfect home today!
          </p>
          <div className="mt-4 flex justify-center gap-4 lg:mt-20 lg:justify-normal">
            <button className="flex h-12 items-center justify-center rounded-xl bg-primary-1 px-6 py-3 font-semibold text-black-111">
              Explore Now
            </button>
            <button className="flex h-12 items-center justify-center rounded-xl border border-black px-6 py-3 font-semibold text-black">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-12 flex justify-center lg:justify-end">
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
  );
};
