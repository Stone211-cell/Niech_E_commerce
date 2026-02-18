"use server";
import { renderError } from "@/utils/rendererror";
import { productSchema, validateWithZod } from "@/utils/Schema";

import db from "@/utils/db";

import { getAuthUserAdmin } from "@/app/action/authAdmin";
import { uploadFile, uploadFiles } from "@/utils/supabase";
import { IDK } from "@/app/action/createprofileAction";
import { revalidatePath } from "next/cache";


export const CreateProductActionB = async (
  _prevState: IDK,
  formData: FormData
): Promise<{ msg: string }> => {
  try {
    const user = await getAuthUserAdmin();
    const rawData = Object.fromEntries(formData);

    // รับหลายรูป
    const files = formData.getAll("images") as File[];
    const validFiles = files.filter((f) => f.size > 0);

    if (validFiles.length === 0) {
      // fallback: ลองดึงจาก field "image" เดิม
      const singleFile = formData.get("image") as File;
      if (!singleFile || singleFile.size === 0) {
        throw new Error("ต้องเลือกรูปอย่างน้อย 1 รูป");
      }
      validFiles.push(singleFile);
    }

    const validateField = validateWithZod(productSchema, rawData);

    // อัพโหลดทุกรูป
    const allUrls = await uploadFiles(validFiles);

    await db.productB.create({
      data: {
        ...validateField,
        image: allUrls[0],      // รูปแรกเป็น main image
        images: allUrls,         // ทุกรูป
        profileId: user.id,
      },
    });
    return { msg: "เพิ่มสินค้าสำเร็จ!" };
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
    const user = await getAuthUserAdmin();
    const rawData = Object.fromEntries(formData);
    const id = formData.get("id") as string;

    const validateField = validateWithZod(productSchema, rawData);

    // รูปเดิมที่ยังเก็บไว้
    const existingImages = formData.getAll("existingImages") as string[];

    // รับรูปใหม่
    const files = formData.getAll("images") as File[];
    const validFiles = files.filter((f) => f.size > 0);

    let allUrls = [...existingImages];

    if (validFiles.length > 0) {
      const newUrls = await uploadFiles(validFiles);
      allUrls = [...allUrls, ...newUrls];
    }

    if (allUrls.length === 0) {
      // fallback single file field
      const singleFile = formData.get("image") as File;
      if (singleFile && singleFile.size > 0) {
        const fullpath = await uploadFile(singleFile);
        allUrls = [fullpath];
      }
    }

    if (allUrls.length === 0) {
      throw new Error("ต้องมีรูปภาพสินค้าอย่างน้อย 1 รูป");
    }

    const updateData = {
      ...validateField,
      image: allUrls[0],
      images: allUrls,
      profileId: user.id,
    };

    await db.productB.update({
      where: { id },
      data: updateData,
    });
    return { msg: "แก้ไขสินค้าสำเร็จ!" };
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
};

export const DeleteProductActionB = async (_: any, formData: FormData) => {
  try {
    const id = formData.get("id") as string
    console.log(id)


    await db.productB.delete({
      where: { id }
    })
    revalidatePath("/webtwo/admin");
    return { msg: "del product succ" };


  } catch (error) {
    console.log(error);
    return renderError(error);
  }

};



