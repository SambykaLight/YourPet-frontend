import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import PetsList from 'components/Notices/PetsList/PetsList';
import TitlePet from 'components/Title/Title';
import NoticesSearch from 'components/Notices/NoticeSearch/NoticeSearch';
import NoticesNav from 'components/Notices/NoticeNav/NoticeNav';
import AddPagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNoticesByCategory } from 'redux/notices/operations';
import { useParams } from 'react-router-dom';
import { selectPage, selectTotalPages } from 'redux/notices/selectors';

const PetsListPage = () => {
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectPage);
  const dispatch = useDispatch();
  const { category } = useParams();
  const [input, setInput] = useState('');

  useEffect(() => {
    dispatch(fetchNoticesByCategory({ category: category }));
  }, [dispatch, category]);

  const handleSearch = searchValue => {
    setInput(searchValue);
  };

  return (
    <Container>
      <TitlePet />
      <NoticesSearch onSearch={handleSearch} />
      <NoticesNav />
      <PetsList />
      <AddPagination
        currentPage={currentPage}
        total={totalPages}
        query={input}
      />
    </Container>
  );
};

export default PetsListPage;
