import { auth } from "@clerk/nextjs/server";
import FavoriteToggleForm from "./FavoriteToggleForm";
import { fetchFavoriteId } from "@/app/action/favoriteproduct";
import { SignInCardButton } from "../Form/SubmitBtn";
import { fetchProductDetail } from "@/app/webtwo/action/productaction";


const FavoriteToggleButton = async ({
  productId,
}: {
  productId: string;
}) => {
  const { userId } = await auth();
  if (!userId) return <SignInCardButton />;

  // ✅ await + ส่ง argument ถูก
  const productDetail = await fetchProductDetail({ id: productId });

  if (!productDetail) return null;

  const { type } = productDetail;

  // ✅ ส่งชื่อ field ให้ตรง
  const favoriteId = await fetchFavoriteId({
    productId,
    productType: type,
  });

  return (

    <FavoriteToggleForm
      productType={type}
      favoriteId={favoriteId}
      productId={productId}
    />
  );
};

export default FavoriteToggleButton;
