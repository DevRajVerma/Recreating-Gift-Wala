import React from 'react';
import styled from 'styled-components';
import coverImage from '../assets/cover-image.png';

const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
  background: url(${coverImage}) no-repeat center center;
  background-size: cover;
  color: #fff;
  height: 100vh;
  position: relative;
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
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const ShopButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  width: 100%;
`;

const Stat = styled.div`
  font-size: 1rem;
  text-align: center;
`;

const StatNumber = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const MainCover = () => (
  <CoverContainer>
    <Overlay />
    <Content>
      <Title>FIND CLOTHES THAT MATCHES YOUR STYLE</Title>
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
