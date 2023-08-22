import React from 'react';
import { Container, Typography } from '@mui/material';
import {containerStyles, titleStyles} from './Home.styled'

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
