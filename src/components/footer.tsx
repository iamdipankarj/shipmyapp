import { Logo } from "@/components/logo";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Logo className="w-32" />
            <p className="mt-3 text-sm text-base-content/80 leading-relaxed">
              A No-Nonsense NextJS Boilerplate for Startups.
              <br />
              Made with ❤️ by <a href="https://twitter.com/iamdipankarj" className="link link-success" target="_blank" rel="nofollow">@iamdipankarj</a>
            </p>
            <a
              className="inline-block mt-4 text-sm border border-base-content/20 hover:border-base-content/40 hover:text-base-content/90 hover:bg-base-300 duration-200 cursor-pointer rounded text-base-content/80 px-2 py-1"
              href="/"
            >
              <div className="flex gap-1 items-center">
                <span>Built with</span>
                <Image
                  src="/icon-colored.png"
                  alt="ShipMyApp logo"
                  className="w-5 h-5"
                  width={20}
                  height={20}
                />
                <span className="font-bold text-base-content flex gap-0.5 items-center tracking-tight">ShipMyApp</span>
              </div>
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center md:text-left">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <a className="link link-hover" href="/#pricing">
                  Pricing
                </a>
                <a className="link link-hover" href="/license">
                  Licenses
                </a>
                <a className="link link-hover" href="/docs">
                  Documentation
                </a>
                <a
                  href="mailto:marc@shipfa.st"
                  target="_blank"
                  className="link link-hover"
                >
                  Support
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link className="link link-hover" href="/tos">
                  Terms of Service
                </Link>
                <Link className="link link-hover" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                TEMPLATES
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <a
                  href="https://launchvir.al/template"
                  target="_blank"
                  className="link link-hover"
                >
                  Course
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
