import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import OneSignal from 'react-onesignal';
import Products from './components/Products';
import Notification from './components/Notification';
import Offline from './components/Notfound';

OneSignal.initialize("0b523ce6-7311-4040-9a01-3f4ed01c3429");

function App() {
  return (
      <div className="App">
        <Router>
            <Products path="/" />
            <Notification path="admin" />
            <Offline default />
        </Router>
          
      </div>
    
  );
} 

export default App;