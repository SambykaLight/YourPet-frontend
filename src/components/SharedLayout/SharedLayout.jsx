import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default SharedLayout;
