// import { Pricing1 } from "@/components/pricing1";
// import { Pricing2 } from "@/components/pricing2";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Pricing3 } from "@/components/pricing3";
import { CallToAction } from "@/components/call-to-action";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section>
        <div className="container mx-auto px-4 text-center">
          <CallToAction />
        </div>
      </section>
      <Pricing3 />
      <FAQ />
      <Hero />
    </main>
  );
}
