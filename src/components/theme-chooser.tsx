"use client";

import React, { Fragment, useState } from 'react'
import { cn } from "@/lib/utils"
import { Check, ChevronDownIcon } from 'lucide-react'
import { Menu, Transition } from '@headlessui/react'

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula"
]

interface ThemeChooserProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function ThemeChooser({
  className,
  ...props
}: ThemeChooserProps) {
  const [currentTheme, setCurrentTheme] = useState<string>("light")

  const handleThemeChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = event.currentTarget.getAttribute("data-set-theme")
    setCurrentTheme(newTheme || "light")
    document.documentElement.setAttribute("data-theme", newTheme || "light")
  }

  return (
    <Menu as="div" className="relative shrink-0 text-left">
      {({ open }) => (
        <>
          <Menu.Button className="btn btn-ghost">
            <span>{currentTheme}</span>
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
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none overflow-hidden">
              <div className="dropdown-content text-base-content h-[28.6rem] max-h-[calc(100vh-10rem)] w-56 overflow-y-auto shadow-2xl">
                <div className="grid grid-cols-1 gap-3 p-3">
                  {themes.map((theme) => (
                    <Menu.Item key={theme}>
                      <button
                        data-set-theme={theme}
                        onClick={handleThemeChange}
                        className="outline-base-content text-start outline-offset-4"
                      >
                        <span
                          data-theme={theme}
                          className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                        >
                          <span className="grid grid-cols-5 grid-rows-3">
                            <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                              <Check className={cn("w-4 h-4 stroke-4 shrink-0", {
                                "invisible": currentTheme !== theme
                              })} />
                              <span className="flex-grow text-sm">{theme}</span>
                              <span className="flex h-full shrink-0 flex-wrap gap-1">
                                <span className="bg-primary rounded-badge w-2" />
                                <span className="bg-secondary rounded-badge w-2" />
                                <span className="bg-accent rounded-badge w-2" />
                                <span className="bg-neutral rounded-badge w-2" />
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </Menu.Item>
                  ))}
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
