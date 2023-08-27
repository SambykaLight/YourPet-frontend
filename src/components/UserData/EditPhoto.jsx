import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import avatarDefault from 'images/Avatar/avatarDefault.png';

import {
  PictureBox,
  PictureWrapper,
  EditPicture,
  EditBtnPicture,
  IconWrapperVerify,
  IconWrapperRefuse,
  Picture,
  Camera,
  IconVerify,
  IconRefuse,
} from './UserData.styled';

const EditPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);

  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { avatarURL } = useSelector(selectUser);

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleEditPhoto = () => {
    setIsEditingPhoto(true);
    fileInputRef.current.click();
  };

  const handleConfirmPhoto = () => {
    if (!selectedFile) {
      return;
    }

    setIsEditingPhoto(false);

    const updatedData = new FormData();
    updatedData.append('image', selectedFile, selectedFile.name);
    dispatch(updateUser(updatedData));
  };

  const handleCancelPhoto = () => {
    setIsEditingPhoto(false);
    setSelectedFile(null);
  };

  const handleButtonClick = () => {
    if (isEditingPhoto) {
      handleConfirmPhoto();
    } else {
      handleEditPhoto();
    }
  };

  return (
    <PictureBox>
      <PictureWrapper>
        {selectedFile ? (
          <Picture src={URL.createObjectURL(selectedFile)} alt="Photo" />
        ) : (
          <Picture src={avatarURL || avatarDefault} alt="User" />
        )}
      </PictureWrapper>

      <EditPicture>
        <EditBtnPicture onClick={handleButtonClick}>
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          {isEditingPhoto ? (
            <>
              <IconWrapperVerify>
                <IconVerify onClick={handleConfirmPhoto} />
              </IconWrapperVerify>
              <span>Confirm</span>
              <IconWrapperRefuse>
                <IconRefuse onClick={handleCancelPhoto} />
              </IconWrapperRefuse>
            </>
          ) : (
            <>
              <Camera />
              <span>Edit photo</span>
            </>
          )}
        </EditBtnPicture>
      </EditPicture>
    </PictureBox>
  );
};

export default EditPhoto;
