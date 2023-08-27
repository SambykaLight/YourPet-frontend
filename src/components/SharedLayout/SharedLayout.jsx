import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Section,ContainerWalls } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Section>
        <Suspense fallback={<Loader/>}>
      <ContainerWalls>
          <Outlet />
      </ContainerWalls>
        </Suspense>
        </Section>
    </>
  );
};
export default SharedLayout;
