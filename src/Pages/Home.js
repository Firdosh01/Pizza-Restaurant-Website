import React from 'react'
import './Home.css'


function Home() {
  return (
    <div className='hero-section'>
        <div className='hero-container'>

            <div className='hero-left-content'>
                <h6><em>Are you hungry</em></h6>
                <h1>Don't wait !</h1>
                <button>Order Now</button>
            </div>

            <div className='hero-right-img'>

            <img src="/images/pizza.png" alt="pizza-img" />
            
            </div>


        </div>
    </div>
  )
}

export default Home
