import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^(?=.{2,16}$)[A-Za-z ]+$/, 'Please enter valid name'),
  email: yup
    .string()
    .email('Enter a valid Email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Enter more than 6 characters')
    .max(16, 'Max 16')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
    ),
  confirmPassword: yup
    .string()
    .required('Confirm your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match!'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid Email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Enter more than 6 characters')
    .max(16, 'Max 16')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
    ),
});
