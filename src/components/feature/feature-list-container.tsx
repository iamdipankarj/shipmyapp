import React from 'react'
import { cn } from "@/lib/utils"

interface FeatureListContainerProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function FeatureListContainer({
  className,
  children,
  ...props
}: FeatureListContainerProps) {
  return (
    <div className={cn("flex flex-col gap-4 mt-10", className)} {...props}>
      {children}
    </div>
  )
}
