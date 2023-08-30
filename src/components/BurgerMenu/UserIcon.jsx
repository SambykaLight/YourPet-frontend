import React from 'react';

import UserIcon from '../AuthNav/userIcon';
import { UserIconButton } from './BurgerMenu.styled';

function UserLogo({ onClick }) {
  return (
    <>
      <UserIconButton onClick={onClick}>
        <UserIcon />
      </UserIconButton>
    </>
  );
}

export default UserLogo;
