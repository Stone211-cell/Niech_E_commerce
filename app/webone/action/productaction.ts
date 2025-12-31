// import { getAuthUserAdmin } from "@/app/action/authAdmin";
import db from "@/utils/db";
import { redirect } from "next/navigation";

 

export const fetchProductDetailA = async({id}:{id:string})=>{
try {
  

  // code body
  const idproduct = id 
  return db.productA.findFirst({
    where:{
      id : idproduct
    },
    include:{
      profile:true
      
    }
  })
  } catch (error) {
  redirect("/")
}
}

export const fetchProduct = async() =>{

 const product = await db.productA.findMany({
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