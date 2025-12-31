import Image from "next/image";
import Link from "next/link";

import { ProductCardProps } from "@/utils/types";
import { fetchPreviewProductB } from "@/app/webtwo/action/productaction";


const ReviewProduct = async () => {
  const products: ProductCardProps[] = await fetchPreviewProductB();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => {
        const imgSrc = product.image || "/placeholder.png";
        const title = product.title || "No title";
        const description =
          product.description || "No description available";

        return (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group block border rounded-md overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-[300px] overflow-hidden">
              <Image
                src={imgSrc}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
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
