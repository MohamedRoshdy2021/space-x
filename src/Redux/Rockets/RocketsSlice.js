import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch data from the API
export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  return response.data;
});

const rocketsSlice = createSlice({
  name: 'Rockets',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => [...state, ...action.payload]);
  },
});

export const selectRockets = (state) => state.rockets;

export default rocketsSlice.reducer;
