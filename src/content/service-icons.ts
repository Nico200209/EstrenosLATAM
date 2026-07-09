import {
  ClipboardCheck,
  Compass,
  HardDrive,
  Handshake,
  Package,
  PiggyBank,
  Route,
  type LucideIcon,
} from "lucide-react";

/** Icon per service id (src/content/services.ts), used by ServicesWorkflow. */
export const SERVICE_ICONS: Record<string, LucideIcon> = {
  "strategic-consulting": Compass,
  "partner-selection": Handshake,
  "cost-optimization": PiggyBank,
  "materials-management": Package,
  "dcp-execution": HardDrive,
  "multi-territory-coordination": Route,
  "quality-assurance": ClipboardCheck,
};
