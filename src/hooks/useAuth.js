import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
  selectFavorites
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken)
  const favoritesNotices = useSelector(selectFavorites)

  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
    favoritesNotices
  };
};
