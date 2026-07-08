import { useTranslations } from "next-intl";
import Image from "next/image";

import { Link } from "@/i18n/navigation";

const NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "markets", href: "/markets" },
  { key: "partners", href: "/partners" },
  { key: "insights", href: "/insights" },
  { key: "contact", href: "/contact" },
] as const;

// Social URLs are placeholders pending real accounts — see CLAUDE.md Technical Debt.
// Text labels (not icons) since lucide-react v1.x dropped brand/social glyphs.
const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
] as const;

export function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");

  return (
    <footer className="bg-carbon-900 text-bone-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/images/logo/lockup/white-orange.png"
              alt="Estrenos LATAM"
              width={420}
              height={192}
              className="h-24 w-auto"
            />
            <p className="text-small text-bone-400 max-w-xs">{tf("tagline")}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-caption text-bone-500 uppercase">{tf("navHeading")}</h2>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map(({ key, href }) => (
                <Link
                  key={key}
                  href={href}
                  className="text-small text-bone-300 hover:text-bone-50 transition-colors"
                >
                  {t(key)}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-caption text-bone-500 uppercase">{tf("contactHeading")}</h2>
            <a
              href={`mailto:${tf("contactEmail")}`}
              className="text-small text-bone-300 hover:text-bone-50 transition-colors"
            >
              {tf("contactEmail")}
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-caption text-bone-500 uppercase">{tf("socialHeading")}</h2>
            <div className="flex flex-col gap-2">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-small text-bone-300 hover:text-bone-50 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-carbon-700 text-caption text-bone-500 border-t pt-6">
          © {new Date().getFullYear()} Estrenos LATAM. {tf("rightsReserved")}
        </div>
      </div>
    </footer>
  );
}
