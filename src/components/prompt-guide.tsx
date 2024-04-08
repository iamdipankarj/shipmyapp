import React from 'react'
import { cn } from "@/lib/utils"

interface PromptGuideProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function PromptGuide({
  className,
  ...props
}: PromptGuideProps) {
  return (
    <div className={cn("block", className)} {...props}>
      Hello PromptGuide
    </div>
  )
}
