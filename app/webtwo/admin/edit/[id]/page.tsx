import { EditProductActionB } from "@/app/webtwo/action/createproductAction";
import { fetchProductDetail } from "@/app/webtwo/action/productaction";

import CategoryInput from "@/components/Form/CategoryInput";
import FormContainer from "@/components/Form/FormContainer";
import FormInput from "@/components/Form/FormInput";
import MultiImageInput from "@/components/Form/MultiImageInput";
import SubmitBtn from "@/components/Form/SubmitBtn";
import TextAreaInput from "@/components/Form/TextAreaInput";
import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import { ParamsPromise } from "@/utils/types";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


//b1805b68-28f7-43ff-a234-1892f8b748bd
const Page = async ({ params }: ParamsPromise) => {
  const { id } = await params;

  // ดึงข้อมูล product

  const data = await fetchProductDetail({ id });
  const { product }: any = data

  // ตรวจสอบ user
  const user = await currentUser();
  if (!user?.privateMetadata.IsAdmin) redirect("/");

  return (
    <article className="flex items-center justify-center min-h-screen px-4 py-10">
      <div className="flex flex-col justify-between p-8 items-center bg-gray-900 border border-white/10 shadow-2xl rounded-2xl w-full max-w-xl">
        <h2 className="text-2xl font-bold text-white mb-6">แก้ไขสินค้า (เว็บ 2)</h2>
        <FormContainer className="w-full flex flex-col gap-2" action={EditProductActionB}>
          {/* id */}
          <input type="hidden" name="id" value={product.id} />
          <FieldSet>
            <FieldGroup>


              <Field>
                <FormInput name="title" title="Title" type="text" placeholder={product?.title} defaultValue={product?.title} />
              </Field>
              <Field>
                <TextAreaInput name="description" text="กรอกรายละเอียดสินค้า" placeholder={product?.description} defaultValue={product?.description} />
              </Field>
              <Field>
                <CategoryInput defaultValue={product?.category} />
              </Field>
              <Field>
                <FormInput name="price" title="ราคา" type="text" placeholder={product?.price.toString()} defaultValue={product?.price.toString()} />
              </Field>
              <Field>
                <MultiImageInput initialImages={product?.images?.length > 0 ? product.images : [product.image]} />
              </Field>
            </FieldGroup>
          </FieldSet>

          <SubmitBtn text="บันทึกสินค้า" size="lg" />
        </FormContainer>
      </div>
    </article>
  );
};

export default Page;