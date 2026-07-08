import { Field } from "@base-ui/react/field";

import { cn } from "@/lib/utils";

function Label({ className, ...props }: Field.Label.Props) {
  return (
    <Field.Label
      data-slot="label"
      className={cn(
        "text-small flex items-center gap-2 leading-none font-medium select-none",
        "group-data-[disabled]:pointer-events-none group-data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
