import { Accordion } from "@/components/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface FAQProps extends React.HTMLAttributes<HTMLElement> {}

export function FAQ({
  className,
  ...props
}: FAQProps) {
  return (
    <section id="faq" className={cn("py-24", className)} {...props}>
      <div className="container">
        <h4 className="sm:text-4xl text-3xl text-center font-extrabold text-base-content mb-8">
          Frequently Asked Questions
        </h4>
        <Accordion heading="What am I getting?">
          ShipMyApp is available as a one-time-purchase to access the Github repository. You will get lifetime accesss to the respository and all future updates.
        </Accordion>
        <Accordion heading="TypeScript or JavaScript?">
          The main repository is written in TypeScript. However, a JavaScript version can be provided for those who prefer it.
        </Accordion>
        <Accordion heading="Can I use it if my tech stack is not based on Next.js?">
          You can still use it as a reference. However, the code is optimized for Next.js and may require some modifications to work with other frameworks. If you framework is React but without Next.js, you can still use the components, pages and styles.
        </Accordion>
        <Accordion heading="Why should I buy this when there are free options available?">
          The free alternatives are great for learning but they are not updated frequently and  may not be production-ready. ShipMyApp is designed to be production-ready and save you time and effort in building your app. 
        </Accordion>
        <Accordion heading="Can I get a refund?">
          Due to the nature of digital products, we do not offer refunds. However, if you have any issues, please reach out to us. We will do our best to help you.
        </Accordion>
        <Accordion heading="Can I use ShipMyApp in multiple projects?">
          Absolutely. Once you buy ShipMyApp, you can use it in as many projects as you like. You can also modify it to suit your needs. It is yours forever.
        </Accordion>
        <Accordion heading="What if I need setting up the project?">
          You can reach out at <a className="link link-primary" href="mailto:iamdipankarj.workspace@gmail.com">iamdipankarj.workspace@gmail.com</a> for help with setting up the project. We will be happy to help you with any issues you may have.
        </Accordion>
        <Accordion heading="What if I want to use a specific UI library?">
          ShipMyApp is built with Tailwind CSS. You can easily replace the styles with any other UI library of your choice.
        </Accordion>
        <Accordion heading="Is it just one single template?">
          ShipMyApp comes with multiple templates for different use-cases. You can easily switch between them. Things like Waitlist, feature section, unique banner and hero sections, blog templates are included.
        </Accordion>
        <Accordion heading="How can I host the project?">
          Since ShipMyApp is built with Next.js, you can host it on Vercel, Netlify, or any other hosting provider that supports <strong>NodeJS</strong>.
        </Accordion>
        <Accordion heading="Can I use it without the AI features?">
          Yes, you can use ShipMyApp without the AI features. OpenAI integration is provided in case you are building an app that requires it. AI features are provided in a separate branch to keep the root codebase simple.
        </Accordion>
      </div>
    </section>
  )
}
