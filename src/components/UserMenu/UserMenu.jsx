import React, { useState } from 'react';
import {  StyledLink } from './UserMenu.styled';
import {
  LogoutButton,
  LogoutButtonContainer,
} from './UserMenu.styled';

import BurgerMenu from 'components/BurgerMenu';

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

        <StyledLink to="/login">
          <UserIcon />
          {userInfo?.name}
        </StyledLink>

        <BurgerMenu />
      </LogoutButtonContainer>
    </>
  );
}

export default UserMenu;
