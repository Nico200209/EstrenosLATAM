import type { Service } from "@/types/content";

/**
 * The 7 "¿Cómo operamos?" offerings from Filosofía de Marca — Estrenos LATAM.
 * labelKey resolves against the `services` namespace once copy is written.
 */
export const services: Service[] = [
  { id: "strategic-consulting", labelKey: "strategicConsulting" },
  { id: "partner-selection", labelKey: "partnerSelection" },
  { id: "cost-optimization", labelKey: "costOptimization" },
  { id: "materials-management", labelKey: "materialsManagement" },
  { id: "dcp-execution", labelKey: "dcpExecution" },
  { id: "multi-territory-coordination", labelKey: "multiTerritoryCoordination" },
  { id: "quality-assurance", labelKey: "qualityAssurance" },
];
