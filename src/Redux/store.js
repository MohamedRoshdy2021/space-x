import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/RocketsSlice';
import dragonsReducer from './Dragons/DragonsSlice';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
