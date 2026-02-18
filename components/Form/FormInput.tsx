
import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { cn } from "@/lib/utils";

type FormInputprops = {
  name: string;
  title: string;
  type: string;
  placeholder?: string;
  Description?: string;
  defaultValue?: string;
  className?: string; // Add className
  labelClassName?: string; // Add labelClassName
};

const FormInput = (props: FormInputprops) => {
  return (
    <FieldSet>
      <FieldGroup>
        <Field className="space-y-2">
          <FieldLabel htmlFor={props.name} className={cn(props.labelClassName)}>
            {props.title}
          </FieldLabel>
          <Input
            name={props.name}
            id={props.name}
            type={props.type}
            defaultValue={props.defaultValue}
            placeholder={props.placeholder}
            required
            className={cn(props.className)}
          />
          {props.Description && (
            <FieldDescription>{props.Description}</FieldDescription>
          )}
        </Field>
      </FieldGroup>
    </FieldSet>
  );
};

export default FormInput;
