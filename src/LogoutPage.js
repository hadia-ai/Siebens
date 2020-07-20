// import React, { useContext, useState } from 'react';
// import { Redirect, Link } from 'react-router-dom';
// import AppContext from './AppContext';
// import NavBar from './NavBar.js';

// const LogoutPage = () => {

//     // These will be assigned values by React
//     let emailField;
//     let passwordField;

//     // Connected to globalState
//     const [globalState, setGlobalState] = useContext(AppContext);

//     // A local state
//     const [state, setState] = useState(
//         {
//             loading: false
//         }
//     )

//     const logoutUser = () => {

//         // Start loading
//         setState({...state, loading: true});

//         fetch(`${process.env.REACT_APP_API_URL}users/logout`, 
//             {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     email: emailField.value,
//                     password: passwordField.value
//                 }),
//                 headers: {"Content-Type": "application/json"}
//             }
//         )
//         .then(
//             (result) => result.json()
//         )
//         .then (
//             (json) => {
//                 const { message, jsonwebtoken } = json;

//                 // If web token exists (meaning login was successful)
//                 if(jsonwebtoken) {
//                     // update the globalState
//                     setGlobalState(
//                         {
//                             ...globalState,
//                             loggedOut: true
//                         }
//                     )

//                     // save the jwt in the browser
//                     localStorage.setItem('jwt', jsonwebtoken);

//                     // turn off the preloader 
//                     setState({...state, loading: false})
//                 } else {
//                     // throw an error
//                     alert(message);
//                 }
//             }
//         )
//     }


//     // If the user is loggedOut, redirect them
//     if(globalState.loggedOut === true) {
//         return(<Redirect to="/"/>)
//     }
// }

// export default LogoutPage;