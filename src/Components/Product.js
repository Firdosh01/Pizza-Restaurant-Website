import React from 'react'
import FoodData from './FoodData'
import { Link } from 'react-router-dom';


function Product() {

    let ProductData = FoodData;

    return (

        <div className='flex'>
            {
                ProductData.map((productItem, productIndex) => {
                    return (

                            <div style={{ width: '33%' }} >
                                <div className='product-item'>
                                    <img src={productItem.url} width="100%" />
                                    <p>{productItem.name} | {productItem.category} </p>
                                    <p> {productItem.seller} </p>
                                    <p> Rs. {productItem.price} /-</p>
                                    <button className='btn'

                                    >Add To Cart</button>
                                </div>
                            </div>
                    )
                })

            }
        </div>

    )
}

export default Product
