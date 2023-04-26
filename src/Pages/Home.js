import React from 'react'
import './Home.css'
import ProductList from '../Components/ProductList'


function Home() {
  return (
    <>
    <div className='hero-section'>
        <div className='hero-container'>

            <div className='hero-left-content'>
                <h6><em>Festival is coming, Do Shopping !</em></h6>
                <h1>Don't wait !</h1>
                <button>Order Now</button>
            </div>

            <div className='hero-right-img'>

            <img src="/images/Shopping.png" alt="Shopping-img" />            
            </div>

        </div>
    </div>

    <div>

      <ProductList />

    </div>


    </>
  )
}

export default Home
