import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../Redux/missions/missionsSlice';
import MissionComponent from './MissionComponent';
import './mission.css';
function Mission() {
  const dispatch = useDispatch();
  const { missions} = useSelector((store) => store.missions);
  console.log(missions);
  useEffect(() => {
 dispatch(getMissions());
  }, []);
  return (
    <section className="super-mission">
      <div className="header-container">
        <p>Mission</p>
        <p className="hola">Description</p>
        <p className="status">Status</p>
        <p className="join">Join</p>
      </div>
      <ul className="mission-container>">
        { missions.map((mission) => (
          <MissionComponent
            key={mission.mission_id}
            name={mission.mission_name}
            description={mission.description}
            id={mission.mission_id}
            status={mission.reserved}
          />
        ))}
      </ul>
    </section>
  );
}
export default Mission;