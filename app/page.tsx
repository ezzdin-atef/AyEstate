import heroImage from "@/assets/images/hero-section-image-discover-your-dream-home.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="bg-[#F6F3F3] py-[50px] text-center">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl font-bold mb-5 leading-10">
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
            />
          </div>
        </div>
      </section>
    </div>
  );
}
