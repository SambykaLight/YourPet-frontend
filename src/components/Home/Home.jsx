import React from 'react';
import { Container, Typography } from '@mui/material';
import {containerStyles, titleStyles} from './Home.styled'

import PetsList from "../PetsList/PetsList"
import NoticeSearch from "../Notices/NoticeSearc/NoticeSearch"
import Title from "../Notices/NoticeTitle/NoticeTitle"
import NoticeNav from "../Notices/NoticeNav/NoticeNav"

function Home() {
  return (
    <>
      <Container sx={containerStyles}>
        <Typography variant="h3" sx={titleStyles}>
          Take good care of your small pets
        </Typography>
        <Title/>
        <NoticeSearch/>
        <NoticeNav/>
        <PetsList/>
        
      </Container>
    </>
  );
}

export default Home;
