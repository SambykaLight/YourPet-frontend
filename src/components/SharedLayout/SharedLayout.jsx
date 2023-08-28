import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Section, ContainerWalls } from './SharedLayout.styled';
import { useSelector } from 'react-redux';
import { darkTheme } from 'redux/themeSlice/selectors';

const SharedLayout = () => {
  const isDarkTheme = useSelector(darkTheme);

  return (
    <>
      <Header />
      <Section style={{ backgroundColor: isDarkTheme === 'dark' && '#809cb5' }}>
        <Suspense fallback={<Loader />}>
          <ContainerWalls>
            <Outlet />
          </ContainerWalls>
        </Suspense>
      </Section>
    </>
  );
};
export default SharedLayout;
