import React from 'react';
import { LinksContainer, StyledLink } from './UserMenu.styled';
import { logout } from 'redux/auth/operations ';
import {
  // LogoutButton,
  LogoutButtonContainer,
  UserIconButton,
  BurgerMenuButton,
} from './UserMenu.styled';
// import Context from 'components/Modals/Context/Context';
// import Modal from 'components/Modals/Modal';

import BurgerMenuIcon from '../AuthNav/burgerMenuIcon';

import { Link } from 'react-router-dom';
import UserIcon from '../AuthNav/userIcon';
// import LogoutIcon from './logoutIcon';
import { useDispatch } from 'react-redux';
// import ModalApprove from 'components/Modals/ApproveActions/ModalApprove';

function UserMenu() {
const dispatch = useDispatch()

const handleLogout = ()=>{
dispatch(logout())
}

  return (
    <>
      <LogoutButtonContainer>
        <Link to="/login" onClick={handleLogout}>
          {/* <Context>
            <Modal openButtonLabel={'Log Out'}>
            <ModalApprove/>
            <LogoutIcon />
            </Modal>
            
          </Context> */}
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
