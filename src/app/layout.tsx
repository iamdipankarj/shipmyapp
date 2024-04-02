import type { Metadata } from "next";
import { Gabarito as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { getMetaData, getStructuredData } from "@/lib/seo";
import { Toaster } from 'sonner';
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/session-provider.tsx";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProgressProvider from "@/components/progress-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = getMetaData();

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning data-theme="light">
        <head>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#41c289" />
          <script
            key="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
          />
        </head>
        <body className={cn("min-h-screen font-sans antialiased", fontSans.variable)}>
          <ProgressProvider>
            {children}
            <Toaster
              toastOptions={{ className: 'font-sans !text-sm' }}
              position="top-center"
              richColors
            />
          </ProgressProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
