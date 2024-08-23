// src/ProductDetail.js
import React, { useState } from 'react';
import './ProductDetail.css';
import Reviews from './Reviews';
import mainImage from '../ProductDetail/main.png';
import thumbnail1 from '../ProductDetail/1.png';
import thumbnail2 from '../ProductDetail/2.png';
import thumbnail3 from '../ProductDetail/3.png';

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('X-Large');
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  return (
    <div className="product-detail">
      <div className="images">
        <img src={mainImage} alt="Main" className="main-image" />
        <div className="thumbnails">
          <img src={thumbnail1} alt="Thumbnail 1" onClick={() => handleColorChange('green')} className={selectedColor === 'green' ? 'selected' : ''} />
          <img src={thumbnail2} alt="Thumbnail 2" onClick={() => handleColorChange('blue')} className={selectedColor === 'blue' ? 'selected' : ''} />
          <img src={thumbnail3} alt="Thumbnail 3" onClick={() => handleColorChange('black')} className={selectedColor === 'black' ? 'selected' : ''} />
        </div>
      </div>
      <div className="details">
        <h1 className="product-title">ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className="rating">⭐ 4.5/5</div>
        <div className="price">
          <span className="current-price">$260</span>
          <span className="original-price">$300</span>
          <span className="discount">-40%</span>
        </div>
        <p className="description">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
        </p>
        <div className="options">
          <div className="colors">
            <span>Select Colors:</span>
            <button onClick={() => handleColorChange('green')} className={selectedColor === 'green' ? 'selected' : ''}>Green</button>
            <button onClick={() => handleColorChange('blue')} className={selectedColor === 'blue' ? 'selected' : ''}>Blue</button>
            <button onClick={() => handleColorChange('black')} className={selectedColor === 'black' ? 'selected' : ''}>Black</button>
          </div>
          <div className="sizes">
            <span>Choose Size:</span>
            <button onClick={() => handleSizeChange('Small')} className={selectedSize === 'Small' ? 'selected' : ''}>Small</button>
            <button onClick={() => handleSizeChange('Medium')} className={selectedSize === 'Medium' ? 'selected' : ''}>Medium</button>
            <button onClick={() => handleSizeChange('Large')} className={selectedSize === 'Large' ? 'selected' : ''}>Large</button>
            <button onClick={() => handleSizeChange('X-Large')} className={selectedSize === 'X-Large' ? 'selected' : ''}>X-Large</button>
          </div>
          <div className="quantity">
            <span>Quantity:</span>
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>

      <Reviews />
    </div>
  );
};

export default ProductDetail;
