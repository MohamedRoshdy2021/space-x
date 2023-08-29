import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dragons from "./components/Dragons";
import Missions from "./components/Missions";
import Rockets from "./components/Rockets";
import Profile from "./components/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <div>
          <img src="#" alt="icon-logo" />
          <h1>Space travelers Hub</h1>
        </div>
        <div>
          <Link to="/components/Rockets">Rockets</Link>
          <Link to="/">Missions</Link>
          <Link to="/components/Dragons">Dragons</Link>
          <Link to="/components/Profile">Profile</Link>
        </div>
      </nav>
      
      <Routes>
          <Route path="/" element={<Missions />}>
          <Route path="/components/Rockets" element={<Rockets />} />
          <Route path="/components/Dragons" element={<Dragons />} />
          <Route path="/components/Profile" element={<Profile />} />
        </Route>
      </Routes>
    </ BrowserRouter>
  );
};

export default App;
