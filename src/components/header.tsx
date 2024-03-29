import Link from "next/link";
import { Logo } from "@/components/logo";
import { Hamburger } from "@/components/hamburger";
import { UserNav } from "@/components/user-nav";
import { ThemeChooser } from "@/components/theme-chooser";

export function Header() {
  return (
    <header className="max-w-7xl mx-auto px-4 py-5 flex items-center">
      <Logo />
      <div className="flex flex-1 pl-12 md:pl-24 items-center gap-4 md:gap-12">
        <Link className="link link-hover" href="/#pricing">
          Pricing
        </Link>
        <Link className="link link-hover hidden sm:inline" href="#demo">
          Demo
        </Link>
        <Link className="link link-hover hidden sm:inline" href="/blog">
          Blog
        </Link>
        <Link className="link link-hover" href="/features">
          Features
        </Link>
      </div>
      <div className="flex gap-2">
        <ThemeChooser />
        <UserNav />
        <Hamburger />
      </div>
    </header>
  )
}
