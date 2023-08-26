import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import authOperations from 'redux/auth/operations';
import Loader from '../Loader/Loader';

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const UserPage = lazy(() => import('pages/UserPage'));
const PetsListPage = lazy(() => import('pages/PetsListPage'));
const AddPetPage = lazy(() => import('pages/AddPetPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <PublicRoute redirectTo="/login" component={<RegisterPage />} />
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute redirectTo="/login" component={<LoginPage />} />
          }
        />

        <Route
          path="user"
          element={
            <PrivateRoute redirectTo="/login" component={<UserPage />} />
          }
        />
        <Route
          path="add-pet"
          element={
            <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
          }
        />
        <Route path="notices/" element={<PetsListPage />} />

        <Route path="notices/:category" element={<PetsListPage />} />

        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
