import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
}

export function Logo({
  className
}: LogoProps) {
  return (
    <Link className={cn("inline-flex w-48", className)} href="/">
      <Image
        src="/logo-light.png"
        alt="ShipMyApp"
        width={1675}
        height={512}
        priority
      />
    </Link>
  )
}
