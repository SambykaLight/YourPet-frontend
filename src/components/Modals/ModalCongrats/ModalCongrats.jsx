import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { LiaPawSolid } from 'react-icons/lia';
import {
  CongratsContainer,
  TitleCongrats,
  TextCongrats,
  CloseButton,
  ButtonCongrat,

} from './ModalCongrats.styled';

const ModalCongrats = ({ closeModal }) => {
  const pageNavigate = useNavigate();
  

  const handleClose = () => {
      closeModal();
      pageNavigate('/');
  };


  
  return (
    <CongratsContainer  onClick={handleClose} >
              <CloseButton  onClick={handleClose}>
          <RxCross2 />
        </CloseButton>
      <TitleCongrats>Congrats!</TitleCongrats>
      <TextCongrats>Your registration is success
        
      </TextCongrats>
      <ButtonCongrat
        onClick={handleClose}
        className="btn"
        type="button"
        color="blue"
        width="248px"
        
      >Go to profile 
      <LiaPawSolid />
      </ButtonCongrat>
    </CongratsContainer>
  );
};

export default ModalCongrats;
