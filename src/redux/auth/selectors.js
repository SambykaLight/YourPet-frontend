export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;

export const selectIsLoading = state => state.auth.isLoading;

export const selectModalSuccessRegister = state =>
  state.auth.modalSuccessRegister;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectIsLoading,
  selectModalSuccessRegister,
  selectToken
};

export default authSelectors;
