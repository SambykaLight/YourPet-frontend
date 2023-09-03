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
  toggleModal,
  title, //deleteText name
  handleRemoveOwnNotice,
  id// логіка видалення  Notice
}) => {
  return (
    <ModalDeleteBox>
      <SectionDeleteBox>
        <DeleteBoxHeader>Delete adverstiment?</DeleteBoxHeader>
        <DeleteNoticeText>
          Are you sure you want to delete "<strong>{title}</strong>"? You can`t
          undo this action.
        </DeleteNoticeText>
        <BtnWrapper>
          <BtnCancel type="button" onClick={toggleModal}>
            Cancel
          </BtnCancel>
          <BtnYes type="button" onClick={()=>handleRemoveOwnNotice(id)}>
            Yes
            <TrashIcon />
          </BtnYes>
        </BtnWrapper>
      </SectionDeleteBox>
    </ModalDeleteBox>
  );
};

export default ModalDeleteAction;
