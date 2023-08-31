import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../../Redux/missions/missionsSlice';
import './mission.css';

function Missions() {
  const missionData = useSelector((store) => store.missions);
  const {
    isLoading, missions, error, joinedMissions,
  } = missionData;
  const dispatch = useDispatch();

  function handleJoinMission(id) {
    dispatch(joinMission(id));
  }

  function handleLeaveMission(id) {
    dispatch(leaveMission(id));
  }

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      <table className="missions">
        <thead>
          <tr>
            <th className="mission">Mission</th>
            <th className="description">Description</th>
            <th className="status">Status</th>
            <th className="button">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr
              key={mission.id}
              className={
                joinedMissions.includes(mission.id) ? 'rows' : 'join-rows'
              }
            >
              <td className="td-mission">{mission.name}</td>
              <td className="description td-description">
                {mission.description}
              </td>
              <td className="status">
                {joinedMissions.includes(mission.id) ? (
                  <span className="mission-status-leave">Active Member</span>
                ) : (
                  <span className="mission-status-join">NOT A MEMBER</span>
                )}
              </td>
              <td className="button">
                {joinedMissions.includes(mission.id) ? (
                  <button
                    type="button"
                    className="td-leave-mission"
                    onClick={() => handleLeaveMission(mission.id)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className="td-join-mission"
                    onClick={() => handleJoinMission(mission.id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Missions;