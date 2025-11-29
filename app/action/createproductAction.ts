"use server";
import { renderError } from "@/utils/rendererror";
import { imageSchema, productSchema, validateWithZod } from "@/utils/Schema";

import db from "@/utils/db";

import { getAuthUserAdmin } from "./authAdmin";
import { uploadFile } from "@/utils/supabase";
import { IDK } from "./createprofileAction";


export const CreateProductAction = async (_prevState: IDK, formData: FormData):Promise<{ msg: string }> => {
  try {
    // เช็คคนเข้ามาว่ามี โปรไฟล์หรือยัง
    const user = await getAuthUserAdmin();

    const rawData = Object.fromEntries(formData);
      const file = formData.get("image") as File;

      // image
    const validateFile = validateWithZod(imageSchema, { image:file });
    // data product
     const validateField = validateWithZod(productSchema, rawData);

     const fullpath = await uploadFile(validateFile.image)
     console.log(fullpath)
    await db.product.create({
      data: {
    ...validateField,
    image: fullpath,
    profileId: user.id
      },
    });
    return {msg: "dee ja"}
  } catch (error) {
    console.log(error);
    return renderError(error);
  }

};




