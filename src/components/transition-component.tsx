"use client";

import React, { Fragment } from 'react'
import { Transition } from '@headlessui/react'

export function TransitionComponent({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Transition
      as={Fragment}
      show
      appear
      enter="transform transition-all duration-700"
      enterFrom="opacity-0 translate-y-4"
      enterTo="opacity-100 translate-y-0"
    >
      {children}
    </Transition>
  )
}
