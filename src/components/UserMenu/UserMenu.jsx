import React from 'react';
import { LinksContainer, StyledLink } from './UserMenu.styled';

import {
  LogoutButton,
  LogoutButtonContainer,
  UserIconButton,
  BurgerMenuButton,
} from './UserMenu.styled';

import BurgerMenuIcon from '../AuthNav/burgerMenuIcon';

import { Link } from 'react-router-dom';
import UserIcon from '../AuthNav/userIcon';
import LogoutIcon from './logoutIcon';
import { useAuth } from 'hooks';

function UserMenu() {
  const {user}= useAuth()

  return (
    <>
      <LogoutButtonContainer>
        <Link to="/login">
          <LogoutButton>
            Log Out
            <LogoutIcon />
          </LogoutButton>
        </Link>

        <LinksContainer>
          <StyledLink to="/login">
            <UserIcon />
            Anna
          </StyledLink>
        </LinksContainer>

        <UserIconButton>
          <UserIcon />
        </UserIconButton>

        <BurgerMenuButton>
          <BurgerMenuIcon />
        </BurgerMenuButton>
      </LogoutButtonContainer>
    </>
  );
}

export default UserMenu;
