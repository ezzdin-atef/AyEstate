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
          <p className="text-base font-semibold text-black mb-3">Find</p>
          <h1 className="text-[32px] font-bold text-black mb-5">Properties</h1>
          <p className="text-base text-black leading-6">
            Explore our curated list of properties and find your dream home.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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
              <div className="overflow-hidden mb-5 w-full">
                <Image
                  src={property.imageSrc}
                  alt={property.title}
                  width={320}
                  height={200}
                  className="object-cover w-full h-[200px]"
                />
              </div>
              <h3 className="text-base font-semibold text-black">
                {property.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{property.subtitle}</p>
              <p className="text-lg font-semibold text-black mb-4">
                {property.price}
              </p>
              <Link
                href="/property-details"
                className="text-sm font-semibold text-black border border-primary-1 px-4 py-2 rounded-xl hover:bg-gray-50"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#"
            className="h-12 inline-flex justify-center items-center bg-primary-1 font-semibold text-black-111 rounded-xl py-3 px-6"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};
