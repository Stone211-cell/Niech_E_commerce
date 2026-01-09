// @ts-ignore
import { fetchProductDetail } from "@/app/action/authAdmin";
import Breadcrums from "@/components/ProductComponents/Breadcrums";
import ImageContainer from "@/components/ProductComponents/ImageContainer";
import { ParamsPromise } from "@/utils/types";
import { redirect } from "next/navigation";

const ProductDetail = async (
  { params }:ParamsPromise 
 // inline type แทน interface
) => {
   const { id } = await  params; // ❌ ไม่ต้อง await
  const data = await fetchProductDetail({ id });

  if (!data?.product) redirect("/");

  const { product } = data

  return (
    <section>
      <Breadcrums name={product.title} />
      <header className="flex justify-between mt-4 items-center">
        <h1 className="text-4xl font-bold">{product.title}</h1>
      </header>
      <ImageContainer mainImage={product.image} name={product.title} />
      <section className="mt-4">
        <p className="text-muted-foreground font-light leading-loose">
          {product.description}
        </p>
      </section>
    </section>
  );
};

export default ProductDetail;
