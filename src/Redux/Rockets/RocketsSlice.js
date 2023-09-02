import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';
const initialState = {
  isLoading: false,
  data: [],
  reservedRockets: [],
  error: '',
};

export const fetchRocketsData = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      if (!state.reservedRockets.includes(rocketId)) {
        state.reservedRockets.push(rocketId);
      }
    },
    cancelReservation: (state, action) => {
      const rocketId = action.payload;
      state.reservedRockets = state.reservedRockets.filter((id) => id !== rocketId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRocketsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchRocketsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
