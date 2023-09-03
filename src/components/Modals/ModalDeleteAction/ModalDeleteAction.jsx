import React from 'react';

import {
  SectionDeleteBox,
  DeleteBoxHeader,
  BtnCancel,
  BtnYes,
  BtnWrapper,
  TrashIcon,
  DeleteNoticeText,
  ModalDeleteBox,
} from './ModalDeleteActione.styled';

const ModalDeleteAction = ({
  modalClose,
  handleRemoveOwnNotice,// логіка видалення  Notice
  // id
}) => {
  return (
    <ModalDeleteBox>
      <SectionDeleteBox>
        <DeleteBoxHeader>Delete adverstiment?</DeleteBoxHeader>
        <DeleteNoticeText>
          Are you sure you want to delete "<strong>{}</strong>"? You can`t
          undo this action.
        </DeleteNoticeText>
        <BtnWrapper>
          <BtnCancel type="button" onClick={modalClose}>
            Cancel
          </BtnCancel>
          <BtnYes type="button" onClick={handleRemoveOwnNotice} >
            Yes
            <TrashIcon />
          </BtnYes>
        </BtnWrapper>
      </SectionDeleteBox>
    </ModalDeleteBox>
  );
};

export default ModalDeleteAction;
