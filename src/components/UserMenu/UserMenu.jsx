import React, { useState } from 'react';
import { LinksContainer, StyledLink } from './UserMenu.styled';
import {
  LogoutButton,
  LogoutButtonContainer,
  UserIconButton,
  BurgerMenuButton,
} from './UserMenu.styled';

import BurgerMenuIcon from '../AuthNav/burgerMenuIcon';

import UserIcon from '../AuthNav/userIcon';
import LogoutIcon from './logoutIcon';
import { useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/selectors';
import ModalApproveAction from 'components/Modals/ModalApproveAction/ModalApproveAction';
import UniversalModal from 'components/Modals/UniversalModal';

function UserMenu() {
  const [modalActive, setModalActive] = useState(false);

  const userInfo = useSelector(selectUser);

  return (
    <>
      <LogoutButtonContainer>
        <LogoutButton type="button" onClick={() => setModalActive(true)}>
          Log Out
          <LogoutIcon />
        </LogoutButton>
        <UniversalModal active={modalActive} setActive={setModalActive}>
          <ModalApproveAction
            modalClose={() => {
              setModalActive(false);
            }}
          />
        </UniversalModal>

        <LinksContainer>
          <StyledLink to="/login">
            <UserIcon />
            {userInfo?.name}
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
