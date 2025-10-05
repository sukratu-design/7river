import { FeatherMoon } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";

interface HeatmapPageProps {
  onNavigateToHome?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToAlerts?: () => void;
  onNavigateToHeatmap?: () => void;
  currentPage?: 'home' | 'search' | 'alerts' | 'heatmap';
}

function HeatmapPage({ onNavigateToHome, onNavigateToSearch, onNavigateToAlerts, onNavigateToHeatmap, currentPage }: HeatmapPageProps) {
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
        </div>
      </div>
    </DefaultPageLayout>
  );
}