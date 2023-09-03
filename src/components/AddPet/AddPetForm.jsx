import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPet } from 'redux/pets/operations';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import ChooseOption from './ChooseOption/ChooseOption';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import MoreInfo from './MoreInfo/MoreInfo';
import {
  AddPetFormWrapp,
  FormTitle,
  StepsList,
  Step,
  Button,
  ButtonFilled,
  ButtonWrap,
} from './AddPetForm.styled';
import { Pets, West } from '@mui/icons-material';
import validationSchema from './validationSchema';
import { addNotice } from 'redux/notices/operations';
import { useAuth } from 'hooks';

const initialValues = {
  category: 'my pet',
  name: '',
  date: '',
  type: '',
  image: '',
  sex: '',
  location: '',
  price: '',
  comments: '',
  title: '',
};

const AddPetForm = () => {
  const { user } = useAuth();
  // console.log("user",user)
  // const notice = useSelector(state=>state.notices)
  // const [isFavorite, setIsFavorite]= useState()
  // console.log("NOTICE", notice)
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const steps = ['Choose option', 'Personal details', 'More info'];

  const handleClickNext = e => {
    e.preventDefault();

    if (step === 2) {
      return;
    }
    setStep(step + 1);
  };

  const handleClickBack = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleCancel = e => {
    e.preventDefault();
    navigate(-1);
  };

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('type', values.type);
    formData.append('image', values.image);
    formData.append('comments', values.comments);
    formData.append('date', values.date);

    // const formData = {};
    // formData['name'] = values.name;
    // formData['type'] = values.type;
    // formData['image'] = values.image;
    // formData['comments'] = values.comments;
    // formData['date'] = values.date;

    if (values.category !== 'my pet') {
      if (values.category === 'sell') {
        formData.append('price', values.price);
        // formData['price'] = +values.price;
      }
      // formData['category'] = values.category;
      // formData['sex'] = values.sex;
      // formData['location'] = values.location;
      // formData['title'] = values.title;
      formData.append('category', values.category);
      formData.append('sex', values.sex)
      formData.append('location', values.location);
      formData.append('title', values.title);

      console.log("formData", formData)
      dispatch(addNotice(formData))
        .then(response => {
          if (!response.error) {
            navigate('/notices');

            resetForm();
            return;
          }
          return;
        })
        .catch(error => console.log(error));
      return;
    }

    dispatch(addPet(formData))
      .then(response => {
        if (!response.error) {
          navigate('/user');
          resetForm();
          return;
        }
        return;
      })
      .catch(error => console.log(error));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema(step)}
      onSubmit={handleSubmit}
    >
      {({
        values,
        touched,
        errors,
        setFieldValue,
        validateField,
        setTouched,
      }) => (
        <AddPetFormWrapp
          step={step}
          category={values.category}
          autoComplete="off"
        >
          <FormTitle step={step} category={values.category}>
            {step === 0
              ? 'Add pet'
              : values.category === 'my pet'
              ? 'Add pet'
              : values.category === 'sell'
              ? 'Add pet for sale'
              : values.category === 'lost-found'
              ? 'Add lost pet'
              : 'Add in good hands'}
          </FormTitle>
          <Form>
            <StepsList step={step}>
              {steps.map((stepName, index) => (
                <Step
                  key={stepName}
                  step={step}
                  index={index}
                  category={values.category}
                >
                  {stepName}
                </Step>
              ))}
            </StepsList>

            {step === 0 && (
              <ChooseOption category={values.category} values={values} />
            )}

            {step === 1 && (
              <PersonalDetails
                category={values.category}
                errors={errors}
                touched={touched}
              />
            )}

            {step === 2 && (
              <MoreInfo
                category={values.category}
                step={step}
                values={values}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
              />
            )}
            <ButtonWrap category={values.category} step={step}>
              {step === 2 ? (
                <ButtonFilled
                  type="submit"
                  // disabled={isLoading || isNoticeLoading}
                >
                  <span>Done</span>
                  <Pets
                    sx={{
                      width: 24,
                      height: 20,
                      color: 'white',
                      transform: 'rotate(25deg)',
                    }}
                  />
                </ButtonFilled>
              ) : (
                <ButtonFilled
                  type="button"
                  onClick={e => {
                    if (step === 0) {
                      setTouched({});
                      handleClickNext(e);
                    }
                    if (step === 1) {
                      validateField('name');
                      validateField('date');
                      validateField('type');
                      setTouched({
                        name: true,
                        date: true,
                        type: true,
                      });
                    }
                    if (
                      step === 1 &&
                      Object.keys(errors).length === 0 &&
                      Object.keys(touched).length !== 0
                    ) {
                      handleClickNext(e);
                    }
                  }}
                >
                  Next
                  <Pets
                    sx={{ width: 24, height: 24, transform: 'rotate(25deg)' }}
                  />
                </ButtonFilled>
              )}
              <Button
                type="button"
                onClick={step === 0 ? handleCancel : handleClickBack}
              >
                <West sx={{ width: 24, height: 24 }} />
                <span>{step === 0 ? 'Cancel' : 'Back'}</span>
              </Button>
            </ButtonWrap>
          </Form>
        </AddPetFormWrapp>
      )}
    </Formik>
  );
};

export default AddPetForm;
