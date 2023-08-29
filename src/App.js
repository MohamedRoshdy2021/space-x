import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Missions from "./components/Missions";
import Profile from "./components/Profile";
import Rockets from "./components/Rockets";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Rockets" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
