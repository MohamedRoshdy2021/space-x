import React from "react";
import './navigation.css';
import { NavLink } from "react-router-dom";
const Navigations = () => {
  return (
    <nav className="navigation">
      <div>
        <h1>Logo</h1>
        </div>
      <ul className="nav-lists">
        <li className="nav-link">
          <NavLink exact='true' to="/Rockets" activeclassname="active">Rockets</NavLink>
        </li>
        <li>
          <NavLink exact='true' to="/Missions" activeclassname="active">Missions</NavLink>
        </li>
        <li>
            |
        </li>
        <li>
          <NavLink exact='true' to="/Profile" activeclassname="active">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigations;
