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

export type Market = {
  id: string;
  nameKey: string;
  region: "central-america" | "panama" | "caribbean";
};
