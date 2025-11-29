import { fetchProduct } from "@/app/product/action/productaction";
import ProductList from "./ProductList";



const ProductContainer = async ({
//   search,
//   category
// }: {
//   search?: string;
//   category?: string;
}) => {
//   const product: ProductCardProps[] = await fetchProduct({ search,category });
  const product = await fetchProduct();



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

      <ProductList products={product} />
      </div> 
  );
};
export default ProductContainer;