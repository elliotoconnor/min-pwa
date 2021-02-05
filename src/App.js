import React from 'react';
import { BrowserRouter as Router, } from "react-router-dom";
import './App.css';
import OneSignal from 'react-onesignal';
import Products from './components/Products';
import Notification from './components/Notification';

OneSignal.initialize('2f4f9432-f62c-45f0-91a1-2d5ef683666f', {
  safari_web_id:"web.onesignal.auto.694eada3-a476-4a33-8c61-99aa6c1d60b0",
});

function App() {
  return (
    <div className="App">
      <Router>
        <Products path="/"/>
      </Router>
      <Router>
        <Notification path="notification" />
      </Router>
    </div>
  );
} 

export default App;