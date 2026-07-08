import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormField,
  FormFieldDescription,
  FormFieldError,
  FormFieldLabel,
} from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contrastRatio, passesAA } from "./contrast";
import { MotionDemo } from "./motion-demo";

// Dev-only internal tool: intentionally not localized via next-intl (see
// CLAUDE.md Technical Debt — this whole route is deleted at Phase 3 kickoff).
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const BONE_100 = "#f2f4f3";
const CARBON_900 = "#0c0c0c";

const colorScales = [
  {
    name: "primary",
    base: "#fe3a01",
    shades: [
      ["50", "#fff4f0"],
      ["100", "#ffe3d9"],
      ["200", "#ffc3ad"],
      ["300", "#ff9c7a"],
      ["400", "#ff6b3d"],
      ["500", "#fe3a01"],
      ["600", "#e23300"],
      ["700", "#bc2a00"],
      ["800", "#952100"],
      ["900", "#781b00"],
      ["950", "#400e00"],
    ],
  },
  {
    name: "mint",
    base: "#25f295",
    shades: [
      ["50", "#eafff6"],
      ["100", "#cfffea"],
      ["200", "#9ffed6"],
      ["300", "#66fdbe"],
      ["400", "#3ef9a6"],
      ["500", "#25f295"],
      ["600", "#14d67e"],
      ["700", "#0dac65"],
      ["800", "#0a854f"],
      ["900", "#086a40"],
      ["950", "#043a22"],
    ],
  },
  {
    name: "bone",
    base: "#f2f4f3",
    shades: [
      ["50", "#ffffff"],
      ["100", "#f2f4f3"],
      ["200", "#e7e9e8"],
      ["300", "#d5d8d6"],
      ["400", "#b8bcb9"],
      ["500", "#9aa09c"],
      ["600", "#7c837f"],
      ["700", "#616762"],
      ["800", "#474b47"],
      ["900", "#303331"],
      ["950", "#1a1c1b"],
    ],
  },
  {
    name: "carbon",
    base: "#0c0c0c",
    shades: [
      ["50", "#f5f5f5"],
      ["100", "#e0e0e0"],
      ["200", "#c2c2c2"],
      ["300", "#9e9e9e"],
      ["400", "#757575"],
      ["500", "#4a4a4a"],
      ["600", "#333333"],
      ["700", "#232323"],
      ["800", "#171717"],
      ["900", "#0c0c0c"],
      ["950", "#050505"],
    ],
  },
] as const;

const typeScale = [
  { role: "display", className: "text-display" },
  { role: "h1", className: "text-h1" },
  { role: "h2", className: "text-h2" },
  { role: "h3", className: "text-h3" },
  { role: "body", className: "text-body" },
  { role: "small", className: "text-small" },
  { role: "button", className: "text-button" },
  { role: "caption", className: "text-caption" },
] as const;

const buttonVariants = ["default", "outline", "secondary", "ghost", "destructive", "link"] as const;
const buttonSizes = ["xs", "sm", "default", "lg"] as const;

export default function DesignSystemPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16">
      <header>
        <p className="text-caption text-muted-foreground uppercase">
          Phase 2 — Internal review only
        </p>
        <h1 className="text-h1">Design System</h1>
        <p className="text-body text-muted-foreground mt-2">
          Temporary style guide for the Phase 2 review gate. Not part of the sitemap, deleted at
          Phase 3 kickoff.
        </p>
      </header>

      <section aria-labelledby="type-scale-heading" className="flex flex-col gap-6">
        <h2 id="type-scale-heading" className="text-h2">
          Typography
        </h2>
        <div className="flex flex-col gap-4">
          {typeScale.map(({ role, className }) => (
            <div key={role} className="border-border flex items-baseline gap-4 border-b pb-4">
              <span className="text-caption text-muted-foreground w-20 uppercase">{role}</span>
              <p className={className}>Del contenido global a resultados reales</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="color-heading" className="flex flex-col gap-6">
        <h2 id="color-heading" className="text-h2">
          Colors
        </h2>
        <p className="text-small text-muted-foreground">
          Badges show WCAG contrast against Bone 100 (light bg) and Carbon 900 (dark bg) — AA
          normal-text threshold is 4.5:1, large-text/UI-component threshold is 3:1.
        </p>
        {colorScales.map((scale) => (
          <div key={scale.name} className="flex flex-col gap-2">
            <h3 className="text-h3 capitalize">{scale.name}</h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-11">
              {scale.shades.map(([shade, hex]) => {
                const onBone = contrastRatio(hex, BONE_100);
                const onCarbon = contrastRatio(hex, CARBON_900);
                return (
                  <div key={shade} className="flex flex-col gap-1">
                    <div
                      className="border-border h-16 rounded-lg border"
                      style={{ backgroundColor: hex }}
                    />
                    <span className="text-caption">{shade}</span>
                    <span className="text-caption text-muted-foreground">
                      bone {onBone.toFixed(2)}{" "}
                      {passesAA(onBone) ? "✓" : passesAA(onBone, true) ? "△" : "✗"}
                    </span>
                    <span className="text-caption text-muted-foreground">
                      carbon {onCarbon.toFixed(2)}{" "}
                      {passesAA(onCarbon) ? "✓" : passesAA(onCarbon, true) ? "△" : "✗"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <p className="text-small text-muted-foreground">
          ✓ passes normal text (4.5:1) · △ passes large text/UI only (3:1) · ✗ fails both. Per the
          confirmed usage rule: small running text needs primary-700+/mint-900+ on bone; base hexes
          (500) are correct for buttons, icons, fills.
        </p>
      </section>

      <section aria-labelledby="buttons-heading" className="flex flex-col gap-6">
        <h2 id="buttons-heading" className="text-h2">
          Buttons
        </h2>
        <div className="flex flex-col gap-4">
          {buttonVariants.map((variant) => (
            <div key={variant} className="flex flex-wrap items-center gap-3">
              <span className="text-caption text-muted-foreground w-20 uppercase">{variant}</span>
              {buttonSizes.map((size) => (
                <Button key={size} variant={variant} size={size}>
                  Button
                </Button>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="forms-heading" className="flex flex-col gap-6">
        <h2 id="forms-heading" className="text-h2">
          Form fields
        </h2>
        <div className="grid max-w-md gap-6">
          <FormField>
            <FormFieldLabel>Name</FormFieldLabel>
            <Input placeholder="Jane Doe" />
            <FormFieldDescription>As it should appear on the release.</FormFieldDescription>
          </FormField>

          <FormField invalid>
            <FormFieldLabel>Email</FormFieldLabel>
            <Input placeholder="jane@studio.com" aria-invalid />
            <FormFieldError match={true}>Enter a valid email address.</FormFieldError>
          </FormField>

          <FormField>
            <FormFieldLabel>Message</FormFieldLabel>
            <Textarea placeholder="Tell us about your release…" />
          </FormField>
        </div>
      </section>

      <section aria-labelledby="cards-heading" className="flex flex-col gap-6">
        <h2 id="cards-heading" className="text-h2">
          Cards
        </h2>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Ejecución Operativa</CardTitle>
            <CardDescription>Control over DCP, materials, logistics.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-body">
              Decisions based on data, direct experience, and country-level knowledge.
            </p>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="motion-heading" className="flex flex-col gap-6">
        <h2 id="motion-heading" className="text-h2">
          Motion
        </h2>
        <MotionDemo />
      </section>
    </main>
  );
}
