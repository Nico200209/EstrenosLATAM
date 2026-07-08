import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  heading: string;
  subtext?: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: "carbon" | "bone";
  className?: string;
};

/** Reusable banded CTA — every page instance supplies its own translated copy. */
export function CTASection({
  heading,
  subtext,
  ctaLabel,
  ctaHref,
  variant = "carbon",
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "px-6 py-16 md:py-24",
        variant === "carbon" ? "bg-carbon-900 text-bone-100" : "bg-bone-100 text-carbon-900",
        className,
      )}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="text-h2">{heading}</h2>
        {subtext && (
          <p
            className={cn(
              "text-body",
              variant === "carbon" ? "text-bone-400" : "text-muted-foreground",
            )}
          >
            {subtext}
          </p>
        )}
        <Button size="lg" nativeButton={false} render={<Link href={ctaHref} />}>
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
