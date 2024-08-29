import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// Styled components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    position: absolute;
    top: 60px; /* Adjust as needed */
    left: 0;
    background-color: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 1rem;
    z-index: 1000;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

// Header component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      
      <Link to="/">
      <Logo>SHOP.CO</Logo>
      </Link>
      
      <NavLinks isOpen={isOpen}>
        <NavLink href="#">Shop</NavLink>
        <NavLink href="#">On Sale</NavLink>
        <NavLink href="#">New Arrivals</NavLink>
        <NavLink href="#">Brands</NavLink>
      </NavLinks>
      <MenuIcon onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </MenuIcon>
      <div>

        <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" style={{ marginRight: '1rem' }} />
        </Link>
        
        
        <FontAwesomeIcon icon={faUser} size="lg" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
