import { configureStore } from '@reduxjs/toolkit';
import missionsReducer, {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../../Redux/missions/missionsSlice';

describe('missionsSlice', () => {
  let store;
  beforeEach(async () => {
    store = configureStore({
      reducer: {
        missions: missionsReducer,
      },
    });
    await store.dispatch(fetchMissions());
  });
  it('should handle fetching missions data successfully', () => {
    const state = store.getState().missions;
    expect(state.loading).toBe(false);
    expect(state.error).toBe('');
    expect(state.missions.length).toBeGreaterThan(0);
  });
  it('should handle fetching missions data failure', async () => {
    const invalidUrl = 'https://api.spacexdata.com/v3/invalid-url';
    try {
      await store.dispatch(fetchMissions(invalidUrl));
    } catch (error) {
      const state = store.getState().missions;
      expect(state.loading).toBe(false);
      expect(state.error).toBe('Network Error');
    }
  });
  it('should join a mission', () => {
    const stateBefore = store.getState().missions;
    if (stateBefore.missions.length === 0) {
      expect(stateBefore.missions.length).toBeGreaterThan(0);
      return;
    }
    const missionIdToJoin = stateBefore.missions[0].id;
    store.dispatch(joinMission(missionIdToJoin));
    const stateAfter = store.getState().missions;
    const joinedMission = stateAfter.missions.find(
      (mission) => mission.id === missionIdToJoin,
    );
    expect(joinedMission.reserved).toBe(true);
    expect(stateAfter.joinedMissions).toContain(missionIdToJoin);
  });
  it('should leave a mission', () => {
    const stateBefore = store.getState().missions;
    if (stateBefore.missions.length === 0) {
      expect(stateBefore.missions.length).toBeGreaterThan(0);
      return;
    }
    const missionIdToLeave = stateBefore.missions[0].id;
    store.dispatch(leaveMission(missionIdToLeave));
    const stateAfter = store.getState().missions;
    const leftMission = stateAfter.missions.find(
      (mission) => mission.id === missionIdToLeave,
    );
    expect(leftMission.reserved).toBe(false);
    expect(stateAfter.joinedMissions).not.toContain(missionIdToLeave);
  });
});
