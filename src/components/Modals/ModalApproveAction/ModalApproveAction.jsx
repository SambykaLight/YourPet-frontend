import React from 'react';
import { useDispatch } from 'react-redux';
import LogoutIcon from 'components/UserMenu/logoutIcon';
import { logout } from 'redux/auth/operations ';
import { useNavigate } from 'react-router-dom';
import {
    SectionApprove,
    HeaderApprove,
    BtnCancel,
    BtnYes,
    BtnsWrapper,
} from './ModalApproveAction.styled';


const ModalApproveAction = () => {
    const pageNavigate = useNavigate();
    const dispatch = useDispatch();

    const handleClose = () => {
        pageNavigate('/user');
    };

    const handleLogout = () => {
        dispatch(logout());
        pageNavigate('/');

    };


    return (

    <SectionApprove closeModal={handleClose}>
                <div>
                <HeaderApprove>Already leaving?</HeaderApprove>
                <BtnsWrapper>
                    <BtnCancel onClick={handleLogout}>
                        Cancel
                    </BtnCancel>
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
