"use client";

import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import { PricingColumnMinimal } from '@/components/pricing-column-minimal'
import { PricingHeader } from '@/components/pricing-header'
import { TabContainer } from '@/components/tab-container'
import { Tab } from '@/components/tab'

interface PricingProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Pricing3({
  className,
  ...props
}: PricingProps) {
  const [selectedTab, setSelectedTab] = useState(1)

  return (
    <section className={cn("bg-base-200 overflow-hidden", className)} {...props}>
      <div className="py-20 px-8 max-w-5xl mx-auto">
        <PricingHeader className="mb-12" />
        <TabContainer className="max-w-64 mx-auto mb-4">
          <Tab onClick={() => setSelectedTab(0)} selected={selectedTab == 0}>Monthly</Tab>
          <Tab onClick={() => setSelectedTab(1)} selected={selectedTab == 1}>Yearly</Tab>
        </TabContainer>
        <div className="text-xs text-center text-neutral/60 mb-8">Pay yearly and save upto 50%</div>
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          <PricingColumnMinimal
            heading="Starter"
            price="$0"
            strikedPrice="$10"
            frequency={selectedTab == 0 ? "monthly" : "yearly"}
            lineItems={[
              '8 hours usage of our coworking space',
              'Access to all events'
            ]}
          />
          <PricingColumnMinimal
            heading="Plus"
            price={selectedTab == 0 ? "$10" : "$100"}
            strikedPrice={selectedTab == 0 ? "$15" : "$120"}
            frequency={selectedTab == 0 ? "monthly" : "yearly"}
            lineItems={[
              '8 hours usage of our coworking space',
              'Access to all events',
              'Dedicated Desk',
              'Free Business Address',
              'Free Lunch 1x a day'
            ]}
            featured
          />
          <PricingColumnMinimal
            heading="Pro"
            price={selectedTab == 0 ? "$20" : "$200"}
            strikedPrice={selectedTab == 0 ? "$15" : "$240"}
            frequency={selectedTab == 0 ? "monthly" : "yearly"}
            lineItems={[
              '8 hours usage of our coworking space',
              'Access to all events'
            ]}
          />
          <PricingColumnMinimal
            heading="Enterprise"
            price={selectedTab == 0 ? "$30" : "$300"}
            strikedPrice={selectedTab == 0 ? "$15" : "$360"}
            frequency={selectedTab == 0 ? "monthly" : "yearly"}
            lineItems={[
              '8 hours usage of our coworking space',
              'Access to all events',
              'Dedicated Desk',
              'Free Business Address',
              'Free Lunch 1x a day'
            ]}
          />
        </div>
      </div>
    </section>
  )
}
