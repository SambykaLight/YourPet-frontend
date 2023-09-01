import React from 'react';
import LoginIcon from './loginSvg';
import { AuthButton, AuthButtonsContainer } from './AuthNav.styled';

import BurgerMenu from 'components/BurgerMenu';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

function AuthNav() {
  const { t } = useTranslation();
  return (
    <>
      <AuthButtonsContainer>
        <Link to="/login">
          <AuthButton>
            {t('Log In')}
            <LoginIcon />
          </AuthButton>
        </Link>
        <Link to="register">
          <AuthButton>{t('Registration')}</AuthButton>
        </Link>

        <BurgerMenu />
      </AuthButtonsContainer>
    </>
  );
}

export default AuthNav;
