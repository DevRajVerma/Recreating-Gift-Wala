import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import MainCover from './components/MainCover';
import ProductSection from './components/ProductSection';
import Brands from './components/Brands';
import Browse from './components/Browse';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

// Sample data for products
const newArrivals = [
  { id: 1, name: 'T-shirt with Tape Details', price: 120, rating: 4.5, image: './NewArrivals/32.png' },
  { id: 2, name: 'Skinny Fit Jeans', price: 240, oldPrice: 260, rating: 3.5, image: './NewArrivals/33.png' },
  { id: 3, name: 'Checkered Shirt', price: 180, rating: 4.5, image: './NewArrivals/34.png' },
  { id: 4, name: 'Sleeve Striped T-shirt', price: 130, oldPrice: 160, rating: 4.5, image: './NewArrivals/38.png' },
];

const topSelling = [
  { id: 5, name: 'Vertical Striped Shirt', price: 212, oldPrice: 232, rating: 5.0, image: './TopSelling/32.png' },
  { id: 6, name: 'Courage Graphic T-shirt', price: 145, rating: 4.0, image: './TopSelling/33.png' },
  { id: 7, name: 'Loose Fit Bermuda Shorts', price: 80, rating: 3.0, image: './TopSelling/34.png' },
  { id: 8, name: 'Faded Skinny Jeans', price: 210, rating: 4.5, image: './TopSelling/38.png' },
];

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const App = () => (
  <AppContainer>
    <Header />
    <MainCover />
    <Brands />
    <ProductSection title="New Arrivals" products={newArrivals} />
    <ProductSection title="Top Selling" products={topSelling} />
    <Browse />
    <Testimonials />
    <Footer />
  </AppContainer>
);

export default App;
