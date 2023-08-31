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
  notice,//deleteText name
  handleRemoveOwnNotice,// логіка видалення  Notice
}) => {
  return (

      <ModalDeleteBox>
        <SectionDeleteBox>
          <DeleteBoxHeader>Delete adverstiment?</DeleteBoxHeader>
          <DeleteNoticeText>
            Are you sure you want to delete <strong>{notice.name}</strong>? You
            can`t undo this action.
          </DeleteNoticeText>
          <BtnWrapper>
            <BtnCancel type="button" onClick={toggleModal}>
              Cancel
            </BtnCancel>
            <BtnYes type="button" onClick={handleRemoveOwnNotice}>
              Yes
              <TrashIcon />
            </BtnYes>
          </BtnWrapper>
        </SectionDeleteBox>
      </ModalDeleteBox>

  );
};

export default ModalDeleteAction;