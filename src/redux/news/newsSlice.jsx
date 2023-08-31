import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getNews, getNewsSearch } from './operations';

const fetchArr = [getNews, getNewsSearch];

const fnctAddMatcher = status => {
  return fetchArr.map(el => el[status]);
};

const handleFulfield = state => {
  state.loading = true;
};

const handleSuccess = (state, { payload }) => {
  state.news = payload.news;
  state.loading = false;
};

const HandleError = (state, _) => {
  state.loading = false;
  state.news = [];
};

const newsInitialState = {
  news: [],
  loading: true,
};

const newsSlice = createSlice({
  name: 'news',
  initialState: newsInitialState,
  extraReducers: builder =>
    builder
      .addMatcher(isAnyOf(...fnctAddMatcher('pending')), handleFulfield)
      .addMatcher(isAnyOf(...fnctAddMatcher('fulfilled')), handleSuccess)
      .addMatcher(isAnyOf(...fnctAddMatcher('rejected')), HandleError),
});

export const newsReducer = newsSlice.reducer;
