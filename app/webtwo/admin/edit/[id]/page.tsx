import { EditProductActionB } from "@/app/webtwo/action/createproductAction";
import { fetchProductDetail } from "@/app/webtwo/action/productaction";
import CategoryInput from "@/components/Form/CategoryInput";
import FormContainer from "@/components/Form/FormContainer";
import FormInput from "@/components/Form/FormInput";
import ImageInput from "@/components/Form/ImageInput";
import SubmitBtn from "@/components/Form/SubmitBtn";
import TextAreaInput from "@/components/Form/TextAreaInput";
import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


//b1805b68-28f7-43ff-a234-1892f8b748bd
const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  // ดึงข้อมูล product

   const  data  = await fetchProductDetail({ id });
  const {product}:any = data

  // ตรวจสอบ user
  const user = await currentUser();
  if (!user?.privateMetadata.IsAdmin) redirect("/");

  return (
    <article className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-between p-2 items-center bg-white shadow-md rounded-md w-full max-w-xl">
        <FormContainer className="w-full flex flex-col gap-2" action={EditProductActionB}>
              {/* id */}
              <input type="hidden" name="id" value={product.id} />
          <FieldSet>
            <FieldGroup>
     


              <Field>
                <FormInput name="title" title="Title" type="text" placeholder={product?.title} defaultValue={product?.title} />
              </Field>
              <Field>
                <TextAreaInput name="description" text="กรอกรายละเอียดสินค้า" placeholder={product?.description}  defaultValue={product?.description} />
              </Field>
              <Field>
                <CategoryInput defaultValue={product?.category}/>
              </Field>
              <Field>
                <FormInput name="price" title="ราคา" type="text" placeholder={product?.price.toString()} defaultValue={product?.price.toString()} />
              </Field>
              <Field>
                <ImageInput/>
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
