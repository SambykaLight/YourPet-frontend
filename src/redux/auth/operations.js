import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';


// api який треба вставити для запитів за користувачами !!!!!!!!!!!!!!!!!!!!!!!!!!
axios.defaults.baseURL = 'https://your-pet-api-a9zk.onrender.com';

//  --- ADD JWT ---
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// --- REMOWE JWT ---
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// //  --- REGISTER / POST ----
// //  credentials: { name, email, password }
const register = createAsyncThunk(
  '/auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/users/register', credentials);
      setAuthHeader(response.data.token);
      //response.data is {message: 'New account created'} but must be ...
      return response.data;
    } catch (e) {
      toast.error("Something's wrong. Please update page and try again");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//  ---- LOGIN / POST ----
//  credentials: {email, password}
const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/api/users/login', credentials);
    // After successful login, add the token to the HTTP header
    setAuthHeader(response.data.token);
    //data must include {name, token, ...}
    console.log(response.data)
    return response.data;
  } catch (error) {
    toast.error("Something's wrong. Please update page and try again");
    return thunkAPI.rejectWithValue(error.message);
  }
});

// ---- LOGOUT / POST ---
// headers: Authorization: Bearer token
const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    toast.error("Something's wrong. Please update page and try again");
    return thunkAPI.rejectWithValue(error.message);
  }
});

//  GET @ /users/current
//  headers: Authorization: Bearer token
const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  // Reading the token from the state via getState()
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    // If there is no token, exit without performing any request
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    // If there is a token, add it to the HTTP header and perform the request
    setAuthHeader(persistedToken);
    const response = await axios.get('/api/users/current');
    return response.data;
  } catch (error) {
    toast.error("Something's wrong. Please update page and try again");
    return thunkAPI.rejectWithValue(error.message);
  }
});

//  GET @ /users/current
//  headers: Authorization: Bearer token
export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (__, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) {
      return rejectWithValue();
    }
    setAuthHeader(token);

    try {
      const { data } = await axios.get('/api/users/current');
      return data;
    } catch (error) {
      toast.error("Something's wrong. Please update page and try again");
      return rejectWithValue('');
    }
  }
);

const authOperations = { refreshUser, register, logIn, logout, getCurrentUser };
export default authOperations;
