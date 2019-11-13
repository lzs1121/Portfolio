import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";

import "./styles/css/bootstrap.css";
import "./styles/css/style.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <div className='container'>
        <Projects />
        <Skills />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
