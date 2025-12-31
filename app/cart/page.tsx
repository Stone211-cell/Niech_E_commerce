import ProductList from "@/components/ProductComponents/ProductList"
import { fetchCart } from "../action/favoriteproduct"
import EmptyList from "@/components/Home/Emtpy"
import Image from "next/image";
// rafce
const cartpage = async() => {
  const favorites = await fetchCart()
  if(favorites.length === 0){
    return <EmptyList 
    heading="No items Favorits"
    />
  }
  return     (
<div className="grid grid-cols-1 gap-4 p-6">
      {favorites.map(item => (
        <div
          key={item.id}
          className="flex gap-4 border p-4 rounded-lg"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={120}
            height={120}
            className="rounded-md object-cover"
          />

          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">
              {item.description}
            </p>
            <p className="mt-1 font-bold">THB {item.price}</p>

            <span className="text-xs text-gray-500">
              ประเภทสินค้า: {item.productType}
            </span>
          </div>
        </div>
      ))}
    </div> 
  )

}
export default cartpage



