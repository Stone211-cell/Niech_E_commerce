// @ts-ignore

import { fetchProductDetail } from "@/app/action/authAdmin";
import Breadcrums from "@/components/ProductComponents/Breadcrums";
import ProductGallery from "@/components/ProductComponents/ProductGallery";
import AddToCartButton from "@/components/ProductComponents/AddToCartButton";
import FavoriteToggleButton from "@/components/Card/FavoriteToggleButton";
import { ParamsPromise } from "@/utils/types";
import { redirect } from "next/navigation";
import Link from "next/link";

const ProductDetail = async ({ params }: ParamsPromise) => {
  const { id } = await params;
  const data = await fetchProductDetail({ id });

  if (!data?.product) redirect("/");

  const { product, type } = data;
  const productType = type as "A" | "B";
  const allImages =
    (product as any).images?.length > 0
      ? (product as any).images
      : [product.image];

  return (
    <section className="min-h-screen pb-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <Breadcrums name={product.title} />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left — Image Gallery */}
          <div>
            <ProductGallery images={allImages} title={product.title} />
          </div>

          {/* Right — Product Info */}
          <div className="flex flex-col gap-6">
            {/* Category badge */}
            <span className="inline-block w-fit px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full uppercase tracking-wider">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              {product.title}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                ฿{product.price.toLocaleString()}
              </span>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Description */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                รายละเอียด
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                {product.description || "ไม่มีรายละเอียดสินค้า"}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Favorite */}
            <div className="flex items-center gap-3">
              <FavoriteToggleButton productId={id} />
              <span className="text-sm text-gray-500">บันทึกสินค้านี้</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mt-2">
              <AddToCartButton productId={id} productType={productType} />
              <Link
                href="/cart"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
              >
                💳 ชำระเงินเลย
              </Link>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-lg">🚚</span>
                <span className="text-[11px] text-gray-400 text-center">จัดส่งฟรี</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-lg">🔒</span>
                <span className="text-[11px] text-gray-400 text-center">ชำระเงินปลอดภัย</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-lg">↩️</span>
                <span className="text-[11px] text-gray-400 text-center">คืนสินค้าได้</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
