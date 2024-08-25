// src/SuggestedProducts.js
import React from 'react';
import './SuggestedProducts.css';
// import product1 from '../SuggestedProducts/product1.png';
// import product2 from '../SuggestedProducts/product2.png';
// import product3 from '../SuggestedProducts/product3.png';

const SuggestedProducts = () => {
  const suggestedProducts = [
    {
      id: 1,
      name: 'Graphic Hoodie',
      price: '$120',
      // image: product1,
    },
    {
      id: 2,
      name: 'Slim Fit Jeans',
      price: '$80',
      // image: product2,
    },
    {
      id: 3,
      name: 'Casual Sneakers',
      price: '$95',
      // image: product3,
    },
  ];

  return (
    <div className="suggested-products">
      <h2>You Might Also Like</h2>
      <div className="products-list">
        {suggestedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <span className="product-price">{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProducts;
