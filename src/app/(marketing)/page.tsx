// import { Pricing1 } from "@/components/pricing1";
// import { Pricing2 } from "@/components/pricing2";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Pricing3 } from "@/components/pricing3";
import { CallToAction } from "@/components/call-to-action";
import { Newsletter } from "@/components/newsletter";
// import { HeroMinimal } from "@/components/hero-minimal";
import { Banner } from "@/components/banner";
import { LandingFeature } from "@/components/landing-feature";
import { AuthenticationFeature } from "@/components/authentication-feature";
import { PaymentFeature } from "@/components/payment-feature";
import { EmailFeature } from "@/components/email-feature";
import { AIFeature } from "@/components/ai-feature";
import { DatabaseFeature } from "@/components/database-feature";
import { BlogFeature } from "@/components/blog-feature";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <LandingFeature />
      <AuthenticationFeature />
      <PaymentFeature />
      <EmailFeature />
      <AIFeature />
      <DatabaseFeature />
      <BlogFeature />
      {/* <Newsletter /> */}
      <CallToAction />
      <Pricing3 />
      <FAQ />
      <Hero />
    </main>
  );
}
