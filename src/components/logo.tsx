import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
}

export function Logo({
  className
}: LogoProps) {
  return (
    <Link className={cn(className)} href="/">
      <Image
        src="/logo.png"
        alt="ShipMyApp"
        className="w-28 md:w-48"
        width={1675}
        height={512}
        layout="fixed"
        priority
      />
    </Link>
  )
}
