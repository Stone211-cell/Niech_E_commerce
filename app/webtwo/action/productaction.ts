
import db from "@/utils/db";
import { redirect } from "next/navigation";

export const fetchPreviewProductB = async() =>{

 const product = await db.productB.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });
  return product;
};




export const fetchAllProductB = async() =>{

 const product = await db.productB.findMany({
    orderBy: {
      createdAt: "desc",
    },

  });
  return product;
};



export const fetchProductDetail = async ({
  id,
}: {
  id: string;
}): Promise<
  | { type: "A"; product: any }
  | { type: "B"; product: any }
  | null
> => {
  const findA = await db.productA.findFirst({
    where: { id },
    include: { profile: true },
  });

  if (findA) {
    return { type: "A", product: findA };
  }

  const findB = await db.productB.findFirst({
    where: { id },
    include: { profile: true },
  });

  if (findB) {
    return { type: "B", product: findB };
  }

  return null;
};


