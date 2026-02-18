"use server";

import { revalidatePath } from "next/cache";
import { getAuthUser } from "./createprofileAction";
import db from "@/utils/db";
import { renderError } from "@/utils/rendererror";
import { ProductCardProps } from "@/utils/types";

export const fetchFavoriteId = async ({
  productId,
  productType,
}: {
  productId: string;
  productType: "A" | "B";
}) => {
  const user = await getAuthUser();

  const favorite = await db.favorite.findFirst({
    where: {
      productId,
      productType, // ✅ สำคัญมาก
      profileId: user.id,
    },
    select: { id: true },

  });

  return favorite?.id ?? null;
};

export const toggleFavoriteAction = async (prevState: {
  favoriteId: string | null;
  productId: string;
  pathname: string;
  productType: "A" | "B";
}) => {
  const { favoriteId, productId, pathname, productType } = prevState;
  const user = await getAuthUser();

  try {
    if (favoriteId) {
      // DELETE
      await db.favorite.delete({
        where: { id: favoriteId },
      });
    } else {
      // CREATE
      await db.favorite.create({
        data: {
          productId,
          profileId: user.id, // clerkId
          productType
        },
      });
    }

    revalidatePath(pathname);

    return {
      msg: favoriteId ? "Removed Favorite Success" : "Add Favorite Success",
    };
  } catch (error) {
    console.error(error);
    return {
      msg: error instanceof Error ? error.message : "Something went wrong",
    };
  }
};


export const fetchCart = async (): Promise<ProductCardProps[]> => {
  const user = await getAuthUser()

  const favorites = await db.favorite.findMany({
    where: { profileId: user.id },
  })

  const productAIds = favorites
    .filter(f => f.productType === "A")
    .map(f => f.productId)

  const productBIds = favorites
    .filter(f => f.productType === "B")
    .map(f => f.productId)

  const [productsA, productsB] = await Promise.all([
    db.productA.findMany({ where: { id: { in: productAIds } } }),
    db.productB.findMany({ where: { id: { in: productBIds } } }),
  ])

  return [
    ...productsA.map(p => ({ ...p, productType: "A" as const })),
    ...productsB.map(p => ({ ...p, productType: "B" as const })),
  ]
}
