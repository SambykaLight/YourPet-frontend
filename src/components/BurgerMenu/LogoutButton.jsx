import React from 'react';

import LogoutIcon from '../UserMenu/logoutIcon';
import { LogoutButton } from './BurgerMenu.styled';

function LogoutButtonMenu() {
  return (
    <>
      <LogoutButton>
        Log Out
        <LogoutIcon />
      </LogoutButton>
    </>
  );
}

export default LogoutButtonMenu;
