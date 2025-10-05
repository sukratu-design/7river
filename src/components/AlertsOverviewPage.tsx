"use client";

import React from "react";
import CreateAlertsModal from "./CreateAlertsModal";
import SuccessToast from "./SuccessToast";
import { Avatar } from "@/ui/components/Avatar";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { TextField } from "@/ui/components/TextField";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherBell } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherFilter } from "@subframe/core";
import { FeatherMaximize2 } from "@subframe/core";
import { FeatherPlay } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";
import { FeatherVideo } from "@subframe/core";

interface AlertsOverviewPageProps {
  onNavigateToHome?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToAlerts?: () => void;
  onNavigateToHeatmap?: () => void;
  currentPage?: 'home' | 'search' | 'alerts' | 'heatmap';
}

function AlertsOverviewPage({ onNavigateToHome, onNavigateToSearch, onNavigateToAlerts, onNavigateToHeatmap, currentPage }: AlertsOverviewPageProps) {
  const [isCreateAlertModalOpen, setIsCreateAlertModalOpen] = React.useState(false);
  const [showSuccessToast, setShowSuccessToast] = React.useState(false);
  const [createdAlertName, setCreatedAlertName] = React.useState("");

  const handleOpenCreateAlertModal = () => {
    setIsCreateAlertModalOpen(true);
  };

  const handleCloseCreateAlertModal = () => {
    setIsCreateAlertModalOpen(false);
  };

  const handleAlertCreated = (alertName: string) => {
    setCreatedAlertName(alertName);
    setShowSuccessToast(true);
  };

  const handleCloseSuccessToast = () => {
    setShowSuccessToast(false);
  };

  return (
    <>
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
              <Avatar image="">EC</Avatar>
              <span className="text-body-bold font-body-bold text-default-font">
                Ethan Carter
              </span>
            </div>
          </div>
          <span className="text-heading-1 font-heading-1 text-default-font">
            All Alerts
          </span>
          <div className="flex w-full items-center justify-between">
            <TextField
              variant="filled"
              label=""
              helpText=""
              icon={<FeatherSearch />}
            >
              <TextField.Input
                placeholder="Search alerts..."
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <div className="flex items-center gap-2">
              <Button
                variant="neutral-tertiary"
                icon={<FeatherFilter />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Filters
              </Button>
              <Button
                icon={<FeatherPlus />}
                onClick={handleOpenCreateAlertModal}
              >
                Create Alert
              </Button>
            </div>
          </div>
          <div className="flex w-full items-start gap-6">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
              <div className="flex w-full flex-col items-start gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-4">
                <div className="flex w-full items-start justify-between">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Group Entry Alert-55.mp4
                  </span>
                  <Badge variant="error">Alert</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <FeatherVideo className="text-body font-body text-neutral-500" />
                  <span className="text-body font-body text-neutral-500">
                    Camera 3
                  </span>
                  <FeatherClock className="text-body font-body text-neutral-500" />
                  <span className="text-body font-body text-neutral-500">
                    Aug 18, 2:57 PM
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-4">
                <div className="flex w-full items-start justify-between">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Store Entry Alert-32.mp4
                  </span>
                  <Badge variant="error">Alert</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <FeatherVideo className="text-body font-body text-neutral-500" />
                  <span className="text-body font-body text-neutral-500">
                    Camera 3
                  </span>
                  <FeatherClock className="text-body font-body text-neutral-500" />
                  <span className="text-body font-body text-neutral-500">
                    Aug 18, 2:57 PM
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-4">
                <div className="flex w-full items-start justify-between">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Motion Alert-89.mp4
                  </span>
                  <Badge variant="error">Alert</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <FeatherVideo className="text-body font-body text-neutral-500" />
                  <span className="text-body font-body text-neutral-500">
                    Camera 3
                  </span>
                  <FeatherClock className="text-body font-body text-neutral-500" />
                  <span className="text-body font-body text-neutral-500">
                    Aug 18, 2:57 PM
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-2 rounded-lg border border-solid border-neutral-border bg-default-background px-4 py-4">
                <div className="flex w-full items-start justify-between">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Capacity Alert-23.mp4
                  </span>
                  <Badge variant="warning">Warning</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <FeatherVideo className="text-body font-body text-neutral-500" />
                  <span className="text-body font-body text-neutral-500">
                    Camera 3
                  </span>
                  <FeatherClock className="text-body font-body text-neutral-500" />
                  <span className="text-body font-body text-neutral-500">
                    Aug 18, 2:57 PM
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-112 flex-none flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex w-full flex-col items-start gap-2">
                <span className="text-heading-2 font-heading-2 text-default-font">
                  Group Entry Alert-55.mp4
                </span>
                <span className="text-body font-body text-subtext-color">
                  Group Entry Alert-55.mp4-2025-08-18T09:27:53.708Z
                </span>
              </div>
              <div className="flex w-full items-start rounded-lg bg-neutral-900 relative">
                <img
                  className="h-80 grow shrink-0 basis-0 rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1701160605624-3359d6214314?q=80&w=2532&auto=format&fit=crop"
                />
                <div className="flex items-center justify-between absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <IconButton
                      variant="inverse"
                      icon={<FeatherPlay />}
                      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                    />
                    <span className="text-body font-body text-white">
                      8:02 / 18:25
                    </span>
                  </div>
                  <IconButton
                    variant="inverse"
                    icon={<FeatherMaximize2 />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultPageLayout>
      
      <CreateAlertsModal 
        open={isCreateAlertModalOpen} 
        onOpenChange={handleCloseCreateAlertModal}
        onAlertCreated={handleAlertCreated}
      />
      
      <SuccessToast 
        show={showSuccessToast}
        onClose={handleCloseSuccessToast}
        alertName={createdAlertName}
      />
    </>
  );
}

export default AlertsOverviewPage;