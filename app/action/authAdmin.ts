import { currentUser } from "@clerk/nextjs/server";


export const getAuthUserAdmin = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must logged!!");
  }
  if (!user.privateMetadata.IsAdmin) throw new Error("You must admin!!");
  return user
};
