// One-off generator: converts world-atlas TopoJSON into static SVG path data
// for the Markets page hero accent, so the browser bundle ships plain path
// strings instead of d3-geo/topojson-client/world-atlas at runtime.
// Re-run with `node scripts/generate-markets-map.mjs` if the territory or
// context country list changes.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

import { geoCentroid, geoMercator, geoPath } from "d3-geo";
import { feature, merge } from "topojson-client";
import topology from "world-atlas/countries-50m.json" with { type: "json" };

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const COUNTRY_IDS = {
  guatemala: "320",
  honduras: "340",
  elSalvador: "222",
  nicaragua: "558",
  costaRica: "188",
  panama: "591",
  dominicanRepublic: "214",
  puertoRico: "630",
};

const CONTEXT_IDS = ["484", "170", "862", "192", "388", "332", "084"]; // Mexico, Colombia, Venezuela, Cuba, Jamaica, Haiti, Belize

const geo = feature(topology, topology.objects.countries);
const byId = new Map(geo.features.map((f) => [f.id, f]));

const centralAmericaIds = [
  COUNTRY_IDS.guatemala,
  COUNTRY_IDS.honduras,
  COUNTRY_IDS.elSalvador,
  COUNTRY_IDS.nicaragua,
  COUNTRY_IDS.costaRica,
];
const caribbeanIds = [COUNTRY_IDS.dominicanRepublic, COUNTRY_IDS.puertoRico];
const panamaIds = [COUNTRY_IDS.panama];

const highlightedIds = [...centralAmericaIds, ...panamaIds, ...caribbeanIds];
const allFramingIds = [...highlightedIds, ...CONTEXT_IDS];

const VIEWBOX = { width: 460, height: 320 };

// Fit the projection to the highlighted + context countries so the region
// is centered and scaled to fill the accent's canvas.
const framingFeatures = {
  type: "FeatureCollection",
  features: allFramingIds.map((id) => byId.get(id)).filter(Boolean),
};

const projection = geoMercator().fitExtent(
  [
    [16, 16],
    [VIEWBOX.width - 16, VIEWBOX.height - 16],
  ],
  framingFeatures,
);
const pathGenerator = geoPath(projection);

function toPathData(ids) {
  return ids
    .map((id) => byId.get(id))
    .filter(Boolean)
    .map((f) => ({ id: f.id, name: f.properties.name, d: pathGenerator(f) }));
}

const highlighted = {
  centralAmerica: toPathData(centralAmericaIds),
  panama: toPathData(panamaIds),
  caribbean: toPathData(caribbeanIds),
};
const context = toPathData(CONTEXT_IDS);

function hubFor(ids) {
  const merged = merge(
    topology,
    topology.objects.countries.geometries.filter((g) => ids.includes(g.id)),
  );
  const [lon, lat] = geoCentroid(merged);
  const [x, y] = projection([lon, lat]);
  return { x: Math.round(x * 100) / 100, y: Math.round(y * 100) / 100 };
}

const hubs = {
  centralAmerica: hubFor(centralAmericaIds),
  panama: hubFor(panamaIds),
  caribbean: hubFor(caribbeanIds),
};

const output = `// GENERATED FILE — do not edit by hand.
// Regenerate with \`node scripts/generate-markets-map.mjs\` (source: world-atlas
// countries-50m.json, Natural Earth 1:50m admin-0 country boundaries).
// Used by src/components/sections/markets-territory-outline.tsx.

export const MARKETS_MAP_VIEWBOX = "0 0 ${VIEWBOX.width} ${VIEWBOX.height}";

export type MapCountryPath = { id: string; name: string; d: string };

export const HIGHLIGHTED_COUNTRIES: {
  centralAmerica: MapCountryPath[];
  panama: MapCountryPath[];
  caribbean: MapCountryPath[];
} = ${JSON.stringify(highlighted, null, 2)};

export const CONTEXT_COUNTRIES: MapCountryPath[] = ${JSON.stringify(context, null, 2)};

export const MARKET_HUBS: {
  centralAmerica: { x: number; y: number };
  panama: { x: number; y: number };
  caribbean: { x: number; y: number };
} = ${JSON.stringify(hubs, null, 2)};
`;

const outPath = path.join(__dirname, "..", "src", "lib", "markets-map-data.ts");
writeFileSync(outPath, output);
console.log(`Wrote ${outPath}`);
