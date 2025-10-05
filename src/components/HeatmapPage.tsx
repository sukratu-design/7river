import React from "react";
import { Avatar } from "../ui/components/Avatar";
import { IconButton } from "../ui/components/IconButton";
import { Select } from "../ui/components/Select";
import { TextField } from "../ui/components/TextField";
import { DefaultPageLayout } from "../ui/layouts/DefaultPageLayout";
import { FeatherBell } from "@subframe/core";
import { FeatherCalendar } from "@subframe/core";
import { FeatherMaximize } from "@subframe/core";
import { FeatherMoon } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";

interface HeatmapPageProps {
  onNavigateToHome?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToAlerts?: () => void;
  onNavigateToHeatmap?: () => void;
  currentPage?: 'home' | 'search' | 'alerts' | 'heatmap';
}

export default function HeatmapPage({
  onNavigateToHome,
  onNavigateToSearch,
  onNavigateToAlerts,
  onNavigateToHeatmap,
  currentPage
}: HeatmapPageProps) {
  return (
    <DefaultPageLayout
      onNavigateToHome={onNavigateToHome}
      onNavigateToSearch={onNavigateToSearch}
      onNavigateToAlerts={onNavigateToAlerts}
      onNavigateToHeatmap={onNavigateToHeatmap}
      currentPage={currentPage}
    >
      <div className="flex w-full flex-col items-start gap-6 bg-neutral-50 px-6 py-6">
        <div className="flex w-full items-center gap-4">
          <TextField
            variant="filled"
            label=""
            helpText=""
            icon={<FeatherSearch />}
            onClick={onNavigateToSearch}
          >
            <TextField.Input
              placeholder="Search"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              onFocus={onNavigateToSearch}
            />
          </TextField>
          <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2">
            <IconButton
              icon={<FeatherBell />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <IconButton
              icon={<FeatherMoon />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
            <Avatar size="small" image="">
              EC
            </Avatar>
            <span className="text-body-bold font-body-bold text-default-font">
              Ethan Carter
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
          <div className="flex w-full flex-wrap items-end gap-4">
            <div className="flex items-center gap-4">
              <Select
                className="h-auto w-64 flex-none"
                label="Store"
                placeholder="Select store"
                helpText=""
                value={undefined}
                onValueChange={(value: string) => {}}
              >
                <Select.Item value="shopzone">shopzone</Select.Item>
                <Select.Item value="valuemart">valuemart</Select.Item>
                <Select.Item value="buildit">buildit</Select.Item>
              </Select>
            </div>
            <Select
              className="h-auto w-64 flex-none"
              label="Date range"
              placeholder="January 10-28, 2023"
              helpText=""
              icon={<FeatherCalendar />}
              value={undefined}
              onValueChange={(value: string) => {}}
            >
              <Select.Item value="custom">custom</Select.Item>
            </Select>
          </div>
        </div>
        <div className="flex w-full items-start relative">
          <img
            className="h-144 grow shrink-0 basis-0 rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1541067018303-523a2198b9c9?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
          />
          <div className="flex items-start rounded-lg absolute inset-0 bg-gradient-to-br from-blue-500/40 via-green-500/40 to-yellow-500/40" />
          <div className="flex items-start absolute bottom-4 right-4">
            <IconButton
              variant="neutral-secondary"
              icon={<FeatherMaximize />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            />
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}
