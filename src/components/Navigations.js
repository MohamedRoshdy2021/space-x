import React from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';
import img from "../assets/planet.png"

const Navigations = () => (
  <nav className="navigation">
    <div className="logo-container">
      <img className="logo" src={img} alt="planet-logo" />
      <h1>Space Travelers hub</h1>
    </div>
    <ul className="nav-lists">
      <li className="nav-link">
        <NavLink exact="true" to="/Rockets" activeclassname="active">
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink exact="true" to="/Missions" activeclassname="active">
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink exact="true" to="/Dragons" activeclassname="active">
          Dragons
        </NavLink>
      </li>
      <li>|</li>
      <li>
        <NavLink exact="true" to="/Profile" activeclassname="active">
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigations;
