"use server";

import { revalidatePath } from "next/cache";
import { getAuthUser } from "./createprofileAction";
import db from "@/utils/db";
import { renderError } from "@/utils/rendererror";

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
      profileId: user.id,
    },
    select: {
      id: true,
    },
  });

  return favorite?.id ?? null;
};

export const toggleFavoriteAction = async (prevState: {
  favoriteId: string | null;
  productId: string;
  pathname: string;
  productType:  "A" | "B";
}) => {
  const { favoriteId, productId, pathname,productType } = prevState;
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
      msg: "Something went wrong",
    };
  }
};

export const fetchCart = async () => {
  const user = await getAuthUser();

  const favorites = await db.favorite.findMany({
    where: { profileId: user.id },
  });

  const productAIds = favorites
    .filter((f) => f.productType === "A")
    .map((f) => f.productId);

  const productBIds = favorites
    .filter((f) => f.productType === "B")
    .map((f) => f.productId);

  const productsA = await db.productA.findMany({
    where: { id: { in: productAIds } },
  });

  const productsB = await db.productB.findMany({
    where: { id: { in: productBIds } },
  });

  return [...productsA, ...productsB];
};
