"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Checkbox } from "@/ui/components/Checkbox";
import { IconButton } from "@/ui/components/IconButton";
import { TextField } from "@/ui/components/TextField";
import { DialogLayout } from "@/ui/layouts/DialogLayout";
import { FeatherBox } from "@subframe/core";
import { FeatherCalendar } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";

function StoreModal() {
  return (
    <DialogLayout open={false} onOpenChange={() => {}}>
      <div className="flex w-full flex-col items-start gap-6 px-6 py-6">
        <span className="text-heading-2 font-heading-2 text-default-font">
          Filters
        </span>
        <div className="flex w-full items-start gap-6">
          <div className="flex w-60 flex-none flex-col items-start gap-4">
            <div className="flex w-full items-center gap-2 rounded-md bg-neutral-50 px-3 py-2">
              <IconButton
                size="small"
                icon={<FeatherCalendar />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <span className="text-body font-body text-default-font">
                Date
              </span>
            </div>
            <div className="flex w-full items-center gap-2 rounded-md bg-brand-50 px-3 py-2">
              <IconButton
                size="small"
                icon={<FeatherBox />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <span className="text-body font-body text-brand-600">Stores</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 grow">
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
          </div>
        </div>
        <div className="flex w-full items-center justify-between border-t border-solid border-neutral-200 pt-6">
          <Button
            variant="neutral-tertiary"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Reset
          </Button>
          <div className="flex items-center gap-2">
            <Button
              variant="neutral-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Cancel
            </Button>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </DialogLayout>
  );
}

export default StoreModal;