import React from 'react';

import { useDispatch } from 'react-redux';
import LogoutIcon from 'components/UserMenu/logoutIcon';
import { logout } from 'redux/auth/operations ';  
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import {
SectionApprove,
HeaderApprove,
BtnCancel,
CloseButton,
BtnYes,
  BtnsWrapper,
} from './ModalApproveAction.styled';

const ModalApproveAction = ({ modalClose }) => {
    const pageNavigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleClose = e => {
      e.preventDefault();
      modalClose();
    };
  
    const handleLogout = () => {
      localStorage.removeItem('modalCongratsAlreadyOpened');
      dispatch(logout());
      pageNavigate('/');
    };
    return (

    <SectionApprove   closeModal={handleClose}>
  <div>
          <CloseButton onClick={handleClose}>
          <RxCross2 />
        </CloseButton>
        <HeaderApprove>Already leaving?</HeaderApprove>
        <BtnsWrapper>
        <BtnCancel onClick={handleClose}>Cancel</BtnCancel>
          <BtnYes onClick={handleLogout}>
            Yes
            <LogoutIcon />
          </BtnYes>
        </BtnsWrapper>
        </div>
    </SectionApprove>
  );
};

export default ModalApproveAction;