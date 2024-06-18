import React from 'react';
import styled from 'styled-components';
import './Brands.css'; // Import external CSS file

const FooterContainer = styled.footer`
  /* Any additional styles using styled-components can go here */
`;

const BrandLogo = styled.img`
  /* Any additional styles for BrandLogo using styled-components */
`;

const Footer = () => (
  <FooterContainer className="footer-container">
    <BrandLogo src="./Brands/Versace.png" alt="Versace" className="footer-logo" />
    <BrandLogo src="./Brands/Zara.png" alt="Zara" className="footer-logo" />
    <BrandLogo src="./Brands/Gucci.png" alt="Gucci" className="footer-logo" />
    <BrandLogo src="./Brands/Prada.png" alt="Prada" className="footer-logo" />
    <BrandLogo src="./Brands/Calvin.png" alt="Calvin Klein" className="footer-logo" />
  </FooterContainer>
);

export default Footer;
