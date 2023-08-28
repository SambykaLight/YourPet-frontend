import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getCurrentUser } from 'redux/auth/operations';
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
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <PublicRoute redirectTo="/user" component={<RegisterPage />} />
          }
        />
        <Route
          path="login"
          element={<PublicRoute redirectTo="/user" component={<LoginPage />} />}
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
        <Route
          path="notices/"
          element={<PublicRoute redirectTo="sell" element={<PetsListPage />} />}
        />
        <Route path="notices/:category" element={<PetsListPage />} />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
export default App;
