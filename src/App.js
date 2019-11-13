import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './layout/Navbar';
import Home from './pages/Home';

import "./styles/css/bootstrap.css";
import "./styles/css/style.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
