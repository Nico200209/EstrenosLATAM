export type Pillar = {
  id: string;
  titleKey: string;
  descriptionKey: string;
};

export type Service = {
  id: string;
  labelKey: string;
  descriptionKey: string;
};

export type MarketHighlightId = "network" | "logistics" | "intelligence";

export type Market = {
  id: string;
  nameKey: string;
  region: "central-america" | "panama" | "caribbean";
  countryKeys: string[];
  highlightIds: MarketHighlightId[];
};

export type PartnerCategory = {
  id: string;
  labelKey: string;
  chipKeys: string[];
};
