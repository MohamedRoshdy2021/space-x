// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// const LOAD_MISSIONS = 'spacetravellers/missions/missions';
// const JOIN_MISSIONS = 'spacetravellers/missions/joinMissions';
// const LEAVE_MISSIONS = 'spacetravellers/missions/leaveMissions';
// const POPULATE_MISSIONS_PROFILE = 'spacetravellers/mission/populateMissionsProfile';

// const initialState = [];

// // eslint-disable-next-line default-param-last
// const missionReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'spacetravellers/missions/missions/fulfilled':
//       return [...action.payload];
//     case JOIN_MISSIONS:
//       return [
//         ...state.map((mission) => (mission.mission_id !== action.payload
//           ? mission : { ...mission, reserved: true }))];
//     case LEAVE_MISSIONS:
//       return [
//         ...state.map((mission) => (mission.mission_id !== action.payload
//           ? mission : { ...mission, reserved: false })),
//       ];
//     case POPULATE_MISSIONS_PROFILE:
//       return [...state];
//     default:
//       return state;
//   }
// };

// const LoadMissions = createAsyncThunk(
//   LOAD_MISSIONS,
//   async () => {
//     const res = await axios.get('https://api.spacexdata.com/v3/missions').then((res) => res.data);
//     const work = res.map((mission) => ({ ...mission, reserved: false }));
//     return work;
//   },
// );

// const JoinMissions = (id) => ({
//   type: JOIN_MISSIONS,
//   payload: id,
// });

// const LeaveMission = (id) => ({
//   type: LEAVE_MISSIONS,
//   payload: id,
// });

// const PopulateMissionProfile = (id) => ({
//   type: POPULATE_MISSIONS_PROFILE,
//   payload: id,
// });

// export {
//   LoadMissions, JoinMissions, LeaveMission, PopulateMissionProfile,
// };
// export default missionReducer;


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
