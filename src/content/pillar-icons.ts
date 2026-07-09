import { BarChart3, Gauge, Globe, Network, Workflow, type LucideIcon } from "lucide-react";

/** Icon per pillar id (src/content/pillars.ts), shared by PillarsGrid (Home) and PillarsRecap (About). */
export const PILLAR_ICONS: Record<string, LucideIcon> = {
  "operational-execution": Workflow,
  "market-intelligence": BarChart3,
  "cost-efficiency": Gauge,
  "strategic-connection": Network,
  "global-local-translation": Globe,
};
