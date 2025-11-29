
import { CreateProductAction } from "@/app/action/createproductAction";
import CategoryInput from "@/components/Form/CategoryInput";

import FormContainer from "@/components/Form/FormContainer"
import FormInput from "@/components/Form/FormInput"
import ImageInput from "@/components/Form/ImageInput";
import SubmitBtn from "@/components/Form/SubmitBtn"
import TextAreaInput from "@/components/Form/TextAreaInput";


import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";




const createproduct = async() => {

  const user = await currentUser();
  if (user?.privateMetadata.Isadmin) redirect("/");
  return (
      <article className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col justify-between p-2 items-center bg-white shadow-md rounded-md w-full max-w-xl">
              <FormContainer className="w-full flex flex-col gap-2" action={CreateProductAction}>
                <FieldSet>
                  <FieldGroup>
                    <Field>
      
                      <FormInput  name="title" title="Title" type="text" placeholder="กรอกชื่อสินค้า"/>
                    
                    </Field>
                    <Field>
                      <TextAreaInput name="description" text="กรอกรายละเอียดสินค้า" placeholder="รายละเอียดสินค้า" />
                    </Field>
                    <Field>
                      <CategoryInput />
                    </Field>
                    <Field>
                     
                       <FormInput  name="price" title="ราคา" type="text" placeholder="0.00"/> 
                    </Field>
                    <Field>
                       <ImageInput />
                    </Field>
                  </FieldGroup>
                </FieldSet>
                     
             <SubmitBtn text="สมัครสมาชิก" size="lg"/>
             </FormContainer>
           </div>
         </article> 
        );
}
export default createproduct




