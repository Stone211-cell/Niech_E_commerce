import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD

import { ProductCardProps } from "@/utils/types";
import { fetchPreviewProductB } from "@/app/webtwo/action/productaction";


const ReviewProduct = async () => {
  const products = await fetchPreviewProductB();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product:ProductCardProps) => (
        <Link
          key={product.id}
          href={`/product/${product.id.toString()}`}
          className="group block border rounded-md overflow-hidden"
        >
          {/* ภาพ */}
          <div className="relative w-full h-[300px] overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
=======
import { fetchPreviewProduct } from "@/app/product/action/productaction";
import { ProductCardProps } from "@/utils/types";


const ReviewProduct = async () => {
  const products: ProductCardProps[] = await fetchPreviewProduct();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product: ProductCardProps) => {
        const imgSrc = product.image || "/placeholder.png";
        const title = product.title || "No title";
        const description = product.description || "No description available";
>>>>>>> 12697e9ef6c88069bc3a6685cd881d6c342ceac1

        return (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group block border rounded-md overflow-hidden"
          >
            <div className="relative w-full h-[300px] overflow-hidden">
              <Image
                src={imgSrc}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-2">
              <h3 className="text-sm font-semibold mt-1">
                {title.length > 30 ? title.slice(0, 30) + "..." : title}
              </h3>

              <p className="text-sm mt-1 text-muted-foreground">
                {description.length > 40
                  ? description.slice(0, 40) + "..."
                  : description}
              </p>

              <div className="mt-1 flex items-center justify-between font-semibold text-sm">
                <span>THB {product.price}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ReviewProduct;
