import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const SectionContainer = styled.section`
  padding: 2rem 0;
  text-align: center;
  background-color: #f8f8f8;
  margin: 2rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
`;

const ProductGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const ViewAllButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #444;
  }
`;

const ProductSection = ({ title, products }) => (
  <SectionContainer>
    <SectionTitle>{title}</SectionTitle>
    <ProductGrid>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ProductGrid>
    <ViewAllButton>View All</ViewAllButton>
  </SectionContainer>
);

export default ProductSection;
