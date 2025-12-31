import ProductContainer from "@/components/ProductComponents/ProductContainer"
import { fetchAllProductB } from "./action/productaction";

const pagewebtwo = async() => {
const product = await fetchAllProductB();
  return (
    <div>
        
        <ProductContainer props={product}/>
    </div>
  )
}
export default pagewebtwo;