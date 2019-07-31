import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Jumbotron from './components/Jumbotron';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
