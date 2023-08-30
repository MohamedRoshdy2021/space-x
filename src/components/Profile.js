import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

function Profile() {
  const { data, joinedDragons } = useSelector((store) => store.dragons);
  const reservedDragons = data.filter((dragon) => joinedDragons.includes(dragon.id));

  const reservedRockets = useSelector((state) => state.rockets.reservedRockets);
  const rockets = useSelector((state) => state.rockets.data);

  const reservedRocketNames = reservedRockets.map((rocketId) => {
    const rocket = rockets.find((rocket) => rocket.id === rocketId);
    return rocket ? rocket.rocket_name : '';
  });
  return (
    <div className="profile">
      <table className="profile-dragons">
        <thead>
          <tr>
            <th><h2>My Dragons</h2></th>
          </tr>
          <tbody className="dragon-body">
            {reservedDragons.map((dragon) => (
              <tr key={dragon.id}>
                <td>{dragon.name}</td>
              </tr>
            ))}
          </tbody>
        </thead>
      </table>

      <table className="profile-dragons">
        <thead>
          <tr>
            <th><h2>My Missions</h2></th>
          </tr>
          <tbody>
            Place holder for my missons
          </tbody>
        </thead>
      </table>

      <div className="profile-dragons">
        <div className="Rockets-profile-container">
          <h2>My Rockets:</h2>
          {reservedRocketNames.map((rocketName) => (
            <p key={rocketName.id}>{rocketName}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Profile;
