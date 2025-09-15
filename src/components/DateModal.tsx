"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Calendar } from "@/ui/components/Calendar";
import { Checkbox } from "@/ui/components/Checkbox";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { TextField } from "@/ui/components/TextField";
import { ToggleGroup } from "@/ui/components/ToggleGroup";
import { DialogLayout } from "@/ui/layouts/DialogLayout";
import { FeatherBox } from "@subframe/core";
import { FeatherCalendar } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";

interface DateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function DateModal({ open, onOpenChange }: DateModalProps) {
  const [activeTab, setActiveTab] = React.useState<'date' | 'stores'>('date');

  return (
    <DialogLayout open={open} onOpenChange={onOpenChange}>
      <div className="flex h-full w-full flex-col items-start">
        <div className="flex w-full items-center border-b border-solid border-neutral-border px-4 py-4">
          <span className="text-heading-2 font-heading-2 text-default-font">
            Filters
          </span>
        </div>
        <div className="flex w-full grow shrink-0 basis-0 items-start">
          <div className="flex w-64 flex-none flex-col items-start gap-4 border-r border-solid border-neutral-border bg-neutral-50 px-4 py-4">
            <div 
              className={`flex w-full items-center gap-2 cursor-pointer rounded-md px-3 py-2 ${
                activeTab === 'date' ? 'bg-brand-50' : 'hover:bg-neutral-100'
              }`}
              onClick={() => setActiveTab('date')}
            >
              <IconWithBackground
                variant="neutral"
                size="small"
                icon={<FeatherCalendar />}
              />
              <span className={`text-body font-body ${
                activeTab === 'date' ? 'text-brand-600' : 'text-default-font'
              }`}>
                Date
              </span>
            </div>
            <div 
              className={`flex w-full items-center gap-2 cursor-pointer rounded-md px-3 py-2 ${
                activeTab === 'stores' ? 'bg-brand-50' : 'hover:bg-neutral-100'
              }`}
              onClick={() => setActiveTab('stores')}
            >
              <IconWithBackground
                variant="neutral"
                size="small"
                icon={<FeatherBox />}
              />
              <span className={`text-body font-body ${
                activeTab === 'stores' ? 'text-brand-600' : 'text-default-font'
              }`}>
                Stores
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 px-6 py-6 grow">
            {activeTab === 'date' && (
              <>
                <ToggleGroup value="" onValueChange={(value: string) => {}}>
                  <ToggleGroup.Item icon={null} value="6eb82459">
                    Last Week
                  </ToggleGroup.Item>
                  <ToggleGroup.Item icon={null} value="883d37df">
                    Last Month
                  </ToggleGroup.Item>
                  <ToggleGroup.Item icon={null} value="9787ef32">
                    Last Year
                  </ToggleGroup.Item>
                </ToggleGroup>
                <div className="flex w-full items-start rounded-md border border-solid border-neutral-border px-4 py-4">
                  <Calendar
                    mode={"single"}
                    selected={new Date()}
                    onSelect={(date: Date | undefined) => {}}
                  />
                </div>
              </>
            )}
            
            {activeTab === 'stores' && (
              <>
                <TextField
                  className="h-auto w-full flex-none"
                  variant="filled"
                  label=""
                  helpText=""
                  icon={<FeatherSearch />}
                >
                  <TextField.Input
                    placeholder="Search store name"
                    value=""
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                  />
                </TextField>
                <div className="flex w-full flex-col items-start gap-2">
                  <Checkbox
                    label="SuperMart, MegaStore, HandyHome"
                    checked={false}
                    onCheckedChange={(checked: boolean) => {}}
                  />
                  <Checkbox
                    label="ShopZone, ValueMart, BuildIt"
                    checked={false}
                    onCheckedChange={(checked: boolean) => {}}
                  />
                  <Checkbox
                    label="EverydayGoods, QuickBuy"
                    checked={false}
                    onCheckedChange={(checked: boolean) => {}}
                  />
                  <Checkbox
                    label="MarketPlace, HomePlus, AllInOne"
                    checked={false}
                    onCheckedChange={(checked: boolean) => {}}
                  />
                  <Checkbox
                    label="DiscountDepot, HomeHaven, RetailWorld"
                    checked={false}
                    onCheckedChange={(checked: boolean) => {}}
                  />
                </div>
              </>
            )}
            
            <div className="flex w-full items-center justify-end gap-3">
              {activeTab === 'stores' && (
                <Button
                  variant="neutral-tertiary"
                  onClick={() => {}}
                >
                  Reset
                </Button>
              )}
              <Button
                variant="neutral-secondary"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={() => onOpenChange(false)}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DialogLayout>
  );
}

export default DateModal;