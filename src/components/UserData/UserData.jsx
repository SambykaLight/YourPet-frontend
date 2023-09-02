import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { CiEdit } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import { updateUser } from '../../redux/auth/operations ';
import { selectUser } from 'redux/auth/selectors';
import { EDIT_MODE } from './constants';
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
import UniversalModal from 'components/Modals/UniversalModal';
import ModalApproveAction from 'components/Modals/ModalApproveAction/ModalApproveAction';
import ModalCongrats from 'components/Modals/ModalCongrats/ModalCongrats';
import { CleaningServices } from '@mui/icons-material';

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
  const [modalActive, setModalActive] = useState(false);
  const [modalCongratsActive, setModalCongratsActive] = useState();

  useEffect(() => {
    const modalCongratsAlreadyOpened = localStorage.getItem(
      'modalCongratsAlreadyOpened'
    );
    setModalCongratsActive(!JSON.parse(modalCongratsAlreadyOpened));
  }, []);

  const initialValues = {
    Name: name || 'Name',
    Email: email || 'anna00@gmail.com',
    Phone: phone || '+38000000000',
    Birthday: birthday || '00.00.0000',
    City: city || 'Kyiv',
  };
  const [formValues, setFieldValue] = useState(initialValues);

  const handleEditMode = value => {
    setEditMode(value);
  };
  // const handleFieldChange = (fieldName, fieldValue) => {
  //   setActiveInput(fieldName);
  //   setFieldValue(fieldName, fieldValue);
  // }


  const handleFieldChange = (fieldName, fieldValue) => {
    setActiveInput(fieldName);
    // setFieldValue(prevValues => ({
    //   ...prevValues,
    //   [fieldName]: fieldValue,
    // })
    // );
    setFieldValue(prevValues => ({
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
                  <BtnLogOut type="button" onClick={() => setModalActive(true)}>
                    Log Out
                    <IconLogOut />
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
                      }}
                    >
                      Save
                    </ButtonSave>
                  </BoxIconVerify>
                )}
                <UniversalModal active={modalActive} setActive={setModalActive}>
                  <ModalApproveAction
                    modalClose={() => {
                      setModalActive(false);
                    }}
                  />
                </UniversalModal>
              </LogOut>
            </Form>
          )}
        </Formik>
      </Box>
      <UniversalModal
        active={modalCongratsActive}
        setActive={setModalCongratsActive}
      >
        <ModalCongrats
          closeModal={() => {
            setModalCongratsActive(false);
          }}
        />
      </UniversalModal>
    </Container>
  );
};

export default UserData;
