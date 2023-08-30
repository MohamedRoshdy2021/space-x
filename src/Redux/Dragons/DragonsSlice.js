import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.spacexdata.com/v4/dragons";
const initialState = {
  isLoading: false,
  data: [],
  error: "",
  joinedDragons: [],
};
const getData = (data) =>
  data.map((dragons) => ({
    id: dragons.id,
    name: dragons.name,
    description: dragons.description,
    image: dragons.flickr_images,
    reserved: false,
   
  }));
export const fetchDragonsData = createAsyncThunk(
  "dragons/fetchDragons",
  async () => {
    try {
      const response = await axios.get(url);
      const { data } = response;
      return getData(data);
    } catch (error) {
      throw new Error(error);
    }
  }
);
const dragonSlice = createSlice({
  name: "dragons",
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const newState = state.data.map((dragon) => {
        if (dragon.id === action.payload) {
          return { ...dragon, reserved: true };
        }
        return dragon;
      });
      return {
        ...state,
        data: newState,
        joinedDragons: [...state.joinedDragons, action.payload],
      };
    },
    cancelReserveDragon: (state, action) => {
      const newState = state.data.map((dragon) => {
        if (dragon.id === action.payload) {
          return { ...dragon, reserved: false };
        }
        return dragon;
      });
      return {
        ...state,
        data: newState,
        joinedDragons: state.joinedDragons.filter(
          (dragonId) => dragonId !== action.payload
        ),
      };
    },
  },
  
  extraReducers: (builder) => {
    builder
        .addCase(fetchDragonsData.pending, (state) => ({
            ...state,
            isLoading: true,
        }))
        .addCase(fetchDragonsData.fulfilled, (state, action) => ({
            ...state,
            isLoading: false,
            data: action.payload,

        }))
        .addCase(fetchDragonsData.rejected, (state,action) => ({
            ...state,
            isLoading: false,
            error: action.error.message,
        }));
  }


});

export const { reserveDragon, cancelReserveDragon } = dragonSlice.actions;
export default dragonSlice.reducer;
