import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppContext from './AppContext';
import LandingPage from './LandingPage';
import SignInPage from './SignInPage';
import RegistrationPage from './RegistrationPage';
import SettingsPage from './SettingsPage';
import './App.css';


const PrivateRoute = ({ component: Component, ...otherProps }) => {

    const [globalState, setGlobalState] = useContext(AppContext);

    if(globalState.signedIn) {
      return(<Route component={Component} {...otherProps} />);
    } else {
      return(<Redirect to="/signin" />);
    }
}


const App = () => {

  const [globalState, setGlobalState] = useState({
    signedIn: localStorage.getItem('jwt') ? true : false,
    user: null
  });


  useEffect(
    ()=>{
        // when (and if) globalState.loggedIn changes,
        // run the below code
        console.log("This the signedIn state", globalState.signedIn)
    }, 
    [globalState.loggedIn]
  )

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LandingPage}/>
          <Route path="/signin" exact={true} component={SignInPage}/>
          <Route path="/register" exact={true} component={RegistrationPage}/>
          <PrivateRoute path="/settings" exact={true} component={SettingsPage}/>
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}


export default App;