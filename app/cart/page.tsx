import { ProductCardProps } from "@/utils/types"
import { fetchCart } from "../action/favoriteproduct"
import EmptyList from "@/components/Home/Emtpy"
import Image from "next/image"
import Link from "next/link"
import { currentUser } from "@clerk/nextjs/server"
import AuthGuardToast from "@/components/Auth/AuthGuardToast"

const cartpage = async () => {
  const user = await currentUser();
  if (!user) {
    return (
      <>
        <EmptyList heading="กรุณาเข้าสู่ระบบ" />
        <AuthGuardToast message="กรุณาเข้าสู่ระบบก่อนใช้งานตะกร้า" />
      </>
    );
  }

  let favorites: ProductCardProps[] = []
  try {
    favorites = await fetchCart()
  } catch (error) {
    // favorites empty if error
  }

  if (favorites.length === 0) {
    return <EmptyList heading="ไม่มีสินค้าในตะกร้า" />
  }

  // คำนวณยอดรวม
  const total = favorites.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-black text-white mb-2">ตะกร้าสินค้า</h1>
        <p className="text-gray-500 mb-10">{favorites.length} รายการ</p>

        {/* รายการสินค้า */}
        <div className="space-y-4 mb-8">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 rounded-2xl border border-white/10 bg-gray-900/80"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={120}
                height={120}
                className="rounded-xl object-cover w-24 h-24"
              />
              <div className="flex-1">
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  {item.description}
                </p>
                <span className="text-xs text-gray-600 mt-1 block">
                  ประเภท: {item.productType === "A" ? "เว็บ 1" : "เว็บ 2"}
                </span>
              </div>
              <div className="flex items-center">
                <p className="text-white font-bold text-lg">฿{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* สรุปยอด */}
        <div className="p-6 rounded-2xl border border-white/10 bg-gray-900/80 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">ยอดรวม</span>
            <span className="text-white font-black text-2xl">฿{total}</span>
          </div>
        </div>

        {/* ปุ่มไป Checkout */}
        <Link
          href="/checkout"
          className="block w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg text-center hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
        >
          💳 ดำเนินการชำระเงิน
        </Link>
      </div>
    </div>
  )
}
export default cartpage
