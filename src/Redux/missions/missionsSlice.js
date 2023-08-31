import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  missions: [],
};
const getMissionsURL = 'https://api.spacexdata.com/v3/missions';
export const getMissions = createAsyncThunk('missions/getMissions', async (_, api) => {
  try {
    const res = await axios(getMissionsURL);
    return res.data;
  } catch (err) {
    return api.rejectWithValue('Api failed to fetch');
  }
});
const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    JoinMission: (state, action) => {
      const id = action.payload;
      const createMission = state.missions.map((m) => {
        if (m.mission_id !== id) return m;
        return { ...m, reserved: true };
      });
      state.missions = createMission;
    },
    LeaveMission: (state, action) => {
      const id = action.payload;
      const createMission = state.missions.map((m) => {
        if (m.mission_id !== id) return m;
        return { ...m, reserved: !m.reserved };
      });
      state.missions = createMission;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.fulfilled, (state, action) => {
        state.missions = action.payload;
        state.missions = action.payload.map((m) => ({
          ...m,
          reserved: false,
        }));
      })
  },
});
export const { JoinMission, LeaveMission } = missionSlice.actions;
export default missionSlice.reducer;