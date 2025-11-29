import { ProductCardProps } from "@/utils/types";
import Image from "next/image";

import Link from "next/link";

const ProductCard = ({ product }: { product: ProductCardProps }) => {
  const { title, image, id,description,price,
      } = product;
  return (
    <article className="group relative">
      <Link href={`/product/${id}`}>
      
      <div className="relative h-[300px] rounded-md mb-2">
        <Image
          src={image}
          sizes="(max-width:768px) 100vw, 50vw"
          alt={title}
          fill
          className="object-cover rounded-md 
          group-hover:scale-105 transition-transform
           duration-300"
        />
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold mt-1">{title.substring(0,30)}</h3>
      </div>

      <p className="text-sm mt-1 text-muted-foreground">
        {(description ?? "No description available").substring(0, 40)}
      </p>

      <div className="mt-1 flex items-center justify-between 
      font-semibold text-sm">
          <span>THB {price}</span>
       
      </div>
      </Link>

      {/* <div className="absolute top-5 right-5">
        <FavoriteToggleButton landmarkId={id}/>
      </div> */}
    </article>
  );
};
export default ProductCard;