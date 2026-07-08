"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "@/components/shared/locale-switcher";

const NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "markets", href: "/markets" },
  { key: "partners", href: "/partners" },
  { key: "insights", href: "/insights" },
  { key: "contact", href: "/contact" },
] as const;

function NavLinks({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <nav className={className}>
      {NAV_ITEMS.map(({ key, href }) => {
        const isActive = href === "/" ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={key}
            href={href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "text-small font-medium transition-colors",
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t(key)}
          </Link>
        );
      })}
    </nav>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-200",
        scrolled
          ? "bg-background/80 border-border/60 border-b backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo/lockup/black-orange.png"
            alt="Estrenos LATAM"
            width={140}
            height={64}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <NavLinks className="hidden items-center gap-8 lg:flex" />

        <div className="hidden items-center gap-4 lg:flex">
          <LocaleSwitcher />
          <Button size="sm" nativeButton={false} render={<Link href="/contact" />}>
            {t("contactCta")}
          </Button>
        </div>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" aria-label="Open menu" className="lg:hidden" />
            }
          >
            <Menu className="size-6" strokeWidth={1.5} />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Estrenos LATAM</SheetTitle>
            <SheetDescription>Site navigation</SheetDescription>
            <NavLinks
              className="text-h3 flex flex-col gap-6"
              onNavigate={() => setMenuOpen(false)}
            />
            <div className="mt-auto flex flex-col gap-4">
              <LocaleSwitcher />
              <Button
                nativeButton={false}
                render={<Link href="/contact" />}
                onClick={() => setMenuOpen(false)}
              >
                {t("contactCta")}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
