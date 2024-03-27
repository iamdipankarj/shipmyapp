"use client";

import { Dialog, Transition } from '@headlessui/react'
import { X } from 'lucide-react';
import React, { Fragment, ReactNode } from 'react'

interface ModalProps extends React.PropsWithChildren<{}> {
  open?: boolean
  heading?: ReactNode | null
  onClose: (value: boolean) => void
}

export function Modal({
  heading,
  children,
  open,
  onClose
}: ModalProps) {
  const closeModal = () => {
    onClose(false);
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-base-300 bg-opacity-60 backdrop-blur opacity-100" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden relative rounded-2xl bg-base-100 p-6 text-left align-middle shadow-xl transition-all">
                {heading ? (
                  <h3 className="font-extrabold text-center w-full text-xl md:text-2xl">{heading}</h3>
                ) : null}
                <button className="btn btn-square btn-sm text-slate-500 absolute right-4 top-4" onClick={closeModal}>
                  <X className="w-4 h-4" />
                </button>
                <div className="space-y-2">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
