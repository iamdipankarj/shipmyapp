import type { Metadata } from "next";
import { getMetaData } from "@/lib/seo";

export const metadata: Metadata = getMetaData();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
