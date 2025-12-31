import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";

type TextAreaInputprops = {
  name: string;
  defaultValue?: string;
  text: string;
  placeholder: string;
};
const TextAreaInput = (props: TextAreaInputprops) => {
  return (
    <>
      <Label htmlFor={props.name} className="mb-2">
        {props.text}
      </Label>
      <Textarea
        placeholder={props.placeholder}
        id={props.name}
        name={props.name}
        rows={5}
        required
        defaultValue={props.defaultValue}
      />
    </>
  );
};
export default TextAreaInput;
