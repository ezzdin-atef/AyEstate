import CtaSection from "@/components/feature/home-sections/cta-section/cta-section";
import { DiscoverSection } from "@/components/feature/home-sections/discover-section/discover-section";
import FaqAccordionSection from "@/components/feature/home-sections/faq-accordion-section/faq-accordion-section";
import { FindPropertiesSection } from "@/components/feature/home-sections/find-properties-section/find-properties-section";
import { HomeHeroSection } from "@/components/feature/home-sections/home-hero-section/home-hero-section";
import { InnovativeSection } from "@/components/feature/home-sections/innovative-section/innovative-section";
import { SimplifySection } from "@/components/feature/home-sections/simplify-section/simplify-section";
import TestimonialsSection from "@/components/feature/home-sections/testimonials-section/testimonials-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Your Dream and Ideal Home Today - AyEstate",
  description:
    "Find the perfect property that suits your lifestyle. Our real estate service offers unique selling propositions that set us apart from the competition.",
  openGraph: {
    images: "/images/hero-section-image.png",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
  },
};

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <DiscoverSection />
      <SimplifySection />
      <InnovativeSection />
      <FindPropertiesSection />
      <TestimonialsSection />
      <FaqAccordionSection />
      <CtaSection />
    </>
  );
}
