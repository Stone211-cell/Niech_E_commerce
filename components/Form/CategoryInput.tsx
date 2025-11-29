
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/utils/categories";

const CategoryInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "category";

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-3">
        {name}
      </Label>
      <Select
        defaultValue={defaultValue || categories[0].label}
        name={name}
        required
      >
        <SelectTrigger  className="w-[180px]" >
          <SelectValue  placeholder="Select a something" />
        </SelectTrigger>
        <SelectContent className="bg-white" >
          {categories.map((item) => {
            return (
              <SelectItem key={item.label} value={item.label} className="hover:bg-black hover:text-white">
                <span className="w-full capitalize flex items-center gap-4 hover:bg-black hover:text-white">
                  <item.icon />
                  {item.label}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CategoryInput;