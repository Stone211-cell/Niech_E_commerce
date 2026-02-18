
import { ProductCardProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import FavoriteToggleButton from "./FavoriteToggleButton";
import { Button } from "../ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { DeleteProductActionB } from "@/app/webtwo/action/createproductAction";
import FormContainer from "../Form/FormContainer";
import SubmitBtn from "../Form/SubmitBtn";
import { CardBody, CardContainer, CardItem } from "./ThreeDCard";
import CardCarousel from "./CardCarousel";

const ProductCard = async ({ product, productA = "hidden", productB = "hidden" }: { product: ProductCardProps, productA?: string, productB?: string }) => {
  const { title, image, images, id, description, price } = product;
  const user = await currentUser();
  const isAdmin = user?.privateMetadata?.IsAdmin === true;

  // รูปทั้งหมด (fallback สำหรับสินค้าเดิมที่มีรูปเดียว)
  const allImages = images && images.length > 0 ? images : [image];

  return (
    <CardContainer className="inter-var w-full h-full">
      <CardBody className="bg-white group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">

        {/* Title & Favorite */}
        <div className="flex justify-between items-center mb-4">
          <CardItem translateZ="60" className="bg-white text-red-500">
            <FavoriteToggleButton productId={id} />
          </CardItem>
        </div>

        {/* Image Carousel or Single Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <Link href={`/product/${id}`}>
            <div className="relative w-full h-60 rounded-xl group-hover/card:shadow-xl overflow-hidden">
              {allImages.length > 1 ? (
                <CardCarousel images={allImages} title={title} />
              ) : (
                <Image
                  src={image}
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:scale-110 transition-transform duration-500"
                  alt={title}
                />
              )}
            </div>
          </Link>
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {(description ?? "No description available").substring(0, 60)}...
        </CardItem>


        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title.substring(0, 30)}
        </CardItem>

        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300"
          >
            <Link href={`/product/${id}`}>
              ฿ {price.toLocaleString()}
            </Link>
          </CardItem>

          <CardItem
            translateZ={20}
            className="px-5 py-2 rounded-full bg-black text-white text-xs font-bold hover:bg-gray-800 transition-colors"
          >
            <Link href={`/product/${id}`}>
              ดูรายละเอียด
            </Link>
          </CardItem>
        </div>

        {/* Admin Controls */}
        {isAdmin && (
          <CardItem translateZ="40" className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap gap-2 justify-end">
            <Link href={`/webone/admin/edit/${id}`} className={productA}>
              <Button variant="outline" size="sm" className="border-blue-500 text-blue-600 hover:bg-blue-50">แก้ไข A</Button>
            </Link>

            <Link href={`/webtwo/admin/edit/${id}`} className={productB}>
              <Button variant="outline" size="sm" className="border-purple-500 text-purple-600 hover:bg-purple-50">แก้ไข B</Button>
            </Link>

            <div className={productB}>
              <FormContainer action={DeleteProductActionB}>
                <input type="hidden" name="id" value={id} />
                <SubmitBtn text="ลบ" size="sm" className="bg-red-500 text-white hover:bg-red-600 rounded-lg" />
              </FormContainer>
            </div>
          </CardItem>
        )}

      </CardBody>
    </CardContainer>
  );
};
export default ProductCard;