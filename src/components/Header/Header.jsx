import React from 'react';

import { HeaderContainer } from './Header.styled';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import { darkTheme } from 'redux/themeSlice/selectors';

function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isDarkTheme = useSelector(darkTheme);

  return (
    <HeaderContainer
      style={{ backgroundColor: isDarkTheme === 'dark' && '#7791a8' }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderContainer>
  );
}
export default Header;
