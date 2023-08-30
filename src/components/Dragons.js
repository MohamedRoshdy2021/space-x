import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Dragons.css'
import {
  fetchDragonsData,
  reserveDragon,
  cancelReserveDragon,
} from "../Redux/Dragons/DragonsSlice";


function Dragons() {
  const dispatch = useDispatch();
  const { isLoading, data, error, joinedDragons } = useSelector(
    (state) => state.dragons
  );
  useEffect(() => {
    dispatch(fetchDragonsData());
  }, [dispatch]);
  const handleReserveButtonClick = (dragonId) => {
    dispatch(reserveDragon(dragonId));
  };
  const handleCancelReservationButtonClick = (dragonId) => {
    dispatch(cancelReserveDragon(dragonId));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }



  return (
    <div className="dragons-container">
      {data.map((dragon) => (joinedDragons.includes(dragon.id) ? (
        <div className="dragon-left" key={dragon.id}>
          <img
            src={dragon.image}
            alt={dragon.name}
            className="dragon-image"
          />
          <div className="dragon-details">
            <h2 className="dragon-name">{dragon.name}</h2>
            <p className="dragon-desc">
              {' '}
              <span className="reserved-badge">Reserved</span>
              {dragon.description}
            </p>
            <button
              type="button"
              className="dragon-btn cancel"
              data-testid={`cancel-reservation-button-${dragon.id}`}
              onClick={() => handleCancelReservationButtonClick(dragon.id)}
            >
              Cancel Reservation
            </button>
          </div>
        </div>
      ) : (
        <div className="dragon-left" key={dragon.id}>
          <img
            src={dragon.image}
            alt={dragon.name}
            className="dragon-image"
          />
          <div className="dragon-details">
            <h2 className="dragon-name">{dragon.name}</h2>
            <p className="dragon-desc">{dragon.description}</p>
            <button
              type="button"
              className="dragon-btn"
              key={dragon.id}
              data-testid={`reserve-button-${dragon.id}`}
              onClick={() => handleReserveButtonClick(dragon.id)}
            >
              Reserve dragon
            </button>
          </div>
        </div>
      )))}
    </div>
  );
}
export default Dragons;
