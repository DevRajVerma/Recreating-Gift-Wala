import React from 'react'
import './CartItem.css'

const CartItem = ({ item, onIncrease, onDecrease, onRemove}) => {
  return (
    <div className="cart-item">
        <img src="{item.image}" alt="{item.name}" className='item-image' />
        <div className='item-details'>
            <h4>{item.name}</h4>
            <p>Size: {item.size}</p>
            <p>Color: {item.color}</p>
            <p className='item-price'>${item.price}</p>

        </div>

        <div className='item-actions'>
            <button onClick={onDecrease}>-</button>
            <span>{item.quantity}</span>
            <button onClick={onIncrease}>+</button>
            <button onClick={onRemove} className='remove-btn'>🗑️</button>
        </div>
      
    </div>
  )
}

export default CartItem
