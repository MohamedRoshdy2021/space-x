import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, selectRockets } from '../Redux/Rockets/RocketsSlice';
import './Rockets.css';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector(selectRockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const [reservedRockets, setReservedRockets] = useState([]);

  const toggleReservation = (rocketId) => {
    setReservedRockets((prevReserved) => {
      if (prevReserved.includes(rocketId)) {
        return prevReserved.filter((id) => id !== rocketId);
      }
      return [...prevReserved, rocketId];
    });
  };

  return (
    <div>
      {rockets.slice(0, 4).map((rocket) => (
        <div key={rocket.id} className="parent-div">
          <div>
            <img className="rockets-image" src={rocket.flickr_images} alt={rocket.name} />
          </div>
          <div className="text-div">
            <h2>{rocket.rocket_name}</h2>
            <div className="reserved-text">
              {reservedRockets.includes(rocket.id) && <p className="reserved-popup">Reserved</p>}
              <p>{rocket.description}</p>
            </div>
            {reservedRockets.includes(rocket.id) ? (
              <button
                type="button"
                className="cancel-reserve-button"
                onClick={() => toggleReservation(rocket.id)}
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                type="button"
                className="reserve-button"
                onClick={() => toggleReservation(rocket.id)}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
