import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

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
  return(
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      <Route path="user" element={<UserPage />} />

      <Route path="add-pet" element={<AddPetPage />} />

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