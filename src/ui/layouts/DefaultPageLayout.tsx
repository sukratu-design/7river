// @subframe/sync-disable
"use client";
/*
 * Documentation:
 * Avatar — https://app.subframe.com/3b081355f5ef/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 * Default Page Layout — https://app.subframe.com/3b081355f5ef/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Dropdown Menu — https://app.subframe.com/3b081355f5ef/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Sidebar rail with icons — https://app.subframe.com/3b081355f5ef/library?component=Sidebar+rail+with+icons_0d7efe0e-8762-46f5-b399-9f6d329e13b9
 */

import React from "react";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherBarChart2 } from "@subframe/core";
import { FeatherBell } from "@subframe/core";
import { FeatherHome } from "@subframe/core";
import { FeatherLogOut } from "@subframe/core";
import { FeatherSearch } from "@subframe/core";
import { FeatherSettings } from "@subframe/core";
import { FeatherUser } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "../components/Avatar";
import { DropdownMenu } from "../components/DropdownMenu";
import { SidebarRailWithIcons } from "../components/SidebarRailWithIcons";
import * as SubframeUtils from "../utils";

interface DefaultPageLayoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  onNavigateToHome?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToAlerts?: () => void;
  onNavigateToHeatmap?: () => void;
  currentPage?: 'home' | 'search' | 'alerts' | 'heatmap';
  className?: string;
}

const DefaultPageLayoutRoot = React.forwardRef<
  HTMLDivElement,
  DefaultPageLayoutRootProps
>(function DefaultPageLayoutRoot(
  { children, onNavigateToHome, onNavigateToSearch, onNavigateToAlerts, onNavigateToHeatmap, currentPage = 'home', className, ...otherProps }: DefaultPageLayoutRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex h-screen w-full items-start",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <SidebarRailWithIcons
        header={
          <div className="flex flex-col items-center justify-center gap-2 px-1 py-1">
            <img
              className="h-6 w-6 flex-none object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
            />
          </div>
        }
        footer={
          <>
            <SidebarRailWithIcons.NavItem icon={<FeatherBell />}>
              Item
            </SidebarRailWithIcons.NavItem>
            <SidebarRailWithIcons.NavItem icon={<FeatherSettings />}>
              Item
            </SidebarRailWithIcons.NavItem>
            <div className="flex flex-col items-center justify-end gap-1 px-1 py-1">
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <Avatar
                    size="small"
                    image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                  >
                    A
                  </Avatar>
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="right"
                    align="end"
                    sideOffset={4}
                    asChild={true}
                  >
                    <DropdownMenu>
                      <DropdownMenu.DropdownItem icon={<FeatherUser />}>
                        Profile
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon={<FeatherSettings />}>
                        Settings
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon={<FeatherLogOut />}>
                        Log out
                      </DropdownMenu.DropdownItem>
                    </DropdownMenu>
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
            </div>
          </>
        }
      >
        <SidebarRailWithIcons.NavItem 
          icon={<FeatherHome />} 
          selected={currentPage === 'home'}
          onClick={onNavigateToHome}
        >
          Home
        </SidebarRailWithIcons.NavItem>
        <SidebarRailWithIcons.NavItem 
          icon={<FeatherSearch />}
          selected={currentPage === 'search'}
          onClick={onNavigateToSearch}
        >
          Search
        </SidebarRailWithIcons.NavItem>
        <SidebarRailWithIcons.NavItem 
          icon={<FeatherAlertTriangle />}
          selected={currentPage === 'alerts'}
          onClick={onNavigateToAlerts}
        >
          Alerts
        </SidebarRailWithIcons.NavItem>
        <SidebarRailWithIcons.NavItem 
          icon={<FeatherBarChart2 />}
          selected={currentPage === 'heatmap'}
          onClick={onNavigateToHeatmap}
        >
          Heatmap
        </SidebarRailWithIcons.NavItem>
      </SidebarRailWithIcons>
      {children ? (
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 self-stretch overflow-y-auto bg-default-background">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;