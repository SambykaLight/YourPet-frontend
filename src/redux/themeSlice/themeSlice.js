import { createSlice } from '@reduxjs/toolkit';
import { toggleTheme } from './operations';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(toggleTheme, state => {
      return state === 'light' ? 'dark' : 'light';
    });
  },
});

export const themeReducer = themeSlice.reducer;
