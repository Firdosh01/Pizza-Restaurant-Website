import React, { useState } from 'react'
import './ProductList.css'
import Product from './Product'



function ProductList() {


  return (
    <div className='product-container'>
      <h1>Products</h1>

      <div className='ProductList-container'>

        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      
      </div>
    </div>
  )
}

export default ProductList
