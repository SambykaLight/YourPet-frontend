import React from 'react';

import AuthNav from '../../AuthNav/AuthNav';

import {
  AttentionModalBox,
  AttentionModalTitle,
  AttentionModalText,
  BtnsWrapper,
} from './ModalUnauthorized.styled';

const ModalUnauthorized = () => {
  return (
    <AttentionModalBox>
      <AttentionModalTitle>Attention</AttentionModalTitle>
      <AttentionModalText>
        We would like to remind you that certain functionality is available only
        to authorized users. If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </AttentionModalText>
      <BtnsWrapper>
        <AuthNav />
      </BtnsWrapper>
    </AttentionModalBox>
  );
};

export default ModalUnauthorized;
