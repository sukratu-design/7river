"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import { DialogLayout } from "@/ui/layouts/DialogLayout";
import { FeatherX } from "@subframe/core";

interface CreateAlertsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAlertCreated?: (alertName: string) => void;
}

function CreateAlertsModal({ open, onOpenChange, onAlertCreated }: CreateAlertsModalProps) {
  const [alertName, setAlertName] = React.useState("");
  const [alertDescription, setAlertDescription] = React.useState("");
  const [trigger, setTrigger] = React.useState("");

  const handleCreateAlert = () => {
    // Simulate alert creation
    const finalAlertName = alertName.trim() || "New Alert";
    
    // Call the callback to show success message
    if (onAlertCreated) {
      onAlertCreated(finalAlertName);
    }
    
    // Reset form
    setAlertName("");
    setAlertDescription("");
    setTrigger("");
    
    // Close modal
    onOpenChange(false);
  };

  const handleCancel = () => {
    // Reset form
    setAlertName("");
    setAlertDescription("");
    setTrigger("");
    
    // Close modal
    onOpenChange(false);
  };

  return (
    <DialogLayout open={open} onOpenChange={onOpenChange}>
      <div className="flex h-full w-112 flex-col items-start gap-6 bg-default-background px-6 py-6">
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col items-start gap-1">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Create New Alert
              </span>
              <span className="text-body font-body text-subtext-color">
                Set up a new alert to monitor your security cameras
              </span>
            </div>
            <IconButton
              icon={<FeatherX />}
              onClick={handleCancel}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full items-start gap-4">
            <TextField
              className="h-auto grow shrink-0 basis-0"
              label="Alert name"
              helpText=""
            >
              <TextField.Input
                placeholder="Type name"
                value={alertName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAlertName(event.target.value)}
              />
            </TextField>
            <TextField
              className="h-auto grow shrink-0 basis-0"
              label="Alert description"
              helpText=""
            >
              <TextField.Input
                placeholder="Type description"
                value={alertDescription}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAlertDescription(event.target.value)}
              />
            </TextField>
          </div>
          <TextArea
            className="h-auto w-full flex-none"
            label="Trigger"
            helpText=""
          >
            <TextArea.Input
              placeholder="Describe trigger for the alert..."
              value={trigger}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setTrigger(event.target.value)}
            />
          </TextArea>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button onClick={handleCreateAlert}>
            Create Alert
          </Button>
        </div>
      </div>
    </DialogLayout>
  );
}

export default CreateAlertsModal;