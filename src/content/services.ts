import type { Service } from "@/types/content";

/**
 * The 7 "¿Cómo operamos?" offerings from Filosofía de Marca — Estrenos LATAM.
 * labelKey/descriptionKey resolve against the `services.items` namespace in
 * messages/{locale}.json.
 */
export const services: Service[] = [
  {
    id: "strategic-consulting",
    labelKey: "strategicConsulting.title",
    descriptionKey: "strategicConsulting.description",
  },
  {
    id: "partner-selection",
    labelKey: "partnerSelection.title",
    descriptionKey: "partnerSelection.description",
  },
  {
    id: "cost-optimization",
    labelKey: "costOptimization.title",
    descriptionKey: "costOptimization.description",
  },
  {
    id: "materials-management",
    labelKey: "materialsManagement.title",
    descriptionKey: "materialsManagement.description",
  },
  {
    id: "dcp-execution",
    labelKey: "dcpExecution.title",
    descriptionKey: "dcpExecution.description",
  },
  {
    id: "multi-territory-coordination",
    labelKey: "multiTerritoryCoordination.title",
    descriptionKey: "multiTerritoryCoordination.description",
  },
  {
    id: "quality-assurance",
    labelKey: "qualityAssurance.title",
    descriptionKey: "qualityAssurance.description",
  },
];
