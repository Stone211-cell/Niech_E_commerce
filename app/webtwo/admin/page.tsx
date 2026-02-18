import React from 'react'
import { fetchAllProductB } from '../action/productaction'
import ProductContainer from '@/components/ProductComponents/ProductContainer'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const page = async () => {
  const user = await currentUser()
  if (!user?.privateMetadata?.IsAdmin) redirect('/')

  const product = await fetchAllProductB()
  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-black text-white">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">จัดการสินค้าเว็บ 2</p>
          </div>
          <Link
            href="/webtwo/admin/create"
            className="px-6 py-3 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-200 transition-colors"
          >
            + เพิ่มสินค้าใหม่
          </Link>
        </div>

        {/* Product List */}
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <ProductContainer props={product} productB="block" />
        </div>
      </div>
    </div>
  )
}

export default page