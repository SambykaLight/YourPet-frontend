import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LinksContainer, LogoContainer, StyledLink } from './Navigation.styled';
import LogoIcon from './logo';
import SwitchLanguage from 'components/SwitchLanguage';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.js';

import { useTranslation } from 'react-i18next';

function Navigation() {

  const {pathname} = useLocation();
  console.log(pathname);
const activeLink = {
  news: pathname === "/news" ? 'active' : null,
  niticesSell: pathname === "/notices/sell"  ? 'active' : null,
  friends: pathname === "/friends"  ? 'active' : null,
}

  const { t } = useTranslation();
  return (
    <> 
      <LogoContainer>
        <Link to="/">
          <LogoIcon />
        </Link>
      </LogoContainer>
      <SwitchLanguage />
      <ThemeSwitcher />
      <LinksContainer>
        <StyledLink className={ activeLink.news } to="/news">{t('News')}</StyledLink>
        <StyledLink className={ activeLink.niticesSell } to="/notices/sell">{t('Find Pet')}</StyledLink>
        <StyledLink className={ activeLink.friends } to="/friends">{t('Our friends')}</StyledLink>
      </LinksContainer>
    </>
  );
}

export default Navigation;
