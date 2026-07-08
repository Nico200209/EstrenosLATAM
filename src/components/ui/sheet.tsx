import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Sheet = Dialog.Root;
const SheetTrigger = Dialog.Trigger;

function SheetContent({ className, children, ...props }: Dialog.Popup.Props) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop
        className={cn(
          "bg-carbon-900/40 fixed inset-0 z-50 backdrop-blur-sm transition-opacity duration-200",
          "data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
          "motion-reduce:transition-none",
        )}
      />
      <Dialog.Popup
        data-slot="sheet-content"
        className={cn(
          "bg-background fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col gap-6 p-6 shadow-lg sm:max-w-sm",
          "transition-transform duration-200 ease-out",
          "data-[ending-style]:translate-x-full data-[starting-style]:translate-x-full",
          "motion-reduce:transition-none",
          className,
        )}
        {...props}
      >
        <Dialog.Close
          render={
            <Button variant="ghost" size="icon" aria-label="Close menu" className="self-end" />
          }
        >
          <X className="size-5" strokeWidth={1.5} />
        </Dialog.Close>
        {children}
      </Dialog.Popup>
    </Dialog.Portal>
  );
}

function SheetTitle({ className, ...props }: Dialog.Title.Props) {
  return <Dialog.Title data-slot="sheet-title" className={cn("sr-only", className)} {...props} />;
}

function SheetDescription({ className, ...props }: Dialog.Description.Props) {
  return (
    <Dialog.Description
      data-slot="sheet-description"
      className={cn("sr-only", className)}
      {...props}
    />
  );
}

export { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription };
