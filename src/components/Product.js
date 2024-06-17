import React from 'react';
import styled from 'styled-components';

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 220px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const ProductOldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  margin-left: 0.5rem;
`;

const ProductRating = styled.div`
  margin: 0.5rem 0;
`;

const Product = ({ product }) => (
  <ProductCard>
    <ProductImage src={product.image} alt={product.name} />
    <ProductName>{product.name}</ProductName>
    <ProductPrice>
      ${product.price} 
      {product.oldPrice && <ProductOldPrice>${product.oldPrice}</ProductOldPrice>}
    </ProductPrice>
    <ProductRating>
      {Array.from({ length: Math.floor(product.rating) }).map((_, index) => (
        <span key={index}>&#9733;</span>
      ))}
      {product.rating % 1 !== 0 && <span>&#9734;</span>}
      ({product.rating})
    </ProductRating>
  </ProductCard>
);

export default Product;
