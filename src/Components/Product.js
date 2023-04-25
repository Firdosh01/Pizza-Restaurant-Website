import React from 'react'

function Product() {
    return (
        <div className='productList'>
            <img src="/images/peproni.png" alt="" />
            <h2>Havbana Special</h2>
            <p>Small</p>

            <div className='rupeesText'>
                <span>₹ 500</span>
                <button>
                    ADD
                </button>
            </div>
        </div>
    )
}

export default Product
