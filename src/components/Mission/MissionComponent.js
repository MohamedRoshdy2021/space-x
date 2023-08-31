import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './mission.css';
import { JoinMission, LeaveMission } from '../../Redux/missions/missionsSlice';
function MissionComponent({
  // eslint-disable-next-line react/prop-types
  name, description, id, status,
}) {
  const dispatch = useDispatch();
  console.log(id);
  // const missionParticipation = () => (status === false ? dispatch(joinMission(id))
  //   : dispatch(leaveMission(id)));
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { status === false ? (
        <div className="mission-table" id={id}>
          <h2>{name}</h2>
          <p className="mission-description">
            {description}
          </p>
          <div className="border">
            <p className="mission-status">
              Not a member
            </p>
          </div>
          <button type="button" id={id} onClick={()=> dispatch(JoinMission(id))} className="mission-button"> Join mission</button>
        </div>
      ) : (
        <div id={id} className="mission-table">
          <h2>{name}</h2>
          <p className="mission-description">
            {description}
          </p>
          <p className="mission-status member">
            Active member
          </p>
          <button type="button" id={id} onClick={()=> dispatch(LeaveMission(id))} className="mission-button leave"> Leave mission</button>
        </div>
      )}
    </>
  );
}
MissionComponent.propTypes = {
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  status: Proptypes.bool.isRequired,
};
export default MissionComponent;