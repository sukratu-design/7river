"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { TextField } from "@/ui/components/TextField";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherSearch } from "@subframe/core";

interface SearchPageProps {
  onNavigateToHome?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToAlerts?: () => void;
  onNavigateToHeatmap?: () => void;
  currentPage?: 'home' | 'search' | 'alerts' | 'heatmap';
}

function SearchPage({ onNavigateToHome, onNavigateToSearch, onNavigateToAlerts, onNavigateToHeatmap, currentPage }: SearchPageProps) {
  return (
    <DefaultPageLayout 
      onNavigateToHome={onNavigateToHome}
      onNavigateToSearch={onNavigateToSearch}
      onNavigateToAlerts={onNavigateToAlerts}
      onNavigateToHeatmap={onNavigateToHeatmap}
      currentPage={currentPage}
    >
      <div className="flex w-full flex-col items-start gap-6 bg-neutral-50 px-6 py-6">
        <div className="flex w-full flex-col items-start gap-4">
          <TextField
            className="h-auto w-full flex-none"
            variant="filled"
            label=""
            helpText=""
            icon={<FeatherSearch />}
          >
            <TextField.Input
              placeholder="Search"
              value=""
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          </TextField>
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-full items-center justify-between">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Recent Searches
              </span>
              <Button
                variant="neutral-tertiary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Clear all
              </Button>
            </div>
            <div className="flex w-full flex-wrap items-start gap-4">
              <div className="flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4">
                <img
                  className="h-32 w-64 flex-none rounded-md object-cover"
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9"
                />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Group Entry Alert-55.mp4
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Alert-55.mp4-2025-08-18709-27:53.7082
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4">
                <img
                  className="h-32 w-64 flex-none rounded-md object-cover"
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3"
                />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Heat map 01.mp4
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Alert-55.mp4-2025-08-18709-27:53.7082
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4">
                <img
                  className="h-32 w-64 flex-none rounded-md object-cover"
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9"
                />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Group Entry Alert-55.mp4
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Alert-55.mp4-2025-08-18709-27:53.7082
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-full items-center justify-between">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Last Week Searches
              </span>
              <Button
                variant="neutral-tertiary"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Clear all
              </Button>
            </div>
            <div className="flex w-full flex-wrap items-start gap-4">
              <div className="flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4">
                <img
                  className="h-32 w-64 flex-none rounded-md object-cover"
                  src="https://images.unsplash.com/photo-1517502884422-41eaead166d4"
                />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Entrance_Camera1.mp4
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Alert-55.mp4-2025-08-18709-27:53.7082
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4">
                <img
                  className="h-32 w-64 flex-none rounded-md object-cover"
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3"
                />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Heat map 02.mp4
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Alert-55.mp4-2025-08-18709-27:53.7082
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4">
                <img
                  className="h-32 w-64 flex-none rounded-md object-cover"
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3"
                />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Heat map 03.mp4
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Alert-55.mp4-2025-08-18709-27:53.7082
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default SearchPage;