"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { Select } from "@/ui/components/Select";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import { DialogLayout } from "@/ui/layouts/DialogLayout";
import { FeatherX } from "@subframe/core";

interface NewGraphModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function NewGraphModal({ open, onOpenChange }: NewGraphModalProps) {
  return (
    <DialogLayout open={open} onOpenChange={onOpenChange}>
      <div className="flex w-full flex-col items-start gap-6 px-6 py-6">
        <div className="flex w-full items-start justify-between">
          <div className="flex flex-col items-start gap-1">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Create New Graph
            </span>
            <span className="text-body font-body text-subtext-color">
              Add a new graph to track your customer metrics
            </span>
          </div>
          <IconButton
            icon={<FeatherX />}
            onClick={() => onOpenChange(false)}
          />
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full items-start gap-4">
            <TextField
              className="h-auto grow shrink-0 basis-0"
              label="Graph name"
              helpText=""
            >
              <TextField.Input
                placeholder="Type name"
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <TextField
              className="h-auto grow shrink-0 basis-0"
              label="Graph description"
              helpText=""
            >
              <TextField.Input
                placeholder="Type description"
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
          </div>
          <Select
            className="h-auto w-full flex-none"
            label="Choose graph type"
            placeholder="Select graph type"
            helpText=""
            value={undefined}
            onValueChange={(value: string) => {}}
          >
            <Select.Item value="line">line</Select.Item>
            <Select.Item value="bar">bar</Select.Item>
            <Select.Item value="pie">pie</Select.Item>
          </Select>
          <TextArea
            className="h-auto w-full flex-none"
            label="Customer metrics"
            helpText=""
          >
            <TextArea.Input
              placeholder="Describe customer metrics to be tracked..."
              value=""
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {}}
            />
          </TextArea>
        </div>
        <div className="flex w-full items-center justify-end gap-2">
          <Button
            variant="neutral-tertiary"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button onClick={() => onOpenChange(false)}>
            Create Graph
          </Button>
        </div>
      </div>
    </DialogLayout>
  );
}

export default NewGraphModal;