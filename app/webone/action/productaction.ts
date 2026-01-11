
import db from "@/utils/db";
import { redirect } from "next/navigation";

export const fetchPreviewProductA = async() =>{

 const product = await db.productA.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });
  return product;
};




export const fetchAllProductA = async() =>{

 const product = await db.productA.findMany({
    orderBy: {
      createdAt: "desc",
    },

  });
  return product;
};



