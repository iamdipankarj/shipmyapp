import React from 'react'
import { cn } from "@/lib/utils"

interface FeatureContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function FeatureContainer({
  className,
  children,
  ...props
}: FeatureContainerProps) {
  return (
    <div className={cn("grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center", className)} {...props}>
      {children}
    </div>
  )
}
