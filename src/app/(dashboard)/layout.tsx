"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { status } = useSession()
  const { push } = useRouter()

  if (status === "unauthenticated") {
    push("/login");
  }

  return (
    <>
      <DashboardHeader />
      <DashboardSidebar />
      {children}
    </>
  );
}
