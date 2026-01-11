

import { ProductCardProps } from "@/utils/types";
import Image from "next/image";

import Link from "next/link";
import FavoriteToggleButton from "./FavoriteToggleButton";
import { Button } from "../ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { DeleteProductActionB } from "@/app/webtwo/action/createproductAction";
import FormContainer from "../Form/FormContainer";
import SubmitBtn from "../Form/SubmitBtn";



const ProductCard = async ({ product, productA = "hidden", productB = "hidden" }: { product: ProductCardProps, productA?: string, productB?: string }) => {
  const { title, image, id, description, price,
  } = product;

  const user = await currentUser();
  const isAdmin = user?.privateMetadata?.IsAdmin === true;
  return (
    <article className="group relative mt-20">
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
          <h3 className="text-sm font-semibold mt-1">{title.substring(0, 30)}</h3>
        </div>

        <p className="text-sm mt-1 text-muted-foreground">
          {(description ?? "No description available").substring(0, 40)}
        </p>

        <div className="mt-1 flex items-center justify-between 
      font-semibold text-sm">
          <span>THB sdsda{price}</span>

        </div>

      </Link>

      <div className="absolute top-5 right-5">

        <FavoriteToggleButton productId={id} />
      </div>
      <div className="absolute bottom-3 right-5">


        {isAdmin &&
          <div>
            {/* for product A */}
            <div>



              <Link href={`/webone/admin/edit/${id}`}>
                <Button variant="outline" className={productA}>EditA</Button>

              </Link>
            </div>



            {/* for product B */}
            <div className="flex gap-4 ">


              <Link href={`/webtwo/admin/edit/${id}`}>
                <Button variant="outline" className={productB}>EditB</Button>

              </Link>





              <FormContainer action={DeleteProductActionB}>
                <input type="hidden" name="id" value={id} />
                <SubmitBtn text="ลบ" size="lg" className="bg-red-600 text-white" />
              </FormContainer>

            </div>
          </div>
        }
      </div>
    </article>

  );
};
export default ProductCard;


{/* <Button onClick={DeleteProductActionB(id)}>ลบ</Button>; */ }