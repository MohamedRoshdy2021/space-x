import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './Dragons/DragonsSlice';


const store = configureStore({
  reducer: {
    dragons: dragonsReducer,

  },
});

export default store;
