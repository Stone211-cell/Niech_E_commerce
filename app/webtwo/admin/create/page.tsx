
import { CreateProductActionB } from "../../action/createproductAction";
import CategoryInput from "@/components/Form/CategoryInput";

import FormContainer from "@/components/Form/FormContainer"
import FormInput from "@/components/Form/FormInput"
import MultiImageInput from "@/components/Form/MultiImageInput";
import SubmitBtn from "@/components/Form/SubmitBtn"
import TextAreaInput from "@/components/Form/TextAreaInput";


import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";




const createproduct = async () => {

  const user = await currentUser();
  if (!user?.privateMetadata.IsAdmin) redirect("/");
  return (
    <article className="flex items-center justify-center min-h-screen px-4 py-10">
      <div className="flex flex-col justify-between p-8 items-center bg-gray-900 border border-white/10 shadow-2xl rounded-2xl w-full max-w-xl">
        <h2 className="text-2xl font-bold text-white mb-6">เพิ่มสินค้าใหม่ (เว็บ 2)</h2>
        <FormContainer className="w-full flex flex-col gap-2" action={CreateProductActionB}>
          <FieldSet>
            <FieldGroup>
              <Field>

                <FormInput name="title" title="Title" type="text" placeholder="กรอกชื่อสินค้า" />

              </Field>
              <Field>
                <TextAreaInput name="description" text="กรอกรายละเอียดสินค้า" placeholder="รายละเอียดสินค้า" />
              </Field>
              <Field>
                <CategoryInput />
              </Field>
              <Field>

                <FormInput name="price" title="ราคา" type="text" placeholder="0.00" />
              </Field>
              <Field>
                <MultiImageInput />
              </Field>
            </FieldGroup>
          </FieldSet>

          <SubmitBtn text="เพิ่มสินค้า" size="lg" />
        </FormContainer>
      </div>
    </article>
  );
}
export default createproduct
