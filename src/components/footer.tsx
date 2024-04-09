import { Logo } from "@/components/logo";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-base-200">
      <div className="container">
        <div className="grid xl:grid-cols-5 gap-6 py-16">
          <div className="xl:col-span-2">
            <Logo className="w-32" />
            <p className="mt-3 text-md text-base-content/80 leading-relaxed">
              A No-Nonsense NextJS Boilerplate for Startups.
              <br />
              Made with ❤️ by <a href="https://twitter.com/iamdipankarj" className="link link-primary" target="_blank" rel="nofollow">@iamdipankarj</a>
            </p>
            <Link
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
            </Link>
          </div>
          <div className="xl:col-span-3 col-span-4">
            <div className="flex flex-col sm:flex-row gap-6 flex-wrap justify-between">
              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 font-semibold uppercase">LINKS</h5>
                  <Link className="link link-hover text-gray-500/80" href="/#pricing">
                    Pricing
                  </Link>
                  <Link className="link link-hover text-gray-500/80" target="_blank" href="https://docs.shipmyapp.com/">
                    Documentation
                  </Link>
                  <Link
                    href="mailto:iamdipankarj.workspace@gmail.com"
                    target="_blank"
                    className="link link-hover text-gray-500/80"
                  >
                    Support
                  </Link>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 uppercase">LEGAL</h5>
                  <Link className="link link-hover text-gray-500/80" href="/tos">
                    Terms of Service
                  </Link>
                  <Link className="link link-hover text-gray-500/80" href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 uppercase">Social Media</h5>
                  <div className="text-gray-500/80">
                    <Link className="link link-hover" href="https://twitter.com/iamdipankarj">X: @iamdipankarj</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
