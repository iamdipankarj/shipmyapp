import { Accordion } from "@/components/accordion";
import Link from "next/link";

interface FAQProps extends React.HTMLAttributes<HTMLElement> {}

export function FAQ({
  className,
  ...props
}: FAQProps) {
  return (
    <section id="faq" className={className} {...props}>
      <div className="py-20 md:py-24 px-8 max-w-7xl mx-auto">
        <h4 className="sm:text-4xl text-3xl text-center font-extrabold text-base-content mb-8">
          Frequently Asked Questions
        </h4>
        <Accordion heading="What is Enormicom?">
          Enormicom is an AI-powered app.
        </Accordion>
        <Accordion heading="How does it work?">
          You can generate designs by providing a few parameters.
        </Accordion>
        <Accordion heading="How much does it cost?">
          The basic plan comes with 5 complimentary credits. You can also purchase credits to generate more designs. View our <Link href="/pricing" className="link link-success font-semibold">pricing</Link> page for more details.
        </Accordion>
      </div>
    </section>
  )
}
