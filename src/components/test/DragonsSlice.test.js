import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer, { fetchDragonsData, reserveDragon, cancelReserveDragon } from '../../Redux/Dragons/DragonsSlice';

describe('dragonsSlice', () => {
  let store;

  beforeEach(async () => {
    store = configureStore({
      reducer: {
        dragons: dragonsReducer,
      },
    });

    await store.dispatch(fetchDragonsData());
  });

  it('should handle fetching dragons data successfully', () => {
    const state = store.getState().dragons;
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe('');
    expect(state.data.length).toBeGreaterThan(0);
  });

  it('should handle fetching dragons data failure', async () => {
    const invalidUrl = 'https://api.spacexdata.com/v4/invalid-url';
    try {
      await store.dispatch(fetchDragonsData(invalidUrl));
    } catch (error) {
      const state = store.getState().dragonss;
      expect(state.isLoading).toBe(false);
      expect(state.error).toBe('Network Error');
    }
  });

  it('should reserve a dragon', () => {
    const stateBefore = store.getState().dragons;
    const dragonIdToReserve = stateBefore.data[0].id;
    store.dispatch(reserveDragon(dragonIdToReserve));

    const stateAfter = store.getState().dragons;

    const reservedDragon = stateAfter.data.find(
      (dragon) => dragon.id === dragonIdToReserve,
    );

    expect(reservedDragon.reserved).toBe(true);
    expect(stateAfter.joinedDragons).toContain(dragonIdToReserve);
  });

  it('should cancel reservation of a dragon', () => {
    const stateBefore = store.getState().dragons;
    const dragonIdToCancel = stateBefore.data[0].id;

    store.dispatch(cancelReserveDragon(dragonIdToCancel));

    const stateAfter = store.getState().dragons;
    const canceledDragon = stateAfter.data.find(
      (dragon) => dragon.id === dragonIdToCancel,
    );

    expect(canceledDragon.reserved).toBe(false);
    expect(stateAfter.joinedDragons).not.toContain(dragonIdToCancel);
  });
});
