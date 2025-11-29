import Image from "next/image";
import Link from "next/link";
import { fetchPreviewProduct } from "@/app/product/action/productaction";

const ReviewProduct = async () => {
  const products = await fetchPreviewProduct();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
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

          {/* ข้อมูล */}
          <div className="p-2">
            <h3 className="text-sm font-semibold mt-1">
              {product.title.substring(0, 30)}
            </h3>
            <p className="text-sm mt-1 text-muted-foreground">
              {(product.description ?? "No description available").substring(0, 40)}
            </p>
            <div className="mt-1 flex items-center justify-between font-semibold text-sm">
              <span>THB {product.price}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ReviewProduct;
