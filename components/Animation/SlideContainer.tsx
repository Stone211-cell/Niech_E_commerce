import { fetchPreviewProductB } from "@/app/webtwo/action/productaction";
import { ProductCardProps } from "@/utils/types";
import ThreeDSlider from "./ThreeDSlider";

const SlideContainer = async () => {
  const products: ProductCardProps[] = await fetchPreviewProductB();

  return (
    <section className="w-full py-10 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          Featured Collection
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our latest arrivals with an immersive view.
        </p>
      </div>
      {/* 
      <ThreeDSlider products={products} /> */}
    </section>
  );
};

export default SlideContainer;




