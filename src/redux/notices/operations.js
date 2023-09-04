import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const errMessage = 'Something went wrong. Please  try again';

export const fetchUserNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/notices/byOwner`, {
        params: { page },
      });
      return data;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticeById = createAsyncThunk(
  'notices/fetchNoticeById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/notices/notice/${id}`);
      return data;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchNoticesByCategory = createAsyncThunk(
//   'notices/fetchNoticesByCategory',
//   async ({ category }, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/api/notices/?${category}}`);
//       return data;
//     } catch (error) {
//       toast.error(errMessage);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/fetchNoticesByCategory',
  async ({ category, title, page }, thunkAPI) => {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append('category', category);
      if (title) {
        queryParams.append('title', title);
      }
      if (page) {
        queryParams.append('page', page);
      }

      const { data } = await axios.get(
        `/api/notices/?${queryParams.toString()}&limit=8`
      );
      return data;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticesFavorite = createAsyncThunk(
  'notices/fetchNoticesFavorite',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/notices/favorites`);
      return data;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`/api/notices/`, data);
      return response.data;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const makeNoticeFavorite = createAsyncThunk(
  'notices/makeNoticeFavourite',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/api/notices/add/${id}`);

      const { data: favoriteNotices } = await axios.get(
        `/api/notices/favorites`
      );
      const isFavorite = favoriteNotices.some(notice => notice._id === id);

      return { result: data.result, isFavorite };
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeNoticeFavorite = createAsyncThunk(
  'notices/removeNoticeFavourite',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`api/notices/remove/${id}`);

      return data.result;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const unMakeNoticeFavorite = createAsyncThunk(
  'notices/unMakeNoticeFavourite',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`api/notices/favorite/${id}`);

      return data.result;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`api/notices/${id}`);
      return data;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
