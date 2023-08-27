import React from 'react';
import { Container } from '@mui/material';

import PetsList from '../PetsList/PetsList';
import NoticeSearch from '../Notices/NoticeSearc/NoticeSearch';
import Title from '../Notices/NoticeTitle/NoticeTitle';
import NoticeNav from '../Notices/NoticeNav/NoticeNav';
import AddPagination from 'components/Pagination/Pagination';

function NoticePage() {
  return (
    <>
      <Container>
        <Title />
        <NoticeSearch />
        <NoticeNav />
        <PetsList />
        <AddPagination />
      </Container>
    </>
  );
}

export default NoticePage;
