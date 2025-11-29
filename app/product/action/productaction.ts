// import { getAuthUserAdmin } from "@/app/action/authAdmin";
import db from "@/utils/db";

 export const fetchPreviewProduct = async() =>{

 const product = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });
  return product;
};


export const fetchProduct = async() =>{

 const product = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });
  return product;
};

// export const fetchFavoriteId = async ({
//   landmarkId,
// }: {
//   landmarkId: string;
// }) => {
//   const user = await getAuthUser();
//   const favorite = await db.favorite.findFirst({
//     where: {
//       landmarkId: landmarkId,
//       profileId: user.id,
//     },
//     select: {
//       id: true,
//     },
//   });
//   return favorite?.id || null;
// };