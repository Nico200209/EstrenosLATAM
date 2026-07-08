import type { Market } from "@/types/content";

/**
 * Core territories named in Filosofía de Marca — Estrenos LATAM.
 * nameKey resolves against the `markets` namespace once copy is written.
 */
export const markets: Market[] = [
  { id: "central-america", nameKey: "centralAmerica", region: "central-america" },
  { id: "panama", nameKey: "panama", region: "panama" },
  { id: "caribbean", nameKey: "caribbean", region: "caribbean" },
];
