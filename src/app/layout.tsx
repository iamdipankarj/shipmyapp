import type { Metadata } from "next";
import { Gabarito as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "ShipMyApp",
  description: "A NextJS Boilerplat for Startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="signal">
      <body className={cn("min-h-screen font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
