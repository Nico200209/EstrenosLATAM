import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

/**
 * Shared visual treatment for single-line and multi-line text fields.
 * 16px on mobile prevents iOS auto-zoom on focus; text-small on desktop
 * keeps the compact, premium feel used elsewhere in the type scale.
 */
export const fieldControlClassName = cn(
  "border-input bg-background w-full min-w-0 rounded-lg border px-3 text-[16px] transition-colors outline-none md:text-small",
  "placeholder:text-muted-foreground",
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3",
  "aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:ring-3",
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
);

function Input({ className, ...props }: InputPrimitive.Props) {
  return (
    <InputPrimitive
      data-slot="input"
      className={cn(fieldControlClassName, "flex h-10", className)}
      {...props}
    />
  );
}

export { Input };
