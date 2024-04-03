import React from 'react'
import { cn } from "@/lib/utils"

interface FeatureBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
}

export function FeatureBadge({
  className,
  children,
  ...props
}: FeatureBadgeProps) {
  return (
    <span className={cn("text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1", className)} {...props}>
      {children}
    </span>
  )
}
