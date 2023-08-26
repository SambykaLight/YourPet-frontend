import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../Shcema/Schema';
import { useDispatch } from 'react-redux';
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
} from './LoginForm.styled';
import { ReactComponent as IconClose } from '../../images/icon/error_red.svg';
import { ReactComponent as IconCheck } from '../../images/icon/check.svg';
import  { logIn } from 'redux/auth/operations';


const initialValues = {
  email: '',
  password: '',
};

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [validEmail, setValidEmail] = useState("");
  const [validPassword, setValidPassword] = useState("");

    const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onHandleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        const validEmaile = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
         return setValidEmail(validEmaile);
      case 'password':
        const validPasswords =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/i.test(value);
         return setValidPassword(validPasswords);
      default:
        return;
    }
  };

  const handleSubmitForm = async (values, { setErrors, resetForm }) => {
    try {
      await loginSchema.validate(values, { abortEarly: false });

      dispatch(
        logIn({
          email: values.email,
          password: values.password,
        })
      );

      resetForm();

      setValidEmail("");
      setValidPassword("");
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
      <Card sx={cardStyles}>
        <Typography sx={titleStyles}>Login</Typography>
        <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
          {({ values, errors, touched, handleSubmit, handleChange }) => (
            <Form>
              <Field
                as={Textfield}
                placeholder="Email"
                type="email"
                name="email"
                fullWidth
                focused
                margin="dense"
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
                            setValidEmail(false);
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
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                fullWidth
                focused
                margin="dense"
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
                      onClick={handleShowPassword}
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

              <Button
                variant="outlined"
                type="submit"
                onClick={handleSubmit}
                sx={buttonStyles}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Typography sx={textStyles}>
            Already have an account?{' '}
            <Link to="/register">
              <Typography component="span" sx={linkStyles}>
                Register
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Card>
    </>
  );
}

export default LoginForm;
