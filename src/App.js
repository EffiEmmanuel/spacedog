// require('dotenv').config()
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {
  return (
    <React.Fragment>
        <Routes>
          {/* Waitlist page route */}
          <Route path='/' element={<Homepage />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
