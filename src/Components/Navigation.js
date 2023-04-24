import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'


function Navigation() {

  return (
    <>
      <nav className='nav-container'>
        
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>

          <ul>

            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/products">Products</Link> </li>

            <li>
              <Link to="/cart">
                <div className='right-cartIcon'>
                  <span>10</span>
                  <img src="/images/cart.png" alt="cart-icon" />
                </div>
              </Link>
            </li>

          </ul>
  
      </nav>
      </>
  )
}

export default Navigation

