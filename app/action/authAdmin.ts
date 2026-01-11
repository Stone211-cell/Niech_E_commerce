"use server";
import db from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";


export const getAuthUserAdmin = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must logged!!");
  }
  if (!user.privateMetadata.IsAdmin) throw new Error("You must admin!!");
  return user
};




export const fetchProductDetail = async ({ id }: { id: any }) => {
  const findA = await db.productA.findFirst({ where: { id }, include: { profile: true } });
  if (findA) return { type: "A", product: findA };

  const findB = await db.productB.findFirst({ where: { id }, include: { profile: true } });
  if (findB) return { type: "B", product: findB };

  return null;
};
