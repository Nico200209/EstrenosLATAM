import type { Market, MarketHighlightId } from "@/types/content";

/** Shared operational-highlight taxonomy shown per territory on the Markets page. */
export const MARKET_HIGHLIGHT_CATEGORIES: MarketHighlightId[] = [
  "network",
  "logistics",
  "intelligence",
];

/**
 * Core territories named in Filosofía de Marca — Estrenos LATAM.
 * nameKey resolves against `home.marketTeaser` (territory names) and
 * `markets.territories.<nameKey>` (per-territory detail copy).
 * Caribbean's countryKeys are a short representative list, not exhaustive
 * regional coverage — captioned as illustrative in the copy itself.
 */
export const markets: Market[] = [
  {
    id: "central-america",
    nameKey: "centralAmerica",
    region: "central-america",
    countryKeys: ["country1", "country2", "country3", "country4", "country5"],
    highlightIds: MARKET_HIGHLIGHT_CATEGORIES,
  },
  {
    id: "panama",
    nameKey: "panama",
    region: "panama",
    countryKeys: ["country1"],
    highlightIds: MARKET_HIGHLIGHT_CATEGORIES,
  },
  {
    id: "caribbean",
    nameKey: "caribbean",
    region: "caribbean",
    countryKeys: ["country1", "country2"],
    highlightIds: MARKET_HIGHLIGHT_CATEGORIES,
  },
];
