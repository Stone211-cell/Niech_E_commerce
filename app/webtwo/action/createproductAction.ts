"use server";
import { renderError } from "@/utils/rendererror";
import { imageSchema, productSchema, validateWithZod } from "@/utils/Schema";

import db from "@/utils/db";

import { getAuthUserAdmin } from "@/app/action/authAdmin";
import { uploadFile } from "@/utils/supabase";
import { IDK } from "@/app/action/createprofileAction";
import { revalidatePath } from "next/cache";


export const CreateProductActionB = async (
  _prevState: IDK,
  formData: FormData
): Promise<{ msg: string }> => {
  try {
    // เช็คคนเข้ามาว่ามี โปรไฟล์หรือยัง
    const user = await getAuthUserAdmin();
    console.log(user);
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

    // image
    const validateFile = validateWithZod(imageSchema, { image: file });
    // data product
    const validateField = validateWithZod(productSchema, rawData);

    const fullpath = await uploadFile(validateFile.image);
    console.log(fullpath);
    await db.productB.create({
      data: {
        ...validateField,
        image: fullpath,
        profileId: user.id,
      },
    });
    return { msg: "dee ja" };
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
};

export const EditProductActionB = async (
  _prevState: IDK,
  formData: FormData,
): Promise<{ msg: string }> => {
  try {
    // เช็คคนเข้ามาว่ามี โปรไฟล์หรือยัง
    const user = await getAuthUserAdmin();

    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    const id = formData.get("id") as string
  

    // image
    const validateFile = validateWithZod(imageSchema, { image: file });
    // data product
    const validateField = validateWithZod(productSchema, rawData);
    const fullpath = await uploadFile(validateFile.image);

    await db.productB.update({
      where: { id },
      data: {
        ...validateField,
        image: fullpath,
        profileId: user.id,
      },
    });
    return { msg: "dee ja" };
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
};

export const DeleteProductActionB = async (_: any,formData: FormData) => {
  try {
    const id = formData.get("id") as string
    console.log(id)


    await db.productB.delete({
      where: {id}
    })
    revalidatePath("/webtwo/admin");
    return { msg: "del product succ" };
    

  } catch (error) {
    console.log(error);
    return renderError(error);
  }
  
};



