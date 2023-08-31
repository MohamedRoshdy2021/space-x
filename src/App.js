import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dragons from './components/Dragons';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './components/Mission/mission';

const App = () => (
  <Routes>
    <Route path="/" element={<Rockets />} />
    <Route path="/Dragons" element={<Dragons />} />
    <Route path="/Missions" element={<Missions />} />
    <Route path="/Profile" element={<Profile />} />
  </Routes>
);

export default App;