import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import PetsList from 'components/Notices/PetsList/PetsList';
import Title from 'components/Title/Title';
import NoticesSearch from 'components/Notices/NoticeSearch/NoticeSearch';
import NoticesNav from 'components/Notices/NoticeNav/NoticeNav';
import AddPagination from 'components/Pagination/Pagination';
import { useDispatch } from 'react-redux';
import { fetchNoticesByCategory } from 'redux/notices/operations';

const PetsListPage = () => {

  const dispatch = useDispatch()

  useEffect(()=>{dispatch(fetchNoticesByCategory())},[dispatch])

  return (
    <Container>
      <Title />
      <NoticesSearch />
      <NoticesNav /> 
      <PetsList />
      <AddPagination />
    </Container>
  );
};

export default PetsListPage;
