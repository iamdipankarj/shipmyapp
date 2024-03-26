"use client";

import { useSession } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { status } = useSession()

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }

  return (
    <>
      {children}
    </>
  );
}
