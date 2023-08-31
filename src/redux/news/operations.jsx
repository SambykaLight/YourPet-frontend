import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNews = createAsyncThunk(
  'get/news',
  async ({ page = 1 }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/news?page=${page}&limit=9`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getNewsSearch = createAsyncThunk(
  'news/title',
  async ({ query, page = 1 }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/api/news/title?title=${query}&page=${page}&limit=9`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
