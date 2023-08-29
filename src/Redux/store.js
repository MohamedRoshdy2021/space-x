import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    Rockets,
    Dragons,
    messsions,
  },
});

export default store;