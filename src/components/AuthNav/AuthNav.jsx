import React from 'react';
import LoginIcon from './loginSvg';
import {
  AuthButton,
  AuthButtonsContainer,
  UserIconButton,
} from './AuthNav.styled';

import BurgerMenu from 'components/BurgerMenu';

import { Link } from 'react-router-dom';
import UserIcon from './userIcon';

function AuthNav() {
  return (
    <>
      <AuthButtonsContainer>
        <Link to="/login">
          <AuthButton>
            Log In
            <LoginIcon />
          </AuthButton>
        </Link>
        <Link to="register">
          <AuthButton>Registration</AuthButton>
        </Link>

        <UserIconButton>
          <UserIcon />
        </UserIconButton>

        <BurgerMenu />
      </AuthButtonsContainer>
    </>
  );
}

export default AuthNav;
