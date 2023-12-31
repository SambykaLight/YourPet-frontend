import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from '../Shcema/Schema';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  IconButton,
  InputAdornment,
  Card,
  Typography,
  Box,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Textfield,
  buttonStyles,
  cardStyles,
  titleStyles,
  textStyles,
  linkStyles,
} from './RegistrationForm.styled';
import { ReactComponent as IconClose } from '../../images/icon/error_red.svg';
import { ReactComponent as IconCheck } from '../../images/icon/check.svg';
import { register } from '../../redux/auth/operations ';
import { useTranslation } from 'react-i18next';
import { darkTheme } from 'redux/themeSlice/selectors';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validName, setValidName] = useState('');
  const [validEmail, setValidEmail] = useState('');
  const [validPassword, setValidPassword] = useState('');
  const [validConfirmPass, setValidConfirmPass] = useState(false);
  const [pass, setPass] = useState('');
  const { t } = useTranslation();
  const isDarkTheme = useSelector(darkTheme);

  const themeClass = isDarkTheme === 'dark' ? 'dark-theme' : '';

  const dispatch = useDispatch();

  const handleTogglePasswordVisibility = field => {
    if (field === 'password') {
      setShowPassword(prev => !prev);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(prev => !prev);
    }
  };

  const onHandleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        const validNames = /^(?=.{2,16}$)[A-Za-z ]+$/i.test(value);
        return setValidName(validNames);
      case 'email':
        const validEmaile = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          value
        );
        return setValidEmail(validEmaile);
      case 'password':
        const validPasswords =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/i.test(value);
        setPass(value);
        return setValidPassword(validPasswords);
      default:
        return;
    }
  };

  const handleConfirmPasswordChange = event => {
    const { value } = event.target;
    setValidConfirmPass(value === pass);
  };
  const handleSubmitForm = async (values, { setErrors, resetForm }) => {
    try {
      await registerSchema.validate(values, { abortEarly: false });

      const newUser = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      console.log(newUser);
      dispatch(register(newUser));

      resetForm();
      setValidName('');
      setValidEmail('');
      setValidPassword('');
      setValidConfirmPass(false);
    } catch (validationErrors) {
      const errors = {};
      validationErrors.inner.forEach(error => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
    }
  };

  return (
    <>
      <Card
        sx={{
          ...cardStyles,
          backgroundColor: isDarkTheme === 'dark' && '#6b818f',
        }}
      >
        <Typography sx={titleStyles}>{t('Registration')}</Typography>
        <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
          {({ values, errors, touched, handleSubmit, handleChange }) => (
            <Form>
              <Field
                as={Textfield}
                placeholder={t('Name')}
                type="text"
                name="name"
                fullWidth
                focused
                margin="dense"
                className={themeClass}
                onChange={event => {
                  handleChange(event);
                  onHandleChange(event);
                }}
                value={values.name}
                error={touched.name && Boolean(errors.name)}
                // helperText={touched.name && errors.name}
                helperText={
                  touched.name && errors.name ? (
                    <ErrorMessage name="name" />
                  ) : (
                    ' '
                  )
                }
                InputProps={{
                  color:
                    touched.name && errors.name
                      ? 'error'
                      : validName
                      ? 'success'
                      : 'primary',
                  endAdornment: (
                    <InputAdornment position="end">
                      {touched.name && errors.name ? (
                        <IconClose
                          onClick={() => {
                            handleChange({
                              target: {
                                name: 'name',
                                value: '',
                              },
                            });
                            setValidName('');
                          }}
                        />
                      ) : validName ? (
                        <IconCheck stroke="#00C3AD" />
                      ) : null}
                    </InputAdornment>
                  ),
                }}
              />

              <Field
                as={Textfield}
                placeholder={t('Email')}
                type="email"
                name="email"
                fullWidth
                focused
                margin="dense"
                className={themeClass}
                onChange={event => {
                  handleChange(event);
                  onHandleChange(event);
                }}
                value={values.email}
                error={touched.email && Boolean(errors.email)}
                // helperText={touched.email && errors.email}
                helperText={
                  touched.email && errors.email ? (
                    <ErrorMessage name="email" />
                  ) : (
                    ' '
                  )
                }
                InputProps={{
                  color:
                    touched.email && errors.email
                      ? 'error'
                      : validEmail
                      ? 'success'
                      : 'primary',
                  endAdornment: (
                    <InputAdornment position="end">
                      {touched.email && errors.email ? (
                        <IconClose
                          onClick={() => {
                            handleChange({
                              target: {
                                name: 'email',
                                value: '',
                              },
                            });
                            setValidEmail('');
                          }}
                        />
                      ) : validEmail ? (
                        <IconCheck stroke="#00C3AD" />
                      ) : null}
                    </InputAdornment>
                  ),
                }}
              />
              <Field
                as={Textfield}
                placeholder={t('Password')}
                type={showPassword ? 'text' : 'password'}
                name="password"
                fullWidth
                focused
                margin="dense"
                className={themeClass}
                InputProps={{
                  color:
                    touched.password && errors.password
                      ? 'error'
                      : validPassword
                      ? 'success'
                      : 'primary',
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleTogglePasswordVisibility('password')}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
                onChange={event => {
                  handleChange(event);
                  onHandleChange(event);
                }}
                value={values.password}
                error={touched.password && Boolean(errors.password)}
                // helperText={touched.password && errors.password}
                helperText={
                  touched.password && errors.password ? (
                    <ErrorMessage name="password" />
                  ) : (
                    ' '
                  )
                }
              />
              <Field
                as={Textfield}
                placeholder={t('Confirm Password')}
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                fullWidth
                focused
                margin="dense"
                className={themeClass}
                InputProps={{
                  color:
                    touched.confirmPassword && errors.confirmPassword
                      ? 'error'
                      : validConfirmPass
                      ? 'success'
                      : 'primary',
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        handleTogglePasswordVisibility('confirmPassword')
                      }
                      edge="end"
                      size="small"
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
                onChange={event => {
                  handleChange(event);
                  handleConfirmPasswordChange(event);
                }}
                value={values.confirmPassword}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                // helperText={touched.confirmPassword && errors.confirmPassword}
                helperText={
                  touched.confirmPassword && errors.confirmPassword ? (
                    <ErrorMessage name="confirmPassword" />
                  ) : (
                    ' '
                  )
                }
              />

              <Button
                variant="outlined"
                type="submit"
                onClick={handleSubmit}
                sx={buttonStyles}
              >
                {t('Registration')}
              </Button>
            </Form>
          )}
        </Formik>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Typography
            sx={{
              ...textStyles,
              color: isDarkTheme === 'dark' && '#111111',
            }}
          >
            {t('Already have an account?')}{' '}
            <Link to="/login">
              <Typography component="span" sx={linkStyles}>
                {t('Login')}
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Card>
    </>
  );
}

export default RegistrationForm;
