import type { Pillar } from "@/types/content";

/**
 * The 5 "Pilares de Marca" from Filosofía de Marca — Estrenos LATAM.
 * titleKey/descriptionKey resolve against the `pillars` namespace in
 * messages/{locale}.json once that copy is written (Phase 4).
 */
export const pillars: Pillar[] = [
  {
    id: "operational-execution",
    titleKey: "operationalExecution.title",
    descriptionKey: "operationalExecution.description",
  },
  {
    id: "market-intelligence",
    titleKey: "marketIntelligence.title",
    descriptionKey: "marketIntelligence.description",
  },
  {
    id: "cost-efficiency",
    titleKey: "costEfficiency.title",
    descriptionKey: "costEfficiency.description",
  },
  {
    id: "strategic-connection",
    titleKey: "strategicConnection.title",
    descriptionKey: "strategicConnection.description",
  },
  {
    id: "global-local-translation",
    titleKey: "globalLocalTranslation.title",
    descriptionKey: "globalLocalTranslation.description",
  },
];
