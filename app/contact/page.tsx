import ContactForm from "@/components/feature/contact-sections/contact-form/contact-form";
import ContactHero from "@/components/feature/contact-sections/contact-hero/contact-hero";
import ContactServices from "@/components/feature/contact-sections/contact-services/contact-services";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact US - AyEstate",
  description:
    " Exelent customer service. If you have any questions you can report them and we will reply to your message.",
  openGraph: {
    images: "/images/contact/large-map.png",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
  },
};

export default function Contact() {
  return (
    <div className="container mx-auto px-5 pt-[30px] lg:pt-[120px]">
      <ContactHero />
      <ContactServices />
      <ContactForm />
    </div>
  );
}
