import { fetchCart } from "@/app/action/favoriteproduct"
import EmptyList from "@/components/Home/Emtpy"
import Image from "next/image"
import CheckoutButton from "@/components/Checkout/CheckoutButton"
import Link from "next/link"

const CheckoutPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ status?: string }>
}) => {
    const params = await searchParams
    const status = params?.status

    // ถ้า payment สำเร็จ
    if (status === "success") {
        return (
            <div className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center max-w-md">
                    <span className="text-7xl block mb-6">✅</span>
                    <h1 className="text-4xl font-black text-white mb-4">ชำระเงินสำเร็จ!</h1>
                    <p className="text-gray-500 mb-8">ขอบคุณที่ซื้อสินค้ากับ Niech Shop</p>
                    <Link
                        href="/"
                        className="px-8 py-4 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                        กลับหน้าแรก
                    </Link>
                </div>
            </div>
        )
    }

    // ถ้า payment ถูกยกเลิก
    if (status === "cancel") {
        return (
            <div className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center max-w-md">
                    <span className="text-7xl block mb-6">❌</span>
                    <h1 className="text-4xl font-black text-white mb-4">ยกเลิกการชำระเงิน</h1>
                    <p className="text-gray-500 mb-8">คุณสามารถกลับมาชำระเงินได้อีกครั้ง</p>
                    <Link
                        href="/checkout"
                        className="px-8 py-4 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                        ลองอีกครั้ง
                    </Link>
                </div>
            </div>
        )
    }

    // ดึงสินค้าจากตะกร้า
    const cart = await fetchCart()

    if (cart.length === 0) {
        return <EmptyList heading="ไม่มีสินค้าในตะกร้า" />
    }

    // คำนวณยอดรวม
    const total = cart.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className="min-h-screen py-10 px-6">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-black text-white mb-2">สรุปคำสั่งซื้อ</h1>
                <p className="text-gray-500 mb-10">ตรวจสอบรายการก่อนชำระเงิน</p>

                {/* รายการสินค้า */}
                <div className="space-y-4 mb-8">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-4 p-4 rounded-2xl border border-white/10 bg-gray-900/80"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={100}
                                height={100}
                                className="rounded-xl object-cover w-24 h-24"
                            />
                            <div className="flex-1">
                                <h3 className="text-white font-bold">{item.title}</h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    {(item.description || "").substring(0, 60)}...
                                </p>
                                <p className="text-xs text-gray-600 mt-1">
                                    ประเภท: {item.productType === "A" ? "เว็บ 1" : "เว็บ 2"}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-white font-bold text-lg">฿{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* สรุปยอด */}
                <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-900/20 via-gray-900 to-pink-900/20 mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-400">สินค้า {cart.length} รายการ</span>
                        <span className="text-white">฿{total}</span>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-400">ค่าจัดส่ง</span>
                        <span className="text-green-400">ฟรี</span>
                    </div>
                    <hr className="border-white/10 my-4" />
                    <div className="flex justify-between items-center">
                        <span className="text-white font-bold text-xl">ยอดรวม</span>
                        <span className="text-white font-black text-2xl">฿{total}</span>
                    </div>
                </div>

                {/* ปุ่มชำระเงิน */}
                <CheckoutButton />

                <p className="text-gray-600 text-xs text-center mt-4">
                    ชำระเงินผ่าน Stripe อย่างปลอดภัย 🔒
                </p>
            </div>
        </div>
    )
}
export default CheckoutPage
