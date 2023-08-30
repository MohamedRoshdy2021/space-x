import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
