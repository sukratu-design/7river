"use client";

import React from "react";
import DateModal from "./DateModal";
import NewGraphModal from "./NewGraphModal";
import { Avatar } from "@/ui/components/Avatar";
import { BarChart } from "@/ui/components/BarChart";
import { Button } from "@/ui/components/Button";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { IconButton } from "@/ui/components/IconButton";
import { LineChart } from "@/ui/components/LineChart";
import { TextField } from "@/ui/components/TextField";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherBarChart } from "@subframe/core";
import { FeatherBell } from "@subframe/core";
import { FeatherFilter } from "@subframe/core";
import { FeatherGripVertical } from "@subframe/core";
import { FeatherLineChart } from "@subframe/core";
import { FeatherPieChart } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";
import * as SubframeCore from "@subframe/core";

interface HomepageProps {
  onNavigateToSearch?: () => void;
  onNavigateToAlerts?: () => void;
  currentPage?: 'home' | 'search';
}

function Homepage({ onNavigateToSearch, onNavigateToAlerts, currentPage }: HomepageProps) {
  const [isFilterModalOpen, setIsFilterModalOpen] = React.useState(false);
  const [isCreateGraphModalOpen, setIsCreateGraphModalOpen] = React.useState(false);

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const handleOpenCreateGraphModal = () => {
    setIsCreateGraphModalOpen(true);
  };

  const handleCloseCreateGraphModal = () => {
    setIsCreateGraphModalOpen(false);
  };

  return (
    <>
      <DefaultPageLayout 
        onNavigateToSearch={onNavigateToSearch}
        onNavigateToAlerts={onNavigateToAlerts}
        currentPage={currentPage}
      >
        <div className="flex w-full flex-col items-start gap-6 bg-neutral-50 px-6 py-6">
          <div className="flex w-full items-center gap-4">
            {/* when user clicks this search bar open the search page */}
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
              <Avatar image="">EC</Avatar>
              <span className="text-body-bold font-body-bold text-default-font">
                Ethan Carter
              </span>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-start gap-6">
            <div className="flex min-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
              <div className="flex w-full items-center gap-2">
                <IconButton
                  size="small"
                  icon={<FeatherGripVertical />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                {/* User clicks on this button; the filter modal should open.  */}
                <div className="flex grow shrink-0 basis-0 items-center justify-between">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-heading-3 font-heading-3 text-default-font">
                      Customers
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Number of customers over time
                    </span>
                  </div>
                  {/* when user clicks on this button, filter modal should open */}
                  <Button
                    variant="neutral-tertiary"
                    icon={<FeatherFilter />}
                    onClick={handleOpenFilterModal}
                  >
                    Filters
                  </Button>
                </div>
              </div>
              <LineChart
                categories={["Biology", "Business", "Psychology"]}
                data={[
                  { Year: "2015", Psychology: 120, Business: 110, Biology: 100 },
                  { Year: "2016", Psychology: 130, Business: 95, Biology: 105 },
                  { Year: "2017", Psychology: 115, Business: 105, Biology: 110 },
                  { Year: "2018", Psychology: 125, Business: 120, Biology: 90 },
                  { Year: "2019", Psychology: 110, Business: 130, Biology: 85 },
                  { Year: "2020", Psychology: 135, Business: 100, Biology: 95 },
                  { Year: "2021", Psychology: 105, Business: 115, Biology: 120 },
                  { Year: "2022", Psychology: 140, Business: 125, Biology: 130 },
                ]}
                index={"Year"}
              />
            </div>
            <div className="flex min-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
              <div className="flex w-full items-center gap-2">
                {/* use this drag handles to make the card draggable in the grid */}
                <IconButton
                  size="small"
                  icon={<FeatherGripVertical />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <div className="flex grow shrink-0 basis-0 items-center justify-between">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-heading-3 font-heading-3 text-default-font">
                      Groups
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Number of customer groups
                    </span>
                  </div>
                  <Button
                    variant="neutral-tertiary"
                    icon={<FeatherFilter />}
                    onClick={handleOpenFilterModal}
                  >
                    Filters
                  </Button>
                </div>
              </div>
              <BarChart
                categories={["Biology", "Business", "Psychology"]}
                data={[
                  { Year: "2015", Psychology: 120, Business: 110, Biology: 100 },
                  { Year: "2016", Psychology: 130, Business: 95, Biology: 105 },
                  { Year: "2017", Psychology: 115, Business: 105, Biology: 110 },
                  { Year: "2018", Psychology: 125, Business: 120, Biology: 90 },
                  { Year: "2019", Psychology: 110, Business: 130, Biology: 85 },
                  { Year: "2020", Psychology: 135, Business: 100, Biology: 95 },
                  { Year: "2021", Psychology: 105, Business: 115, Biology: 120 },
                  { Year: "2022", Psychology: 140, Business: 125, Biology: 130 },
                ]}
                index={"Year"}
              />
            </div>
            <div className="flex min-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
              <div className="flex w-full items-center gap-2">
                <IconButton
                  size="small"
                  icon={<FeatherGripVertical />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <div className="flex grow shrink-0 basis-0 items-center justify-between">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-heading-3 font-heading-3 text-default-font">
                      Customers In Red
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Number of customers over time
                    </span>
                  </div>
                  <Button
                    variant="neutral-tertiary"
                    icon={<FeatherFilter />}
                    onClick={handleOpenFilterModal}
                  >
                    Filters
                  </Button>
                </div>
              </div>
              <LineChart
                categories={["Biology", "Business", "Psychology"]}
                data={[
                  { Year: "2015", Psychology: 120, Business: 110, Biology: 100 },
                  { Year: "2016", Psychology: 130, Business: 95, Biology: 105 },
                  { Year: "2017", Psychology: 115, Business: 105, Biology: 110 },
                  { Year: "2018", Psychology: 125, Business: 120, Biology: 90 },
                  { Year: "2019", Psychology: 110, Business: 130, Biology: 85 },
                  { Year: "2020", Psychology: 135, Business: 100, Biology: 95 },
                  { Year: "2021", Psychology: 105, Business: 115, Biology: 120 },
                  { Year: "2022", Psychology: 140, Business: 125, Biology: 130 },
                ]}
                index={"Year"}
              />
            </div>
            <div className="flex min-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
              <div className="flex w-full items-center gap-2">
                <IconButton
                  size="small"
                  icon={<FeatherGripVertical />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <div className="flex grow shrink-0 basis-0 items-center justify-between">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-heading-3 font-heading-3 text-default-font">
                      Customers In Blue
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Number of customers in blue category
                    </span>
                  </div>
                  <Button
                    variant="neutral-tertiary"
                    icon={<FeatherFilter />}
                    onClick={handleOpenFilterModal}
                  >
                    Filters
                  </Button>
                </div>
              </div>
              <BarChart
                categories={["Biology", "Business", "Psychology"]}
                data={[
                  { Year: "2015", Psychology: 120, Business: 110, Biology: 100 },
                  { Year: "2016", Psychology: 130, Business: 95, Biology: 105 },
                  { Year: "2017", Psychology: 115, Business: 105, Biology: 110 },
                  { Year: "2018", Psychology: 125, Business: 120, Biology: 90 },
                  { Year: "2019", Psychology: 110, Business: 130, Biology: 85 },
                  { Year: "2020", Psychology: 135, Business: 100, Biology: 95 },
                  { Year: "2021", Psychology: 105, Business: 115, Biology: 120 },
                  { Year: "2022", Psychology: 140, Business: 125, Biology: 130 },
                ]}
                index={"Year"}
              />
            </div>
            <div className="flex min-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
              <div className="flex w-full items-center gap-2">
                <IconButton
                  size="small"
                  icon={<FeatherGripVertical />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <div className="flex grow shrink-0 basis-0 items-center justify-between">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-heading-3 font-heading-3 text-default-font">
                      Customers In Yellow
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Number of customers in Yellow category
                    </span>
                  </div>
                  <Button
                    variant="neutral-tertiary"
                    icon={<FeatherFilter />}
                    onClick={handleOpenFilterModal}
                  >
                    Filters
                  </Button>
                </div>
              </div>
              <BarChart
                categories={["Biology", "Business", "Psychology"]}
                data={[
                  { Year: "2015", Psychology: 120, Business: 110, Biology: 100 },
                  { Year: "2016", Psychology: 130, Business: 95, Biology: 105 },
                  { Year: "2017", Psychology: 115, Business: 105, Biology: 110 },
                  { Year: "2018", Psychology: 125, Business: 120, Biology: 90 },
                  { Year: "2019", Psychology: 110, Business: 130, Biology: 85 },
                  { Year: "2020", Psychology: 135, Business: 100, Biology: 95 },
                  { Year: "2021", Psychology: 105, Business: 115, Biology: 120 },
                  { Year: "2022", Psychology: 140, Business: 125, Biology: 130 },
                ]}
                index={"Year"}
              />
            </div>
            <div className="flex min-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
              <div className="flex w-full items-center gap-2">
                <IconButton
                  size="small"
                  icon={<FeatherGripVertical />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <div className="flex grow shrink-0 basis-0 items-center justify-between">
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-heading-3 font-heading-3 text-default-font">
                      Dwell Time
                    </span>
                    <span className="text-body font-body text-subtext-color">
                      Number of customers over time
                    </span>
                  </div>
                  <Button
                    variant="neutral-tertiary"
                    icon={<FeatherFilter />}
                    onClick={handleOpenFilterModal}
                  >
                    Filters
                  </Button>
                </div>
              </div>
              <LineChart
                categories={["Biology", "Business", "Psychology"]}
                data={[
                  { Year: "2015", Psychology: 120, Business: 110, Biology: 100 },
                  { Year: "2016", Psychology: 130, Business: 95, Biology: 105 },
                  { Year: "2017", Psychology: 115, Business: 105, Biology: 110 },
                  { Year: "2018", Psychology: 125, Business: 120, Biology: 90 },
                  { Year: "2019", Psychology: 110, Business: 130, Biology: 85 },
                  { Year: "2020", Psychology: 135, Business: 100, Biology: 95 },
                  { Year: "2021", Psychology: 105, Business: 115, Biology: 120 },
                  { Year: "2022", Psychology: 140, Business: 125, Biology: 130 },
                ]}
                index={"Year"}
              />
              {/* when this button is clicked the Create Graph modal should open */}
          </div>
        </div>
        {/* Fixed floating Create Graph button */}
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            icon={<FeatherPlus />}
            onClick={handleOpenCreateGraphModal}
          >
            Create Graph
          </Button>
        </div>
        </div>
      </DefaultPageLayout>
      
      <DateModal 
        open={isFilterModalOpen} 
        onOpenChange={handleCloseFilterModal}
      />
      
      <NewGraphModal 
        open={isCreateGraphModalOpen} 
        onOpenChange={handleCloseCreateGraphModal}
      />
    </>
  );
}

export default Homepage;