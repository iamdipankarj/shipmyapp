"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Hamburger } from "@/components/hamburger";
import { UserNav } from "@/components/user-nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const updateScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", updateScroll)

    return () => {
      window.removeEventListener("scroll", updateScroll)
    }
  }, [])

  return (
    <header
      id="navbar"
      className="h-16"
    >
      <div className={cn("fixed top-0 inset-x-0 flex items-center z-40 w-full bg-transparent transition-all h-16", {
        "shadow-md": scrolled,
        "bg-base-100/80": scrolled,
        "backdrop-blur": scrolled
      })}>
        <div className="container relative flex items-center">
          <Logo className="shrink-0" />
          <nav className="flex-1 flex items-center  justify-end">
            <div id="navigation" className="flex mobile-menu gap-x-3 items-center justify-center md:flex-row md:static md:bg-transparent md:scale-100">
              <Link href="/#pricing" className="btn btn-ghost btn-sm">
                Pricing
              </Link>
              <Link href="https://docs.shipmyapp.com" target="_blank" className="btn btn-ghost btn-sm">
                Documentation
              </Link>
              <Link href="/features" className="btn btn-ghost btn-sm">
                Features
              </Link>
              <Link href="/blog" className="btn btn-ghost btn-sm">
                Blog
              </Link>
              <UserNav />
            </div>
            <Hamburger className="md:hidden" />
          </nav>
        </div>
      </div>
    </header>
  )
}
