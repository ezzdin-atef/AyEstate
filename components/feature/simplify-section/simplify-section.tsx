import Image from "next/image";
import findPropertyImage from "@/assets/images/find-property-image.png";
import connectAggentImage from "@/assets/images/connect-aggent.png";
import negotiateDealsImage from "@/assets/images/negotiate-deals.png";

export const SimplifySection = () => {
    return <section className="bg-white py-[50px]">
    <div className="container mx-auto px-5">
    <div className="mb-12">
    <p className="text-base text-center font-semibold text-black mb-3">
        Simplify
        </p>
        <h1 className="text-[32px] font-bold text-center text-black mb-5 leading-10">
        Streamline Your Property Buying or Selling Process
    </h1>
    <p className="text-base text-black text-center leading-6">
        Our website provides a step-by-step guide to help you seamlessly
    navigate the process of buying or selling property. From finding
    the perfect property to closing the deal, we&apos;ve got you
    covered.
    </p>
    </div>

    <div className="space-y-12">
    <div className="flex flex-col items-center">
    <div className="rounded-lg overflow-hidden mb-6 w-80 h-52">
    <Image
        src={findPropertyImage}
    alt="Find Your Dream Property"
    width={320}
    height={200}
    className="object-cover"
        />
        </div>
        <h2 className="text-2xl font-bold text-black leading-7 mb-5 text-center">
        Find Your Dream Property
    </h2>
    <p className="text-base text-black leading-6 text-center">
        Browse through a wide selection of properties that match your
    preferences and requirements.
    </p>
    </div>

    <div className="flex flex-col items-center">
    <div className="rounded-lg overflow-hidden mb-6 w-80 h-52">
    <Image
        src={connectAggentImage}
    alt="Connect with Trusted Agents"
    width={320}
    height={200}
    className="object-cover"
        />
        </div>
        <h2 className="text-2xl font-bold text-black leading-7 mb-5 text-center">
        Connect with Trusted Agents
    </h2>
    <p className="text-base text-black leading-6 text-center">
        Our platform connects you with experienced and reliable real
    estate agents who will guide you through the process.
    </p>
    </div>

    <div className="flex flex-col items-center">
    <div className="rounded-lg overflow-hidden mb-6 w-80 h-52">
    <Image
        src={negotiateDealsImage}
    alt="Negotiate and Close the Deal"
    width={320}
    height={200}
    className="object-cover"
        />
        </div>
        <h2 className="text-2xl font-bold text-black leading-7 mb-5 text-center">
        Negotiate and Close the Deal
    </h2>
    <p className="text-base text-black leading-6 text-center">
        Our experts will assist you in negotiating the best terms and
    ensuring a smooth closing process.
    </p>
    </div>
    </div>
    </div>
    </section>
}