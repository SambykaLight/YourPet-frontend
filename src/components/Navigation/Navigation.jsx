import React from 'react';
import { Link } from 'react-router-dom';
import { LinksContainer, LogoContainer, StyledLink } from './Navigation.styled';
import LogoIcon from './logo';
import SwitchLanguage from 'components/SwitchLanguage';

function Navigation() {
  return (
    <>
      <LogoContainer>
        <Link to="/">
          <LogoIcon />
        </Link>
      </LogoContainer>
      <SwitchLanguage />
      <LinksContainer>
        <StyledLink to="/news">News</StyledLink>
        <StyledLink to="/notices/sell">Find Pet</StyledLink>
        <StyledLink to="/friends">Our friends</StyledLink>
      </LinksContainer>
    </>
  );
}

export default Navigation;
