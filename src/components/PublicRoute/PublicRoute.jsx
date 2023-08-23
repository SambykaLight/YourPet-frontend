import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

 const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
