import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #000;
  color: #fff;
`;

const BrandLogo = styled.img`
  height: 40px;
  margin: 0 1rem;
`;

const Footer = () => (
  <FooterContainer>
    <BrandLogo src="./Brands/Versace.png" alt="Versace" />
    <BrandLogo src="./Brands/Zara.png" alt="Zara" />
    <BrandLogo src="./Brands/Gucci.png" alt="Gucci" />
    <BrandLogo src="./Brands/Prada.png" alt="Prada" />
    <BrandLogo src="./Brands/Calvin.png" alt="Calvin Klein" />
  </FooterContainer>
);

export default Footer;
