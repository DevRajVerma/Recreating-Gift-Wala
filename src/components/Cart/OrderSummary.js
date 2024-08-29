import React from 'react'
import './OrderSummary.css'

const OrderSummary = ({ subtotal, discount, deliveryFee, total}) => {
  return (
    <div className='order-summary'>
        <h3>Order Summary</h3>
        <p>Subtotal: <span>${subtotal}</span></p>
        <p>Discount (-20%): <span>-${discount}</span></p>
        <p>Delivery Fee: <span>${deliveryFee}</span></p>
        <hr />
        <h4>Total: <span>${total}</span></h4>
        <div className='promo-section'>
            <input type="text" placeholder='Add promo code' />
            <button>Apply</button>

        </div>
        <button className='checkout-btn'>Go to Checkout →</button>
      
    </div>
  )
}

export default OrderSummary
