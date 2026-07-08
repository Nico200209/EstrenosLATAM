import * as React from "react";

import { fieldControlClassName } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(fieldControlClassName, "min-h-24 resize-y py-2", className)}
      {...props}
    />
  );
}

export { Textarea };
