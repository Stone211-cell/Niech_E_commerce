"use server";
import { renderError } from "@/utils/rendererror";
import { profileSchema, validateWithZod } from "@/utils/Schema";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation"; // profile create can only before login

export type IDK =  {
  msg:string
}

export const ProfileCreate = async (_prevState: IDK, formData: FormData) => {
  try {
    const user = await currentUser();
    // เช็คคนเข้ามาว่ามี โปรไฟล์หรือยัง
    if (!user) throw new Error("Please Login!!!");


    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(profileSchema, rawData);
    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress ?? " ",
        profileImage: user.imageUrl ?? " ",
        ...validateField,
      },
    });
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: { hasProfile: true },
    });
     
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
 redirect("/")
};





// เช็คคนเข้ามาว่าlogin หรือยัง
// const getAuthUser = async () => {
//   const user = await currentUser();
//   if (!user) {
//     throw new Error("You must logged!!");
//   }

//   return user;
// };
