import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations ';
import {
  ModalApproveBox,
  ModalApproveTitle,
  ModalApproveBtnContainer,
  ModalApproveBtn,
} from './ModalApprove.styled';
import LogoutIcon from 'components/UserMenu/logoutIcon';

const ModalApprove = ({ closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleModalClose = () => {
    closeModal();
    navigate('/user');
  };

  const handleLogout = () => {
    closeModal();
    dispatch(logout());
    navigate('/');
  };
  return (
    <>
      <ModalApproveBox closeModal={handleModalClose}>
        <div>
          <ModalApproveTitle>Already leaving?</ModalApproveTitle>
          <ModalApproveBtnContainer>
            <ModalApproveBtn onClick={handleModalClose}>Cancel</ModalApproveBtn>
            <ModalApproveBtn onClick={handleLogout}>
              Yes <LogoutIcon />
            </ModalApproveBtn>
          </ModalApproveBtnContainer>
        </div>
      </ModalApproveBox>
    </>
  );
};

export default ModalApprove;
