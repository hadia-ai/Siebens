import React from 'react';
import NavBar from './NavBar.js';

const RegistrationPage = () => {

    // These will be assigned values by React

    // If the user is loggedIn, redirect them

    // Otherwise, show the login form
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

export default RegistrationPage;