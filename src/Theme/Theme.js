import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#54ADFF',
    },
    error: {
      main: '#F43F5E',
    },
    success: {
      main: '#00C3AD',
    },
  },
  typography: {
    fontFamily: 'Manrope, Inter',
  },
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 768,
      desktop: 1280,
    },
  },
});

export default theme;
