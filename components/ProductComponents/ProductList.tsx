import { ProductCardProps } from "@/utils/types";
import ProductCard from "../Card/Productcard";

export const ProductList = ({ products,productA,productB }: { products: ProductCardProps[], productA?: string, productB?: string }) => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6 px-10">
      {products.map((item) => {
        return <ProductCard key={item.id} product={item} productA={productA}
        productB={productB}/>;
      })}
    </section>
  );
};
export default ProductList;