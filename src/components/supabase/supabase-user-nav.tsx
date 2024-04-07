"use client";

import { Menu, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
  CreditCard,
  Loader2,
  LogOut,
  User,
  UserCircleIcon
} from 'lucide-react'
import { Fragment } from 'react'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { supabaseSignOut, useSupabaseSession } from '@/hooks/supabase';

export function SupabaseUserNav() {
  const { session, image, name, loading} = useSupabaseSession();

  if (loading) {
    return (
      <Loader2 className="animate-spin w-5 h-5" />
    )
  } else if (session) {
    return (
      <Menu as="div" className="relative shrink-0 text-left">
        {({ open }) => (
          <>
            <Menu.Button className="btn btn-ghost btn-sm">
              {image ? (
                <div className="avatar">
                  <div className="w-4 rounded-full">
                    <Image
                      width={32}
                      height={32}
                      src={image ?? ""}
                      alt={name ?? ""}
                      loading='lazy'
                    />
                  </div>
                </div>
              ) : (
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <User className="w-4 h-4" />
                  </div>
                </div>
              )}
              <span>{name || "Anonymous"}</span>
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
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-neutral-content/20 rounded-md bg-base-100 shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    <Link href="/profile" className="btn btn-ghost btn-sm w-full rounded-md text-sm justify-start">
                      <UserCircleIcon className="w-5 h-5" />
                      Profile
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href="/billing" className="btn btn-ghost btn-sm w-full rounded-md text-sm justify-start">
                      <CreditCard className="w-5 h-5" />
                      Billing
                    </Link>
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    <button onClick={supabaseSignOut} className="btn btn-ghost btn-sm w-full rounded-md text-sm justify-start">
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

  return (
    <Link href="/supabase-login" className="btn btn-primary btn-sm">Login</Link>
  )
}
