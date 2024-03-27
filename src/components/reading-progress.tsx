"use client";

import React, { useEffect, useState } from 'react'
import { cn } from "@/lib/utils"

interface ReadingProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  target?: React.RefObject<HTMLElement>
}

export function ReadingProgress({
  className,
  target,
  ...props
}: ReadingProgressProps) {
  const [width, setWidth] = useState(0);

  const scrollHeight = () => {
    const el = document.documentElement;
    const ScrollTop = el.scrollTop || document.body.scrollTop;
    const ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    const percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  }, []);

  return (
    <div className={cn("fixed h-1 top-0 bg-primary z-10", className)} {...props} style={{width: `${width}%` }} />
  )
}
