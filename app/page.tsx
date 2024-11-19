import { DiscoverSection } from "@/components/feature/home-sections/discover-section/discover-section";
import { FindPropertiesSection } from "@/components/feature/home-sections/find-properties-section/find-properties-section";
import { HomeHeroSection } from "@/components/feature/home-sections/home-hero-section/home-hero-section";
import { InnovativeSection } from "@/components/feature/home-sections/innovative-section/innovative-section";
import { SimplifySection } from "@/components/feature/home-sections/simplify-section/simplify-section";
import TestimonialsSection from "@/components/feature/home-sections/testimonials-section/testimonials-section";

export default function Home() {
  return (
    <div>
      <HomeHeroSection />
      <DiscoverSection />
      <SimplifySection />
      <InnovativeSection />
      <FindPropertiesSection />
      <TestimonialsSection />
    </div>
  );
}
