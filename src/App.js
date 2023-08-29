import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

const App = () => (
  <Routes>
    <Route path="/" element={<Rockets />} />
    <Route path="/Dragons" element={<Dragons />} />
    <Route path="/Missions" element={<Missions />} />
    <Route path="/Profile" element={<Profile />} />
  </Routes>
);

export default App;
