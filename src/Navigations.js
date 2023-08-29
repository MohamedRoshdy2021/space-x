import React from "react";
import { NavLink } from "react-router-dom";
const Navigations = () => {
  return (
    <nav>
      <ul>
        <li>
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
