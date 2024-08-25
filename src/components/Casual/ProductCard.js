import React from 'react';
import './ProductCard.css';

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} className="product-image" />
      <h3 className="product-name">{item.name}</h3>
      <div className="product-rating">
        {'★'.repeat(Math.floor(item.rating))}
        {'☆'.repeat(5 - Math.floor(item.rating))}
        <span>{item.rating}/5</span>
      </div>
      <p className="product-price">
        {item.discount && <span className="old-price">{item.oldPrice}</span>}
        {item.price}
        {item.discount && <span className="discount"> -{item.discount}</span>}
      </p>
    </div>
  );
};

export default ProductCard;
