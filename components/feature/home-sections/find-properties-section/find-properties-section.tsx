import CustomLink from "@/components/common/custom-link/custom-link";
import Button from "@/components/ui/button";
import propertiesData from "@/data/properties.json";
import Image from "next/image";

export const FindPropertiesSection = () => {
  return (
    <section className="bg-white py-[50px] lg:py-[80px]">
      <div className="container mx-auto px-5">
        <div className="mb-12 text-center">
          <h4 className="mb-3 text-base font-semibold text-black lg:mb-4">
            Find
          </h4>
          <h2 className="mb-5 text-[32px] font-bold text-black lg:mb-6 lg:text-5xl">
            Properties
          </h2>
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
                  className="h-[189px] w-full object-cover lg:h-[365px] lg:rounded-xl"
                />
              </div>
              <h3 className="text-base font-semibold text-black lg:text-lg">
                {property.title}
              </h3>
              <p className="mb-2 text-sm text-black">{property.subtitle}</p>
              <p className="mb-4 text-lg font-semibold text-black">
                {property.price}
              </p>
              <CustomLink
                title="View Details"
                href="/property-details"
                className="w-full rounded-xl border border-primary-1 py-2 text-center text-sm font-semibold text-black lg:border-black"
              >
                View Details
              </CustomLink>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            aria-label="View All Properties"
            variant="primary"
            as={CustomLink}
            title="View All Properties"
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
