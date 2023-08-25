import React from 'react';

import { HeaderContainer } from './Header.styled';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';

function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <HeaderContainer>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderContainer>
  );
}
export default Header;
