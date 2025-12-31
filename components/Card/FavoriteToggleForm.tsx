"use client";

import FormContainer from "../Form/FormContainer";
import { usePathname } from "next/navigation";
import  { CardSubmitButton } from "../Form/SubmitBtn";
import { toggleFavoriteAction } from "@/app/action/favoriteproduct";
import { fetchProductDetail } from "@/app/webtwo/action/productaction";


const FavoriteToggleForm = ({
  favoriteId,
  productId,
  productType
}: {
  favoriteId: string | null;
  productId: string;
  productType: "A" | "B"
}) => {
  const pathname = usePathname();

  // console.log("id", favoriteId);
  // console.log(pathname);

  const toggleAction = toggleFavoriteAction.bind(null, {
    favoriteId,
    productId,
    pathname,
    productType,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};
export default FavoriteToggleForm;