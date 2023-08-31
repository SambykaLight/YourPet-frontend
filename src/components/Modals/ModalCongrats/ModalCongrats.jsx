import React from 'react';
import { PawIcon } from '../../.././images/icon/pawprint.svg';
import { CongratsContainer, TitleCongrats, TextCongrats, ButtonCongrat } from './ModalCongrats.styled';
//toggleModal- вихід з модалки , при натисканні на кнопку Go to profile /  PROFILE - не готовий 
import { useNavigate } from 'react-router-dom';



const ModalCongrats = ({ closeModal }) => {
  const pageNavigate = useNavigate();
  

  const handleClose = () => {
      closeModal();
      pageNavigate('/');
  };


  
  return (


      <CongratsContainer closeModal={handleClose} >
        <TitleCongrats>Congrats!</TitleCongrats>
        <TextCongrats>Your registration is success</TextCongrats>
        <ButtonCongrat onClick={closeModal} className="btn" type="button" color="blue" width="248px">
          Go to profile <PawIcon/>
        </ButtonCongrat>
      </CongratsContainer>
  );
};

export default ModalCongrats;
