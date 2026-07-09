import { BarChart3, HardDrive, Network, type LucideIcon } from "lucide-react";

import type { MarketHighlightId } from "@/types/content";

/**
 * Icon per market highlight category, reused from Pillars/Services rather than
 * introducing a fourth icon vocabulary — same icon means the same idea across pages.
 * network -> home.pillars.strategicConnection, logistics -> services.items.dcpExecution,
 * intelligence -> home.pillars.marketIntelligence.
 */
export const MARKET_HIGHLIGHT_ICONS: Record<MarketHighlightId, LucideIcon> = {
  network: Network,
  logistics: HardDrive,
  intelligence: BarChart3,
};
