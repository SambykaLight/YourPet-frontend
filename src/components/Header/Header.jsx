import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from './logo';
import LoginIcon from './loginSvg';
import BurgerMenuIcon from './burgerMenuIcon';
import UserIcon from './userIcon';

import {
  HeaderContainer,
  LogoContainer,
  LinksContainer,
  StyledLink,
  AuthButtonsContainer,
  AuthButton,
  BurgerMenuButton,
  UserIconButton,
} from './Header.styled';

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <LogoIcon />
        </Link>
      </LogoContainer>
      <LinksContainer>
        <StyledLink to="/news">News</StyledLink>
        <StyledLink to="/notices/sell">Find Pet</StyledLink>
        <StyledLink to="/friends">Our friends</StyledLink>
      </LinksContainer>
      <AuthButtonsContainer>
        <AuthButton>
          Log In
          <LoginIcon />
        </AuthButton>
        <AuthButton>Registration</AuthButton>

        <UserIconButton>
          <UserIcon />
        </UserIconButton>

        <BurgerMenuButton>
          <BurgerMenuIcon />
        </BurgerMenuButton>
      </AuthButtonsContainer>
    </HeaderContainer>
  );
}
export default Header;
