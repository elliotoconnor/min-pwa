import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import OneSignal from 'react-onesignal';

import Products from './components/Products';
import Notification from './components/Notification';
//import { library } from "@fortawesome/fontawesome-svg-core";
//import { faReact } from "@fortawesome/free-brands-svg-icons";
//import { fa-shopping-basket, fa-bars } from "@fortawesome/free-solid-svg-icons";
//import { fa-shopping-basket, fa-bars } from "@fortawesome/free-regular-svg-icons";

OneSignal.initialize('2f4f9432-f62c-45f0-91a1-2d5ef683666f', {
  safari_web_id:"web.onesignal.auto.694eada3-a476-4a33-8c61-99aa6c1d60b0",
});

function App() {
  return (
    <div className="App">
      <Router>
        <Products path="/"/>
      </Router>
    </div>
  );
} 

export default App;
