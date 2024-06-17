import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 0.5rem;
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  border: none;
  background: transparent;
  outline: none;
  flex-grow: 1;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Header = () => (
  <HeaderContainer>
    <Logo>SHOP.CO</Logo>
    <NavLinks>
      <NavLink href="#">Shop</NavLink>
      <NavLink href="#">On Sale</NavLink>
      <NavLink href="#">New Arrivals</NavLink>
      <NavLink href="#">Brands</NavLink>
    </NavLinks>
    <SearchBarContainer>
      <SearchBar type="text" placeholder="Search for products..." />
    </SearchBarContainer>
    <IconContainer>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      <FontAwesomeIcon icon={faUser} size="lg" />
    </IconContainer>
  </HeaderContainer>
);

export default Header;
