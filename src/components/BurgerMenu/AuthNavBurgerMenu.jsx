import React from 'react';
import LoginIcon from '../AuthNav/loginSvg';
import { AuthButton, AuthButtonsContainer } from './BurgerMenu.styled';

import { Link } from 'react-router-dom';

function AuthNavBurgerMenu({ onClick }) {
  return (
    <>
      <AuthButtonsContainer>
        <Link to="/login" onClick={onClick}>
          <AuthButton>
            Log In
            <LoginIcon />
          </AuthButton>
        </Link>
        <Link to="register" onClick={onClick}>
          <AuthButton>Registration</AuthButton>
        </Link>
      </AuthButtonsContainer>
    </>
  );
}

export default AuthNavBurgerMenu;
