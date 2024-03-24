import { Pricing1 } from "@/components/pricing1";
import { Pricing2 } from "@/components/pricing2";
import { Pricing3 } from "@/components/pricing3";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Pricing1 />
      <Pricing2 />
      <Pricing3 />
    </main>
  );
}
