import React from 'react';
import { BrowserRouter as Route, Redirect, Switch } from "react-router";
import './App.css';
import OneSignal from 'react-onesignal';
import Products from './components/Products';
import Notification from './components/Notification';

OneSignal.initialize("0b523ce6-7311-4040-9a01-3f4ed01c3429");

function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="admin">
          <Notification />
        </Route>
        <Redirect path="offline.html" />
      </div>
    </Switch>
  );
} 

export default App;