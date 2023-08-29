import React, { useState } from 'react';
import BurgerMenuIcon from '../AuthNav/burgerMenuIcon';
import BurgerMenuCloseIcon from '../AuthNav/burgerMenuCloseIcon';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { BurgerMenuButton } from './BurgerMenu.styled';
import { ExpandedMenuWrapper, StyledLink } from './BurgerMenu.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <BurgerMenuButton onClick={toggleMenu}>
        {menuOpen ? <BurgerMenuCloseIcon /> : <BurgerMenuIcon />}
      </BurgerMenuButton>
      {menuOpen ? <ExpandedMenu /> : null}
    </>
  );
}

function ExpandedMenu() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <ExpandedMenuWrapper>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}

        <StyledLink to="/news">News</StyledLink>
        <StyledLink to="/notices/sell">Find Pet</StyledLink>
        <StyledLink to="/friends">Our friends</StyledLink>
      </ExpandedMenuWrapper>
    </>
  );
}

export default BurgerMenu;
