"use client"

import React, { ReactNode } from 'react'
import { cn } from "@/lib/utils"

interface FeatureListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: ReactNode
}

export function FeatureListItem({
  className,
  icon,
  children,
  ...props
}: FeatureListItemProps) {
  return (
    <div className={cn("flex items-center gap-4", className)} {...props}>
      <div className="bg-primary/10 rounded-lg flex items-center justify-center h-12 w-12 shrink-0">
        {icon}
      </div>
      <h3 className="font-medium">{children}</h3>
    </div>
  )
}
