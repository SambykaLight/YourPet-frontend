import { createSlice } from '@reduxjs/toolkit';
import {register, logIn, logout, updateUser, getCurrentUser, hideModalSuccessRegister } from './operations';

const initialState = {
  user: {
    // name: null,
    email: null,
    password: null,
    // birthday: '',
    // phone: '',
    // city: '',
    // imageURL: '',
    // favorite: [],
    // itemsFavorite: [],
  },
  pets: [],
  token: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  modalSuccessRegister: false,
  // registrationSuccessful: false,
};
const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state,  { payload }) => {
        state.user =payload;
        state.token =payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
        state.isRefreshing = true;
        state.modalSuccessRegister = true;
        // state.registrationSuccessful = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.user.token;
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isRefreshing = false;
        // state.registrationSuccessful = false;
        // state.user.favorite = [];
      })
      .addCase(logout.rejected, handleRejected)
      // .addCase(refreshUser.pending, state => {
      //   state.isRefreshing = true;
      //   handlePending(state);
      // })
      // .addCase(refreshUser.fulfilled, (state, { payload }) => {
      //   state.isRefreshing = false;
      //   state.isLoading = false;
      //   state.error = null;
      //   state.pets = payload.pets;
      //   state.user = payload.user;
      //   state.isLoggedIn = true;
      // })
      // .addCase(refreshUser.rejected, (state, action) => {
      //   state.isRefreshing = false;
      //   handleRejected(state, action);
      // })
      .addCase(getCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload.userInfo;
        state.pets = payload.petsInfo;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = {
          ...state.user,
          ...payload.updatedFields,
        };
      })
      .addCase(updateUser.rejected, handleRejected)
      .addCase(hideModalSuccessRegister.pending, handlePending)
      .addCase(hideModalSuccessRegister.fulfilled, (state, { payload }) => {
        state.modalSuccessRegister = payload;
      })
      .addCase(hideModalSuccessRegister.rejected, )

  },
});

const { reducer: authReducer } = authSlice;
export default authReducer;
