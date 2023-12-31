export const selectPetsInfo = state => state.pets.petsInfo;

export const selectIsLoading = state => state.pets.isLoading;

export const selectError = state => state.pets.error;

const petSelectors = {
  selectPetsInfo,
  selectIsLoading,
  selectError,
};

export default petSelectors;
