import { Field } from "@base-ui/react/field";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

/**
 * Accessible field wiring for react-hook-form + zod: pairs a control
 * (Input/Textarea) with a label, optional description, and validation
 * error, all connected via Base UI's Field context.
 *
 * <FormField label="Email" description="We reply within one business day.">
 *   <Input {...register("email")} aria-invalid={!!errors.email} />
 *   {errors.email && <FormFieldError>{errors.email.message}</FormFieldError>}
 * </FormField>
 */
function FormField({ className, ...props }: Field.Root.Props) {
  return (
    <Field.Root data-slot="form-field" className={cn("group grid gap-2", className)} {...props} />
  );
}

function FormFieldLabel(props: Field.Label.Props) {
  return <Label {...props} />;
}

function FormFieldDescription({ className, ...props }: Field.Description.Props) {
  return (
    <Field.Description
      data-slot="form-field-description"
      className={cn("text-small text-muted-foreground", className)}
      {...props}
    />
  );
}

function FormFieldError({ className, ...props }: Field.Error.Props) {
  return (
    <Field.Error
      data-slot="form-field-error"
      className={cn("text-small text-destructive", className)}
      {...props}
    />
  );
}

export { FormField, FormFieldLabel, FormFieldDescription, FormFieldError };
