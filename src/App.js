import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Products from './components/Products';
import Notification from './components/Notification';
//import { library } from "@fortawesome/fontawesome-svg-core";
//import { faReact } from "@fortawesome/free-brands-svg-icons";
//import { fa-shopping-basket, fa-bars } from "@fortawesome/free-solid-svg-icons";
//import { fa-shopping-basket, fa-bars } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div className="App">
      <Router>
        <Products path="/"/>
      </Router>
      <Router >
        <Notification path="/admin" />
      </Router>
    </div>
  );
} 

export default App;
