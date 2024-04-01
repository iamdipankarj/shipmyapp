// import { Pricing1 } from "@/components/pricing1";
// import { Pricing2 } from "@/components/pricing2";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Pricing3 } from "@/components/pricing3";
import { CallToAction } from "@/components/call-to-action";
import { Newsletter } from "@/components/newsletter";
// import { HeroMinimal } from "@/components/hero-minimal";
import { Banner } from "@/components/banner";
import { FeatureSection } from "@/components/feature-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <FeatureSection />
      {/* <Newsletter /> */}
      <CallToAction />
      <Pricing3 />
      <FAQ />
      <Hero />
    </main>
  );
}
