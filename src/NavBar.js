import React from 'react';
import Button from './Button.js';
import logo from './logo.svg';
import Jumbotron from './Jumbotron.js';

const NavBar = () => {

    const promptLogin = () => {
        window.location = "https://www.myapp.com/login"
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
                Bootstrap
            </a>
            <div style={{display: 'flex'}}>

                <button onClick={promptLogin} className="btn btn-primary">
                    Log In
                </button>
            </div>
        </nav>
    )
}

export default NavBar;