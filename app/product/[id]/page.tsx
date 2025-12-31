
// import FavoriteToggleButton from "@/components/Card/FavoriteToggleButton";
import { fetchProductDetail } from "@/app/action/authAdmin";
import Breadcrums from "@/components/ProductComponents/Breadcrums";
import ImageContainer from "@/components/ProductComponents/ImageContainer";
import { redirect } from "next/navigation";

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const {id} = await params
  const  data  = await fetchProductDetail({id});
  const {product,type}:any = data
  if (!product) redirect("/");
  

  if (type === "A") {
    return (
    
    <section>
      <Breadcrums name={product.title} />
      <header className="flex justify-between mt-4 items-center">
        <h1 className="text-4xl font-bold"> {product.title}</h1>
        <div className="flex items-center gap-x-4">
          {/* <ShareButton landmarkId={product.id} name={product.name}/> */}
          {/* <FavoriteToggleButton landmarkId={product.id} /> */}
        </div>
      </header>
      {/* Image */}
      <ImageContainer mainImage={product.image} name={product.title} />
      {/* Detail */}
      <section>
        <div className="mt-4">
          <p className="text-muted-foreground font-light leading-loose">
            {product.description}
          </p>
        </div>
      </section>
    </section>
  );
  }

  if (type === "B") {
    return (
    
    <section>
      <Breadcrums name={product.title} />
      <header className="flex justify-between mt-4 items-center">
        <h1 className="text-4xl font-bold"> {product.title}</h1>
        <div className="flex items-center gap-x-4">
          {/* <ShareButton landmarkId={product.id} name={product.name}/> */}
          {/* <FavoriteToggleButton landmarkId={product.id} /> */}
        </div>
      </header>
      {/* Image */}
      <ImageContainer mainImage={product.image} name={product.title} />
      {/* Detail */}
      <section>
        <div className="mt-4">
          <p className="text-muted-foreground font-light leading-loose">
            {product.description}
          </p>
        </div>
      </section>
    </section>
  );
  }
  
};
export default ProductDetail;
