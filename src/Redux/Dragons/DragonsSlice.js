import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.spacexdata.com/v4/dragons";
const initialState = {
  isLoading: false,
  data: [],
  error: "",
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
