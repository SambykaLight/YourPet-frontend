import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Section } from './SharedLayout.styled';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
        <Header/>
        <Section>
        <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
        </Suspense>
        </Section>
      </>
  );
};
export default SharedLayout;
