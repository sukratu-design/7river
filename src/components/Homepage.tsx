"use client";

import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DateModal from "./DateModal";
import NewGraphModal from "./NewGraphModal";
import DraggableCard from "./DraggableCard";
import { Avatar } from "@/ui/components/Avatar";
import { BarChart } from "@/ui/components/BarChart";
import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { LineChart } from "@/ui/components/LineChart";
import { TextField } from "@/ui/components/TextField";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherBell } from "@subframe/core";
import { FeatherPlus } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";

interface HomepageProps {
  onNavigateToSearch?: () => void;
  onNavigateToAlerts?: () => void;
  currentPage?: 'home' | 'search';
}

interface CardData {
  id: string;
  title: string;
  description: string;
  type: 'line' | 'bar';
}

const chartData = [
  { Year: "2015", Psychology: 120, Business: 110, Biology: 100 },
  { Year: "2016", Psychology: 130, Business: 95, Biology: 105 },
  { Year: "2017", Psychology: 115, Business: 105, Biology: 110 },
  { Year: "2018", Psychology: 125, Business: 120, Biology: 90 },
  { Year: "2019", Psychology: 110, Business: 130, Biology: 85 },
  { Year: "2020", Psychology: 135, Business: 100, Biology: 95 },
  { Year: "2021", Psychology: 105, Business: 115, Biology: 120 },
  { Year: "2022", Psychology: 140, Business: 125, Biology: 130 },
];

function Homepage({ onNavigateToSearch, onNavigateToAlerts, currentPage }: HomepageProps) {
  const [isFilterModalOpen, setIsFilterModalOpen] = React.useState(false);
  const [isCreateGraphModalOpen, setIsCreateGraphModalOpen] = React.useState(false);

  const [cards, setCards] = React.useState<CardData[]>([
    {
      id: "customers",
      title: "Customers",
      description: "Number of customers over time",
      type: "line"
    },
    {
      id: "groups",
      title: "Groups",
      description: "Number of customer groups",
      type: "bar"
    },
    {
      id: "customers-red",
      title: "Customers In Red",
      description: "Number of customers over time",
      type: "line"
    },
    {
      id: "customers-blue",
      title: "Customers In Blue",
      description: "Number of customers in blue category",
      type: "bar"
    },
    {
      id: "customers-yellow",
      title: "Customers In Yellow",
      description: "Number of customers in Yellow category",
      type: "bar"
    },
    {
      id: "dwell-time",
      title: "Dwell Time",
      description: "Number of customers over time",
      type: "line"
    }
  ]);

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

  const moveCard = React.useCallback((dragIndex: number, hoverIndex: number) => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const draggedCard = newCards[dragIndex];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, draggedCard);
      return newCards;
    });
  }, []);

  const renderChart = (card: CardData) => {
    if (card.type === 'line') {
      return (
        <LineChart
          categories={["Biology", "Business", "Psychology"]}
          data={chartData}
          index={"Year"}
        />
      );
    } else {
      return (
        <BarChart
          categories={["Biology", "Business", "Psychology"]}
          data={chartData}
          index={"Year"}
        />
      );
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <DefaultPageLayout 
        onNavigateToSearch={onNavigateToSearch}
        onNavigateToAlerts={onNavigateToAlerts}
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
          
          {/* Draggable Grid */}
          <div className="flex w-full flex-wrap items-start gap-6">
            {cards.map((card, index) => (
              <DraggableCard
                key={card.id}
                id={card.id}
                index={index}
                title={card.title}
                description={card.description}
                onMove={moveCard}
                onOpenFilter={handleOpenFilterModal}
              >
                {renderChart(card)}
              </DraggableCard>
            ))}
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
    </DndProvider>
  );
}

export default Homepage;