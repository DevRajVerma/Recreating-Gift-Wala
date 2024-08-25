import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = () => {
  const casualItems = [
    { id: 1, name: 'Gradient Graphic T-shirt', price: '$145', rating: 3.5, image: 'path/to/image1.jpg' },
    { id: 2, name: 'Polo with Tipping Details', price: '$180', rating: 4.5, image: 'path/to/image2.jpg' },
    { id: 3, name: 'Black Striped T-shirt', price: '$120', oldPrice: '$150', discount: '30%', rating: 5.0, image: 'path/to/image3.jpg' },
    // More items...
  ];

  return (
    <div className="product-grid">
      {casualItems.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductGrid;
