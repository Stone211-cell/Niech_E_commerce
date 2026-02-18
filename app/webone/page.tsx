import ProductContainer from "@/components/ProductComponents/ProductContainer"
import { fetchAllProductA } from "./action/productaction";
import Link from "next/link";
import Background3D from "@/components/Animation/Background3D";

const pagewebone = async () => {
  const product = await fetchAllProductA();
  return (
    <div className="relative min-h-screen">
      <Background3D />

      {/* ===== HERO BANNER ===== */}
      <section className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-purple-900/40 via-black to-blue-900/20 p-12 md:p-20">
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
            {/* Glow */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-600/20 blur-[100px] top-0 right-0 pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-4">✦ NIECH Store One ✦</p>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                ร้านค้า
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> เว็บ 1</span>
              </h1>
              <p className="text-gray-400 text-lg mt-6 max-w-lg">
                สินค้าคุณภาพ คัดสรรมาเพื่อคุณ ค้นหาสิ่งที่ใช่ในราคาที่คุ้มค่า
              </p>
              <div className="flex gap-4 mt-8">
                <Link
                  href="/webone/admin/create"
                  className="px-8 py-4 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  + เพิ่มสินค้าใหม่
                </Link>
                <Link
                  href="/cart"
                  className="px-8 py-4 border border-white/20 text-white font-bold rounded-full text-sm hover:bg-white/10 transition-colors"
                >
                  🛒 ตะกร้า
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FILTER BAR ===== */}
      <section className="relative z-10 px-6 mb-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">แสดง</span>
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm font-bold">
              {product.length} สินค้า
            </span>
          </div>
          <div className="flex gap-2">
            {["ทั้งหมด", "ยอดนิยม", "ใหม่ล่าสุด"].map((label) => (
              <button
                key={label}
                className="px-5 py-2 rounded-full border border-white/10 text-gray-400 text-sm hover:bg-white/10 hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCT GRID ===== */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <ProductContainer props={product} productA="block" />
        </div>
      </section>
    </div>
  )
}
export default pagewebone