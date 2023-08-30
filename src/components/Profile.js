import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

function Profile() {
  const { data, joinedDragons } = useSelector((store) => store.dragons);
  const reservedDragons = data.filter((dragon) => joinedDragons.includes(dragon.id));
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

      <table className="profile-dragons">
        <thead>
          <tr>
            <th><h2>My Rockets</h2></th>
          </tr>
          <tbody>
            place holder for my rockets

          </tbody>
        </thead>
      </table>

    </div>
  );
}
export default Profile;
