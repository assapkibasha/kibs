import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LayeredCardsSection } from "@/components/sections/layered-cards-section";
import { PortfolioShell } from "@/components/sections/portfolio-shell";
import { PricingSection } from "@/components/sections/pricing-section";
import { StackSection } from "@/components/sections/stack-section";
import { WorkSection } from "@/components/sections/work-section";

export default function Home() {
  return (
    <PortfolioShell>
      <HeroSection />
      <WorkSection />
      <LayeredCardsSection />
      <AboutSection />
      <StackSection />
      <PricingSection />
      <ContactSection />
    </PortfolioShell>
  );
}
