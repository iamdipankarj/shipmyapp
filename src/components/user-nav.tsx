"use client";

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, CreditCard, LogOut, UserCircleIcon } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react';
import { Fragment } from 'react'
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function UserNav() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <Menu as="div" className="relative shrink-0 text-left">
      {({ open }) => (
        <>
          <Menu.Button className="btn">
            {session.user?.image ? (
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <Image
                    width={32}
                    height={32}
                    src={session.user?.image ?? ""}
                    alt={session.user?.name ?? ""}
                    loading='lazy'
                  />
                </div>
              </div>
            ) : (
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-8">
                  <span className="text-xs">UI</span>
                </div>
              </div>
            )}
            <span>Options</span>
            <ChevronDownIcon className={cn("w-5 h-5 transition-transform", {
              'transform rotate-180': open
            })} />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  <button className="btn btn-ghost btn-sm w-full rounded-md text-sm justify-start">
                    <UserCircleIcon className="w-5 h-5" />
                    Profile
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button className="btn btn-ghost btn-sm w-full rounded-md text-sm justify-start">
                    <CreditCard className="w-5 h-5" />
                    Billing
                  </button>
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  <button onClick={() => signOut()} className="btn btn-ghost btn-sm w-full rounded-md text-sm justify-start">
                    <LogOut className="w-5 h-5" />
                    Log Out
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
