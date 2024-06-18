import React from 'react';
import styled from 'styled-components';
import coverImage from '../assets/cover-image.png';
import './MainCover.css';


// Styled components
const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  background: url(${coverImage}) no-repeat center center;
  background-size: cover;
  color: #fff;
  height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    height: 80vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ShopButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Stat = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const StatNumber = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

// MainCover component
const MainCover = () => (
  <CoverContainer>
    <Overlay />
    <Content>
      <Title>FIND CLOTHES THAT MATCH YOUR STYLE</Title>
      <Subtitle>
        Browse through our diverse range of meticulously crafted garments, designed
        to bring out your individuality and cater to your sense of style.
      </Subtitle>
      <ShopButton>Shop Now</ShopButton>
      <StatsContainer>
        <Stat>
          <StatNumber>200+</StatNumber>
          International Brands
        </Stat>
        <Stat>
          <StatNumber>2,000+</StatNumber>
          High-Quality Products
        </Stat>
        <Stat>
          <StatNumber>30,000+</StatNumber>
          Happy Customers
        </Stat>
      </StatsContainer>
    </Content>
  </CoverContainer>
);

export default MainCover;
