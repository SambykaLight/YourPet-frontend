import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUserNotices,
  fetchNoticesByCategory,
  deleteNotice,
  fetchNoticesFavorite,
  addNotice,
  makeNoticeFavorite,
  removeNoticeFavorite,
  fetchNoticeById,
} from './operations';

const initialState = {
  item: null,
  items: [],
  favorites: [],
  isLoading: false,
  page: 1,
  totalPages: 1,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = state => {
  state.isLoading = false;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUserNotices.fulfilled, (state, { payload }) => {
        console.log('🚀 ~ file: slice.js:33 ~ .addCase ~ payload:', payload);
        return {
          ...state,
          items: [...payload],
          // totalPages: payload.data.totalPages,
          isLoading: false,
        };
      })
      .addCase(fetchNoticesByCategory.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: [...payload.pets],
          page: Number(payload.page),
          totalPages: payload.total,
          isLoading: false,
        };
      })
      .addCase(addNotice.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
      })
      .addCase(deleteNotice.fulfilled, (state, { payload }) => {
        return {
          items: [
            ...state.items.filter(notice => notice._id !== payload.data._id),
          ],
          isLoading: false,
        };
      })
      .addCase(fetchNoticesFavorite.fulfilled, (state, { payload }) => {
        return {
          ...state,
          favorites: [...payload],
          // totalPages: payload.data.totalPages,
          isLoading: false,
        };
      })
      .addCase(makeNoticeFavorite.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          notice => notice._id === payload._id
        );
        state.items.splice(index, 1, payload);
      })
      .addCase(removeNoticeFavorite.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          notice => notice._id === payload._id
        );
        state.items.splice(index, 1, payload);
      })
      .addCase(fetchNoticeById.fulfilled, (_, { payload }) => {
        return {
          item: { ...payload.data.notice },
          isLoading: false,
        };
      })
      .addCase(fetchUserNotices.rejected, handleRejected)
      .addCase(fetchNoticesByCategory.rejected, handleRejected)
      .addCase(deleteNotice.rejected, handleRejected)
      .addCase(fetchNoticesFavorite.rejected, handleRejected)
      .addCase(addNotice.rejected, handleRejected)
      .addCase(makeNoticeFavorite.rejected, handleRejected)
      .addCase(removeNoticeFavorite.rejected, handleRejected)
      .addCase(fetchUserNotices.pending, handlePending)
      .addCase(fetchNoticesByCategory.pending, handlePending)
      .addCase(deleteNotice.pending, handlePending)
      .addCase(fetchNoticesFavorite.pending, handlePending)
      .addCase(addNotice.pending, handlePending)
      .addCase(makeNoticeFavorite.pending, handlePending)
      .addCase(removeNoticeFavorite.pending, handlePending)
      .addCase(fetchNoticeById.pending, handlePending)
      .addCase(fetchNoticeById.rejected, handleRejected);
  },
});

const { reducer: noticesReducer } = noticesSlice;
export default noticesReducer;
