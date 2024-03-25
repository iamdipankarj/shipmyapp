"use client";

import { Transition } from '@headlessui/react'
import { Check } from "lucide-react";
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

export default function CheckoutSuccess() {
  const [isShowing, setIsShowing] = useState(false)
  const { push } = useRouter()

  useEffect(() => {
    setTimeout(() => {
      setIsShowing(true)
    }, 300)
    setTimeout(() => {
      push("/features")
    }, 1500)
  }, [])

  return (
    <main className="flex flex-col h-screen p-6 justify-center items-center bg-base-200">
      <div className="w-full md:w-1/3 mx-auto">
        <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition-all duration-700"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
        >
          <div className="flex flex-col p-6 rounded-xl bg-base-100 relative overflow-hidden">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="inline-block p-4 bg-success/20 rounded-full mb-1">
                <Check className="w-8 h-8 text-success" />
              </div>
              <h2 className="font-semibold text-2xl text-gray-800">
                Payment Successful
              </h2>
              <p className="text-md text-gray-600 leading-relaxed">
                Redirecting...
              </p>
            </div>
            <div className="w-full bg-base-200-full h-2 absolute left-0 bottom-0 right-0">
              <div className="bg-success h-full rounded-md w-0 animate-progress"></div>
            </div>
          </div>
        </Transition>
      </div>
    </main>
  )
}
