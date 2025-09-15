"use client";

import React from "react";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { FeatherCheck } from "@subframe/core";

interface SuccessToastProps {
  show: boolean;
  onClose: () => void;
  alertName?: string;
}

function SuccessToast({ show, onClose, alertName = "After 11:00 PM" }: SuccessToastProps) {
  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000); // Auto-hide after 4 seconds

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
      <div className="flex w-80 items-start gap-3 rounded-lg border border-solid border-success-200 bg-success-50 px-4 py-4 shadow-lg">
        <IconWithBackground variant="success" icon={<FeatherCheck />} />
        <div className="flex flex-col items-start gap-1">
          <span className="text-heading-3 font-heading-3 text-default-font">
            Alert Created Successfully!
          </span>
          <span className="text-body font-body text-subtext-color">
            Your alert "{alertName}" has been successfully created.
          </span>
        </div>
      </div>
    </div>
  );
}

export default SuccessToast;