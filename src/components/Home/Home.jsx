import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { containerStyles, titleStyles, boxStyles } from './Home.styled';
import Footer from 'components/Footer/Footer';


function Home() {
  return (
    <>
      <Container sx={containerStyles}>
        <Box sx={boxStyles}>
        <Typography variant="h3" sx={titleStyles}>
          Take good care of your small pets
        </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
