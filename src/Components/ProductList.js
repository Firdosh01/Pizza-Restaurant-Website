import React, { useEffect, useState } from 'react'
import './ProductList.css'
import Product from './Product'
// import FoodData from './FoodData'



function ProductList() {

  // let ProductData = FoodData;
  // console.log(ProductData)

  // const [products, setProducts] = useState ( [] )

  // useEffect( () => {
  //   console.log("Runing !")
  //   fetch('/api/products')
  //   .then(response => response.json())
  //   .then(products => {
      
  //     setProducts(products)
  //     console.log(products)
   
  //   })
    
  // }, [])

  

  return (
    <div className='product-container'>
      <h1>Products</h1>

      <div className='ProductList-container flex shopping-card '>

        <Product  />
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      
      </div>
    </div>
  )
}

export default ProductList
