import React, { useState } from 'react';
import CartItem from './CartItem';
import './Cart.css'
import OrderSummary from './OrderSummary';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Gradient Graphic T-shirt', size: 'Large', color: 'White', price: 145, quantity: 1, image: 'tshirt-image-url' },
    { id: 2, name: 'Checkered Shirt', size: 'Medium', color: 'Red', price: 180, quantity: 1, image: 'shirt-image-url' },
    { id: 3, name: 'Skinny Fit Jeans', size: 'Large', color: 'Blue', price: 240, quantity: 1, image: 'jeans-image-url' },
  ]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = (subtotal * 20) / 100;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const handleIncrease = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleDecrease = (id) => {
    setItems(items.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="cart-container">
      <div className="casual-header">
        <h1>Cart</h1>
      </div>
      <div className="cart-items">
        {items.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => handleIncrease(item.id)}
            onDecrease={() => handleDecrease(item.id)}
            onRemove={() => handleRemove(item.id)}
          />
        ))}
      </div>
      <OrderSummary subtotal={subtotal} discount={discount} deliveryFee={deliveryFee} total={total} />
    </div>
  );
};

export default Cart;
