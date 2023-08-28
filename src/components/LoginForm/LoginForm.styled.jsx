import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const Textfield = styled(TextField)`
  & .MuiInputBase-root.MuiOutlinedInput-root {
    border-radius: 40px;
    color: #888888;
  }

  & .MuiFormHelperText-root {
    color: #00c3ad;
  }

   &.dark-theme {
    .MuiInputBase-root.MuiOutlinedInput-root {
      color: #111111; 
    }

  &.green-border .MuiOutlinedInput-notchedOutline {
    border-color: #00c3ad;
    border-width: 2px;
  }
`;

export const buttonStyles = {
  boxShadow: 'none',
  mt: { mobile: '10px', tablet: '20px' },
  textTransform: 'none',
  width: '100%',
  height: '48px',
  border: '2px solid #54ADFF',
  borderRadius: '40px',
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: '27px',
  padding: '9px 20px',
  backgroundColor: 'rgba(84, 173, 255, 1)',
  color: 'rgba(255, 255, 255, 1)',
  '&:hover': {
    backgroundColor: '#54ADFF',
    color: '#FEF9F9',
  },

  '&:active': {
    backgroundColor: '#54ADFF',
    color: '#FEF9F9',
  },
  '&:focus': {
    backgroundColor: '#54ADFF',
    color: '#FEF9F9',
  },
};

export const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  minHeight: { mobile: '441px', tablet: '481px' },
  width: { mobile: '280px', tablet: '608px' },
  boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
  borderRadius: { mobile: '20px', tablet: '40px' },

  ml: 'auto',
  mr: 'auto',
  mb: { mobile: '36px', tablet: '119px' },
  padding: { mobile: '35px 12px', tablet: '50px 75px' },
  justifyContent: 'center',
  alignItems: 'center',
};

export const titleStyles = {
  textAlign: 'center',
  fontFamily: 'Manrope',
  fontWeight: '500',
  fontSize: { mobile: '24px', tablet: '36px' },
  lineHeight: { mobile: '33px', tablet: '49px' },
  color: '#111111',
};

export const textStyles = {
  textAlign: 'center',
  fontFamily: 'Manrope',
  fontWeight: '400',
  fontSize: { mobile: '12px', tablet: '14px' },
  lineHeight: { mobile: '16px', tablet: '18px' },
  color: '#888888',
};

export const linkStyles = {
  textDecoration: 'none',
  fontSize: { mobile: '12px', tablet: '14px' },
  lineHeight: { mobile: '16px', tablet: '18px' },
  color: '#54ADFF',
  textDecorationLine: 'underline',
};
