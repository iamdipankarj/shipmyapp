import React from 'react'
import { cn } from "@/lib/utils"

interface TabContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function TabContainer({
  className,
  children,
  ...props
}: TabContainerProps) {
  return (
    <div className={cn("p-1 rounded-xl bg-base-100 border-base-content/20 border flex items-stretch justify-center gap-1 text-xs font-medium text-base-content", className)} {...props}>
      {children}
    </div>
  )
}
