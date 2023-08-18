import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/material';
import { Section } from './SharedLayout.styled';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
        <Header/>
        <Section>
        <Suspense fallback={<p>Loading...</p>}>
          <Container fixed>
            <Outlet />
          </Container>
        </Suspense>
        </Section>
      </>
  );
};
export default SharedLayout;
