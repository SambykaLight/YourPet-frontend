import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import PetsList from 'components/Notices/PetsList/PetsList';
import TitlePet from 'components/Title/Title';
import NoticesSearch from 'components/Notices/NoticeSearch/NoticeSearch';
import NoticesNav from 'components/Notices/NoticeNav/NoticeNav';
import AddPagination from 'components/Pagination/Pagination';
import { useDispatch } from 'react-redux';
import { fetchNoticesByCategory, fetchNoticesFavorite, fetchUserNotices } from 'redux/notices/operations';
import { useParams } from 'react-router-dom';

const PetsListPage = () => {
  const dispatch = useDispatch();
  const {category} = useParams()


  useEffect(() => {
if (category === "favorite") {
  dispatch(fetchNoticesFavorite())
}
if (category === "own") {
  dispatch(fetchUserNotices())
}
    dispatch(fetchNoticesByCategory({category}));
  }, [dispatch, category]);


  return (
    <Container>
      <TitlePet />
      <NoticesSearch />
      <NoticesNav />
      <PetsList />
      <AddPagination />
    </Container>
  );
};

export default PetsListPage;
