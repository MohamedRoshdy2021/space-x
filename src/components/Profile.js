import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

function Profile() {
  const { missions, joinedMissions } = useSelector((store) => store.missions);
  const { data, joinedDragons } = useSelector((store) => store.dragons);
  const reservedDragons = data.filter((dragon) => joinedDragons.includes(dragon.id));
  const reservedMissions = missions.filter((mission) => joinedMissions.includes(mission.id));
  const reservedRockets = useSelector((state) => state.rockets.reservedRockets);
  const rockets = useSelector((state) => state.rockets.data);

  const reservedRocketNames = reservedRockets.map((rocketId) => {
    const rocket = rockets.find((rocket) => rocket.id === rocketId);
    return rocket ? rocket.rocket_name : '';
  });

  return (
    <div className="profile">
      <div className="profile-section">
        <h2>My Dragons</h2>
        <table className="profile-dragons">
          <tbody>
            {reservedDragons.map((dragon) => (
              <tr key={dragon.id}>
                <td>{dragon.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="profile-section">
        <h2>My Missions</h2>
        <table className="profile-dragons">
          <tbody>
            {reservedMissions.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="profile-section">
        <h2>My Rockets</h2>
        <table className="profile-dragons">
          <tbody>
            {reservedRocketNames.map((rocketName, index) => (
              <tr key={index}>
                <td>{rocketName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
