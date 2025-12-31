
import ProductList from "./ProductList";
import { ProductCardProps } from "@/utils/types";



const ProductContainer = async ({
  props
//   search,
//   category
// }: {
//   search?: string;
//   category?: string;
}:any) => {
//   const product: ProductCardProps[] = await fetchProduct({ search,category });
  // const product = await fetchProduct();

  

  return (
    <div>
    { /*  {<Hero landmarks={landmarksHero} />
      <CategoriesList search={search} category={category}/> 
      {
        landmarks.length === 0
        ? <EmptyList heading="No results" btnText="Clear Filters"/>
        : <LandmarkList landmarks={landmarks} />
      }
      */}

      <ProductList products={props} />
      </div> 
  );
};
export default ProductContainer;