import type { PartnerCategory } from "@/types/content";

/**
 * Placeholder partner network structure — no real logos/data yet (confirmed
 * with user, Phase 8). chipKeys resolve against
 * partners.grid.categories.<labelKey>.chips.* — generic role/category
 * labels only, never invented company names, same honesty pattern as
 * home.partners' placeholder1..5.
 */
export const partnerCategories: PartnerCategory[] = [
  {
    id: "distributors",
    labelKey: "distributors",
    chipKeys: ["chip1", "chip2", "chip3", "chip4"],
  },
  {
    id: "exhibitors",
    labelKey: "exhibitors",
    chipKeys: ["chip1", "chip2", "chip3", "chip4"],
  },
  {
    id: "technical-suppliers",
    labelKey: "technicalSuppliers",
    chipKeys: ["chip1", "chip2", "chip3"],
  },
];
