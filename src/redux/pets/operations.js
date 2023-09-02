import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const errMessage = 'Something went wrong. Please  try again';

export const fetchPets = createAsyncThunk(
  'pets/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/pets');
      return data;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (petId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/pets/${petId}`);
      return data;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPet = createAsyncThunk(
  'notices/addPet',
  async (newPet, thunkAPI) => {
    console.log("Data in AddPet is", newPet)
    try {
      const {data}= await axios.post(`/api/pets`, newPet);
      return data;
    } catch (error) {
      toast.error(errMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
