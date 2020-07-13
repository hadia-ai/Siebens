import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from './AppContext';
import NavBar from './NavBar.js';

    // These will be assigned values by React
    
    const RegistrationPage = () => {

        // These will be assigned values by React
        let firstNameField;
        let lastNameField;
        let emailField;
        let passwordField;
    
        // Connected to globalState
        const [globalState, setGlobalState] = useContext(AppContext);
    
        // A local state
        const [state, setState] = useState(
            {
                loading: false
            }
        )
    
        const registerUser = () => {
    
            // Start loading
            setState({...state, loading: true})
    
            fetch('http://localhost:8080/users/register', 
                {
                    method: 'POST',
                    body: JSON.stringify({
                        firstName: firstNameField.value,
                        lastName: lastNameField.value,
                        email: emailField.value,
                        password: passwordField.value
                    }),
                    headers: {"Content-Type": "application/json"}
                }
            )
            .then(
                (result) => result.json()
            )
            .then (
                (json) => {
                    const { message, jsonwebtoken } = json;
                    if(jsonwebtoken) {
                        // update the globalState
                        setGlobalState(
                            {
                                ...globalState,
                                registerUser: true
                            }
                        )
    
                        // save the jwt in the browser
                        localStorage.setItem('jwt', jsonwebtoken);
    
                        setState({...state, loading: false})
                    } else {
                        // throw an error
                        alert(message);
                    }
                }
            )
        }
    // If the user is registerd, redirect them

            if(globalState.registerUser === true) {
                return(<Redirect to="/"/>)
            }

    // Otherwise, show the login form
    else {
        return(
            <div>
                <NavBar />
                <h1>Registration</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-sm" 
                        style={{maxWidth: '400px', margin: '0 auto'}}>
                            <div>
                                <div className="form-group">
                                    <label>
                                        First Name
                                    </label>

                                    <input 
                                    ref={ (comp)=> firstNameField = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="firstName"/>
                                </div>

                                <div className="form-group">
                                    <label>
                                        Last Name
                                    </label>

                                    <input 
                                    ref={ (comp)=> lastNameField = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="lastName"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Email address
                                    </label>

                                    <input 
                                    ref={ (comp)=> emailField = comp}
                                    type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"/>

                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>

                                <div className="form-group">
                                    <label>
                                        Password
                                    </label>

                                    <input 
                                    ref={ (comp)=> passwordField = comp}
                                    type="password" 
                                    className="form-control" 
                                    aria-describedby="password"/>
                                </div>

                                <button
                                onClick={registerUser}
                                type="button"
                                className="btn btn-primary">Register
                                </button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}

export default RegistrationPage; 