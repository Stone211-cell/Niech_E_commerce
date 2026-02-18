
import { ProductCardProps } from "@/utils/types";
import ProductCard from "../Card/Productcard";

export const ProductList = ({ products, productA, productB }: { products: ProductCardProps[], productA?: string, productB?: string }) => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-6 px-10">
      {products.map((item) => {
        return <ProductCard key={item.id} product={item} productA={productA}
          productB={productB} />;
      })}
    </section>
  );
};
export default ProductList;