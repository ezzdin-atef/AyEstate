import Button from "@/components/ui/button";
import propertiesData from "@/data/properties.json";
import Image from "next/image";
import Link from "next/link";

export const FindPropertiesSection = () => {
  return (
    <section className="bg-white py-[50px] lg:py-[80px]">
      <div className="container mx-auto px-5">
        <div className="mb-12 text-center">
          <p className="mb-3 text-base font-semibold text-black lg:mb-4">
            Find
          </p>
          <h1 className="mb-5 text-[32px] font-bold text-black lg:mb-6 lg:text-5xl">
            Properties
          </h1>
          <p className="text-base leading-6 text-black lg:text-lg">
            Explore our curated list of properties and find your dream home.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {propertiesData.map((property) => (
            <div key={property.id} className="flex flex-col items-center">
              <div className="mb-4 w-full overflow-hidden">
                <Image
                  src={property.imageSrc}
                  alt={property.title}
                  width={320}
                  height={200}
                  className="h-[189px] w-full object-cover lg:h-[365px]"
                />
              </div>
              <h3 className="text-base font-semibold text-black lg:text-lg">
                {property.title}
              </h3>
              <p className="mb-2 text-sm text-black">{property.subtitle}</p>
              <p className="mb-4 text-lg font-semibold text-black">
                {property.price}
              </p>
              <Link
                href="/property-details"
                className="w-full rounded-xl border border-primary-1 py-2 text-center text-sm font-semibold text-black lg:border-black"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            as={Link}
            href="#"
            className="inline-flex rounded-xl px-[18.5px] lg:hidden"
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};
