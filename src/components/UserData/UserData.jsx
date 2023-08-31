import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { CiEdit } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import { Button } from '@mui/material';

// import { logout } from 'redux/auth/operations';
import { updateUser } from '../../redux/auth/operations ';
import { selectUser } from 'redux/auth/selectors';

// import LogoutModal from '../Modal/LogoutModal';

import { EDIT_MODE } from './constants';

import useModal from 'hooks/useModal';
import EditPhoto from './EditPhoto';

import {
  Container,
  Box,
  Title,
  Label,
  Input,
  IconLogOut,
  LogOut,
  BtnLogOut,
  BoxIconVerify,
  ButtonEdit,
  ButtonSave,
} from './UserData.styled';

const validationSchema = yup.object().shape({
  Name: yup.string('Invalid name').min(3).max(16),
  Email: yup.string().email('Invalid email'),
  Phone: yup.string(),
  Birthday: yup.string(),
  City: yup.string(),
});

const UserData = () => {
  const dispatch = useDispatch();
  const { name, email, phone, birthday, city } = useSelector(selectUser);
  const [editMode, setEditMode] = useState(EDIT_MODE.defaultValue);
  const [activeInput, setActiveInput] = useState(null);
  const [toggleModal] = useModal();

  const initialValues = {
    Name: name || 'Name',
    Email: email || 'anna00@gmail.com|',
    Phone: phone || '+38000000000',
    Birthday: birthday || '00.00.0000',
    City: city || 'Kyiv',
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleEditMode = value => {
    setEditMode(value);
  };

  const handleFieldChange = (fieldName, fieldValue) => {
    setActiveInput(fieldName);
    setFormValues(prevValues => ({
      ...prevValues,
      [fieldName]: fieldValue,
    }));
  };

  const handleFormSubmit = values => {
    const updatedValues = {
      ...formValues,
      ...values,
    };

    const hasEmptyValues = Object.values(updatedValues).some(
      value => value === undefined || value === ''
    );

    if (hasEmptyValues) {
      return;
    }

    const updatedData = new FormData();
    updatedData.append('name', updatedValues.Name);
    updatedData.append('email', updatedValues.Email);
    updatedData.append('phone', updatedValues.Phone);
    updatedData.append('birthday', updatedValues.Birthday);
    updatedData.append('city', updatedValues.City);
    dispatch(updateUser(updatedData));
  };

  // const handleLogout = () => {
  //   toggleModal();
  //   dispatch(logout());
  // };

  const renderField = (name, errors) => {
    const isActive = activeInput === name;
    const isEditing = isActive && activeInput !== null;

    return (
      <>
        <Label key={name}>
          {name}:
          <Field name={name}>
            {({ field }) => (
              <Input
                type="text"
                {...field}
                readOnly={editMode === EDIT_MODE.defaultValue}
                className={isEditing ? 'editing' : ''}
                onChange={e => {
                  field.onChange(e);
                  handleFieldChange(name, e.target.value);
                }}
              />
            )}
          </Field>
        </Label>
        <p style={{ color: 'red', fontSize: '11px' }}>
          {errors && errors[name]}
        </p>
      </>
    );
  };

  return (
    <Container>
      <Title>My information:</Title>

      <Box>
        <EditPhoto editMode={editMode} />
        <Formik
          sx={{ position: 'relative' }}
          initialValues={formValues}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
        >
          {({ errors }) => (
            <Form>
              <ButtonEdit variant="text">
                {editMode === EDIT_MODE.defaultValue ? (
                  <CiEdit
                    onClick={() => handleEditMode(EDIT_MODE.editModeValue)}
                  />
                ) : (
                  <RxCross1
                    onClick={() => handleEditMode(EDIT_MODE.defaultValue)}
                  />
                )}
              </ButtonEdit>

              {Object.keys(formValues).map(field => renderField(field, errors))}

              <LogOut>
                {editMode === EDIT_MODE.defaultValue && (
                  <BtnLogOut type="button" onClick={toggleModal}>
                    <IconLogOut />
                    Log Out
                  </BtnLogOut>
                )}
                {editMode === EDIT_MODE.editModeValue && (
                  <BoxIconVerify>
                    <ButtonSave
                      variant="contained"
                      type="submit"
                      className="custom-button"
                      style={{
                        backgroundColor: '#54adff',
                        // color: 'white',
                        // borderRadius: '40px',
                        // width: '255px',
                        // cursor: 'pointer',
                        // padding: '6px, 108px, 6px, 108px',
                        // position: 'absolute',
                        // bottom: '-29px',
                        // right: '-15px',

                        // '@media screen and (min-width: 768px)': {
                        //   backgroundColor: 'green',
                        //   bottom: '-29px',
                        //   left: '262px',
                        // },
                        // '@media screen and (min-width: 1280px)': {
                        //   backgroundColor: 'green',
                        //   bottom: '-29px',
                        //   right: '-15px',
                        // },
                      }}
                    >
                      Save
                    </ButtonSave>
                  </BoxIconVerify>
                )}
                {/* <LogoutModal
                isOpen={isOpen}
                toggleModal={toggleModal}
                onLogout={handleLogout}
              /> */}
              </LogOut>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default UserData;
