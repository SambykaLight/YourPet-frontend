import React from 'react';
import { Link } from 'react-router-dom';
import { LinksContainer, LogoContainer, StyledLink } from './Navigation.styled';
import LogoIcon from './logo';
import SwitchLanguage from 'components/SwitchLanguage';
import { useTranslation } from 'react-i18next';

function Navigation() {
  const { t } = useTranslation();
  return (
    <>
      <LogoContainer>
        <Link to="/">
          <LogoIcon />
        </Link>
      </LogoContainer>
      <SwitchLanguage />
      <LinksContainer>
        <StyledLink to="/news">{t('News')}</StyledLink>
        <StyledLink to="/notices/sell">{t('Find Pet')}</StyledLink>
        <StyledLink to="/friends">{t('Our friends')}</StyledLink>
      </LinksContainer>
    </>
  );
}

export default Navigation;
