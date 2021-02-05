import React from 'react';
import { BrowserRouter as Router, } from "react-router-dom";
import './App.css';
import OneSignal from 'react-onesignal';
import Products from './components/Products';
import Notification from './components/Notification';

OneSignal.initialize("0b523ce6-7311-4040-9a01-3f4ed01c3429");

function App() {
  return (
    <div className="App">
      <Router>
        <Products path="/"/>
      </Router>
      <Router >
        <Notification path="notification" />
      </Router>
    </div>
  );
} 

export default App;