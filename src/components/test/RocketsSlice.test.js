import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer, {
  fetchRocketsData,
} from '../../Redux/Rockets/RocketsSlice';

describe('rocketsSlice', () => {
  let store;

  beforeEach(async () => {
    store = configureStore({
      reducer: {
        rockets: rocketsReducer,
      },
    });

    await store.dispatch(fetchRocketsData());
  });

  it('should handle fetching rockets data successfully', () => {
    const state = store.getState().rockets;
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe('');
    expect(state.data.length).toBeGreaterThan(0);
  });

  it('should handle fetching rockets data failure', async () => {
    const invalidUrl = 'https://api.spacexdata.com/v3/invalid-url';
    try {
      await store.dispatch(fetchRocketsData(invalidUrl));
    } catch (error) {
      const state = store.getState().rockets;
      expect(state.isLoading).toBe(false);
      expect(state.error).toBe('Network Error');
    }
  });
});
