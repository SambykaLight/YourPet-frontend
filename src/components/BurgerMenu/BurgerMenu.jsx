import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../Navigation/logo';
import BurgerMenuIcon from '../AuthNav/burgerMenuIcon';
import BurgerMenuCloseIcon from '../AuthNav/burgerMenuCloseIcon';
import AuthNavBurgerMenu from './AuthNavBurgerMenu';
// import UserLogo from './UserIcon';
import LogoutButtonMenu from './LogoutButton';
import {
  BurgerMenuButton,
  LogoContainer,
  HeaderWrapper,
} from './BurgerMenu.styled';
import { ExpandedMenuWrapper } from './BurgerMenu.styled';
import Links from './Links';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <BurgerMenuButton onClick={toggleMenu}>
        {menuOpen ? <BurgerMenuCloseIcon /> : <BurgerMenuIcon />}
      </BurgerMenuButton>
      {menuOpen ? <ExpandedMenu onCloseMenu={closeMenu} /> : null}
    </>
  );
}

function ExpandedMenu({ onCloseMenu }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLinkClick = () => {
    onCloseMenu();
  };

  return (
    <>
      <ExpandedMenuWrapper>
        {isLoggedIn ? (
          <>
            <HeaderWrapper>
              <LogoContainer>
                <Link to="/" onClick={handleLinkClick}>
                  <LogoIcon />
                </Link>
              </LogoContainer>
              <LogoutButtonMenu />
            </HeaderWrapper>

            <Links onClick={handleLinkClick} />
          </>
        ) : (
          <>
            <LogoContainer>
              <Link to="/" onClick={handleLinkClick}>
                <LogoIcon />
              </Link>
            </LogoContainer>
            <AuthNavBurgerMenu onClick={handleLinkClick} />
          </>
        )}
      </ExpandedMenuWrapper>
    </>
  );
}

export default BurgerMenu;
