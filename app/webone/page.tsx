import ProductContainer from "@/components/ProductComponents/ProductContainer"
import { fetchProduct } from "./action/productaction";


const pagewebone = async() => {
const product = await fetchProduct();
  return (
    <div>
        
        <ProductContainer props={product}/>
    </div>
  )
}
export default pagewebone