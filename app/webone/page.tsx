import ProductContainer from "@/components/ProductComponents/ProductContainer"
import { fetchAllProductA } from "./action/productaction";



const pagewebone = async() => {
const product = await fetchAllProductA();
  return (
    <div>
             <h1 className='flex justify-center text-3xl mt-5'>หน้าสำหรับ ADMIN</h1>
        <ProductContainer props={product}  />
    </div>
  )
}
export default pagewebone