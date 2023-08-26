import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const errMessage = "Something went wrong. Please  try again";

export const fetchUserNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (page, thunkAPI) => {
    try {
      const { data }= await axios.get(`/api/notices/user`, {
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
      const { data }= await axios.get(`/api/notices/notice/${id}`);
      return data;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/fetchNoticesByCategory',
  async (params, thunkAPI) => {
    const searchParams = new URLSearchParams(params);
    searchParams.forEach((value, key) => {
      if (value === '') {
        searchParams.delete(key)
      }
    })
    try {
      const { data } = await axios.get(
        `/api/notices/?${searchParams.toString()}`
      );
      return data;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchNoticesFavorite = createAsyncThunk(
  'notices/fetchNoticesFavourite',
  async (_, thunkAPI) => {
    try {
      const { data }= await axios.get(`/api/notices/favorite`);
      return data;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async ([category, data], thunkAPI) => {
    try {
      const response= await axios.post(
        `/api/notices/category?category=${category}`,
        data
      );
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
      const { data } = await axios.patch(`api/notices/favorite/${id}`);

      return data.result;
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
      const { data } = await axios.delete(`api/notices/favorite/${id}`);

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
      const {data}= await axios.delete(`api/notices/${id}`);
      return data;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
