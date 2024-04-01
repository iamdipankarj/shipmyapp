import Link from "next/link";
import { Logo } from "@/components/logo";
import { Hamburger } from "@/components/hamburger";
import { UserNav } from "@/components/user-nav";

export function Header() {
  return (
    <header
      id="navbar"
      className="h-16"
    >
      <div className="fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-base-100/80 backdrop-blur transition-all h-16">
        <div className="container relative flex items-center">
          <Logo className="shrink-0" />
          <nav className="flex-1 flex items-center  justify-end">
            <div id="navigation" className="flex mobile-menu gap-x-3 items-center justify-center md:flex-row md:static md:bg-transparent md:scale-100">
              <Link href="#pricing" className="btn btn-ghost btn-sm">
                Pricing
              </Link>
              <Link href="https://shipmyapp.com/docs" className="btn btn-ghost btn-sm">
                Documentation
              </Link>
              <Link href="/features" className="btn btn-ghost btn-sm">
                Features
              </Link>
              <Link href="#pricing" className="btn btn-primary btn-sm">Buy Now</Link>
              <UserNav />
            </div>
            <Hamburger className="md:hidden" />
          </nav>
        </div>
      </div>
    </header>
  )
}
