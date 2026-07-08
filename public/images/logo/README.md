# Estrenos LATAM logo assets

Uploaded 2026-07-08 as 22 unlabeled PNGs (RGB, transparent background); sorted and renamed below after visual inspection. All files are high-resolution (8400–9800px wide) transparent PNGs — resize down via `next/image`, never up.

## `lockup/` — wordmark + frame, wide format (the main logo)

The default lockup: "Estrenos LATAM." wordmark next to the angled bracket/frame mark, landscape aspect (~2.18:1).

| File | Description | Use |
|---|---|---|
| `black-orange.png` | Black wordmark, orange frame + dot | **Primary logo** — light backgrounds |
| `white-orange.png` | White wordmark, orange frame + dot | Dark backgrounds, orange accent kept |
| `black-mint.png` | Black wordmark, mint frame + dot | Light backgrounds, mint accent context (e.g. maps/data sections) |
| `white-mint.png` | White wordmark, mint frame + dot | Dark backgrounds, mint accent context |
| `black-mono.png` | All black (wordmark + frame + dot) | Single-color use: print, watermark, stamps |
| `white-mono.png` | All white | Single-color use on dark/photo backgrounds |
| `white-dot-orange.png` | White wordmark + frame, only the period dot in orange | Subtle variant where frame should recede |
| `white-dot-mint.png` | White wordmark + frame, only the period dot in mint | Subtle variant where frame should recede |

## `lockup-stacked/` — wordmark + frame, taller format

Same lockup concept, taller/more square aspect (~1.30:1) — for placements where the wide lockup doesn't fit (square social avatars, app store listings).

| File | Description |
|---|---|
| `black-orange.png` | Black wordmark, solid orange frame + dot |
| `black-orange-gradient.png` | Black wordmark, frame fades orange → black |
| `black-mint.png` | Black wordmark, solid mint frame + dot |
| `black-mint-gradient.png` | Black wordmark, frame fades mint → black |
| `black-mono.png` | All black |
| `white-mono.png` | All white |

## `mark/` — frame + "E" letterform (no wordmark)

The favicon/app-icon source: the frame with a single capital "E" centered inside, plus the accent dot. Square-ish (~1.30:1) — crop to a square around the frame for actual favicon generation.

| File | Description | Use |
|---|---|---|
| `black-orange.png` | Black "E", orange frame + dot | **Primary mark** — favicon/app-icon source |
| `black-mint.png` | Black "E", mint frame + dot | Alt mark, mint contexts |
| `black-mono.png` | All black | Single-color stamp/emboss |
| `white-mono.png` | All white | Dark background use |

## `bracket/` — frame only, no letterform

Just the angled bracket, no text or letter inside. Useful as a pure graphic motif (section dividers, background decoration).

| File | Description |
|---|---|
| `orange.png` | Solid orange bracket + dot |
| `mint.png` | Solid mint bracket + dot |

## `decorative/` — gradient frame motif

The bracket rendered with a color-to-transparent gradient stroke (no dot emphasis, no text) — designed for animated "route-line" moments per CLAUDE.md's Visual Identity section (§8): hero backgrounds, section dividers, scroll-triggered draw-on animations.

| File | Description |
|---|---|
| `frame-gradient-orange.png` | Bracket fading from solid orange to transparent |
| `frame-gradient-mint.png` | Bracket fading from solid mint to transparent |
