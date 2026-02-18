import { z, ZodSchema } from "zod";

// zod profileSchema
export const profileSchema = z.object({
  name: z.string().min(2, { message: "ชื่อต้องมีตัวอักษรมากกว่า 2 ตัวอักษร" }),
  emailcontect: z
    .string()
    .min(2, { message: "ชื่อต้องมีตัวอักษรมากกว่า 2 ตัวอักษร" }),
  phone: z
    .string()
    .regex(/^0[0-9]{9}$/, { message: "โปรดกรอกข้อมูลให้ถูกต้อง" }),
});

// zod Image
const validateImage = () => {
  const maxFileSize = 5 * 1024 * 1024; //5mb
  return z.instanceof(File).refine((file) => {
    return file.size <= maxFileSize;
  }, "File size must be less than 5MB");
};

export const imageSchema = z.object({
  image: validateImage(),
});

export const multiImageSchema = z.object({
  images: z.array(validateImage()).min(1, "ต้องมีอย่างน้อย 1 รูป").max(5, "สูงสุด 5 รูป"),
});

export const productSchema = z.object({
  title: z
    .string()
    .min(2, { message: "ชื่อต้องมากกว่า 2 อักขระ" })
    .max(30, { message: "ชื่อต้องน้อยกว่า 30 อักขระ" }),

  description: z
    .string()
    .min(2, { message: "รายละเอียดต้องมากกว่า 2 อักขระ" })
    .max(200, { message: "รายละเอียดต้องน้อยกว่า 200 อักขระ" }),
  price: z.coerce.number().int().min(0, { message: "ราคาต้องมากกว่า 0" }),
  category: z.string(),
});

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown) => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error?.issues.map((issues) => issues.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};
