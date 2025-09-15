"use client";

import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { IconButton } from "@/ui/components/IconButton";
import { Button } from "@/ui/components/Button";
import { FeatherGripVertical, FeatherFilter } from "@subframe/core";
import * as SubframeUtils from "../ui/utils";

interface DraggableCardProps {
  id: string;
  index: number;
  title: string;
  description: string;
  children: React.ReactNode;
  onMove: (dragIndex: number, hoverIndex: number) => void;
  onOpenFilter: () => void;
}

const DraggableCard: React.FC<DraggableCardProps> = ({
  id,
  index,
  title,
  description,
  children,
  onMove,
  onOpenFilter,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: { index: number }, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      onMove(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: "card",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;
  
  // Connect drag preview to the entire card
  dragPreview(drop(ref));

  return (
    <div
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
      className={SubframeUtils.twClassNames(
        "flex min-w-[384px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm transition-all duration-200",
        {
          "shadow-lg scale-105": isDragging,
          "cursor-move": isDragging,
        }
      )}
    >
      <div className="flex w-full items-center gap-2">
        <div
          ref={drag}
          className="cursor-grab active:cursor-grabbing"
        >
          <IconButton
            size="small"
            icon={<FeatherGripVertical />}
            className="hover:bg-neutral-200"
          />
        </div>
        <div className="flex grow shrink-0 basis-0 items-center justify-between">
          <div className="flex flex-col items-start gap-1">
            <span className="text-heading-3 font-heading-3 text-default-font">
              {title}
            </span>
            <span className="text-body font-body text-subtext-color">
              {description}
            </span>
          </div>
          <Button
            variant="neutral-tertiary"
            icon={<FeatherFilter />}
            onClick={onOpenFilter}
          >
            Filters
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DraggableCard;