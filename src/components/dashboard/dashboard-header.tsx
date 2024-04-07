import React from 'react'
import { cn } from "@/lib/utils"
import { UserNav } from '@/components/user-nav'
import { Logo } from '@/components/logo'

interface DashboardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function DashboardHeader({
  className,
  ...props
}: DashboardHeaderProps) {
  return (
    <header className={cn("flex fixed h-14 items-center bg-base-100 shadow-md z-50 w-full top-0 left-0", className)} {...props}>
      <div className='flex w-full h-full items-center px-4 justify-between'>
        <Logo className="shrink-0" />
        <UserNav />
      </div>
    </header>
  )
}
