import React from 'react';
import {
  CongratsContainer,
  TitleCongrats,
  TextCongrats,
  ButtonCongrat,
} from './ModalCongrats.styled';

const ModalCongrats = ({ closeModal }) => {
  const handleClose = () => {
    closeModal();
    localStorage.setItem('modalCongratsAlreadyOpened', 'true');
  };

  return (
    <CongratsContainer closeModal={handleClose}>
      <TitleCongrats>Congrats!</TitleCongrats>
      <TextCongrats>Your registration is success</TextCongrats>
      <ButtonCongrat
        onClick={handleClose}
        className="btn"
        type="button"
        color="blue"
        width="248px"
      >Go To Profile</ButtonCongrat>
    </CongratsContainer>
  );
};

export default ModalCongrats;
