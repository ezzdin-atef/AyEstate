import property1 from "@/assets/images/property-1.png";
import property2 from "@/assets/images/property-2.png";
import property3 from "@/assets/images/property-3.png";
import property4 from "@/assets/images/property-4.png";
import property5 from "@/assets/images/property-5.png";
import property6 from "@/assets/images/property-6.png";
import Image from "next/image";
import Link from "next/link";

export const FindPropertiesSection = () => {
  return (
    <section className="bg-white py-[50px]">
      <div className="container mx-auto px-5">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-base font-semibold text-black">Find</p>
          <h1 className="mb-5 text-[32px] font-bold text-black">Properties</h1>
          <p className="text-base leading-6 text-black">
            Explore our curated list of properties and find your dream home.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            {
              id: 1,
              imageSrc: property1,
              title: "Luxury Villa",
              subtitle: "Oceanfront",
              price: "$1,000,000",
            },
            {
              id: 2,
              imageSrc: property2,
              title: "Chill Apartment",
              subtitle: "City Center",
              price: "$500,000",
            },
            {
              id: 3,
              imageSrc: property3,
              title: "Cozy Cottage",
              subtitle: "Mountain View",
              price: "$300,000",
            },
            {
              id: 4,
              imageSrc: property4,
              title: "Spacious Condo",
              subtitle: "Beachfront",
              price: "$700,000",
            },
            {
              id: 5,
              imageSrc: property5,
              title: "Luxury Penthouse",
              subtitle: "Downtown",
              price: "$1,500,000",
            },
            {
              id: 6,
              imageSrc: property6,
              title: "Lakefront Retreat",
              subtitle: "Lake View",
              price: "$800,000",
            },
          ].map((property) => (
            <div
              key={property.id}
              className="flex flex-col items-center rounded-lg"
            >
              <div className="mb-5 w-full overflow-hidden">
                <Image
                  src={property.imageSrc}
                  alt={property.title}
                  width={320}
                  height={200}
                  className="h-[200px] w-full rounded-xl object-cover lg:h-[380px]"
                />
              </div>
              <h3 className="text-base font-semibold text-black">
                {property.title}
              </h3>
              <p className="mb-2 text-sm text-gray-500">{property.subtitle}</p>
              <p className="mb-4 text-lg font-semibold text-black">
                {property.price}
              </p>
              <Link
                href="/property-details"
                className="rounded-xl border border-black px-4 py-2 text-sm font-semibold text-black hover:bg-gray-50 lg:w-full lg:text-center"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-primary-1 px-6 py-3 font-semibold text-black-111 lg:hidden"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};
