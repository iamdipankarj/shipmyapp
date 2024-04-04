"use client";

import { ImageCarousel } from "@/components/ImageCarousel";
import { BottomSheet } from "@/components/bottom-sheet";
import { ButtonPopover } from "@/components/button-popover";
import { Masonry } from "@/components/masonry";
import { Modal } from '@/components/modal';
import { Tab } from "@/components/tab";
import { TabContainer } from "@/components/tab-container";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function Features() {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState(1)

  const handleModalClick = () => {
    setConfirmOpen(true);
  }

  return (
    <main className="space-y-4 py-24">
      <section>
        <div className="container">
          <div className="text-center flex items-center flex-col gap-4">
            <h1 className="text-2xl md:text-4xl sm:leading-tight font-bold">Components</h1>
            <pre className="inline-flex bg-base-200 rounded-md px-2 shadow-sm border border-base-content/40"><code>src/components/*</code></pre>
          </div>
        </div>
      </section>
      {/* Popover */}
      <section className="py-12">
        <div className="container flex-col flex items-center gap-7 justify-center">
          <h2 className="font-semibold text-2xl">Popover</h2>
          <pre className="inline-flex bg-base-200 rounded-md px-2 shadow-sm border border-base-content/40">
            <code>{decodeURIComponent("<ButtonPopover />")}</code>
          </pre>
          <ButtonPopover />
        </div>
      </section>
      {/* Modal */}
      <section className="py-12 bg-base-200/50">
        <div className="container flex-col flex items-center gap-7 justify-center">
          <h2 className="font-semibold text-2xl">Modal</h2>
          <pre className="inline-flex bg-base-200 rounded-md px-2 shadow-sm border border-base-content/40">
            <code>{decodeURIComponent("<Modal />")}</code>
          </pre>
          <button className="btn btn-sm btn-primary" onClick={handleModalClick}>Open Modal</button>
          <Modal heading="What is Calculus?" open={confirmOpen} onClose={setConfirmOpen}>
            <div className="text-sm mt-2 mb-4 text-base-content/70 text-left">Calculus is a branch of mathematics that deals with the study of rates of change and accumulation of quantities. It provides a framework for understanding how things change and how they accumulate over time or space. Calculus is comprised of two main branches: differential calculus and integral calculus.</div>
            <button type="submit" className="btn btn-primary btn-sm mx-auto flex">
              Continue
            </button>
          </Modal>
        </div>
      </section>
      {/* Carousel */}
      <section className="py-12">
        <div className="container flex-col flex items-center gap-7 justify-center">
          <h2 className="font-semibold text-2xl">Carousel</h2>
          <pre className="inline-flex bg-base-200 rounded-md px-2 shadow-sm border border-base-content/40">
            <code>{decodeURIComponent("<ImageCarousel />")}</code>
          </pre>
          <ImageCarousel />
        </div>
      </section>
      {/* Tabs */}
      <section className="py-12 bg-base-200/50">
        <div className="container flex-col flex items-center gap-7 justify-center">
          <h2 className="font-semibold text-2xl">Tabs</h2>
          <pre className="inline-flex bg-base-200 rounded-md px-2 shadow-sm border border-base-content/40">
            <code>{decodeURIComponent(`<TabContainer>
  <Tab>Monthly</Tab>
  <Tab>Yearly</Tab>
</TabContainer>`)}</code>
          </pre>
          <div>
            <TabContainer className="max-w-64 mx-auto mb-4">
              <Tab onClick={() => setSelectedTab(0)} selected={selectedTab == 0}>Monthly</Tab>
              <Tab onClick={() => setSelectedTab(1)} selected={selectedTab == 1}>Yearly</Tab>
            </TabContainer>
            <div className="text-center">
              {selectedTab == 0 ? (
                <p>Monthly subscription content</p>
              ) : (
                <p>Yearly subscription content</p>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Bottom Sheet */}
      <section className="py-12">
        <div className="container flex-col flex items-center gap-7 justify-center">
          <h2 className="font-semibold text-2xl">Bottom Sheet</h2>
          <pre className="inline-flex bg-base-200 rounded-md px-2 shadow-sm border border-base-content/40">
            <code>{decodeURIComponent("<BottomSheet />")}</code>
          </pre>
          <BottomSheet />
        </div>
      </section>
      {/* Masonry */}
      <section className="py-12 bg-base-200/50">
        <div className="container flex-col flex items-center gap-7 justify-center">
          <h2 className="font-semibold text-2xl">Masonry</h2>
          <pre className="inline-flex bg-base-200 rounded-md px-2 shadow-sm border border-base-content/40">
            <code>{decodeURIComponent("<Masonry />")}</code>
          </pre>
          <Masonry />
        </div>
      </section>
      {/* Buttons */}
      <section className="py-12 bg-base-200/50">
        <div className="container flex-col flex items-center gap-7 justify-center">
          <h2 className="font-semibold text-2xl">Buttons</h2>
          <pre className="inline-flex bg-base-200 rounded-md px-2 shadow-sm border border-base-content/40">
            <code>{decodeURIComponent("<button className=\"btn btn-active ...\">Default</button>")}</code>
          </pre>
          <p>More info on <Link className="link link-primary" href="https://daisyui.com/components/button/" target="_blank">https://daisyui.com/components/button/</Link></p>
          <div className="flex gap-4 flex-wrap">
            <button className="btn btn-active">Default</button>
            <button className="btn btn-active btn-neutral">Neutral</button>
            <button className="btn btn-active btn-primary">Primary</button>
            <button className="btn btn-active btn-secondary">Secondary</button>
            <button className="btn btn-active btn-accent">Accent</button>
            <button className="btn btn-active btn-ghost">Ghost</button>
            <button className="btn btn-active btn-link">Link</button>
          </div>
        </div>
      </section>
    </main>
  )
}
