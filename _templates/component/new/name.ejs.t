---
to: src/components/<%= name %>.tsx
---
import React from 'react'
import { cn } from "@/lib/utils"

interface <%= h.inflection.capitalize(name) %>Props extends React.HTMLAttributes<HTMLDivElement> {
}

export function <%= h.inflection.capitalize(name) %>({
  className,
  ...props
}: <%= h.inflection.capitalize(name) %>Props) {
  return (
    <div className={cn("block", className)} {...props}>
      Hello <%= name %>
    </div>
  )
}
