


import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";

type FormInputprops = {
  name:string,
  title:string,
  type: string,
  placeholder?: string,
  Description?:string,

}


const FormInput = (props:FormInputprops) => {


  return (
 
    
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor={props.name}>{props.title}</FieldLabel>
                <Input
                  name={props.name}
                  id={props.name}
                  type={props.type}
                  // value={form.title}
                  // onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder={props.placeholder}
                  required
                />
                <FieldDescription>{props.Description}</FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>


  );
};

export default FormInput;
