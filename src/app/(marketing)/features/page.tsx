"use client";

import { ImageCarousel } from "@/components/ImageCarousel";
import { BottomSheet } from "@/components/bottom-sheet";
import { ButtonPopover } from "@/components/button-popover";
import { Masonry } from "@/components/masonry";
import { Modal } from '@/components/modal';
import { Tab } from "@/components/tab";
import { TabContainer } from "@/components/tab-container";
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
      <section className="max-w-7xl mx-auto px-8">
        {/* <Masonry /> */}
        <div className="container py-20 pb-40">
          <ButtonPopover />
        </div>
      </section>

      {/* <section>
        <div className="container">
          <button className="btn btn-sm btn-primary" onClick={handleModalClick}>Open Modal</button>
          <Modal heading="What is Calculus?" open={confirmOpen} onClose={setConfirmOpen}>
            <div className="text-sm mt-2 mb-4 text-base-content/70 text-left">Calculus is a branch of mathematics that deals with the study of rates of change and accumulation of quantities. It provides a framework for understanding how things change and how they accumulate over time or space. Calculus is comprised of two main branches: differential calculus and integral calculus.</div>
            <button type="submit" className="btn btn-primary btn-sm mx-auto flex">
              Continue
            </button>
          </Modal>
        </div>
      </section> */}

      <section className="max-w-7xl mx-auto px-8">
        <div className="container py-20 pb-40">
          <ImageCarousel />
        </div>
      </section>

      <section>
        <div className="container">
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
      </section>
      
      {/* <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
        <BottomSheet />
        <button className="btn btn-primary" onClick={() => {
          toast.success("Drawer opened");
        }}>Show Toast</button>
      </section> */}
    </main>
  )
}
