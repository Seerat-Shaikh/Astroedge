/*import React from 'react';
import Home from './components/Home';
import Planets from './components/Planets';


export default function App() {
  return (
    <Home></Home>
  )
}*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Planets from './components/Planets';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Planets" element={<Planets/>}/>
      </Routes>
    </Router>
  );
}


