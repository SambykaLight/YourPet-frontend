import React from 'react';
// import { Text } from './Home.styled';
import { Container, Typography } from '@mui/material';

const containerStyles = {
  height: '100vh',
  backgroundImage: {
    mobile: `url(${require('../SharedLayout/dogsFont/Mobile/mb-dogs-2x.png')})`,
    tablet: `url(${require('../SharedLayout/dogsFont/Tablet/tb-dogs-2x.png')})`,
    desktop: `url(${require('../SharedLayout/dogsFont/Desktop/lg-dogs-2x.png')})`,
  },
  backgroundRepeat: { mobile: 'no-repeat' },

  backgroundPosition: {
    mobile: 'top 90px left 50%',
    tablet: 'top 150px left 50%',
    desktop: 'right -80px',
  },
  backgroundSize: {
    mobile: '140%',
    tablet: '130%',
    desktop: '70%',
  },
};

const titleStyles = {
  pt: { mobile: '25px', tablet: '52px', desktop: '188px' },
  pr: { tablet: '148px', desktop: '0' },
  textAlign: { tablet: 'left' },
  display: { desktop: 'flex' },
  alignItems: { desktop: 'center' },
  fontFamily: 'Manrope',
  fontWeight: '700',
  fontSize: { mobile: '32px', tablet: '68px' },
  lineHeight: { mobile: '44px', tablet: '100px', desktop: '88.4px' },
  width: { desktop: '501px' },
};

function Home() {
  return (
    <>
      <Container sx={containerStyles}>
        <Typography variant="h3" sx={titleStyles}>
          Take good care of your small pets
        </Typography>
      </Container>
    </>
  );
}

export default Home;
