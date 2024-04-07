"use client";

import React from 'react'
import { cn } from "@/lib/utils"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface DashboardSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
}

const paths = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Settings',
    href: '/settings',
  }
]

export function DashboardSidebar({
  className,
  ...props
}: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={cn("fixed bottom-0 left-0 top-14 min-w-64 bg-base-100 shadow-md", className)} {...props}>
      <div className="space-y-1 py-4 px-4">
        {paths.map((path) => (
          <Link key={path.href} href={path.href} className={cn("btn btn-ghost justify-start text-left btn-md w-full", {
            'btn-active': path.href === pathname
          })}>{path.name}</Link>
        ))}
      </div>
    </aside>
  )
}
