import React from 'react';
import { Container } from '@mui/material';
import PetsList from 'components/PetsList/PetsList';
import Title from 'components/Title/Title';
import NoticesSearch from 'components/Notices/NoticeSearch/NoticeSearch';
import NoticesNav from 'components/Notices/NoticeNav/NoticeNav';
import AddPagination from 'components/Pagination/Pagination';

import Modal from 'components/Modals/Modal';
import Context from 'components/Modals/Context/Context';
import CardMore from 'components/CardMore/CardMore';

const PetsListPage = () => {
  return (
    <Container>
      <Title />
      <NoticesSearch />
      <NoticesNav />
      <PetsList />
      <AddPagination />

      {/* universal modal */}
      <Context>
        <Modal openButtonLabel={'Learn more'}>
          <CardMore />
        </Modal>
      </Context>
    </Container>
  );
};

export default PetsListPage;
