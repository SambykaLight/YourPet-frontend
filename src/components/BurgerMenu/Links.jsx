import React from 'react';
import { StyledLink, LinksContainer } from './BurgerMenu.styled';



function Links({ onClick }) {
  
  return (
    <>
      <LinksContainer>
        <StyledLink to="/news"  onClick={onClick}>
          News
        </StyledLink>
        <StyledLink to="/notices/sell"  onClick={onClick}>
          Find Pet
        </StyledLink>
        <StyledLink to="/friends"  onClick={onClick}>
          Our friends
        </StyledLink>
      </LinksContainer>
    </>
  );
}

export default Links;
