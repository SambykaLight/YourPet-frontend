import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/material';
import Header from 'components/Header/Header';
// import { Section } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
        <Header/>
        <Suspense fallback={<p>Loading...</p>}>
          <Container fixed>
            <Outlet />
          </Container>
        </Suspense>
      </div>
  );
};
export default SharedLayout;
