import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from './AppContext.js';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={LandingPage}/>
        <Route path="/login" exact={true} component={LoginPage}/>
      </Switch>
    </BrowserRouter>
  )
}


export default App;