import React from 'react';
import { LinksContainer, StyledLink } from './UserMenu.styled';
import { logout } from 'redux/auth/operations ';
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
import { useDispatch } from 'react-redux';

function UserMenu() {
const dispatch = useDispatch()

const handleLogout = ()=>{
dispatch(logout())
}

  return (
    <>
      <LogoutButtonContainer>
        <Link to="/login" onClick={handleLogout}>
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
