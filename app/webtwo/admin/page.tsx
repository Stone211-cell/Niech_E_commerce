import React from 'react'
import { fetchAllProductB } from '../action/productaction'
import ProductContainer from '@/components/ProductComponents/ProductContainer'

const page = async() => {
    const product = await fetchAllProductB()
  return (
    <div>
      <h1 className='flex justify-center text-3xl items-center mt-5'>หน้าสำหรับ ADMIN</h1>
    <ProductContainer props={product} productB="block"/>
        
    </div>
  )
}

export default page