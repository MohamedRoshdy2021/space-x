import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/RocketsSlice';
import dragonsReducer from './Dragons/DragonsSlice';


const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    rockets: rocketsReducer,

  },
});

export default store;
