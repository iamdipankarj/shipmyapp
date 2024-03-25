// import { Pricing1 } from "@/components/pricing1";
// import { Pricing2 } from "@/components/pricing2";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Modal } from "@/components/modal";
import { Pricing3 } from "@/components/pricing3";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section>
        <div className="container mx-auto px-4 py-8 text-center">
          <Modal label="Open Modal">
            <div className="p-4">
              <h2 className="text-xl font-semibold">Modal Content</h2>
              <p className="text-base text-base-content mt-2">
                This is a modal dialog. You can close it by clicking the close icon or the backdrop.
              </p>
            </div>
          </Modal>
        </div>
      </section>
      <Pricing3 />
      <FAQ />
      <Hero />
    </main>
  );
}
