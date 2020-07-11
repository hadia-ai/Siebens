import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import logo from './logo.svg';
import Jumbotron from './Jumbotron';

const NavBar = () => {

    const promptLogin = () => {
        window.location = "https://www.myapp.com/login"
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={logo} width="30" height="30" 
                className="d-inline-block align-top" 
                alt="" 
                loading="lazy"/>
                Bootstrap
            </Link>

            <div style={{display: 'flex'}}>
                <Link
                to="/login"
                className="btn btn-primary">
                    Log In
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;