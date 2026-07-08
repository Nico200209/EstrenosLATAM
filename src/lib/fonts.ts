import localFont from "next/font/local";

/**
 * Self-hosted Public Sans, licensed files in `public/fonts/`.
 * Every weight/style pair Estrenos LATAM has on file is registered here so
 * `font-thin` … `font-black` and `italic` all resolve without a fallback swap.
 */
export const publicSans = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "../../public/fonts/PublicSans-Thin.woff2", weight: "100", style: "normal" },
    { path: "../../public/fonts/PublicSans-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "../../public/fonts/PublicSans-ExtraLight.woff2", weight: "200", style: "normal" },
    {
      path: "../../public/fonts/PublicSans-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    { path: "../../public/fonts/PublicSans-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/PublicSans-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../../public/fonts/PublicSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/PublicSans-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/PublicSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/PublicSans-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../../public/fonts/PublicSans-SemiBold.woff2", weight: "600", style: "normal" },
    {
      path: "../../public/fonts/PublicSans-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    { path: "../../public/fonts/PublicSans-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/PublicSans-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../../public/fonts/PublicSans-ExtraBold.woff2", weight: "800", style: "normal" },
    {
      path: "../../public/fonts/PublicSans-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    { path: "../../public/fonts/PublicSans-Black.woff2", weight: "900", style: "normal" },
    { path: "../../public/fonts/PublicSans-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
});
